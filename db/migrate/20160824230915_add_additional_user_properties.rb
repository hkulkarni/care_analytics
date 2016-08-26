class AddAdditionalUserProperties < ActiveRecord::Migration
  def up
    add_column :users, :last_name, :string 
    add_column :users, :practice_name, :string  
    add_column :users, :practice_street, :string  
    add_column :users, :practice_city, :string  
    add_column :users, :practice_state, :string  
    add_column :users, :practice_zip, :string  
 
  end
end
