const sites = [
    {
        id: 'mtskheta',
        name: 'Historical Monuments of Mtskheta',
        coords: [41.8425, 44.7214],
        image: 'https://images.unsplash.com/photo-1714314172273-403b590972b7?fm=jpg&q=80&w=2000&auto=format&fit=crop',
        description: 'The ancient capital of Georgia, Mtskheta is home to stunning examples of medieval religious architecture. The confluence of the Mtkvari and Aragvi rivers provides a dramatic backdrop to these monuments of great cultural and artistic significance.'
    },
    {
        id: 'svaneti',
        name: 'Upper Svaneti',
        coords: [43.0456, 42.7289],
        image: 'https://images.unsplash.com/photo-1714316457727-4ba836ee61ca?fm=jpg&q=80&w=2000&auto=format&fit=crop',
        description: 'Preserved by its long isolation in the high mountains of the Caucasus, the region of Upper Svaneti is an exceptional example of medieval mountain scenery with its characteristic tower houses. The Svan towers were used both as dwellings and as defense posts against invaders.'
    },
    {
        id: 'gelati',
        name: 'Gelati Monastery',
        coords: [42.2925, 42.7714],
        image: 'https://images.unsplash.com/photo-1712843864936-ee5bdf3b9624?fm=jpg&q=80&w=2000&auto=format&fit=crop',
        description: 'Founded in a 12th century, the Gelati Monastery is a masterpiece of the Golden Age of medieval Georgia. It was a centre of science and education and the Academy it housed was one of the most important cultural centres in ancient Georgia.'
    },
    {
        id: 'colchis',
        name: 'Colchic Rainforests and Wetlands',
        coords: [42.12, 41.70],
        image: 'https://images.unsplash.com/photo-1715258400290-c095d69ac3e0?fm=jpg&q=80&w=2000&auto=format&fit=crop',
        description: 'This site comprises a series of ecosystems including deciduous rainforests and wetlands, which have survived the glacial cycles of the Tertiary period. They are home to a highly diverse flora and fauna, with a large number of endemic and relict species.'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Determine initial zoom based on screen size
    const isMobile = window.innerWidth < 768;
    const initialZoom = isMobile ? 6 : 7;
    const initialCenter = [42.3, 43.5];

    const map = L.map('map', {
        center: initialCenter,
        zoom: initialZoom,
        scrollWheelZoom: true,
        zoomControl: false, // We'll add it manually to position it
        zoomSnap: 0.5 // Smoother zooming
    });

    // Add zoom control to top right to avoid conflict with the card on the left
    L.control.zoom({
        position: 'topright'
    }).addTo(map);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    const infoPanel = document.getElementById('info-panel');
    const infoContent = document.getElementById('info-content');
    const closeBtn = document.getElementById('close-btn');

    const markers = [];

    const getResizedImage = (url, width) => {
        if (url.includes('images.unsplash.com')) {
            return url.replace(/w=\d+/, `w=${width}`);
        }
        if (url.includes('images.pexels.com')) {
            return url.replace(/w=\d+/, `w=${width}`);
        }
        return url;
    };

    sites.forEach(site => {
        const thumbUrl = getResizedImage(site.image, 100);
        const fullUrl = getResizedImage(site.image, 800);

        const customIcon = L.divIcon({
            className: 'custom-marker',
            html: `<div class='marker-pin'><div class='marker-img' style='background-image: url("${thumbUrl}");'></div></div>`,
            iconSize: [40, 40],
            iconAnchor: [20, 42], // Tip of the pin
            popupAnchor: [0, -45]
        });

        const marker = L.marker(site.coords, { icon: customIcon }).addTo(map);
        markers.push(marker);

        marker.on('click', (e) => {
            // Smart offset for desktop view
            let targetCoords = site.coords;
            const currentZoom = map.getZoom();
            const targetZoom = Math.max(currentZoom, 10); // Don't zoom in too much if already there, but at least 10

            // If desktop, we want to center the marker in the remaining space (right of the panel)
            // But flyTo doesn't support pixel offset directly.
            // We'll stick to simple centering for robustness, but maybe zoom in slightly more

            map.flyTo(targetCoords, 13, {
                animate: true,
                duration: 1.5,
                easeLinearity: 0.25
            });

            // Inject content with wrapper
            infoContent.innerHTML = `
                <div class="content-wrapper">
                    <div class="image-container">
                        <img src="${fullUrl}" alt="${site.name}" loading="lazy">
                    </div>
                    <div class="text-container">
                        <h2>${site.name}</h2>
                        <p>${site.description}</p>
                    </div>
                </div>
            `;

            infoPanel.classList.add('visible');

            // Handle marker selection state
            markers.forEach(m => m.getElement().classList.remove('selected'));
            marker.getElement().classList.add('selected');

            L.DomEvent.stopPropagation(e);
        });
    });

    const closePanel = () => {
        infoPanel.classList.remove('visible');
        markers.forEach(m => m.getElement().classList.remove('selected'));
        // Optional: zoom out slightly or reset view?
        // Let's not force a zoom out, it might be annoying if the user just wants to close the panel.
    };

    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent map click
        closePanel();
        // Return to initial view?
        // map.flyTo(initialCenter, initialZoom);
    });

    map.on('click', () => {
        closePanel();
    });
});
