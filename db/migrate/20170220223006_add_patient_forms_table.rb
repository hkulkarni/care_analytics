class AddPatientFormsTable < ActiveRecord::Migration
  def change
    create_table :patient_forms do |t|
      t.string :user_id
      t.jsonb :form_data, null: false, default: '{}'
      
      t.timestamps null: false
    end
  end
end

