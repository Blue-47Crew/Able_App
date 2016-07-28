class AddLatitudeAndLongitudeToTrips < ActiveRecord::Migration
  change_table :trips do |t|
    add_column :trips, :latitude, :float
    add_column :trips, :longitude, :float
  end
end
