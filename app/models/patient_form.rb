class PatientForm

    def initialize(form:)
        self.form = form
    end

    def full_name
        "#{first_name} #{last_name}"
    end

    def file_name
        "#{first_name.downcase}_#{last_name.downcase}"
    end

    private

    attr_accessor :form

    def first_name
        form[0]['children'][1]['value']
    end

    def last_name
        form[0]['children'][0]['value']
    end
    
end
