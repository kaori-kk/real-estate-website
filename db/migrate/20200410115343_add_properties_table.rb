class AddPropertiesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :properties do |t|
      t.references :account
      t.string :name
      t.string :address
      t.integer :price
      t.integer :rooms
      t.integer :bedrooms
      t.string :photos

      t.timestamps
    end
  end
end
