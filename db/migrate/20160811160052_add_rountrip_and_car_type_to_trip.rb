class AddRountripAndCarTypeToTrip < ActiveRecord::Migration
  def change
  	add_column :trips ,:car_type ,:string
  	add_column :trips , :trip_type, :string
  end
end
