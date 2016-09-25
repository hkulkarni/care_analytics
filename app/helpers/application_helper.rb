module ApplicationHelper

    def logo_file_name
        case current_user.file_name
        when "herschel_kulkarni"
            return "daniel_gehani.png"
        when "sachin_kulkarni"
            return "sachin_kulkarni.webp"
        when "samir_kulkarni"
            return "deepak_gupta.png"
        when "deepak_gupta"
            return "deepak_gupta.png"
        when "daniel_gehani"
            return "daniel_gehani.png"
        else
            return ''
        end
    end

    def has_logo?
        current_user.file_name == 'deepak_gupta' ||
        current_user.file_name == 'sachin_kulkarni' ||
        current_user.file_name == 'herschel_kulkarni' ||
        current_user.file_name == 'samir_kulkarni' ||
        current_user.file_name == 'daniel_gehani'
    end

end
