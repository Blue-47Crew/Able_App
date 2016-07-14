class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.string :origin1
      t.string :origin2
      t.string :destinationA
      t.string :destinationB

      t.timestamps null: false
    end
  end
end
