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

    let lastFocusedElement = null;

    const markers = [];

    const flyToOffset = (latlng, zoom, offsetX, offsetY) => {
        const targetPoint = map.project(latlng, zoom).subtract([offsetX, offsetY]);
        const targetLatLng = map.unproject(targetPoint, zoom);
        map.flyTo(targetLatLng, zoom, {
            animate: true,
            duration: 1.2,
            easeLinearity: 0.25
        });
    };

    const getResizedImage = (url, width) => {
        try {
            if (url.includes('images.unsplash.com') || url.includes('images.pexels.com')) {
                return url.replace(/w=\d+/, `w=${width}`);
            }
        } catch (e) {
            console.warn('Image resize failed:', e);
        }
        return url;
    };

    const activateMarker = (site, marker) => {
        // Capture currently focused element to restore later
        lastFocusedElement = document.activeElement;

        const isMobile = window.innerWidth < 768;
        let targetZoom = 14; // Slightly closer zoom
        let offsetX = 0;
        let offsetY = 0;

        if (isMobile) {
            // Mobile: Panel height is ~75vh. We want marker in the top 25vh.
            // We aim for the marker to be at ~15% from the top of the screen.
            // Center of screen is 50%.
            // OffsetY = 15vh - 50vh = -35vh.
            offsetY = -1 * (window.innerHeight * 0.35);
        } else {
            // Desktop: Panel width is 440px + 32px margin = 472px.
            // We want marker centered in the remaining space.
            // OffsetX = (472 / 2) = 236px.
            offsetX = 236;
        }

        flyToOffset(site.coords, targetZoom, offsetX, offsetY);

        // Inject content with wrapper
        const fullUrl = getResizedImage(site.image, 800);

        // Securely build DOM elements to prevent XSS
        infoContent.innerHTML = ''; // Clear previous content

        const wrapper = document.createElement('div');
        wrapper.className = 'content-wrapper';

        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';

        const img = document.createElement('img');
        img.src = fullUrl;
        img.alt = site.name || 'Site image';
        img.loading = 'lazy';
        img.className = 'fade-in';
        img.onerror = function() { this.style.display = 'none'; };
        imageContainer.appendChild(img);

        const textContainer = document.createElement('div');
        textContainer.className = 'text-container';

        const h2 = document.createElement('h2');
        h2.textContent = site.name;

        const p = document.createElement('p');
        p.textContent = site.description;

        textContainer.appendChild(h2);
        textContainer.appendChild(p);

        wrapper.appendChild(imageContainer);
        wrapper.appendChild(textContainer);

        infoContent.appendChild(wrapper);

        infoPanel.classList.add('visible');

        // Move focus to the panel for accessibility
        infoPanel.focus();

        // Handle marker selection state
        markers.forEach(m => m.getElement().classList.remove('selected'));
        marker.getElement().classList.add('selected');
    };

    sites.forEach(site => {
        const thumbUrl = getResizedImage(site.image, 100);
        const safeName = site.name.replace(/"/g, '&quot;');

        const customIcon = L.divIcon({
            className: 'custom-marker',
            html: `<div class='marker-pin' role='button' tabindex='0' aria-label='${safeName}'><div class='marker-img' style='background-image: url("${thumbUrl}");'></div></div>`,
            iconSize: [48, 48],
            iconAnchor: [24, 24], // Center of the circular marker
            popupAnchor: [0, -28]
        });

        const marker = L.marker(site.coords, { icon: customIcon }).addTo(map);
        markers.push(marker);

        marker.on('click', (e) => {
            activateMarker(site, marker);
            L.DomEvent.stopPropagation(e);
        });

        // Add keyboard support (Enter/Space)
        marker.on('add', () => {
            const el = marker.getElement();
            const pin = el.querySelector('.marker-pin');
            if (pin) {
                L.DomEvent.on(pin, 'keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault(); // Prevent scrolling for Space
                        activateMarker(site, marker);
                        L.DomEvent.stopPropagation(e);
                    }
                });
            }
        });
    });

    const closePanel = () => {
        infoPanel.classList.remove('visible');
        markers.forEach(m => m.getElement().classList.remove('selected'));

        // Restore focus to the marker
        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }

        const isMobile = window.innerWidth < 768;
        const targetZoom = isMobile ? 6 : 7;
        map.flyTo(initialCenter, targetZoom);
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

    let lastWidth = window.innerWidth;
    window.addEventListener('resize', () => {
        if (window.innerWidth !== lastWidth) {
            lastWidth = window.innerWidth;
            closePanel();
        }
    });

    // Mobile Swipe-to-Close Logic
    let touchStartY = 0;
    let currentY = 0;
    const swipeThreshold = 120;

    const handleTouchStart = (e) => {
        if (window.innerWidth >= 768) return;
        // Allow drag if at top of scroll
        if (infoContent.scrollTop > 0) return;

        touchStartY = e.touches[0].clientY;
        infoPanel.style.transition = 'none';
    };

    const handleTouchMove = (e) => {
        if (window.innerWidth >= 768) return;
        if (infoContent.scrollTop > 0) return;

        currentY = e.touches[0].clientY;
        const deltaY = currentY - touchStartY;

        if (deltaY > 0) { // Dragging down
            // Add some resistance/friction could be nice, but linear is fine for now
            infoPanel.style.transform = `translateY(${deltaY}px)`;
            if (e.cancelable) e.preventDefault();
        }
    };

    const handleTouchEnd = (e) => {
        if (window.innerWidth >= 768) return;
        if (infoContent.scrollTop > 0 && touchStartY === 0) return; // didn't start valid drag

        infoPanel.style.transition = ''; // Restore CSS transition
        const deltaY = currentY - touchStartY;

        if (deltaY > swipeThreshold && touchStartY !== 0) {
            closePanel();
            // Reset inline transform after animation (handled by closePanel removing .visible)
            // But closePanel triggers a map flyTo.
            // We need to ensure the panel slides down.
            // Removing .visible will trigger the CSS transition to 105%.
            // But we currently have an inline transform.
            // We should clear the inline transform to let CSS take over.
            setTimeout(() => {
                infoPanel.style.transform = '';
            }, 50);
        } else {
             // Snap back
             infoPanel.style.transform = '';
        }
        touchStartY = 0;
        currentY = 0;
    };

    infoPanel.addEventListener('touchstart', handleTouchStart, { passive: true });
    infoPanel.addEventListener('touchmove', handleTouchMove, { passive: false });
    infoPanel.addEventListener('touchend', handleTouchEnd);
});
