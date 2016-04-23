define(function () {
	var lastBusTime = {};

	return {
		loadRoute: function (routeName) {
			var url = `http://webservices.nextbus.com/service/publicJSONFeed?command=routeConfig&a=sf-muni&r=${routeName}`;

			var client = new XMLHttpRequest();
			client.open('GET', url);

			return new Promise(function (resolve, reject) {
				client.onreadystatechange = function () {
					if (client.readyState === client.DONE) {
						var json = JSON.parse(client.responseText);

						resolve(json.route);
					}
				};

				client.onerror = function (error) {
					reject(error);
				};

				client.send();
			});
		},

		loadBusChanges: function (routeName) {
			var time = (lastBusTime[routeName] || 0);
			var url = `http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=sf-muni&r=M&t=${time}`;

			var client = new XMLHttpRequest();
			client.open('GET', url);

			return new Promise(function (resolve, reject) {
				client.onreadystatechange = function () {
					if (client.readyState === client.DONE) {
						var json = JSON.parse(client.responseText);
						lastBusTime[routeName] = json.lastTime.time;
						resolve(json.vehicle);
					}
				};

				client.onerror = function (error) {
					reject(error);
				};

				client.send();
			});
		}
	};
});
