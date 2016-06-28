(function() {
    'use strict';

    angular.module('careAnalytics')
      .directive('patientForm', patientForm);

    patientForm.$inject = [];

    function patientForm() {
      return {
        restrict: 'E',
        scope: true, 
        templateUrl: 'patient-form.html',
        controller: 'PatientFormController',
        controllerAs: 'patientForm',
        link: function(scope, element, attributes, controller) {
          controller.initializeForms();
        }
      };
    }

})();