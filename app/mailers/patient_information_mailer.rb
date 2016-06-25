class PatientInformationMailer < ApplicationMailer
  default :from => 'herschel.kulkarni@gmail.com'

  def patient_signup_email
    attachments['my_patient_info.pdf'] = File.read('pdfs/my_pdf_name.pdf')
    mail( :to => 'herschel.kulkarni@gmail.com',
    :subject => 'Thanks for signing up for our amazing app' )
  end
end
