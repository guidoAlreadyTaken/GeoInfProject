mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXNiYWVyIiwiYSI6ImNqYjZsa2o4bjNudnoycW85b2d2ejAxamQifQ.lhJXOzm7Wl1GGyIZRUAECg';
var map;

// création de la carte
map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-79.4512, 43.6568],
    zoom: 13
});

map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
}));