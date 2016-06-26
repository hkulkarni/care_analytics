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
          type: "row",
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
          type: "row",
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
          type: "row",
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
          type: "row",
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
          type: "row",
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
          type: "row",
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
          type: "row",
          children: [
            {
              label: "Whom may we thank for referring you to our office?",
              value: "",
              type: "leaf"
            }
          ],
          code: "REFERRAL",
          value: ""
        },
        {
          label: "Marital Status",
          type: "checkbox",
          options: [
            "Single",
            "Married",
            "Widowed",
            "Separated",
            "Divorced"
          ],
          code: "MARITAL_STATUS",
          value: ""
        },
        {
          label: "Spouse Information (if applicable)",
          type: "row",
          children: [
            {
              label: "Spouse's Name",
              value: "",
              type: "leaf"
            },
            {
              label: "Relationship to patient",
              value: "",
              type: "leaf"
            }
          ],
          code: "SPOUSE_INFO_GENERAL",
          value: ""
        },
        {
          label: "",
          type: "row",
          children: [
            {
              label: "Birthdate",
              value: "",
              type: "leaf"
            },
            {
              label: "Work Phone",
              value: "",
              type: "leaf"
            }
          ],
          code: "SPOUSE_INFO_CONTACT",
          value: ""
        },
        {
          label: "",
          type: "row",
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
          code: "SPOUSE_INFO_EMPLOYMENT",
          value: ""
        },
        {
          label: "Emergency Contact Information",
          type: "row",
          children: [
            {
              label: "Name of nearest relative not living with you",
              value: "",
              type: "leaf"
            }
          ],
          code: "EMERGENCY_CONTACT_1",
          value: ""
        },
        {
          label: "",
          type: "row",
          children: [
            {
              label: "Relationship with patient",
              value: "",
              type: "leaf"
            }
          ],
          code: "EMERGENCY_CONTACT_2",
          value: ""
        },
        {
          label: "Address",
          type: "row",
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
          code: "EMERGENCY_CONTACT_3",
          value: ""
        },
        {
          label: "",
          type: "row",
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
          code: "EMERGENCY_CONTACT_4",
          value: ""
        },
        {
          label: "Medical History",
          type: "row",
          children: [
            {
              label: "Physician",
              value: "",
              type: "leaf"
            },
            {
              label: "Date of last visit",
              value: "",
              type: "leaf"
            }
          ],
          code: "MEDICAL_HISTORY_1",
          value: ""
        },
        {
          label: "",
          type: "row",
          children: [
            {
              label: "Address",
              value: "",
              type: "leaf"
            },
            {
              label: "Phone",
              value: "",
              type: "leaf"
            }
          ],
          code: "MEDICAL_HISTORY_2",
          value: ""
        },
        {
          label: "Are you taking any medication?",
          type: "checkbox-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "MEDICAL_HISTORY_3",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "Are you allergic to any medication?",
          type: "checkbox-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "MEDICAL_HISTORY_4",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "Do you have a history of a major illness?",
          type: "checkbox-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "MEDICAL_HISTORY_5",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "Have you had any operations?",
          type: "checkbox-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "MEDICAL_HISTORY_6",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "Have you ever been involved in a serious accident?",
          type: "checkbox-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "MEDICAL_HISTORY_7",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "Have you ever smoked or chewed tobacco?",
          type: "checkbox-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "MEDICAL_HISTORY_8",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "Have seen a physician in the last 12 months? Why?",
          type: "checkbox-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "MEDICAL_HISTORY_9",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "Are you pregnant (female patients only)?",
          type: "checkbox-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "MEDICAL_HISTORY_10",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
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

      self.isRow = function(formObj) {
        return formObj.type === 'row';
      };

      self.isCheckbox = function(formObj) {
        return formObj.type === 'checkbox' || checkboxHasInputField(formObj);
      };

      self.showInputField = function(checkbox) {
        if (checkbox.showInputIfValueIs === "All" && isChecked(checkbox)) { return true; }
        return checkboxHasInputField(checkbox) && checkbox.value === checkbox.showInputIfValueIs;
      };

      function checkboxHasInputField(checkbox) {
        return checkbox.type === 'checkbox-with-input';
      }

      function isChecked(checkbox) {
        return checkbox.value !== "";
      }

    }

})();