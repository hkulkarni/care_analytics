class AddAdminEmailToUserModel < ActiveRecord::Migration
  def up
    add_column :users, :admin_email, :string 
  end
end
