// // Initialisation de la carte centrée sur le monde
// const map = L.map('map', {
//     center: [20, 0],
//     zoom: 2,
//     minZoom: 2,
//     maxZoom: 10
// });

// // Ajout des tuiles de la carte (style clair et épuré similaire à l'image)
// L.tileLayer('https://{s}://{z}/{x}/{y}{r}.png', {
//     attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors &copy; <a href="https://carto.com">CARTO</a>',
//     subdomains: 'abcd'
// }).addTo(map);

// // Ajuster la taille de la carte lors du redimensionnement de la fenêtre
// window.addEventListener('resize', () => {
//     map.invalidateSize();
// });



// Initialisation de la carte centrée sur le monde [Latitude, Longitude]
const map = L.map('map', {
    center: [20, 0], 
    zoom: 2,
    minZoom: 2,
    maxZoom: 18
});

// Chargement des images de la carte (Tuiles OpenStreetMap standard)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Recalculer la taille de la carte si la fenêtre change
setTimeout(() => {
    map.invalidateSize();
}, 100);