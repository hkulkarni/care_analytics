(function() {
    'use strict';
    angular.module('careAnalytics')
      .controller('SectionController', SectionController);

    SectionController.$inject = [
      '$http',
      '$window',
      '$location'
    ];

    function SectionController(
      $http,
      $window,
      $location
    ) {
      var self = this;
      self.sections = {};
      self.count = 0;
      self.invalid = false;
      self.submitting = false;
      self.showSubmitSuccessful = false;

      self.initializeForms = function() {
        return $http({
          url: '/form',
          method: 'GET',
          params: { id: getParameterByName('id') }
        }).then(function(response) {
          self.sections = response.data;
          console.log("returned sections");
        });
      };

      self.submit = function() {
        self.invalid = invalidForm(self.sections[self.count]);
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
        var data = { patientForm: self.sections };
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
        self.count = 0;
        self.initializeForms();
        self.signaturePad.clear();
      }

      function scrollToTop() {
        $window.scrollTo(0, 0);
      }

      self.numberOfSections = function() {
        if (self.sections.length) { return self.sections.length; }
        return 0;
      };

      self.sectionIndex = function() {
        return self.count + 1;
      };

      self.buttonText = function() {
        if (self.submitting === true) { return 'Submitting...'; }
        return 'Submit';
      };

      self.next = function() {
        self.invalid = invalidForm(self.sections[self.count]);
        if (!self.reachedLastSection() && !self.invalid) { 
          self.count++;
          scrollToTop();
        }
      };

      self.back = function() {
        if (self.firstSection()) { return; }
        self.count--;
        self.invalid = invalidForm(self.sections[self.count]);
      };

      self.reachedLastSection = function() {
        return self.count + 1 === self.sections.length;        
      };

      self.firstSection = function() {
        return self.count === 0;        
      };

      self.isSignature = function() {
        if (!self.sections) { return false; }
        var template = self.sections[self.count];
        if (!template) { return false; }
        for (var index = 0; index < template.length; index++) {
          if (template[index].type === 'signature') { return true; }
        }
        return false;
      };

      function setSubmitSuccessful() {
        self.showSubmitSuccessful = true;
      }

      self.unsetSubmitSuccessful = function() {
        self.showSubmitSuccessful = false;
      }

      //--------------------------- invalid form check ----------------------------

      function invalidForm(template) {
        var invalid = false;
        for (var index = 0; index < template.length; index++) {
          var section = template[index];

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

      function getParameterByName(name, url) {
          if (!url) { url = window.location.href; }
          name = name.replace(/[\[\]]/g, "\\$&");
          var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
              results = regex.exec(url);
          if (!results) { return null; }
          if (!results[2]) { return ''; }
          return decodeURIComponent(results[2].replace(/\+/g, " "));
      }

      //--------------------------- end invalid form check ----------------------------

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

      resizeCanvas();

      self.signaturePad = new SignaturePad(canvas);

      clearButton.addEventListener("click", function (event) {
          self.signaturePad.clear();
      });

    }
})();