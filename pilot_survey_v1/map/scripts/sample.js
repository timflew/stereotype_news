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

	c_names=['ng', 'jp', 'pk', 'us', 'fr', 'ru'];
    c_colors=['#1f73b1', '#081d58', '#3aafc3', '#ffffd9', '#1e7eb7', '#f9fdcd'];
    num_exp=[2.31, 2.43, 2.23, 2.02, 2.29, 2.04];
    sem_exp=[0.11, 0.11, 0.12, 0.11, 0.15, 0.16]
    for(i=0;i<c_names.length;i++){
	    $('#'+c_names[i]).attr('fill',c_colors[i]);
	}
    
});
