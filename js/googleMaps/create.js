define(function () {
	var map;
	return {
		marker: function (lat, lng, icon) {
			return new google.maps.Marker({
				position: { lat: lat, lng: lng },
				map: map,
				icon: icon
			});
		},

		path: function () {

		},

		setMap: function (newMap) {
			map = newMap;
		}
	};
});
