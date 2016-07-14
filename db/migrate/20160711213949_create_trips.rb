class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.text :to_location
      t.text :from_location
      t.text :destinationA
      t.text :destinationB

      t.timestamps null: false
    end

    class ChangeColumnName < ActiveRecord::Migration
      def change
        rename_column :trips, :to_location, :origin1,
        rename_column :trips, :from_location, :origin2,
      end

    end
  end
end
