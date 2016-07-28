class Trip < ActiveRecord::Base
  geocoded_by :start_address
  after_validation :geocode, :if => :address_changed?

#   def address
#   [start_address, start_city, start_state, start_zipcode].compact.join(', ')
# end
end
