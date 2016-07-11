class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.text :to_location
      t.text :from_location

      t.timestamps null: false
    end
  end
end
