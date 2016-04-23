define([
	'./Train',
	'./nextbusAPI'
], function (
	Train,
	nextbusAPI
) {
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: { lat: 37.70, lng: -122.44 }
	});

	nextbusAPI.loadRoute('M').then(function (json) {
		console.log(json);
	});

	nextbusAPI.loadBusChanges('M').then(function (json) {
		console.log(json);
	});
});
