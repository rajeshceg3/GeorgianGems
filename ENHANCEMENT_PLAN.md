# Phase 2 Enhancement Plan: Immersive Journeys & Practical Utility

## 1. Executive Summary
Building on the foundation of "Georgian Gems", Phase 2 aims to transition the user experience from "passive browsing" to "active planning". By introducing curated itineraries ("Journeys") and practical travel logistics, we empower users to visualize actual trips. Additionally, a visual distinction between Cultural and Natural sites will improve the map's scannability.

## 2. Proposed Enhancements

### A. Feature: Curated Journeys (High Priority)
**Concept**: Pre-defined routes that guide users through a thematic sequence of sites.
**Implementation**:
-   Add a "Journeys" dropdown/control to the UI.
-   **Journey 1: "The Royal Path"** (Cultural Focus): Mtskheta -> Ananuri -> Uplistsikhe -> Vardzia.
-   **Journey 2: "Wild Horizons"** (Nature Focus): Prometheus Cave -> Martvili Canyon -> Upper Svaneti.
-   **Interaction**: Selecting a journey filters the map to these sites and draws a connecting polyline to visualize the route.

### B. Content: Travel Essentials (Medium Priority)
**Concept**: Practical information to help users gauge the effort required to visit.
**Implementation**:
-   Add `logistics` object to site data:
    -   `transport`: Brief "How to get there" (e.g., "Minibus from Didube, 30 mins").
    -   `duration`: Recommended visit time (e.g., "2-3 hours").
    -   `difficulty`: "Easy", "Moderate", "Hard".
-   Render this as a compact "Essentials" block in the Info Panel.

### C. Visual Design: Category Theming (Medium Priority)
**Concept**: distinct visual identities for "Cultural" vs "Natural" sites.
**Implementation**:
-   **Natural Sites**: Use an Emerald Green / Earth palette (`#2d6a4f`).
-   **Cultural Sites**: Retain the Crimson / Gold palette (`#9e1b21`).
-   **Markers**: Color-coded pins on the map.
-   **Info Panel**: Dynamic accent color based on the selected site's category.

## 3. Technical Roadmap
1.  **Data Enrichment**: Update `sites` array in `script.js` with `logistics` data. Define `journeys` object.
2.  **UI Updates**:
    -   Modify `index.html` to include Journey controls.
    -   Update `style.css` to define `--color-accent-natural` and marker classes.
3.  **Logic Implementation**:
    -   Update `customIcon` logic in `script.js` to handle categories.
    -   Implement `startJourney(journeyId)` function to filter sites and draw polylines.
    -   Update `activateMarker` to render `logistics` and set CSS variables for the panel.
