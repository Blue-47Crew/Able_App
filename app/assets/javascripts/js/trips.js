

var map;

     function initMap() {
       map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: -34.397, lng: 150.644},
         zoom: 8
       });
     };

//
//     // function to format currency
// function CurrencyFormatted(amount) {
// 	var i = parseFloat(amount);
// 	if(isNaN(i)) { i = 0.00; }
// 	var minus = '';
// 	if(i < 0) { minus = '-'; }
// 	i = Math.abs(i);
// 	i = parseInt((i + .005) * 100);
// 	i = i / 100;
// 	s = new String(i);
// 	if(s.indexOf('.') < 0) { s += '.00'; }
// 	if(s.indexOf('.') == (s.length - 2)) { s += '0'; }
// 	s = minus + s;
// 	return s;
// }
//
// // function to calculate distance
// 	function calculateDistance()
// 	{
// 		try
// 		{
// 			var glatlng1 = new GLatLng(location1.lat, location1.lon);
// 			var glatlng2 = new GLatLng(location2.lat, location2.lon);
// 			var miledistance = glatlng1.distanceFrom(glatlng2, 3959).toFixed(1);
// 			var kmdistance = (miledistance * 1.609344).toFixed(1);
// 			document.getElementById('results').innerHTML = 'Address 1: ' + location1.address + ' (' + location1.lat + ':' + location1.lon + ')<br />Address 2: ' + location2.address + ' (' + location2.lat + ':' + location2.lon + ')<br />Distance: ' + miledistance + ' miles (or ' + kmdistance + ' kilometers)<br/>';
//
//       // do our JS math here
//           var rate = CurrencyFormatted(document.getElementById("price_per_mile").value);
//           var fee = CurrencyFormatted(document.getElementById("admin_fee").value);
//           var price = CurrencyFormatted(miledistance * rate);
//           var total = CurrencyFormatted(Number(price) + Number(fee));
//
//       			document.getElementById('price').innerHTML = miledistance +' multiplied by ' + rate + ' equals ' + price + '<br/> Price Amount Rounded to nearest digit equals: $' + Math.round(price*100)/100 + ' Dollars<br/><br/> Admin Fee of $' + fee + ' Dollars Plus Shipping Price of $' + price + ' Dollars equals $' + total +' Total';
//       		}
//       		catch (error)
//       		{
//       			alert(error);
//       		}
//       	}
