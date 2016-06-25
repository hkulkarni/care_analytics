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

      // ----------------------- Signature code ----------------------- //

      var wrapper = document.getElementById("signature-pad"),
      clearButton = wrapper.querySelector("[data-action=clear]"),
      saveButton = wrapper.querySelector("[data-action=save]"),
      canvas = wrapper.querySelector("canvas"),
      signaturePad;

      // Adjust canvas coordinate space taking into account pixel ratio,
      // to make it look crisp on mobile devices.
      // This also causes canvas to be cleared.
      function resizeCanvas() {
          // When zoomed out to less than 100%, for some very strange reason,
          // some browsers report devicePixelRatio as less than 1
          // and only part of the canvas is cleared then.
          var ratio =  Math.max(window.devicePixelRatio || 1, 1);
          canvas.width = canvas.offsetWidth * ratio;
          canvas.height = canvas.offsetHeight * ratio;
          canvas.getContext("2d").scale(ratio, ratio);
      }

      window.onresize = resizeCanvas;
      resizeCanvas();

      signaturePad = new SignaturePad(canvas);

      clearButton.addEventListener("click", function (event) {
          signaturePad.clear();
      });

      saveButton.addEventListener("click", function (event) {
          if (signaturePad.isEmpty()) {
              alert("Please provide signature first.");
          } else {
              window.open(signaturePad.toDataURL());
          }
      });

      // ----------------------- End Signature code ----------------------- //

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