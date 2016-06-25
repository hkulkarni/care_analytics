(function() {
    'use strict';
    angular.module('careAnalytics')
      .controller('FormController', FormController);

    FormController.$inject = ['$http'];

    function FormController($http) {
      var self = this;
      self.template = [
        {
          label: "Patient's Name",
          type: "container",
          children: [
            {
              label: "Last",
              value: "",
              type: "leaf"
            },
            {
              label: "First",
              value: "",
              type: "leaf"
            },
            {
              label: "Middle",
              value: "",
              type: "leaf"
            }
          ],
          code: "PATIENT_NAME",
          value: ""
        },
        {
          label: "Mailing Address",
          type: "container",
          children: [
            {
              label: "Street",
              value: "",
              type: "leaf"
            },
            {
              label: "City",
              value: "",
              type: "leaf"
            },
            {
              label: "Zip",
              value: "",
              type: "leaf"
            }
          ],
          code: "MAILING_ADDRESS",
          value: ""
        },
        {
          label: "",
          type: "parent",
          children: [
            {
              label: "Home Phone",
              value: "",
              type: "leaf"
            },
            {
              label: "Work Phone",
              value: "",
              type: "leaf"
            },
            {
              label: "Cell Phone",
              value: "",
              type: "leaf"
            }
          ],
          code: "Phone",
          value: ""
        }
      ];

      console.log(self.template);

      self.submit = function() {
        console.log("clicked submit");
        return $http.post('/forms')
          .then(function(response) {
            console.log("Submitted");
            console.log(response.status);
          });
      };

    }


})();