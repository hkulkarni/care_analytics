class PatientInformationMailer < ApplicationMailer
  default :from => 'formudent.services@gmail.com'

  def patient_checkin_email(current_user, patient_form)
    attachments[pdf_name(patient_form)] = File.read("pdfs/#{pdf_name(patient_form)}")
    mail(:from => "Formudent Services <formudent.services@gmail.com>",
    :to => current_user.admin_email,
    :subject => "Patient information attached for: #{patient_form.full_name} " )
  end

  private
  
  def pdf_name(patient_form)
    "#{patient_form.file_name}.pdf"
  end
end
