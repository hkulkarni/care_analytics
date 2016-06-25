class PdfService

    # def initialize(:form) 
    #     self.form = form
    # end

    # private 

    # attr_accessor :form

    def download 
      html = render_to_string(:action => :show, :layout => "layout.html.erb") 
      pdf = WickedPdf.new.pdf_from_string(html) 

      send_data(pdf, 
        :filename => "my_pdf_name.pdf", 
        :disposition => 'attachment') 
    end

end
