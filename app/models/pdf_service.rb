class PdfService

    def initialize(html:)
        self.html = html
    end

    def save_pdf
        File.open(path, 'wb') do |file|
          file << pdf
        end
    end

    private

    attr_accessor :html

    def pdf 
       WickedPdf.new.pdf_from_string(html) 
    end

    def directory
       'pdfs'
    end

    def name
        'my_pdf_name.pdf'
    end

    def path
        Rails.root.join(directory, name)
    end

end
