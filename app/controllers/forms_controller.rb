class FormsController < ApplicationController

    def create
        create_pdf
        send_email
        render status: 200, json: @controller.to_json
    end

    def template
        file = File.read("app/assets/javascripts/data/patient-form-templates/#{current_user.file_name}.json")
        render :json => JSON.parse(file)
    end

    def save_signature
        File.open(Rails.root.join('signature-images', "#{current_user.file_name}.png"), 'wb') do |f|
            f.write(Base64.decode64(signature_image))
        end
        render status: 200, json: @controller.to_json
    end

    private

    def send_email
        PatientInformationMailer.patient_checkin_email(current_user).deliver_now
    end

    def create_pdf
        PdfService.new(html: pdf_html, current_user: current_user).save_pdf
    end

    def pdf_html
        @patient_form = patient_form
        render_to_string(:action => :pdf, :layout => "pdf.html.erb")
    end

    def signature_image
        params['image']
    end

    def patient_form
        params['patientForm']
    end

    def template_name
        current_user.name.downcase.gsub(' ', '_')
    end

end
