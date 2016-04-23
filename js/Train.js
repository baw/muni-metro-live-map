define([
	'./googleMaps/create'
], function (
	create
) {
	var Bus = function (lat, lng, busType) {
		this.marker = create.marker({
			lat: '',
			lng: '',
			icon: busType.icon
		});
	};

	Bus.types = {
		j: { icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/J_Church_logo.svg' },
		k: { icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/K_Ingleside_logo.svg' },
		l: { icon: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/L_Taraval_logo.svg' },
		m: { icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/M_Ocean_View_logo.svg' },
		n: { icon: 'https://upload.wikimedia.org/wikipedia/commons/1/18/N_Judah_logo.svg' },
		t: { icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/T_Third_Street_logo.svg' }
	};
});
