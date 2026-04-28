
mapboxgl.accessToken = config.MAPBOX_API;

var mapProps = {
    container: 'map',
    center: [-73.97, 40.75],
    zoom: 9
};

var map = new mapboxgl.Map(mapProps);

let counter = 0;

const inputBox = document.getElementById("clickCount");

map.on("click", function (evt) {
    counter += 1;
    inputBox.value = counter;
});

map.on("dblclick", function (evt) {
    counter += 4;
    inputBox.value = counter;
});
map.doubleClickZoom.disable();
