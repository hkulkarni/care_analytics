(function() {
    'use strict';
    angular.module('formsPortal')
      .controller('portalController', portalController);

    portalController.$inject = [
      '$http'
    ];

    function portalController(
      $http
    ) {
      var self = this;
      self.forms = [];

      self.initialize = function() {
        return $http({
          url: '/list',
          method: 'GET'
        }).then(function(response) {
          console.log("Retrieved forms");
          console.log(response.data);
          self.forms = response.data;
        });
      };

      self.name = function(form_obj) {
        var names = form_obj.form_data[0][1].children;
        return names[1].value + ' ' + names[2].value + ' ' + names[0].value;
      };

      self.filled_date = function(form_obj) {
        return form_obj.created_at.substring(0, 9);
      };
    }
})();