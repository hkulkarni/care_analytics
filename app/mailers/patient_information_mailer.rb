class PatientInformationMailer < ApplicationMailer
  default :from => 'herschel.kulkarni@gmail.com'

  def patient_checkin_email(current_user)
    attachments['my_patient_info.pdf'] = File.read('pdfs/my_pdf_name.pdf')
    mail( :to => current_user.email,
    :subject => 'Thanks for signing up for our amazing app' )
  end
end
