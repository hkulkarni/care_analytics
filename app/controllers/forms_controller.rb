class FormsController < ApplicationController

    def create
        create_pdf
        send_email
        remove_pdf
        render status: 200, json: @controller.to_json
    end

    def template
        file = File.read("app/assets/javascripts/data/patient-form-templates/#{params['id']}.json")
        render :json => JSON.parse(file)
    rescue
        file = File.read("app/assets/javascripts/data/patient-form-templates/default.json")
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
        PatientInformationMailer.patient_checkin_email(current_user, patient_form).deliver_now
    end

    def create_pdf
        pdf_service.save_pdf
    end

    def remove_pdf
        pdf_service.remove_pdf
    end

    def pdf_html
        @user_full_name = patient_form.full_name
        @patient_form = params['patientForm']
        render_to_string(:action => :pdf, :layout => "pdf.html.erb")
    end

    def signature_image
        params['image']
    end

    def pdf_service 
        PdfService.new(html: pdf_html, patient_form: patient_form)
    end

    def patient_form
        PatientForm.new(form: params['patientForm'])
    end

    def template_name
        current_user.name.downcase.gsub(' ', '_')
    end

end
