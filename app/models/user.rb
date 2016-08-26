class User < ActiveRecord::Base

    has_secure_password

    def file_name
        "#{first_name.downcase}_#{last_name.downcase}"
    end
    
end
