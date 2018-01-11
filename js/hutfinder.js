//INTEGRATION DE OPENLAYER ET JQUERY
stylesheetTag = '<link rel="stylesheet" href="http://openlayers.org/en/v3.19.1/css/ol.css" type="text/css">'
document.write(stylesheetTag);

scriptTag = '<script src="http://openlayers.org/en/v3.19.1/build/ol-debug.js" type="text/javascript"></script>';
document.write(scriptTag);

scriptTag = '<script src="https://code.jquery.com/jquery-2.1.4.min.js" type="text/javascript"></script>';
document.write(scriptTag);

//AJOUT DE LA COUCHE CABANES
var styleHut = new ol.style.Style({
    image: new ol.style.Icon({
        opacity: 1,
        src:'img/hut-icon.png',
        scale:0.5
    })
});

var vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector(),
    style:styleHut
});
map.addLayer(vectorLayer);
