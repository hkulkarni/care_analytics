class FormsController < ApplicationController

    def create
        html = render_to_string(:action => :pdf, :layout => "pdf.html.erb") 
        PdfService.new(html: html).save_pdf

        PatientInformationMailer.patient_checkin_email(current_user).deliver_now

        render status: 200, json: @controller.to_json
    end

    def template
      file = File.read('app/assets/javascripts/data/patient-form-templates/deepak-adult.json')
      render :json => JSON.parse(file)
    end

    private

    def patient_form
        params['patientForm']
    end

end
