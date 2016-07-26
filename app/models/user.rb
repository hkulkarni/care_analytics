class User < ActiveRecord::Base

    has_secure_password

    def file_name
        "#{name.downcase.gsub!(' ','_')}"
    end
    
end
