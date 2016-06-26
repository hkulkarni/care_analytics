(function() {
    'use strict';
    angular.module('careAnalytics')
      .controller('PatientFormController', PatientFormController);

    PatientFormController.$inject = ['$http'];

    function PatientFormController($http) {
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
          code: "CONTACT",
          value: ""
        },
        {
          label: "",
          type: "parent",
          children: [
            {
              label: "Nickname",
              value: "",
              type: "leaf"
            },
            {
              label: "Birthdate",
              value: "",
              type: "leaf"
            }
          ],
          code: "PERSONAL",
          value: ""
        },
        {
          label: "",
          type: "parent",
          children: [
            {
              label: "Email Address",
              value: "",
              type: "leaf"
            }
          ],
          code: "EMAIL_ADDRESS",
          value: ""
        },
        {
          label: "",
          type: "parent",
          children: [
            {
              label: "Employer",
              value: "",
              type: "leaf"
            },
            {
              label: "Occupation",
              value: "",
              type: "leaf"
            }
          ],
          code: "EMPLOYMENT",
          value: ""
        },
        {
          label: "",
          type: "parent",
          children: [
            {
              label: "Whom may we thank for referring you to our office?",
              value: "",
              type: "leaf"
            }
          ],
          code: "REFERRAL",
          value: ""
        }
      ];

      console.log(self.template);

      self.submit = function() {
        var data = { patientForm: self.template };

        return $http({
          url: '/forms',
          method: 'POST',
          data: angular.toJson(data)
        }).then(function(response) {
          console.log("Submitted form");
          console.log(response.status);
        });

      };

      self.label = function(child) {
        if(!child.label) { return ''; }
        return child.label + ':';
      };

    }

})();