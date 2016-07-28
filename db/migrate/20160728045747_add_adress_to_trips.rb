class AddAdressToTrips < ActiveRecord::Migration
  change_table :trips do |t|
     t.remove :origin1, :origin2, :destinationA, :destinationB
    t.string :start_address, :start_city, :start_state, :end_address, :end_city, :end_state
    t.integer :start_zipcode, :end_zipcode
  end
end
