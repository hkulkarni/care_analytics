class PdfService

    def initialize(html:, patient_form:)
        self.html = html
        self.patient_form = patient_form
    end

    def save_pdf
        File.open(path, 'wb') do |file|
          file << pdf
        end
    end

    private

    attr_accessor :html, :patient_form

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
      "#{patient_form.file_name}.pdf"
    end
end
