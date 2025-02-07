function main() {
    let map = L.map('map').setView([39.75621, -104.99404], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const geojsonFeature = {
        type: 'Feature',
        properties: {
            name: 'Coors Field',
            amenity: 'Baseball Stadium',
            popupContent: 'This is where the Rockies play!',
        },
        geometry: {
            type: 'Point',
            coordinates: [-104.99404, 39.75621],
        },
    };

    L.geoJSON(geojsonFeature, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng).bindPopup(feature.properties.popupContent);
        },
    }).addTo(map);

    // circle marker
    // var geojsonMarkerOptions = {
    //     radius: 8,
    //     fillColor: '#ff7800',
    //     color: '#000',
    //     weight: 1,
    //     opacity: 1,
    //     fillOpacity: 0.8,
    // };

    // L.geoJSON(someGeojsonFeature, {
    //     pointToLayer: function (feature, latlng) {
    //         return L.circleMarker(latlng, geojsonMarkerOptions);
    //     },
    // }).addTo(map);

    const myLines = [
        {
            type: 'LineString',
            coordinates: [
                [-100, 40],
                [-105, 45],
                [-110, 55],
            ],
        },
        {
            type: 'LineString',
            coordinates: [
                [-105, 40],
                [-110, 45],
                [-115, 55],
            ],
        },
    ];

    const myStyle = {
        color: '#ff7800',
        weight: 5,
        opacity: 0.65,
    };

    L.geoJSON(myLines, {
        style: myStyle,
    }).addTo(map);

    // Alternatively, we could create an empty GeoJSON layer and assign it to a variable so that we can add more features to it later.
    // var myLayer = L.geoJSON().addTo(map);
    // myLayer.addData(geojsonFeature);

    // Alternate way of add styling features to the GeoJSON layer
    const states = [
        {
            type: 'Feature',
            properties: { party: 'Republican' },
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        [-104.05, 48.99],
                        [-97.22, 48.98],
                        [-96.58, 45.94],
                        [-104.03, 45.94],
                        [-104.05, 48.99],
                    ],
                ],
            },
        },
        {
            type: 'Feature',
            properties: { party: 'Democrat' },
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        [-109.05, 41.0],
                        [-102.06, 40.99],
                        [-102.03, 36.99],
                        [-109.04, 36.99],
                        [-109.05, 41.0],
                    ],
                ],
            },
        },
    ];

    L.geoJSON(states, {
        style: function (feature) {
            switch (feature.properties.party) {
                case 'Republican':
                    return { color: '#ff0000' };
                case 'Democrat':
                    return { color: '#0000ff' };
            }
        },
    }).addTo(map);

    //     onEachFeature
    // The onEachFeature option is a function that gets called on each feature before adding it to a GeoJSON layer. A common reason to use this option is to attach a popup to features when they are clicked.

    function onEachFeature(feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties && feature.properties.popupContent) {
            layer.bindPopup(feature.properties.popupContent);
        }
    }

    const geojsonFeature1 = {
        type: 'Feature',
        properties: {
            name: 'Coors Field',
            amenity: 'Baseball Stadium',
            popupContent: 'This is where the Rockies play!',
        },
        geometry: {
            type: 'Point',
            coordinates: [-104.99404, 39.75621],
        },
    };

    L.geoJSON(geojsonFeature1, {
        onEachFeature: onEachFeature,
    }).addTo(map);

    //     filter
    // The filter option can be used to control the visibility of GeoJSON features. To accomplish this we pass a function as the filter option. This function gets called for each feature in your GeoJSON layer, and gets passed the feature and the layer. You can then utilise the values in the feature's properties to control the visibility by returning true or false.

    // In the example below "Busch Field" will not be shown on the map.

    const someFeatures = [
        {
            type: 'Feature',
            properties: {
                name: 'Coors Field',
                show_on_map: true,
            },
            geometry: {
                type: 'Point',
                coordinates: [-104.99404, 39.75621],
            },
        },
        {
            type: 'Feature',
            properties: {
                name: 'Busch Field',
                show_on_map: false,
            },
            geometry: {
                type: 'Point',
                coordinates: [-104.98404, 39.74621],
            },
        },
    ];

    L.geoJSON(someFeatures, {
        filter: function (feature, layer) {
            return feature.properties.show_on_map;
        },
    }).addTo(map);
}

window.addEventListener('load', main);
