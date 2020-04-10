class ChangePropertyPhotoColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :properties, :photo
    add_column :properties, :photos
  end
end
