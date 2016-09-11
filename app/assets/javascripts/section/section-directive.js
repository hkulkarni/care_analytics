(function() {
    'use strict';

    angular.module('careAnalytics')
      .directive('section', section);

    section.$inject = [];

    function section() {
      return {
        restrict: 'E',
        scope: true, 
        templateUrl: 'section.html',
        controller: 'SectionController',
        controllerAs: 'section',
        link: function(scope, element, attributes, controller) {
          controller.initializeForms();
        }
      };
    }

})();