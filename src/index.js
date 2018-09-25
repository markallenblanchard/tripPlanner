const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker")

mapboxgl.accessToken = "pk.eyJ1Ijoicm95eWVoMDA3IiwiYSI6ImNqbWk0dm43ZjAxYWYza281d2h2MWhwc24ifQ.NaYDsac432K4_HOImG6R-g";

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.641, 41.895], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-87.641, 41.895]).addTo(map); // [-87.641, 41.895] for Chicago



const marker = buildMarker("activities", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);