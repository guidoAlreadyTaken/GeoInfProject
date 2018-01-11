
//var map;

// création de la carte
var mymap = L.map('mapid').setView([46.3167, 6.9667], 13);

// ajoute du Layer Mapbox pour avoir du graphisme
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2hyaXNiYWVyIiwiYSI6ImNqYjZsa2o4bjNudnoycW85b2d2ejAxamQifQ.lhJXOzm7Wl1GGyIZRUAECg'
}).addTo(mymap);

// construction des icones des cabannes
var hutIcon = L.icon({
    iconUrl: 'img/hut.png',

    iconSize:     [25, 25], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// positionement des icônes
L.marker([46.3167, 6.9667], {icon: hutIcon}).addTo(mymap);

// intégration fichier GeoJson
var hutlocation = new L.geoJson(
	);
hutlocation.addTo(mymap);

$.ajax({
	dataType: "json",
	url: "data/hutinfos.geojson",
	success: function(data) {
	    $(data.features).each(function(key, data) {
	        hutlocation.addData(data);
	    });
}
});

// ajout des cabanes sur la carte

/*
// création de la carte mapbox
var mymapLeaf = L.map('mapLeaf').setView([51.505, -0.09], 13);
map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-79.4512, 43.6568],
    zoom: 13
});

map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken

}));

var hut = mapboxgl.featureLayer()
	.loadURL('./hutinfos.geojson')
	.on('ready', function(e) { 
    var clusterGroup = new mapboxgl.MarkerClusterGroup();
    e.target.eachLayer(function(layer) { 
        clusterGroup.addLayer(layer);
    });
    map.addLayer(clusterGroup); 
	});
*/