class AddDestinationAToTrips < ActiveRecord::Migration
  def change
    add_column :trips, :destinationA, :string
  end
end
