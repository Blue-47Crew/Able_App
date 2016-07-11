json.array!(@trips) do |trip|
  json.extract! trip, :id, :to_location, :from_location
  json.url trip_url(trip, format: :json)
end
