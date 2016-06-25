class FormsController < ApplicationController

    def create
        puts "current_user: " + current_user.inspect
        html = render_to_string(:action => :pdf, :layout => "pdf.html.erb") 
        PdfService.new(html: html).save_pdf

        PatientInformationMailer.patient_checkin_email(current_user).deliver_now

        render status: 200, json: @controller.to_json
    end

    private

    def patient_form
        params['patientForm']
    end

end
