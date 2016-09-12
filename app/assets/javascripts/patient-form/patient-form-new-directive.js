(function() {
    'use strict';

    angular.module('careAnalytics')
      .directive('patientFormNew', patientFormNew);

    patientFormNew.$inject = [];

    function patientFormNew() {
      return {
        restrict: 'E',
        bindToController: {
          template: '='
        },
        templateUrl: 'patient-form-new.html',
        controller: 'PatientFormNewController',
        controllerAs: 'patientForm'
      };
    }

})();