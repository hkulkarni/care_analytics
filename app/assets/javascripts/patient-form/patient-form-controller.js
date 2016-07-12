(function() {
    'use strict';
    angular.module('careAnalytics')
      .controller('PatientFormController', PatientFormController);

    PatientFormController.$inject = ['$http'];

    function PatientFormController($http) {
      var self = this;
      self.template;
      self.invalid = false;

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

        return $http({
          url: '/forms',
          method: 'POST',
          data: angular.toJson(data)
        }).then(function(response) {
          console.log("Submitted form");
        });
      }

      self.label = function(child) {
        if(!child.label) { return ''; }
        return child.label + ':';
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

      self.showInputField = function(formObj) {
        if (formObj.showInputIfValueIs === "All" && isChecked(formObj)) { return true; }
        return radioHasInputField(formObj) && formObj.value === formObj.showInputIfValueIs;
      };

      function radioHasInputField(radio) {
        return radio.type === 'radio-with-input';
      }

      function isChecked(formObj) {
        return formObj.value !== "";
      }

      function invalidForm() {
        var invalid = false;
        for (var index = 0; index < self.template.length; index++) {
          var section = self.template[index];

          if (section.type === 'row') {
            for (var childIndex = 0; childIndex < section.children.length; childIndex++) {
              var child = section.children[childIndex];
              if (child.value === '') { return true; }
            }
          }

          if (section.type === 'radio-with-input') {
              if (section.value === '') { return true; }            
          }

        }
        return invalid;
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