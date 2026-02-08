const sites = [
    {
        id: 'mtskheta',
        name: 'Historical Monuments of Mtskheta',
        coords: [41.8425, 44.7214],
        images: [
            'https://images.unsplash.com/photo-1714314172273-403b590972b7?fm=jpg&q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1565008576549-57569a49371d?fm=jpg&q=80&w=2000&auto=format&fit=crop'
        ],
        description: 'The ancient capital of Georgia, Mtskheta is home to stunning examples of medieval religious architecture. The confluence of the Mtkvari and Aragvi rivers provides a dramatic backdrop to these monuments of great cultural and artistic significance.',
        year: 1994,
        category: 'Cultural',
        region: 'Mtskheta-Mtianeti',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=41.8425,44.7214',
        visitorInfo: {
            hours: '10:00 - 18:00 (Daily)',
            cost: 'Free (Jvari), ~15 GEL (Svetitskhoveli)'
        },
        bestTime: 'April-May or September-October',
        tips: 'Visit Jvari Monastery at sunset for the iconic view of the river confluence.'
    },
    {
        id: 'svaneti',
        name: 'Upper Svaneti',
        coords: [43.0456, 42.7289],
        images: [
            'https://images.unsplash.com/photo-1714316457727-4ba836ee61ca?fm=jpg&q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1519681393798-38e43269d492?fm=jpg&q=80&w=2000&auto=format&fit=crop'
        ],
        description: 'Preserved by its long isolation in the high mountains of the Caucasus, the region of Upper Svaneti is an exceptional example of medieval mountain scenery with its characteristic tower houses. The Svan towers were used both as dwellings and as defense posts against invaders.',
        year: 1996,
        category: 'Cultural',
        region: 'Samegrelo-Zemo Svaneti',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=43.0456,42.7289',
        visitorInfo: {
            hours: '24/7 (Region)',
            cost: 'Free (Nature), Museums ~10 GEL'
        },
        bestTime: 'June-September for hiking',
        tips: 'The road to Ushguli requires a 4x4 vehicle. Allow at least 3-4 days to explore properly.'
    },
    {
        id: 'gelati',
        name: 'Gelati Monastery',
        coords: [42.2925, 42.7714],
        images: [
            'https://images.unsplash.com/photo-1712843864936-ee5bdf3b9624?fm=jpg&q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1523539693385-e5e891eb4465?fm=jpg&q=80&w=2000&auto=format&fit=crop'
        ],
        description: 'Founded in a 12th century, the Gelati Monastery is a masterpiece of the Golden Age of medieval Georgia. It was a centre of science and education and the Academy it housed was one of the most important cultural centres in ancient Georgia.',
        year: 1994,
        category: 'Cultural',
        region: 'Imereti',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=42.2925,42.7714',
        visitorInfo: {
            hours: '10:00 - 18:00',
            cost: 'Free entry'
        },
        bestTime: 'Late spring or early autumn',
        tips: 'Look up to see the magnificent mosaics in the apse, especially the Virgin and Child.'
    },
    {
        id: 'colchis',
        name: 'Colchic Rainforests and Wetlands',
        coords: [42.12, 41.70],
        images: [
            'https://images.unsplash.com/photo-1715258400290-c095d69ac3e0?fm=jpg&q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?fm=jpg&q=80&w=2000&auto=format&fit=crop'
        ],
        description: 'This site comprises a series of ecosystems including deciduous rainforests and wetlands, which have survived the glacial cycles of the Tertiary period. They are home to a highly diverse flora and fauna, with a large number of endemic and relict species.',
        year: 2021,
        category: 'Natural',
        region: 'Guria / Adjara',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=42.12,41.70',
        visitorInfo: {
            hours: '09:00 - 18:00 (Visitor Center)',
            cost: 'Boat tours ~30-50 GEL'
        },
        bestTime: 'Spring and Autumn (Migration seasons)',
        tips: 'Take a boat tour on Paliastomi Lake for the best birdwatching experience.'
    },
    {
        id: 'vardzia',
        name: 'Vardzia Cave Monastery',
        coords: [41.3813, 43.2843],
        images: [
            'https://images.unsplash.com/photo-1714316457727-4ba836ee61ca?fm=jpg&q=80&w=2000&auto=format&fit=crop', // Reused Svaneti
            'https://images.unsplash.com/photo-1565008576549-57569a49371d?fm=jpg&q=80&w=2000&auto=format&fit=crop'
        ],
        description: 'Vardzia is a spectacular cave monastery complex in southern Georgia, excavated from the slopes of the Erusheti Mountain on the left bank of the Kura River. Built in the late 12th century, it was a sanctuary during Mongol invasions.',
        year: 2007,
        category: 'Cultural',
        region: 'Samtskhe-Javakheti',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=41.3813,43.2843',
        visitorInfo: {
            hours: '10:00 - 19:00',
            cost: 'Adults ~15 GEL'
        },
        bestTime: 'Spring or early Autumn',
        tips: 'Wear comfortable shoes as there are many steps and uneven surfaces.'
    },
    {
        id: 'uplistsikhe',
        name: 'Uplistsikhe Cave Town',
        coords: [41.9673, 44.2078],
        images: [
            'https://images.unsplash.com/photo-1714314172273-403b590972b7?fm=jpg&q=80&w=2000&auto=format&fit=crop', // Reused Mtskheta
            'https://images.unsplash.com/photo-1572979245229-87389c937190?fm=jpg&q=80&w=2000&auto=format&fit=crop'
        ],
        description: 'Uplistsikhe is an ancient rock-hewn town in eastern Georgia. Built on a high rocky left bank of the Mtkvari River, it contains various structures dating from the Early Iron Age to the Late Middle Ages, and is notable for the unique combination of various styles of rock-cut cultures.',
        year: 2007,
        category: 'Cultural',
        region: 'Shida Kartli',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=41.9673,44.2078',
        visitorInfo: {
            hours: '10:00 - 18:00',
            cost: 'Adults ~15 GEL'
        },
        bestTime: 'April to October',
        tips: 'Visit early in the morning to avoid the heat and crowds.'
    },
    {
        id: 'david_gareji',
        name: 'David Gareji Monasteries',
        coords: [41.4475, 45.3764],
        images: [
            'https://images.unsplash.com/photo-1712843864936-ee5bdf3b9624?fm=jpg&q=80&w=2000&auto=format&fit=crop', // Reused Gelati
            'https://images.unsplash.com/photo-1596306499300-0b7b1689b9e6?fm=jpg&q=80&w=2000&auto=format&fit=crop'
        ],
        description: 'David Gareji is a rock-hewn Georgian Orthodox monastery complex located in the Kakheti region of Eastern Georgia, on the half-desert slopes of Mount Gareja. The complex includes hundreds of cells, churches, chapels, refectories and living quarters hollowed out of the rock face.',
        year: 2007,
        category: 'Cultural',
        region: 'Kakheti',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=41.4475,45.3764',
        visitorInfo: {
            hours: 'Daylight hours',
            cost: 'Free'
        },
        bestTime: 'Spring (when the desert blooms)',
        tips: 'Bring plenty of water and sun protection as it gets very hot.'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Determine initial zoom based on screen size
    const isMobile = window.innerWidth < 768;
    const initialZoom = isMobile ? 6 : 7;
    const initialCenter = [42.3, 43.5];

    // Start view (Global/Europe)
    const startZoom = 4;
    const startCenter = [42.0, 43.5];

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
        center: startCenter,
        zoom: startZoom,
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

    // --- Favorites Logic ---
    const getFavorites = () => {
        try {
            return JSON.parse(localStorage.getItem('georgianGemsFavorites') || '[]');
        } catch (e) {
            return [];
        }
    };

    const toggleFavorite = (siteId) => {
        const favs = getFavorites();
        const index = favs.indexOf(siteId);
        if (index > -1) {
            favs.splice(index, 1);
        } else {
            favs.push(siteId);
        }
        localStorage.setItem('georgianGemsFavorites', JSON.stringify(favs));
        return index === -1; // returns true if added, false if removed
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
        // Securely build DOM elements to prevent XSS
        infoContent.innerHTML = ''; // Clear previous content

        const wrapper = document.createElement('div');
        wrapper.className = 'content-wrapper';

        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container gallery-container';

        site.images.forEach((url, idx) => {
            const img = document.createElement('img');
            img.src = getResizedImage(url, 800);
            img.alt = `${site.name} - Image ${idx + 1}`;
            img.loading = 'lazy';
            img.className = 'gallery-item fade-in';
            img.onerror = function() { this.style.display = 'none'; };
            imageContainer.appendChild(img);
        });

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

        // Visitor Info Grid
        const infoGrid = document.createElement('div');
        infoGrid.className = 'visitor-info-grid';

        const createInfoCard = (label, value) => {
            const card = document.createElement('div');
            card.className = 'info-card';
            card.innerHTML = `<span class="info-label">${label}</span><span class="info-value">${value}</span>`;
            return card;
        };

        if (site.visitorInfo) {
            if (site.visitorInfo.hours) infoGrid.appendChild(createInfoCard('Hours', site.visitorInfo.hours));
            if (site.visitorInfo.cost) infoGrid.appendChild(createInfoCard('Cost', site.visitorInfo.cost));
        }
        if (site.bestTime) infoGrid.appendChild(createInfoCard('Best Time', site.bestTime));

        // Insider Tip
        let tipBox = null;
        if (site.tips) {
            tipBox = document.createElement('div');
            tipBox.className = 'insider-tip';
            tipBox.innerHTML = `<span class="tip-icon">✦</span><div class="tip-content"><strong>Insider Tip</strong><br>${site.tips}</div>`;
        }

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

        // Favorites Button
        const isFav = getFavorites().includes(site.id);
        const favBtn = document.createElement('button');
        favBtn.className = `btn-action btn-secondary fav-btn`;
        favBtn.innerHTML = isFav ? '♥ Saved' : '♡ Save to Favorites';
        if (isFav) favBtn.style.color = 'var(--color-accent)';

        favBtn.onclick = () => {
            const added = toggleFavorite(site.id);
            favBtn.innerHTML = added ? '♥ Saved' : '♡ Save to Favorites';
            favBtn.style.color = added ? 'var(--color-accent)' : 'var(--color-text-primary)';

            // Refresh filter if in favorites view
            const activeFilterBtn = document.querySelector('.filter-btn.active');
            if (activeFilterBtn && activeFilterBtn.dataset.category === 'favorites' && !added) {
                closePanel();
                filterSites('favorites');
            }
        };
        actionContainer.appendChild(favBtn);

        // Share Button
        const shareBtn = document.createElement('button');
        shareBtn.className = 'btn-action btn-secondary share-btn';
        shareBtn.textContent = 'Share Location';
        shareBtn.onclick = () => {
             const shareData = {
                title: site.name,
                text: `Check out ${site.name} on Georgian Gems!`,
                url: window.location.href
            };
            if (navigator.share) {
                navigator.share(shareData).catch(console.error);
            } else {
                navigator.clipboard.writeText(`${site.name}: ${window.location.href}`);
                const originalText = shareBtn.textContent;
                shareBtn.textContent = 'Copied!';
                setTimeout(() => shareBtn.textContent = originalText, 2000);
            }
        };
        actionContainer.appendChild(shareBtn);

        textContainer.appendChild(h2);
        textContainer.appendChild(metaContainer);
        textContainer.appendChild(p);

        if (infoGrid.hasChildNodes()) textContainer.appendChild(infoGrid);
        if (tipBox) textContainer.appendChild(tipBox);

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

    sites.forEach((site, index) => {
        const thumbUrl = getResizedImage(site.images[0], 100);
        // Security: Escape HTML entities to prevent injection in aria-label
        const safeName = escapeHtml(site.name);

        const customIcon = L.divIcon({
            className: 'custom-marker',
            html: `<div class='marker-pin' role='button' tabindex='0' aria-label='${safeName}' aria-expanded='false'><div class='marker-img' style='background-image: url("${thumbUrl}");'></div></div>`,
            iconSize: [48, 48],
            iconAnchor: [24, 24], // Center of the circular marker
            popupAnchor: [0, -28]
        });

        // Stagger marker creation
        setTimeout(() => {
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
        }, index * 200); // 200ms stagger delay
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

    // --- Intro Logic ---
    const introOverlay = document.getElementById('intro-overlay');
    const startBtn = document.getElementById('start-btn');

    startBtn.addEventListener('click', () => {
        introOverlay.classList.add('hidden');
        introOverlay.setAttribute('aria-hidden', 'true');

        // Cinematic Fly-in
        const targetZoom = window.innerWidth < 768 ? 6 : 7;
        map.flyTo(initialCenter, targetZoom, {
            animate: true,
            duration: 2.5,
            easeLinearity: 0.2
        });

        document.getElementById('map').focus();
    });

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
    let touchStartTime = 0;
    const swipeThreshold = 100;
    const velocityThreshold = 0.5; // px/ms

    const handleTouchStart = (e) => {
        if (window.innerWidth >= 768) return;
        // Allow drag if at top of scroll
        if (infoContent.scrollTop > 0) return;

        touchStartY = e.touches[0].clientY;
        touchStartTime = Date.now();
        infoPanel.style.transition = 'none';
    };

    const handleTouchMove = (e) => {
        if (window.innerWidth >= 768) return;
        // Check if we are at the top of the content
        if (infoContent.scrollTop > 0) {
            // Allow native scroll, update start point for drag if we hit top
            touchStartY = e.touches[0].clientY;
            return;
        }

        currentY = e.touches[0].clientY;
        const deltaY = currentY - touchStartY;

        let translateY = deltaY;

        if (deltaY < 0) {
            // Dragging up (overshoot)
            // Apply stronger resistance: sqrt scale
            translateY = -1 * Math.sqrt(Math.abs(deltaY)) * 4;
        }
        // Dragging down is 1:1 for natural feel

        infoPanel.style.transform = `translateY(${translateY}px)`;

        // Prevent default only if we are effectively dragging the panel
        if (e.cancelable) {
             // If dragging down, always prevent default to stop refresh/scroll
             if (deltaY > 0) e.preventDefault();
             // If dragging up (overshoot on non-scrollable), prevent default
             else if (deltaY < 0 && infoContent.scrollHeight <= infoContent.clientHeight) e.preventDefault();
        }
    };

    const handleTouchEnd = (e) => {
        if (window.innerWidth >= 768) return;
        if (infoContent.scrollTop > 0 && touchStartY === 0) return; // didn't start valid drag

        // Add bounce-back transition
        infoPanel.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';

        const deltaY = currentY - touchStartY;
        const deltaTime = Date.now() - touchStartTime;
        const velocity = Math.abs(deltaY) / deltaTime;

        // Close if dragged far enough OR flicked fast enough downwards
        if ((deltaY > swipeThreshold) || (deltaY > 20 && velocity > velocityThreshold)) {
            closePanel();
            setTimeout(() => {
                infoPanel.style.transform = '';
            }, 400);
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

    // --- Filter Logic ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('search-input');

    const filterSites = (category) => {
        // Clear search input when filtering
        if (searchInput) searchInput.value = '';

        // Update active button state
        filterBtns.forEach(btn => {
            const isSelected = btn.dataset.category === category;
            btn.classList.toggle('active', isSelected);
            btn.setAttribute('aria-pressed', isSelected);
        });

        const favs = getFavorites();
        markers.forEach(marker => {
            const site = marker.site;
            let visible = false;

            if (category === 'all') {
                visible = true;
            } else if (category === 'favorites') {
                visible = favs.includes(site.id);
            } else {
                visible = site.category === category;
            }

            if (visible) {
                if (!map.hasLayer(marker)) {
                    marker.addTo(map);
                }
            } else {
                if (map.hasLayer(marker)) {
                    map.removeLayer(marker);
                }
            }
        });

        // Close panel if the active marker is filtered out
        if (activeMarker && !map.hasLayer(activeMarker)) {
            closePanel();
        }
    };

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterSites(btn.dataset.category);
        });
    });

    // --- Search Logic ---
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();

            // Remove active state from filter buttons during search
            filterBtns.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            });

            if (query === '') {
                const allBtn = document.querySelector('.filter-btn[data-category="all"]');
                if (allBtn) {
                    allBtn.classList.add('active');
                    allBtn.setAttribute('aria-pressed', 'true');
                }
            }

            markers.forEach(marker => {
                const site = marker.site;
                const region = site.region ? site.region.toLowerCase() : '';
                const matches = site.name.toLowerCase().includes(query) ||
                                region.includes(query);

                if (matches) {
                    if (!map.hasLayer(marker)) marker.addTo(map);
                } else {
                    if (map.hasLayer(marker)) map.removeLayer(marker);
                }
            });

            // If active marker is filtered out, close panel
            if (activeMarker && !map.hasLayer(activeMarker)) {
                closePanel();
            }
        });
    }
});
