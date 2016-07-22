
// Fare calulation
  var pickupX = 20;
  var pickupY= 15;
  var perMileX = 2;
  var perMileY = 1.50;

  function oneTrip (distance) {
 // Without wheel chair
    var tripMiles = distance * perMileY;
    var value = tripMiles + pickupY;
    var tripTotal = '$' + value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    return tripTotal;
  }
