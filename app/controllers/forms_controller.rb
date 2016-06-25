class FormsController < ApplicationController

    def create
        html = render_to_string(:action => :pdf, :layout => "pdf.html.erb") 
        pdf = WickedPdf.new.pdf_from_string(html) 

        save_path = Rails.root.join('pdfs','my_pdf_name.pdf')
        File.open(save_path, 'wb') do |file|
          file << pdf
        end

        PatientInformationMailer.patient_signup_email.deliver_now

        render status: 200, json: @controller.to_json
    end

end
