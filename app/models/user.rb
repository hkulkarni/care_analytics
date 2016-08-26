class User < ActiveRecord::Base

    has_secure_password

    def file_name
        "#{first_name}_#{last_name}"
    end
    
end
