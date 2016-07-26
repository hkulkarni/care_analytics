class PatientInformationMailer < ApplicationMailer
  default :from => 'formudent.services@gmail.com'

  def patient_checkin_email(current_user)
    attachments[pdf_name(current_user)] = File.read("pdfs/#{pdf_name(current_user)}")
    mail( :to => current_user.email,
    :subject => "Patient information attached for: #{current_user.name}" )
  end

  private

  def pdf_name(current_user)
    "#{current_user.file_name}.pdf"
  end
end
