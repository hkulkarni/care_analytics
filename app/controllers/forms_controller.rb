class FormsController < ApplicationController

    def create
        html = render_to_string(:action => :pdf, :layout => "pdf.html.erb") 
        PdfService.new(html: html).save_pdf

        PatientInformationMailer.patient_checkin_email.deliver_now

        render status: 200, json: @controller.to_json
    end

end
