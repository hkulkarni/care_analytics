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
          type: "radio",
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
          type: "radio-with-input",
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
          type: "radio-with-input",
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
          type: "radio-with-input",
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
          type: "radio-with-input",
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
          type: "radio-with-input",
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
          type: "radio-with-input",
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
          type: "radio-with-input",
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
          type: "radio-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "MEDICAL_HISTORY_10",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "Check any of the medical conditions below that you have had or currently have.",
          type: "checkbox",
          options: [
            {
              label: "Abnormal bleeding/Hemophilia",
              value: false,
              type: "leaf"
            },
            {
              label: "Anemia",
              value: false,
              type: "leaf"
            },
            {
              label: "Arthritis",
              value: false,
              type: "leaf"
            },
            {
              label: "Asthma or Hayfever",
              value: false,
              type: "leaf"
            },
            {
              label: "Bone Disorders",
              value: false,
              type: "leaf"
            },
            {
              label: "Congenital Heart Defect",
              value: false,
              type: "leaf"
            },
            {
              label: "Diabetes",
              value: false,
              type: "leaf"
            },
            {
              label: "Dizziness",
              value: false,
              type: "leaf"
            },
            {
              label: "Epilepsy",
              value: false,
              type: "leaf"
            },
            {
              label: "Gastrointestinal Disorders",
              value: false,
              type: "leaf"
            },
            {
              label: "Heart Problems",
              value: false,
              type: "leaf"
            },
            {
              label: "Heart Murmur",
              value: false,
              type: "leaf"
            },
            {
              label: "Hepatitis/Liver problems",
              value: false,
              type: "leaf"
            },
            {
              label: "Herpes",
              value: false,
              type: "leaf"
            },
            {
              label: "High Blood Pressure",
              value: false,
              type: "leaf"
            },
            {
              label: "HIV / Aids",
              value: false,
              type: "leaf"
            },
            {
              label: "Kidney problems",
              value: false,
              type: "leaf"
            },
            {
              label: "Nervous Disorders",
              value: false,
              type: "leaf"
            },
            {
              label: "Pneumonia",
              value: false,
              type: "leaf"
            },
            {
              label: "Prolonged Bleeding",
              value: false,
              type: "leaf"
            },
            {
              label: "Radiation/Chemotherapy",
              value: false,
              type: "leaf"
            },
            {
              label: "Rheumatic Fever",
              value: false,
              type: "leaf"
            },
            {
              label: "Tuberculosis",
              value: false,
              type: "leaf"
            },
            {
              label: "Tumor or Cancer",
              value: false,
              type: "leaf"
            }
          ],
          code: "MEDICAL_HISTORY_11",
          value: "",
        },
        {
          label: "",
          type: "row",
          children: [
            {
              label: "Are there any medical conditions we have not discussed that you feel we should be aware of?",
              value: "",
              type: "leaf"
            }
          ],
          code: "MEDICAL_HISTORY_12",
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

      self.isRow = function(formObj) {
        return formObj.type === 'row';
      };

      self.isRadio = function(formObj) {
        return formObj.type === 'radio' || radioHasInputField(formObj);
      };

      self.isCheckbox = function(formObj) {
        return formObj.type === 'checkbox';
      };

      self.showInputField = function(formObj) {
        if (formObj.showInputIfValueIs === "All" && isChecked(formObj)) { return true; }
        return radioHasInputField(formObj) && formObj.value === formObj.showInputIfValueIs;
      };

      function radioHasInputField(radio) {
        return radio.type === 'radio-with-input';
      }

      function isChecked(formObj) {
        return formObj.value !== "";
      }

    }

})();