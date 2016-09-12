(function() {
    'use strict';

    angular.module('careAnalytics')
      .directive('signature', signature);

    signature.$inject = [];

    function signature() {
      return {
        restrict: 'E',
        scope: true, 
        templateUrl: 'signature.html'
      };
    }

})();