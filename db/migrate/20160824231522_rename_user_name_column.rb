class RenameUserNameColumn < ActiveRecord::Migration
  def up
    rename_column :users, :name, :first_name
  end
end
