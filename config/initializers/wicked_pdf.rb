# WickedPDF Global Configuration
#
# Use this to set up shared configuration options for your entire application.
# Any of the configuration options shown here can also be applied to single
# models by passing arguments to the `render :pdf` call.
#
# To learn more, check out the README:
#
# https://github.com/mileszs/wicked_pdf/blob/master/README.md

# WickedPdf.config = {
#   exe_path: '/usr/local/bin/wkhtmltopdf'
# }

platform = RUBY_PLATFORM 

if platform.include?("darwin") # OS X machine 
  binary_path = Rails.root.join('bin', 'wkhtmltopdf-0.9.9-OS-X-i386').to_s 
elsif platform.include?("64-linux") # 64-bit linux machine 
  binary_path = Rails.root.join('bin', 'wkhtmltopdf-amd64').to_s 
end 

WickedPdf.config = { :exe_path => '/Users/herschel/.rvm/gems/ruby-2.2.1/bin/wkhtmltopdf' }