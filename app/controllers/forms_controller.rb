class FormsController < ApplicationController

    def create
        html = render_to_string(:action => :pdf, :layout => "pdf.html.erb") 
        PdfService.new(html: html).save_pdf

        PatientInformationMailer.patient_checkin_email(current_user).deliver_now

        render status: 200, json: @controller.to_json
    end

    def template
      form = [
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
        },
        {
          label: "Dental History",
          type: "row",
          children: [
            {
              label: "General Dentist",
              value: "",
              type: "leaf"
            },
            {
              label: "Date of last visit",
              value: "",
              type: "leaf"
            }
          ],
          code: "DENTAL_HISTORY",
          value: ""
        },
        {
          label: "",
          type: "row",
          children: [
            {
              label: "What concerns you most about your teeth?",
              value: "",
              type: "leaf"
            }
          ],
          code: "DENTAL_HISTORY_1",
          value: ""
        },
        {
          label: "Are you presently in any dental pain?",
          type: "radio-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "DENTAL_HISTORY_2",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "Have you ever experienced any unfavorable reaction to dentistry?",
          type: "radio-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "DENTAL_HISTORY_3",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "Have your wisdom teeth been removed?",
          type: "radio-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "DENTAL_HISTORY_4",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "Have you ever lost or chipped any teeth?",
          type: "radio-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "DENTAL_HISTORY_5",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "Have there been any injuries to face, mouth, or teeth?",
          type: "radio-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "DENTAL_HISTORY_6",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "Is any part of your mouth sensitive to temperature? Where?",
          type: "radio-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "DENTAL_HISTORY_7",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "Is any part of your mouth sensitive to pressure? Where?",
          type: "radio-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "DENTAL_HISTORY_8",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "Do your gums bleed when you brush?",
          type: "radio-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "DENTAL_HISTORY_9",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "Do you have any type of thumb or tongue habit?",
          type: "radio-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "DENTAL_HISTORY_10",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "Are you a mouth breather?",
          type: "radio-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "DENTAL_HISTORY_11",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "Have you ever seen an orthodontist? If yes, who and when?",
          type: "radio-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "DENTAL_HISTORY_12",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "What is your attitude toward receiving orthodontic treatment?",
          type: "radio-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "DENTAL_HISTORY_13",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "Has anyone in your family received orthodontic treatment? How did they feel about the result?",
          type: "radio-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "DENTAL_HISTORY_14",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "Do your teeth or jaws ever feel uncomfortable when you awake in the morning?",
          type: "radio-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "DENTAL_HISTORY_15",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "Are you aware of your jaw clicking or popping?",
          type: "radio-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "DENTAL_HISTORY_16",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "Are you aware of clenching your teeth during the day?",
          type: "radio-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "DENTAL_HISTORY_17",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "Have you ever been told that you grind your teeth?",
          type: "radio-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "DENTAL_HISTORY_18",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "Do you have “tension” headaches?",
          type: "radio-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "DENTAL_HISTORY_19",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "Have you ever experienced chronic ringing in your ears?",
          type: "radio-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "DENTAL_HISTORY_20",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "Are you aware that some appointments will be during work hours?",
          type: "radio-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "DENTAL_HISTORY_21",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "Orthodontic Insurance Information",
          type: "row",
          children: [
            {
              label: "Insured's Name",
              value: "",
              type: "leaf"
            },
            {
              label: "Social Security #",
              value: "",
              type: "leaf"
            }
          ],
          code: "INSURANCE",
          value: ""
        },
        {
          label: "",
          type: "row",
          children: [
            {
              label: "Employer Name",
              value: "",
              type: "leaf"
            }
          ],
          code: "INSURANCE_1",
          value: ""
        },
        {
          label: "",
          type: "row",
          children: [
            {
              label: "Insurance Company",
              value: "",
              type: "leaf"
            },
            {
              label: "Group #",
              value: "",
              type: "leaf"
            },
            {
              label: "ID #",
              value: "",
              type: "leaf"
            }
          ],
          code: "INSURANCE_2",
          value: ""
        },
        {
          label: "",
          type: "row",
          children: [
            {
              label: "Insurance Co. Address",
              value: "",
              type: "leaf"
            },
            {
              label: "Phone #",
              value: "",
              type: "leaf"
            }
          ],
          code: "INSURANCE_3",
          value: ""
        },
        {
          label: "Do you have dual coverage?",
          type: "radio-with-input",
          options: [
            "Yes",
            "No"
          ],
          code: "INSURANCE_4",
          value: "",
          details: "",
          showInputIfValueIs: "Yes"
        },
        {
          label: "If yes",
          type: "row",
          children: [
            {
              label: "Insured's Name",
              value: "",
              type: "leaf"
            },
            {
              label: "Social Security #",
              value: "",
              type: "leaf"
            }
          ],
          code: "INSURANCE_5",
          value: ""
        },
        {
          label: "",
          type: "row",
          children: [
            {
              label: "Employer Name",
              value: "",
              type: "leaf"
            }
          ],
          code: "INSURANCE_6",
          value: ""
        },
        {
          label: "",
          type: "row",
          children: [
            {
              label: "Insurance Company",
              value: "",
              type: "leaf"
            },
            {
              label: "Group #",
              value: "",
              type: "leaf"
            },
            {
              label: "ID #",
              value: "",
              type: "leaf"
            }
          ],
          code: "INSURANCE_7",
          value: ""
        },
        {
          label: "",
          type: "row",
          children: [
            {
              label: "Insurance Co. Address",
              value: "",
              type: "leaf"
            },
            {
              label: "Phone #",
              value: "",
              type: "leaf"
            }
          ],
          code: "INSURANCE_8",
          value: ""
        }
      ]
      render :json => form
    end

    private

    def patient_form
        params['patientForm']
    end

end
