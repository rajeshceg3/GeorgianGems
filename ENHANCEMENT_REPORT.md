# UX/UI Design & Content Strategy Report: Georgian Gems - Phase 3

## 1. Executive Summary
"Georgian Gems" has established a strong visual identity with its cinematic intro and map-centric exploration. To elevate the user experience from "informative" to "magical," we must lean into the rich mythological history of the region. This phase focuses on deepening the narrative connection, encouraging comprehensive exploration through gamification, and refining the map interaction model for better usability.

## 2. Vibe Analysis
*   **Visual Style**: Premium, Editorial, Glassmorphic. The current aesthetic uses high-quality imagery and clean typography.
*   **Tone**: Informative yet evocative.
*   **Brand Personality**: A knowledgeable, slightly mysterious guide to ancient wonders.
*   **Opportunity**: Georgia is the land of the Golden Fleece, Prometheus, and ancient kingdoms. The app should reflect this "legendary" status more explicitly in its content and UI.

## 3. Proposed Enhancements

### A. Content Depth: "Echoes of the Past" (High Priority)
**Objective**: Connect the physical location to its mythological or historical soul.
*   **Concept**: Add a dedicated "Legend" or "Myth" section for each site.
*   **Implementation**: Introduce a `legend` field in the data model. Render this content in the Info Panel using a distinct, "storyteller" visual style (e.g., italicized serif font, decorative border or icon).
*   **Example**: For Prometheus Cave, tell the story of Amirani (the Georgian Prometheus). For Colchis, mention Jason and the Argonauts.

### B. User Experience: Rich Tooltips (High Priority)
**Objective**: Improve map scannability and decision-making.
*   **Concept**: Currently, users must click a marker to see what it is. We propose "Rich Tooltips" that appear on hover.
*   **Implementation**: Use Leaflet's `bindTooltip` feature but style it custom CSS. The tooltip will show the Site Name and a small thumbnail image.
*   **Vibe Alignment**: Reduces friction and makes the map feel more "alive" and responsive.

### C. Engagement: "Explorer's Progress" (High Priority)
**Objective**: Gamify the experience to encourage users to view more sites.
*   **Concept**: A subtle progress tracker that counts how many unique "Gems" the user has discovered (opened).
*   **Implementation**: A pill-shaped indicator (e.g., "3/12 Discovered") placed near the filter controls. It updates in real-time and persists via `localStorage`.
*   **Impact**: Triggers the "collection" psychological driver, increasing session duration.

### D. Feature: "Connect Favorites" (Medium Priority - Future Phase)
**Objective**: Allow users to visualize their own custom journey.
*   **Concept**: If a user has selected multiple favorites, offer a "Route My Trip" button that draws a polyline connecting them.
*   **Status**: Defer to next sprint to focus on Content and Core UX first.

## 4. Implementation Plan
1.  **Data**: Update `script.js` with `legend` content for all 12 sites.
2.  **UI Components**:
    *   **Legends**: Add `.legend-box` styles to `style.css` and render logic to `activateMarker`.
    *   **Tooltips**: Attach custom HTML tooltips to markers.
    *   **Tracker**: Add `#progress-tracker` to `index.html` and update logic in `script.js`.
3.  **Verification**: ensure all new features work seamlessly on desktop and mobile.
