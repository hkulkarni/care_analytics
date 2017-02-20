(function() {
    'use strict';

    angular.module('careAnalytics')
      .directive('patientForm', patientForm);

    patientForm.$inject = [];

    function patientForm() {
      return {
        restrict: 'E',
        bindToController: {
          template: '='
        },
        templateUrl: 'patient-form.html',
        controller: 'PatientFormController',
        controllerAs: 'patientForm'
      };
    }

})();