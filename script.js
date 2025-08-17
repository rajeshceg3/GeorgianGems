const sites = [
    {
        id: 'mtskheta',
        name: 'Historical Monuments of Mtskheta',
        coords: [41.8425, 44.7214],
        image: 'https://images.unsplash.com/photo-158550731919A-9971b3436181?q=80&w=1974&auto=format&fit=crop',
        description: 'The ancient capital of Georgia, Mtskheta is home to stunning examples of medieval religious architecture. The confluence of the Mtkvari and Aragvi rivers provides a dramatic backdrop to these monuments of great cultural and artistic significance.'
    },
    {
        id: 'svaneti',
        name: 'Upper Svaneti',
        coords: [43.0456, 42.7289],
        image: 'https://images.unsplash.com/photo-1584362916294-1d37b88a755c?q=80&w=2070&auto=format&fit=crop',
        description: 'Preserved by its long isolation in the high mountains of the Caucasus, the region of Upper Svaneti is an exceptional example of medieval mountain scenery with its characteristic tower houses. The Svan towers were used both as dwellings and as defense posts against invaders.'
    },
    {
        id: 'gelati',
        name: 'Gelati Monastery',
        coords: [42.2925, 42.7714],
        image: 'https://images.unsplash.com/photo-1618264439995-242d3c32165e?q=80&w=1935&auto=format&fit=crop',
        description: 'Founded in a 12th century, the Gelati Monastery is a masterpiece of the Golden Age of medieval Georgia. It was a centre of science and education and the Academy it housed was one of the most important cultural centres in ancient Georgia.'
    },
    {
        id: 'colchis',
        name: 'Colchic Rainforests and Wetlands',
        coords: [42.12, 41.70],
        image: 'https://images.pexels.com/photos/1578825/pexels-photo-1578825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'This site comprises a series of ecosystems including deciduous rainforests and wetlands, which have survived the glacial cycles of the Tertiary period. They are home to a highly diverse flora and fauna, with a large number of endemic and relict species.'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map', {
        center: [42.3, 43.5],
        zoom: 7,
        scrollWheelZoom: false,
        zoomControl: false,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    const infoPanel = document.getElementById('info-panel');
    const infoContent = document.getElementById('info-content');
    const closeBtn = document.getElementById('close-btn');

    const markers = [];

    sites.forEach(site => {
        const customIcon = L.divIcon({
            className: 'custom-marker',
            html: '',
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        });

        const marker = L.marker(site.coords, { icon: customIcon }).addTo(map);
        markers.push(marker);

        marker.on('click', (e) => {
            map.flyTo(site.coords, 13);

            infoContent.innerHTML = `
                <div class="image-container">
                    <img src="${site.image}" alt="${site.name}">
                </div>
                <div class="text-container">
                    <h2>${site.name}</h2>
                    <p>${site.description}</p>
                </div>
            `;

            infoPanel.classList.add('visible');

            markers.forEach(m => m.getElement().classList.remove('selected'));
            marker.getElement().classList.add('selected');

            L.DomEvent.stopPropagation(e);
        });
    });

    const closePanel = () => {
        infoPanel.classList.remove('visible');
        markers.forEach(m => m.getElement().classList.remove('selected'));
    };

    closeBtn.addEventListener('click', () => {
        closePanel();
        map.flyTo([42.3, 43.5], 7);
    });

    map.on('click', closePanel);
});
