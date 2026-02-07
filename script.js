const sites = [
    {
        id: 'mtskheta',
        name: 'Historical Monuments of Mtskheta',
        coords: [41.8425, 44.7214],
        image: 'https://images.unsplash.com/photo-1714314172273-403b590972b7?fm=jpg&q=80&w=2000&auto=format&fit=crop',
        description: 'The ancient capital of Georgia, Mtskheta is home to stunning examples of medieval religious architecture. The confluence of the Mtkvari and Aragvi rivers provides a dramatic backdrop to these monuments of great cultural and artistic significance.',
        year: 1994,
        category: 'Cultural',
        region: 'Mtskheta-Mtianeti',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=41.8425,44.7214'
    },
    {
        id: 'svaneti',
        name: 'Upper Svaneti',
        coords: [43.0456, 42.7289],
        image: 'https://images.unsplash.com/photo-1714316457727-4ba836ee61ca?fm=jpg&q=80&w=2000&auto=format&fit=crop',
        description: 'Preserved by its long isolation in the high mountains of the Caucasus, the region of Upper Svaneti is an exceptional example of medieval mountain scenery with its characteristic tower houses. The Svan towers were used both as dwellings and as defense posts against invaders.',
        year: 1996,
        category: 'Cultural',
        region: 'Samegrelo-Zemo Svaneti',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=43.0456,42.7289'
    },
    {
        id: 'gelati',
        name: 'Gelati Monastery',
        coords: [42.2925, 42.7714],
        image: 'https://images.unsplash.com/photo-1712843864936-ee5bdf3b9624?fm=jpg&q=80&w=2000&auto=format&fit=crop',
        description: 'Founded in a 12th century, the Gelati Monastery is a masterpiece of the Golden Age of medieval Georgia. It was a centre of science and education and the Academy it housed was one of the most important cultural centres in ancient Georgia.',
        year: 1994,
        category: 'Cultural',
        region: 'Imereti',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=42.2925,42.7714'
    },
    {
        id: 'colchis',
        name: 'Colchic Rainforests and Wetlands',
        coords: [42.12, 41.70],
        image: 'https://images.unsplash.com/photo-1715258400290-c095d69ac3e0?fm=jpg&q=80&w=2000&auto=format&fit=crop',
        description: 'This site comprises a series of ecosystems including deciduous rainforests and wetlands, which have survived the glacial cycles of the Tertiary period. They are home to a highly diverse flora and fauna, with a large number of endemic and relict species.',
        year: 2021,
        category: 'Natural',
        region: 'Guria / Adjara',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=42.12,41.70'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Determine initial zoom based on screen size
    const isMobile = window.innerWidth < 768;
    const initialZoom = isMobile ? 6 : 7;
    const initialCenter = [42.3, 43.5];

    // Security: Helper for XSS prevention
    const escapeHtml = (unsafe) => {
        return unsafe
             .replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&#039;");
    };

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
    let activeMarker = null;

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

    const centerMapOnSite = (site) => {
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
    };

    const activateMarker = (site, marker) => {
        // Capture currently focused element to restore later
        lastFocusedElement = document.activeElement;
        activeMarker = marker;

        centerMapOnSite(site);

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

        // Metadata Container
        const metaContainer = document.createElement('div');
        metaContainer.className = 'meta-container';

        // Helper to create meta items
        const createMetaItem = (label, value, iconClass) => {
            const item = document.createElement('div');
            item.className = `meta-item meta-${label.toLowerCase()}`;
            // Simple text content for now, CSS will handle icons or styling
            item.innerHTML = `<span>${value}</span>`;
            item.setAttribute('aria-label', `${label}: ${value}`);
            return item;
        };

        if (site.year) metaContainer.appendChild(createMetaItem('Year', site.year));
        if (site.category) metaContainer.appendChild(createMetaItem('Category', site.category));
        if (site.region) metaContainer.appendChild(createMetaItem('Region', site.region));

        const p = document.createElement('p');
        p.textContent = site.description;

        // Action Container
        const actionContainer = document.createElement('div');
        actionContainer.className = 'action-container';

        if (site.googleMapsUrl) {
            const btn = document.createElement('a');
            btn.className = 'btn-action';
            btn.href = site.googleMapsUrl;
            btn.target = '_blank';
            btn.rel = 'noopener noreferrer';
            btn.textContent = 'View on Google Maps';
            actionContainer.appendChild(btn);
        }

        textContainer.appendChild(h2);
        textContainer.appendChild(metaContainer);
        textContainer.appendChild(p);
        textContainer.appendChild(actionContainer);

        wrapper.appendChild(imageContainer);
        wrapper.appendChild(textContainer);

        infoContent.appendChild(wrapper);

        infoPanel.classList.add('visible');

        // Move focus to the panel for accessibility
        infoPanel.focus();

        // Handle marker selection state
        markers.forEach(m => {
            const el = m.getElement();
            el.classList.remove('selected');
            const pin = el.querySelector('.marker-pin');
            if (pin) pin.setAttribute('aria-expanded', 'false');
        });
        marker.getElement().classList.add('selected');
        const pin = marker.getElement().querySelector('.marker-pin');
        if (pin) pin.setAttribute('aria-expanded', 'true');
    };

    sites.forEach(site => {
        const thumbUrl = getResizedImage(site.image, 100);
        // Security: Escape HTML entities to prevent injection in aria-label
        const safeName = escapeHtml(site.name);

        const customIcon = L.divIcon({
            className: 'custom-marker',
            html: `<div class='marker-pin' role='button' tabindex='0' aria-label='${safeName}' aria-expanded='false'><div class='marker-img' style='background-image: url("${thumbUrl}");'></div></div>`,
            iconSize: [48, 48],
            iconAnchor: [24, 24], // Center of the circular marker
            popupAnchor: [0, -28]
        });

        const marker = L.marker(site.coords, { icon: customIcon }).addTo(map);
        marker.site = site; // Attach site data to marker for reference
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
        activeMarker = null;

        markers.forEach(m => {
            m.getElement().classList.remove('selected');
            const pin = m.getElement().querySelector('.marker-pin');
            if (pin) pin.setAttribute('aria-expanded', 'false');
        });

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
    let wasMobile = lastWidth < 768;

    window.addEventListener('resize', () => {
        const currentWidth = window.innerWidth;
        if (currentWidth === lastWidth) return;

        const isNowMobile = currentWidth < 768;

        // Only close/reset if we cross the mobile/desktop boundary
        if (wasMobile !== isNowMobile) {
            closePanel();
        } else if (activeMarker) {
            // If we are just resizing the window but staying in same mode (e.g. rotating phone)
            // Re-center the active marker to maintain context
            centerMapOnSite(activeMarker.site);
        }

        lastWidth = currentWidth;
        wasMobile = isNowMobile;
    });

    // --- Modal Logic ---
    const aboutModal = document.getElementById('about-modal');
    const modalStartBtn = document.getElementById('modal-start-btn');

    const showModal = () => {
        aboutModal.classList.add('visible');
        aboutModal.setAttribute('aria-hidden', 'false');
        modalStartBtn.focus();
    };

    const closeModal = () => {
        aboutModal.classList.remove('visible');
        aboutModal.setAttribute('aria-hidden', 'true');
        // Return focus to map or body? Map container seems appropriate.
        document.getElementById('map').focus();
    };

    modalStartBtn.addEventListener('click', closeModal);

    // Show modal on load with a slight delay
    setTimeout(showModal, 500);

    // --- Reset View Logic ---
    const resetViewBtn = document.getElementById('reset-view-btn');

    resetViewBtn.addEventListener('click', () => {
        closePanel(); // Deselect any marker
        const isMobile = window.innerWidth < 768;
        const targetZoom = isMobile ? 6 : 7;
        map.flyTo(initialCenter, targetZoom, {
            animate: true,
            duration: 1.5
        });
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
            // Add friction
            const damping = 1 + (deltaY / window.innerHeight);
            // Simple damping: just use linear for now as requested or stick to existing?
            // "Improve swipe physics" was in my thought but I didn't promise complex physics in the plan.
            // I'll stick to simple logic but maybe slightly damped if I wanted, but the code below is fine.
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
