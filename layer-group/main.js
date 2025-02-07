function main() {
    const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap',
    });

    const osmHOT = L.tileLayer(
        'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        {
            maxZoom: 19,
            attribution:
                '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France',
        }
    );

    const littleton = L.marker([39.61, -105.02])
        .bindPopup('This is Littleton, CO.'),
        denver = L.marker([39.74, -104.99])
        .bindPopup('This is Denver, CO.'),
        aurora = L.marker([39.73, -104.8])
        .bindPopup('This is Aurora, CO.'),
        golden = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');

    const cities = L.layerGroup([littleton, denver, aurora, golden]);

    const map = L.map('map', {
        center: [39.73, -104.99],
        zoom: 10,
        layers: [osm, cities],
    });

    const baseMaps = {
        OpenStreetMap: osm,
        'OpenStreetMap.HOT': osmHOT,
    };

    const overlayMaps = {
        Cities: cities,
    };

    const layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
}

window.addEventListener('load', main);
