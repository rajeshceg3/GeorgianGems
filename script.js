const sites = [
    {
        id: 'mtskheta',
        name: 'Historical Monuments of Mtskheta',
        legend: 'Legend has it that the seamless Robe of Jesus is buried beneath the Svetitskhoveli Cathedral, brought from Jerusalem by a Georgian Jew named Elias.',
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
        highlights: ['Svetitskhoveli Cathedral', 'Jvari Monastery', 'Ancient Capital'],
        visitorInfo: {
            hours: '10:00 - 18:00 (Daily)',
            cost: 'Free (Jvari), ~15 GEL (Svetitskhoveli)'
        },
        bestTime: 'April-May or September-October',
        tips: 'Visit Jvari Monastery at sunset for the iconic view of the river confluence.',
        logistics: {
            transport: 'Minibus from Didube (~20 mins)',
            duration: 'Half Day',
            accessibility: 'Moderate (Cobblestones)'
        }
    },
    {
        id: 'svaneti',
        name: 'Upper Svaneti',
        legend: 'Local folklore speaks of the goddess Dali, the divine huntress who watched over the mountain ibex from these very peaks, punishing hunters who took more than their need.',
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
        highlights: ['Svan Towers', 'Highest Settlement in Europe (Ushguli)', 'Epic Hiking Trails'],
        visitorInfo: {
            hours: '24/7 (Region)',
            cost: 'Free (Nature), Museums ~10 GEL'
        },
        bestTime: 'June-September for hiking',
        tips: 'The road to Ushguli requires a 4x4 vehicle. Allow at least 3-4 days to explore properly.',
        logistics: {
            transport: 'Flight to Mestia (45m) or Drive (8h)',
            duration: '3-4 Days',
            accessibility: 'Challenging (Mountain terrain)'
        }
    },
    {
        id: 'gelati',
        name: 'Gelati Monastery',
        legend: 'King David the Builder, Georgia\'s greatest ruler, is buried in the gateway here. He requested this so that every person entering the monastery would step on his grave, an act of ultimate humility.',
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
        highlights: ['Golden Age Architecture', 'Medieval Academy', 'Mosaic Masterpieces'],
        visitorInfo: {
            hours: '10:00 - 18:00',
            cost: 'Free entry'
        },
        bestTime: 'Late spring or early autumn',
        tips: 'Look up to see the magnificent mosaics in the apse, especially the Virgin and Child.',
        logistics: {
            transport: 'Taxi from Kutaisi (~20 mins)',
            duration: '1-2 Hours',
            accessibility: 'Moderate'
        }
    },
    {
        id: 'colchis',
        name: 'Colchic Rainforests and Wetlands',
        legend: 'This land is the legendary Kingdom of Colchis, where Jason and the Argonauts sought the Golden Fleece, aided by the sorceress Medea.',
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
        highlights: ['Ancient Rainforests', 'Birdwatching', 'Paliastomi Lake'],
        visitorInfo: {
            hours: '09:00 - 18:00 (Visitor Center)',
            cost: 'Boat tours ~30-50 GEL'
        },
        bestTime: 'Spring and Autumn (Migration seasons)',
        tips: 'Take a boat tour on Paliastomi Lake for the best birdwatching experience.',
        logistics: {
            transport: 'Car/Taxi from Batumi (~1h)',
            duration: 'Half Day',
            accessibility: 'Boat tours available'
        }
    },
    {
        id: 'vardzia',
        name: 'Vardzia Cave Monastery',
        legend: 'The name comes from a childhood story of Queen Tamar. Lost in the caves, she called out "Aq var, dzia" (I am here, uncle!), giving the site its name.',
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
        highlights: ['13-tiered cave system', 'Church of the Dormition', 'Hidden tunnels'],
        visitorInfo: {
            hours: '10:00 - 19:00',
            cost: 'Adults ~15 GEL'
        },
        bestTime: 'Spring or early Autumn',
        tips: 'Wear comfortable shoes as there are many steps and uneven surfaces.',
        logistics: {
            transport: 'Minibus from Akhaltsikhe (1.5h)',
            duration: '3-4 Hours',
            accessibility: 'Not accessible (Steep stairs)'
        }
    },
    {
        id: 'uplistsikhe',
        name: 'Uplistsikhe Cave Town',
        legend: 'As a pagan stronghold, this city was dedicated to the Sun Goddess before Christianity arrived. It is said that secret tunnels here were used for sacred rituals long forgotten.',
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
        highlights: ['Pre-Christian Caves', 'Hellenistic Theatre', 'Queen Tamar\'s Hall'],
        visitorInfo: {
            hours: '10:00 - 18:00',
            cost: 'Adults ~15 GEL'
        },
        bestTime: 'April to October',
        tips: 'Visit early in the morning to avoid the heat and crowds.',
        logistics: {
            transport: 'Minibus from Gori (~20 mins)',
            duration: '2 Hours',
            accessibility: 'Difficult (Rock stairs)'
        }
    },
    {
        id: 'david_gareji',
        name: 'David Gareji Monasteries',
        legend: 'St. David brought a stone from Jerusalem that held one-third of the city\'s grace. He was told to return it, but allowed to keep a third, making this site spiritually equal to Jerusalem.',
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
        highlights: ['Rainbow Hills', 'Semi-desert Landscape', 'Ancient Frescoes'],
        visitorInfo: {
            hours: 'Daylight hours',
            cost: 'Free'
        },
        bestTime: 'Spring (when the desert blooms)',
        tips: 'Bring plenty of water and sun protection as it gets very hot.',
        logistics: {
            transport: 'Shuttle/Tour from Tbilisi (3h one way)',
            duration: 'Full Day',
            accessibility: 'Challenging hike'
        }
    },
    {
        id: 'gergeti',
        name: 'Gergeti Trinity Church',
        legend: 'During times of invasion, the precious cross of St. Nino and the treasures of Mtskheta were brought up to this isolated peak for safekeeping, protected by the clouds.',
        coords: [42.6627, 44.6206],
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Gergeti_Trinity_Church_and_Mt._Kazbeg_01.jpg/1280px-Gergeti_Trinity_Church_and_Mt._Kazbeg_01.jpg',
            'https://images.unsplash.com/photo-1565008576549-57569a49371d?fm=jpg&q=80&w=2000&auto=format&fit=crop'
        ],
        description: 'Perched at an elevation of 2,170 meters under Mount Kazbek, the 14th-century Gergeti Trinity Church is the only cross-cupola church in Khevi province. Its isolated location on top of a steep mountain surrounded by the vastness of nature has made it a symbol for Georgia.',
        year: 2007,
        category: 'Cultural',
        region: 'Mtskheta-Mtianeti',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=42.6627,44.6206',
        highlights: ['Iconic Mountain View', 'Mt. Kazbek Backdrop', 'High-altitude Trekking'],
        visitorInfo: {
            hours: '09:00 - 18:00',
            cost: 'Free'
        },
        bestTime: 'June to September',
        tips: 'Hike up from Stepantsminda (1.5-2 hours) for the full experience, or take a 4x4 taxi.',
        logistics: {
            transport: 'Minibus to Stepantsminda (3h)',
            duration: 'Full Day',
            accessibility: '4x4 Access available'
        }
    },
    {
        id: 'prometheus',
        name: 'Prometheus Cave',
        legend: 'This cave is linked to the myth of Amirani, the Georgian prototype of Prometheus. He was chained to a rock in the Caucasus mountains for defying the gods and giving fire to humanity.',
        coords: [42.3765, 42.6007],
        images: [
            'https://images.unsplash.com/photo-1516934024742-b461fba47600?fm=jpg&q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1504280506541-aca43f24e251?fm=jpg&q=80&w=2000&auto=format&fit=crop'
        ],
        description: 'Discovered in 1984, Prometheus Cave is one of Georgia\'s natural wonders. The 1.4km walking route takes visitors through a series of six breathtaking halls filled with stalactites, stalagmites, petrified waterfalls, and underground rivers, all illuminated by spectacular colored lights.',
        year: 2007,
        category: 'Natural',
        region: 'Imereti',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=42.3765,42.6007',
        highlights: ['Underground River', 'Laser Light Show', 'Boat Tour Exit'],
        visitorInfo: {
            hours: '10:00 - 17:00 (Closed Mondays)',
            cost: 'Adults ~23 GEL'
        },
        bestTime: 'All year round (constant temperature)',
        tips: 'Opt for the boat tour at the end to exit the cave via the underground river.',
        logistics: {
            transport: 'Minibus from Kutaisi (~30 mins)',
            duration: '1.5 Hours',
            accessibility: 'Good (Walkways)'
        }
    },
    {
        id: 'martvili',
        name: 'Martvili Canyon',
        legend: 'In ancient times, this was a pagan site where the Dadiani nobles would bathe in the emerald waters, believing they possessed healing powers.',
        coords: [42.4573, 42.3775],
        images: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Martvili_Canyon_Natural_Monument3.jpg/1280px-Martvili_Canyon_Natural_Monument3.jpg',
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?fm=jpg&q=80&w=2000&auto=format&fit=crop'
        ],
        description: 'Martvili Canyon is a natural wonder where the Abasha River has cut a deep gorge through limestone rocks. The canyon features emerald-green waters, cascading waterfalls, and fossilized bones of prehistoric animals found in the area.',
        year: 2010,
        category: 'Natural',
        region: 'Samegrelo-Zemo Svaneti',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=42.4573,42.3775',
        highlights: ['Emerald Waters', 'Boat Trip', '70m Waterfalls'],
        visitorInfo: {
            hours: '10:00 - 17:30 (Closed Mondays)',
            cost: 'Entry ~17 GEL + Boat ~15 GEL'
        },
        bestTime: 'Late Spring to Early Autumn',
        tips: 'The boat trip is short but essential. Arrive early to beat the tour buses.',
        logistics: {
            transport: 'Minibus from Kutaisi (~1h)',
            duration: '2 Hours',
            accessibility: 'Partial (Stairs to boat)'
        }
    },
    {
        id: 'ananuri',
        name: 'Ananuri Fortress',
        legend: 'A tragic legend tells of a tunnel blocked by enemies. A woman named Ana from Nuri refused to reveal the secret water supply, dying to save the fortress. Hence "Ana-Nuri".',
        coords: [42.1634, 44.7038],
        images: [
            'https://images.unsplash.com/photo-1714314172273-403b590972b7?fm=jpg&q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1572979245229-87389c937190?fm=jpg&q=80&w=2000&auto=format&fit=crop'
        ],
        description: 'Ananuri is a castle complex on the Aragvi River in Georgia, about 45 miles from Tbilisi. Built by the Dukes of Aragvi, its earliest parts date from the 13th century. The complex overlooks the turquoise waters of the Zhinvali Reservoir, creating a stunning contrast.',
        year: 2007,
        category: 'Cultural',
        region: 'Mtskheta-Mtianeti',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=42.1634,44.7038',
        highlights: ['Zhinvali Reservoir View', '17th Century Fortress', 'Carved Facades'],
        visitorInfo: {
            hours: '09:00 - 20:00',
            cost: 'Free'
        },
        bestTime: 'Spring or Autumn',
        tips: 'Stop here on your way to Kazbegi. The view from the bridge is the best photo spot.',
        logistics: {
            transport: 'Minibus from Didube (1h)',
            duration: '45 Mins',
            accessibility: 'Moderate (Uneven ground)'
        }
    },
    {
        id: 'sighnaghi',
        name: 'Sighnaghi',
        legend: 'Known as the City of Love not just for its beauty, but because it is said that an angel watches over every couple who walks its walls at sunset.',
        coords: [41.6198, 45.9213],
        images: [
            'https://images.unsplash.com/photo-1596306499300-0b7b1689b9e6?fm=jpg&q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1712843864936-ee5bdf3b9624?fm=jpg&q=80&w=2000&auto=format&fit=crop'
        ],
        description: 'Known as the "City of Love", Sighnaghi is a charming town in Georgia\'s wine region of Kakheti. It is surrounded by 18th-century defensive walls with 23 towers and offers breathtaking views of the Alazani Valley and the Greater Caucasus mountains.',
        year: 2007,
        category: 'Cultural',
        region: 'Kakheti',
        googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=41.6198,45.9213',
        highlights: ['City Walls', 'Alazani Valley View', 'Bodbe Monastery Nearby'],
        visitorInfo: {
            hours: '24/7 (Town)',
            cost: 'Free'
        },
        bestTime: 'September-October (Vintage Season)',
        tips: 'Walk along the city walls for the best panoramic views of the valley.',
        logistics: {
            transport: 'Minibus from Samgori (2h)',
            duration: 'Day Trip / Overnight',
            accessibility: 'Good (Paved streets)'
        }
    }
];

const journeys = [
    {
        id: 'royal_path',
        name: 'The Royal Path',
        sites: ['mtskheta', 'ananuri', 'uplistsikhe', 'vardzia'],
        color: '#9e1b21',
        description: 'Trace the steps of Kings and Queens through ancient capitals, fortresses, and cave cities.'
    },
    {
        id: 'wild_horizons',
        name: 'Wild Horizons',
        sites: ['martvili', 'prometheus', 'svaneti', 'colchis'],
        color: '#2d6a4f',
        description: 'Immerse yourself in the untouched natural beauty of Western Georgia.'
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
    let currentPolyline = null;

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

    // --- Helper Functions for Distance ---
    const toRad = (value) => value * Math.PI / 180;

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // km
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    };

    const getNearbySites = (currentSite, allSites) => {
        return allSites
            .filter(s => s.id !== currentSite.id)
            .map(s => {
                const dist = calculateDistance(
                    currentSite.coords[0], currentSite.coords[1],
                    s.coords[0], s.coords[1]
                );
                return { ...s, distance: dist };
            })
            .sort((a, b) => a.distance - b.distance)
            .slice(0, 2);
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

    const startJourney = (journeyId) => {
        const journey = journeys.find(j => j.id === journeyId);
        if (!journey) return;

        // Reset UI
        closePanel();
        if (searchInput) searchInput.value = '';

        // Deselect filter buttons
        filterBtns.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-pressed', 'false');
        });

        // Clear existing polyline
        if (currentPolyline) {
            map.removeLayer(currentPolyline);
            currentPolyline = null;
        }

        const journeySiteIds = journey.sites;

        // Filter markers
        markers.forEach(marker => {
            if (journeySiteIds.includes(marker.site.id)) {
                if (!map.hasLayer(marker)) marker.addTo(map);
            } else {
                if (map.hasLayer(marker)) map.removeLayer(marker);
            }
        });

        // Get coordinates in order
        const orderedLatLngs = journeySiteIds.map(id => {
            const marker = markers.find(m => m.site.id === id);
            return marker ? marker.getLatLng() : null;
        }).filter(ll => ll !== null);

        // Draw Polyline
        currentPolyline = L.polyline(orderedLatLngs, {
            color: journey.color,
            weight: 3,
            opacity: 0.8,
            dashArray: '5, 10',
            lineCap: 'round',
            className: 'journey-line'
        }).addTo(map);

        // Fit Bounds
        if (orderedLatLngs.length > 0) {
            map.fitBounds(currentPolyline.getBounds(), { padding: [50, 50], maxZoom: 12 });
        }
    };

    // Expose startJourney globally for UI calls
    window.startJourney = startJourney;

    // --- Progress Tracker Logic ---
    let visitedSites = new Set();
    const progressText = document.getElementById('progress-text');

    const updateProgress = () => {
        if (progressText) {
            progressText.textContent = `${visitedSites.size}/${sites.length}`;
        }
        try {
            localStorage.setItem('georgianGemsVisited', JSON.stringify([...visitedSites]));
        } catch (e) { console.warn(e); }
    };

    try {
        const stored = localStorage.getItem('georgianGemsVisited');
        if (stored) {
            visitedSites = new Set(JSON.parse(stored));
            updateProgress();
        }
    } catch (e) { console.warn(e); }

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

        // Update Progress
        if (!visitedSites.has(site.id)) {
            visitedSites.add(site.id);
            updateProgress();

            const tracker = document.getElementById('progress-tracker');
            if (tracker) {
                tracker.classList.add('pulse');
                setTimeout(() => tracker.classList.remove('pulse'), 500);
            }
        }

        // Set dynamic accent color based on category
        const accentColor = site.category === 'Natural' ? '#2d6a4f' : '#9e1b21';
        const accentGlow = site.category === 'Natural' ? 'rgba(45, 106, 79, 0.35)' : 'rgba(158, 27, 33, 0.35)';
        infoPanel.style.setProperty('--color-accent', accentColor);
        infoPanel.style.setProperty('--color-accent-glow', accentGlow);

        centerMapOnSite(site);

        // Inject content with wrapper
        // Securely build DOM elements to prevent XSS
        infoContent.innerHTML = ''; // Clear previous content

        const wrapper = document.createElement('div');
        wrapper.className = 'content-wrapper';

        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container gallery-container';
        imageContainer.setAttribute('role', 'region');
        imageContainer.setAttribute('aria-label', 'Image Gallery');

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

        textContainer.appendChild(h2);
        textContainer.appendChild(metaContainer);

        // Highlights
        if (site.highlights && site.highlights.length > 0) {
            const highlightsContainer = document.createElement('div');
            highlightsContainer.className = 'highlights-container';
            const h3 = document.createElement('h3');
            h3.className = 'section-title';
            h3.textContent = 'Key Highlights';
            highlightsContainer.appendChild(h3);

            const ul = document.createElement('ul');
            ul.className = 'highlights-list';
            site.highlights.forEach(highlight => {
                const li = document.createElement('li');
                li.className = 'highlight-item';
                li.textContent = highlight;
                ul.appendChild(li);
            });
            highlightsContainer.appendChild(ul);
            textContainer.appendChild(highlightsContainer);
        }

        // Legend Section
        if (site.legend) {
            const legendBox = document.createElement('div');
            legendBox.className = 'legend-box';
            legendBox.innerHTML = `
                <div class="legend-title">Echoes of the Past</div>
                <div class="legend-text">"${site.legend}"</div>
            `;
            textContainer.appendChild(legendBox);
        }

        const p = document.createElement('p');
        p.textContent = site.description;
        textContainer.appendChild(p);

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

        if (infoGrid.hasChildNodes()) textContainer.appendChild(infoGrid);

        // Travel Essentials (Logistics)
        if (site.logistics) {
            const logisticsContainer = document.createElement('div');
            logisticsContainer.className = 'logistics-container';

            const h3 = document.createElement('h3');
            h3.className = 'section-title';
            h3.textContent = 'Travel Essentials';
            logisticsContainer.appendChild(h3);

            const grid = document.createElement('div');
            grid.className = 'logistics-grid';

            const createLogisticsItem = (icon, label, value) => {
                 const item = document.createElement('div');
                 item.className = 'logistics-item';
                 item.innerHTML = `<span class="logistics-icon">${icon}</span><div><span class="logistics-label">${label}</span><span class="logistics-value">${value}</span></div>`;
                 return item;
            };

            if (site.logistics.transport) grid.appendChild(createLogisticsItem('🚌', 'Transport', site.logistics.transport));
            if (site.logistics.duration) grid.appendChild(createLogisticsItem('⏱', 'Duration', site.logistics.duration));
            if (site.logistics.accessibility) grid.appendChild(createLogisticsItem('♿', 'Accessibility', site.logistics.accessibility));

            logisticsContainer.appendChild(grid);
            textContainer.appendChild(logisticsContainer);
        }

        // Insider Tip
        let tipBox = null;
        if (site.tips) {
            tipBox = document.createElement('div');
            tipBox.className = 'insider-tip';
            tipBox.innerHTML = `<span class="tip-icon">✦</span><div class="tip-content"><strong>Insider Tip</strong><br>${site.tips}</div>`;
            textContainer.appendChild(tipBox);
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

        textContainer.appendChild(actionContainer);

        // Nearby Gems Section
        const nearby = getNearbySites(site, sites);
        if (nearby.length > 0) {
            const nearbyContainer = document.createElement('div');
            nearbyContainer.className = 'nearby-container';
            const h3 = document.createElement('h3');
            h3.className = 'section-title';
            h3.textContent = 'Nearby Gems';
            nearbyContainer.appendChild(h3);

            const nearbyGrid = document.createElement('div');
            nearbyGrid.className = 'nearby-grid';

            nearby.forEach(ns => {
                const card = document.createElement('div');
                card.className = 'nearby-card';
                card.role = 'button';
                card.tabIndex = 0;

                const thumb = getResizedImage(ns.images[0], 200);

                card.innerHTML = `
                    <div class="nearby-img" style="background-image: url('${thumb}')"></div>
                    <div class="nearby-info">
                        <div class="nearby-title">${ns.name}</div>
                        <div class="nearby-dist">${Math.round(ns.distance)} km away</div>
                    </div>
                `;

                card.onclick = () => {
                    // Find marker for this site
                    const targetMarker = markers.find(m => m.site.id === ns.id);
                    if (targetMarker) {
                         activateMarker(ns, targetMarker);
                    }
                };
                // Keyboard support
                card.onkeydown = (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                         const targetMarker = markers.find(m => m.site.id === ns.id);
                        if (targetMarker) activateMarker(ns, targetMarker);
                    }
                };

                nearbyGrid.appendChild(card);
            });
            nearbyContainer.appendChild(nearbyGrid);
            textContainer.appendChild(nearbyContainer);
        }

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
        const categoryClass = site.category ? site.category.toLowerCase() : '';

        const customIcon = L.divIcon({
            className: 'custom-marker',
            html: `<div class='marker-pin ${categoryClass}' role='button' tabindex='0' aria-label='${safeName}' aria-expanded='false'><div class='marker-img' style='background-image: url("${thumbUrl}");'></div></div>`,
            iconSize: [48, 48],
            iconAnchor: [24, 24], // Center of the circular marker
            popupAnchor: [0, -28]
        });

        // Stagger marker creation
        setTimeout(() => {
            const marker = L.marker(site.coords, { icon: customIcon }).addTo(map);

            // Add Rich Tooltip
            const tooltipContent = `
                <div class="custom-tooltip">
                    <div class="tooltip-img" style="background-image: url('${thumbUrl}')"></div>
                    <div class="tooltip-title">${safeName}</div>
                </div>
            `;

            marker.bindTooltip(tooltipContent, {
                direction: 'top',
                offset: [0, -32],
                className: 'glass-tooltip',
                opacity: 1
            });

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
        // Clear search input and polyline
        if (searchInput) searchInput.value = '';
        if (currentPolyline) {
            map.removeLayer(currentPolyline);
            currentPolyline = null;
        }

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

            if (currentPolyline) {
                map.removeLayer(currentPolyline);
                currentPolyline = null;
            }

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

    // --- Journey Menu Logic ---
    const journeyBtn = document.getElementById('journey-btn');
    const journeyMenu = document.getElementById('journey-menu');
    const journeyOptions = document.querySelectorAll('.journey-option');

    if (journeyBtn && journeyMenu) {
        journeyBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = journeyBtn.getAttribute('aria-expanded') === 'true';
            journeyBtn.setAttribute('aria-expanded', !isExpanded);
            journeyMenu.classList.toggle('visible');
            journeyMenu.setAttribute('aria-hidden', isExpanded);
        });

        // Close menu on click outside
        document.addEventListener('click', (e) => {
            if (!journeyBtn.contains(e.target) && !journeyMenu.contains(e.target)) {
                journeyBtn.setAttribute('aria-expanded', 'false');
                journeyMenu.classList.remove('visible');
                journeyMenu.setAttribute('aria-hidden', 'true');
            }
        });

        journeyOptions.forEach(opt => {
            opt.addEventListener('click', () => {
                const journeyId = opt.dataset.journey;
                startJourney(journeyId);

                // Close menu
                journeyBtn.setAttribute('aria-expanded', 'false');
                journeyMenu.classList.remove('visible');
                journeyMenu.setAttribute('aria-hidden', 'true');
            });
        });
    }
});
