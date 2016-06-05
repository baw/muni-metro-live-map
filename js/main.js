define([
	'./googleMaps/create',
	'./TrainManager',
	'./nextbusAPI'
], function (
	create,
	TrainManager,
	nextbusAPI
) {
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: { lat: 37.70, lng: -122.44 }
	});
	create.setMap(map);

	var updateLocations = function () {
		Object.keys(TrainManager.routes).forEach(function (route) {
			nextbusAPI.loadCarChanges(TrainManager.routes[route].apiRouteId).then(function (cars) {
				if (Array.isArray(cars)) {
					cars.forEach(function (carData) {
						var train = TrainManager.addCar(carData, TrainManager.routes[route]);
						train.updateLocation(carData.lat, carData.lon);
					});
				}
			});
		});
	};

	updateLocations();
	setInterval(updateLocations, 60000);
});
