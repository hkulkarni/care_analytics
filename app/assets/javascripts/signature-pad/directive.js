(function() {
    'use strict';

    angular.module('careAnalytics')
      .directive('signaturePad', signaturePad);

    signaturePad.$inject = [];

    function signaturePad() {
      return {
        restrict: 'E',
        scope: true, 
        templateUrl: 'signature-pad.html',
        controller: 'SignaturePadController',
        controllerAs: 'signaturePad'
      };
    }

})();