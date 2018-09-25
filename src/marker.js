const mapboxgl = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = (type, coords) => {
    // Your Code Here
    if(Object.keys(iconURLs).includes(type)){
        let URL = iconURLs[type]
        
        const markerDomEl = document.createElement("div"); // Create a new, detached DIV
        markerDomEl.style.width = "32px";
        markerDomEl.style.height = "39px";
        markerDomEl.style.backgroundImage = `url(${URL})`;
       
        let newCoord = new mapboxgl.Marker(markerDomEl).setLngLat(coords);
        return newCoord;
    }
};

module.exports = buildMarker;


