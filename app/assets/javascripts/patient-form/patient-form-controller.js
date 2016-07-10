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
          console.log(response.data);
        });
      };

      self.submit = function() {
        self.invalid = invalidForm();
        if (self.invalid) { return ; }
        var data = { patientForm: self.template };

        return $http({
          url: '/forms',
          method: 'POST',
          data: angular.toJson(data)
        }).then(function(response) {
          console.log("Submitted form");
        });

      };

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

    }

})();