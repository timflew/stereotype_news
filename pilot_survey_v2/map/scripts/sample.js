$(document).ready(function () {
    var wm1 = WorldMap({
        id: 'map1',
        selector: '#svgWorldMap1',
        scale: 0.4,
        margin: '0',
        top: '50',
        height: '600',
        width: '1100',
        inactiveCountryFill: 'white',
        inactiveCountryStroke: 'grey',
        inactiveCountryStrokeWidth: 3,
        showCountryBoxOnMouserEnter: true,
        drawNorthAmerica: true,
        drawCentralAmerica: true,
        drawSouthAmerica: true,
        drawEurope: true,
        drawAfrica: true,
        drawAsia: true,
        drawOceania: true,
        drawAntarctic: true,
        onCountryMouseEnter: function (config) {
            var id = config.countryId;
        },
        onCountryMouseMove: function (config) {
            var id = config.countryId;
        },
        onCountryMouseOut: function (config) {
            var id = config.countryId;
        },
        onCountryMouseClick: function (countryId) {
            var id = countryId;
        }
    });

	c_names=['ng', 'jp', 'pk', 'us', 'fr', 'ru', 'id', 'mx', 'rw', 'ht', 'jo', 'cu', 'lr', 'nk', 'sy', 'iq', 'ye', 'ua', 'af', 'tr', 've', 'eg', 'ir', 'sa', 'cn', 'il', 'gr', 'np', 'gb', 'nz', 'de', 'es', 'th', 'za', 'in', 'au', 'br', 'ca', 'be', 'nl'];
    c_colors=['#1f74b2', '#1e84ba', '#89d1b9', '#99d7b8', '#64c3be', '#7cccbb', '#1e7eb7', '#fafdce', '#21318c', '#081d58', '#3bb0c3', '#d5eeb2', '#ffffd9', '#2a9fc1', '#35a9c2', '#dff2b2', '#279bc1', '#bfe6b4', '#2ea2c1', '#43b7c3', '#61c1bf', '#2a9fc1', '#7eccbb', '#4dbac2', '#1d89bc', '#afdfb6', '#3db1c3', '#1d2e85', '#49b9c2', '#a2dab7', '#daf0b2', '#2256a4', '#36aac2', '#e0f3b1', '#e2f3b1', '#e6f5b1', '#82ceba', '#d2edb3', '#eef8b4', '#b8e3b5'];
    num_exp=[2.47, 2.43, 2.19, 2.17, 2.25, 2.21, 2.45, 1.93, 2.63, 2.72, 2.32, 2.07, 1.9, 2.37, 2.34, 2.04, 2.38, 2.11, 2.36, 2.3, 2.26, 2.37, 2.21, 2.29, 2.42, 2.14, 2.32, 2.64, 2.29, 2.15, 2.05, 2.53, 2.34, 2.03, 2.03, 2.02, 2.2, 2.07, 1.99, 2.12];
    sem_exp=[0.18, 0.16, 0.16, 0.13, 0.13, 0.23, 0.23, 0.21, 0.19, 0.26, 0.16, 0.15, 0.18, 0.14, 0.11, 0.16, 0.17, 0.18, 0.12, 0.15, 0.17, 0.12, 0.09, 0.09, 0.12, 0.25, 0.16, 0.17, 0.15, 0.12, 0.11, 0.14, 0.17, 0.16, 0.17, 0.16, 0.22, 0.11, 0.15, 0.16];
    for(i=0;i<c_names.length;i++){
	    $('#'+c_names[i]).attr('fill',c_colors[i]);
	}
    
});
