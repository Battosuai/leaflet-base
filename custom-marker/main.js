function main() {
    // var greenIcon = L.icon({
    //     iconUrl: 'leaf-green.png',
    //     shadowUrl: 'leaf-shadow.png',

    //     iconSize: [38, 95], // size of the icon
    //     shadowSize: [50, 64], // size of the shadow
    //     iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    //     shadowAnchor: [4, 62], // the same for the shadow
    //     popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    // });

    const map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const LeafIcon = L.Icon.extend({
        options: {
            shadowUrl: 'leaf-shadow.png',
            iconSize: [38, 95],
            shadowSize: [50, 64],
            iconAnchor: [22, 94],
            shadowAnchor: [4, 62],
            popupAnchor: [-3, -76],
        },
    });

    const greenIcon = new LeafIcon({ iconUrl: 'leaf-green.png' }),
        redIcon = new LeafIcon({ iconUrl: 'leaf-red.png' }),
        orangeIcon = new LeafIcon({ iconUrl: 'leaf-orange.png' });

    L.marker([51.5, -0.09], { icon: greenIcon })
        .addTo(map)
        .bindPopup('I am a green leaf.');
    L.marker([51.495, -0.083], { icon: redIcon })
        .addTo(map)
        .bindPopup('I am a red leaf.');
    L.marker([51.49, -0.1], { icon: orangeIcon })
        .addTo(map)
        .bindPopup('I am an orange leaf.');
}

window.addEventListener('load', main);
