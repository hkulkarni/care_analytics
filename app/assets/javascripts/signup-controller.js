(function() {
    'use strict';
    angular.module('careAnalytics')
      .controller('SignupController', SignupController);

    SignupController.$inject = ['$http'];

    function SignupController($http) {
      var self = this;
      self.email;
      self.buttonClicked = false;

      self.submit = function() {
        self.buttonClicked = true;
      };

      self.showInputForm = function() {
        return !self.buttonClicked;
      };
    }
})();


angular.module('careAnalytics').controller('DropdownCtrl', function ($scope, $log) {
  $scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

  $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
});