class PdfService

    def initialize(html:, current_user:)
        self.html = html
        self.current_user = current_user
    end

    def save_pdf
        File.open(path, 'wb') do |file|
          file << pdf
        end
    end

    private

    attr_accessor :html, :current_user

    def pdf 
      WickedPdf.new.pdf_from_string(html) 
    end

    def directory
      'pdfs'
    end

    def path
      Rails.root.join(directory, name)
    end

    def name
      "#{current_user.file_name}.pdf"
    end
end
