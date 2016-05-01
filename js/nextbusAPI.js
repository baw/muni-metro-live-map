define(function () {
	var lastCarTime = {};

	var load = function (url, onSuccess, onError) {
		var client = new XMLHttpRequest();
		client.open('GET', url);

		return new Promise(function (resolve, reject) {
			client.onreadystatechange = function () {
				if (client.readyState === client.DONE) {
					var json = JSON.parse(client.responseText);

					onSuccess(json, resolve, reject);
				}
			};

			client.onerror = function (error) {
				if (onError !== undefined) {
					reject(error);
				} else {
					onError(error, resolve, reject);
				}
			};

			client.send();
		});
	};

	return {
		loadRoute: function (routeName) {
			var url = `http://webservices.nextbus.com/service/publicJSONFeed?command=routeConfig&a=sf-muni&r=${routeName}`;

			return load(url, function (json, resolve) {
				resolve(json.route);
			});
		},

		loadCarChanges: function (routeName) {
			var time = (lastCarTime[routeName] || 0);
			var url = `http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=sf-muni&r=${routeName}&t=${time}`;

			return load(url, function (json, resolve) {
				lastCarTime[routeName] = json.lastTime.time;
				resolve(json.vehicle);
			});
		}
	};
});
