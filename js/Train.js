define([
	'./googleMaps/create'
], function (
	create
) {
	var Train = function (type) {
		this._type = type;
	};

	Train.prototype.addCar = function () {

	};

	Train.prototype.updateLocation = function (lat, lng) {
		lat = parseFloat(lat);
		lng = parseFloat(lng);

		if (this.marker) {
			console.log('update location');
			this.marker.setPosition({
				lat: lat,
				lng: lng
			});
		} else {
			console.log('new marker');
			this.marker = create.marker(lat, lng, this._type.icon);
		}
	};

	return Train;
});
