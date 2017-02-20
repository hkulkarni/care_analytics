(function() {
    'use strict';
    angular.module('careAnalytics')
      .controller('PatientFormController', PatientFormController);

    PatientFormController.$inject = [];

    function PatientFormController() {
      var self = this;
      self.template;

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

      function radioHasInputField(radio) {
        return radio.type === 'radio-with-input';
      }

      function isChecked(formObj) {
        return formObj.value !== "";
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

    }

})();