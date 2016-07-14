class AddDestinationBToTrips < ActiveRecord::Migration
  def change
    add_column :trips, :destinationB, :string
  end
end
