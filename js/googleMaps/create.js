define(function () {
	return {
		marker: function (lat, long, icon) {
			return new google.maps.Marker({
				position: { lat: 37.70, lng: -122.44 },
				map: map,
				icon: image
			});
		},

		path: function () {
			
		}
	};
});
