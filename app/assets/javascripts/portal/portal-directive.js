(function() {
    'use strict';

    angular.module('formsPortal')
      .directive('portal', portal);

    portal.$inject = [];

    function portal() {
      return {
        restrict: 'E',
        scope: true, 
        templateUrl: 'portal.html',
        controller: 'portalController',
        controllerAs: 'portal',
        link: function(scope, element, attributes, controller) {
          controller.initialize();
        }
      };
    }

})();