(function() {
    'use strict';
    angular.module('careAnalytics')
      .controller('PatientFormController', PatientFormController);

    PatientFormController.$inject = [
      '$http',
      '$window'
    ];

    function PatientFormController(
      $http,
      $window
    ) {
      var self = this;
      self.template;
      self.invalid = false;
      self.showSubmitSuccessful = false;
      self.submitting = false;

      self.initializeForms = function() {
        return $http({
          url: '/form',
          method: 'GET'
        }).then(function(response) {
          self.template = response.data;
          console.log("returned template");
        });
      };

      self.submit = function() {
        self.invalid = invalidForm();
        if (self.invalid) { return ; }

        var dataURL = self.signaturePad.toDataURL().replace('data:image/png;base64,', '');
        var data = { image: dataURL };

        return $http({
          url: '/signature',
          method: 'POST',
          data: angular.toJson(data)
        }).then(function(response) {
          submitForm();
        });
      };

      function submitForm() {
        var data = { patientForm: self.template };
        self.submitting = true;

        return $http({
          url: '/forms',
          method: 'POST',
          data: angular.toJson(data)
        }).then(function(response) {
          console.log("Submitted form");
          self.submitting = false;
          setSubmitSuccessful();
          clearForm();
          scrollToTop();
        });
      }

      function clearForm() {
        self.initializeForms();
        self.signaturePad.clear();
      }

      function scrollToTop() {
        $window.scrollTo(0, 0);
      }

      self.label = function(child) {
        if(!child.label) { return ''; }
        return child.label + self.optional(child);
      };

      self.isRow = function(formObj) {
        return formObj.type === 'row';
      };

      self.isRadio = function(formObj) {
        return formObj.type === 'radio' || radioHasInputField(formObj);
      };

      self.isCheckbox = function(formObj) {
        return formObj.type === 'checkbox';
      };

      self.isText = function(formObj) {
        return formObj.type === 'text';
      };

      self.isHeader = function(formObj) {
        return formObj.type === 'header';
      };

      self.header = function(formObj) {
        return formObj.label;
      };

      self.optional = function(formObj) {
        if (!isOptional(formObj)) { return '*'; } 
        return '';
      };

      self.showInputField = function(formObj) {
        if (formObj.showInputIfValueIs === "All" && isChecked(formObj)) { return true; }
        return radioHasInputField(formObj) && formObj.value === formObj.showInputIfValueIs;
      };

      self.buttonText = function() {
        if (self.submitting === true) { return 'Submitting...'; }
        return 'Submit';
      };

      function setSubmitSuccessful() {
        self.showSubmitSuccessful = true;
      }

      self.unsetSubmitSuccessful = function() {
        self.showSubmitSuccessful = false;
      }

      function radioHasInputField(radio) {
        return radio.type === 'radio-with-input';
      }

      function isChecked(formObj) {
        return formObj.value !== "";
      }

      function invalidForm() {
        var invalid = false;
        if (self.signaturePad.isEmpty()) { return true; }
        for (var index = 0; index < self.template.length; index++) {
          var section = self.template[index];

          if (section.type === 'row') {
            for (var childIndex = 0; childIndex < section.children.length; childIndex++) {
              var child = section.children[childIndex];
              if (invalidFormItem(child)) { return true; }
            }
          }

          if (section.type === 'radio-with-input') {
              if (invalidFormItem(section)) { return true; }            
          }

          if (section.type === 'radio') {
              if (invalidFormItem(section)) { return true; }            
          }

        }
        return invalid;
      }

      function invalidFormItem(item) {
        return item.value === '' && !isOptional(item);
      }

      function isOptional(formObj) {
        var allChildrenOptional = true;
        if (formObj.children) {
          for (var index = 0; index < formObj.children.length; index++) {
            if(!isOptional(formObj.children[index])) {
              allChildrenOptional = false;
            }
          }
        } else {
          allChildrenOptional = false;
        }

        return (formObj.optional && formObj.optional === true) || allChildrenOptional;
      }

      // -------------------- signature pad code ---------------------------- //

      var wrapper = document.getElementById("signature-pad"),
      clearButton = wrapper.querySelector("[data-action=clear]"),
      canvas = wrapper.querySelector("canvas");
      self.signaturePad;

      // Adjust canvas coordinate space taking into account pixel ratio,
      // to make it look crisp on mobile devices.
      // This also causes canvas to be cleared.
      function resizeCanvas() {
          // When zoomed out to less than 100%, for some very strange reason,
          // some browsers report devicePixelRatio as less than 1
          // and only part of the canvas is cleared then.
          var ratio =  Math.max(window.devicePixelRatio || 1, 1);
          canvas.width = canvas.offsetWidth * ratio;
          canvas.height = canvas.offsetHeight * ratio;
          canvas.getContext("2d").scale(ratio, ratio);
      }

      window.onresize = resizeCanvas;
      resizeCanvas();

      self.signaturePad = new SignaturePad(canvas);

      clearButton.addEventListener("click", function (event) {
          self.signaturePad.clear();
      });

      // -------------------- end signature pad code ---------------------------- //

    }

})();