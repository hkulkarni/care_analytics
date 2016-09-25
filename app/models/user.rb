class User < ActiveRecord::Base

    has_secure_password

    def file_name
        begin
            "#{first_name.downcase}_#{last_name.downcase}"
        rescue
            Rails.logger.info("Attempted to access invalid user")
        end
    end
    
end
