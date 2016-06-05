define([
	'./Train'
], function (
	Train
) {
	var trainIdToTrain = {};
	var leadCarIdToTrainId = {};

	return {
		addCar: function (carData, route) {
			var train;
			if (carData.leadingVehicleId) {
				if (!(train = leadCarIdToTrainId[carData.leadingVehicleId])) {
					train = new Train();
				}
			} else {
				train = new Train();
			}

			train.addCar(carData);
			return train;
		},

		getTrain: function (id) {
			return trainIdToTrain[id];
		},

		getOrCreateTrain: function (id, routeType) {
			if (this.getTrain(id)) {
				return this.getTrain(id);
			}

			var train = new Train(id, routeType);
			trainIdToTrain[id] = train;

			return train;
		},

		updateLocation: function (id, lat, lng) {
			if (this.getTrain(id)) {
				this.getTrain(id).updateLocation(lat, lng);
			}
		},

		routes: {
			j: {
				icon: '../images/J_Church_logo.png',
				apiRouteId: 'J'
			},
			k: {
				icon: '../images/K_Ingleside_logo.png',
				apiRouteId: 'K'
			},
			l: {
				icon: '../images/L_Taraval_logo.png',
				apiRouteId: 'L'
			},
			m: {
				icon: '../images/M_Ocean_View_logo.png',
				apiRouteId: 'M'
			},
			n: {
				icon: '../images/N_Judah_logo.png',
				apiRouteId: 'N'
			},
			t: {
				icon: '../images/T_Third_Street_logo.png',
				apiRouteId: 'T'
			}
		}
	};
});
