# Georgian Gems

A twelve-place heritage and landscape map of Georgia. Search, cultural/natural filters, saved places, two journeys and nearby-site links are preserved. Four entries are UNESCO World Heritage properties; the other eight are guide places, not all World Heritage properties. Check the current official list: https://whc.unesco.org/en/statesparties/ge.

## Map source

Key-free OpenStreetMap standard tiles, using the exact HTTPS URL and visible attribution. Normal browser caching and a cross-origin origin referrer are retained. No offline downloads, prefetch scans, account keys or paid services. Availability is best-effort, not guaranteed. Policy: https://operations.osmfoundation.org/policies/tiles/.

Leaflet 1.9.4 and MarkerCluster 1.5.3 are vendored with their licenses, so rendering no longer depends on a third-party JavaScript CDN. Dark numbered circles are cluster counts; red/green numbered pins identify individual cultural/natural places. Click a cluster to expand it.

Unverified stock photos and unsupported current hours/fees are no longer rendered. General historical stories and planning notes remain editorial material, not a full source-audited travel guide. Confirm access, transport, fees and road conditions before travel. A source-verified photo/content round remains separate.

## Verification

`npm ci`, `npm run check`, `npm test`. Playwright checks 320/390/1440px in real Chromium, all twelve details, keyboard entry, search, filters, saved-site persistence, both journeys, Reset, control bounds and runtime errors. Automated traversals stub tile responses to avoid scraping the public service. Canonical map pixels are checked separately against real tiles.

The existing Python UX, tooltip/legend/progress and visual scripts in `verification/` are retained, now using a configurable BASE_URL/CHROME_PATH and no live tile traffic. Install Python Playwright to run them. Default BASE_URL is http://localhost:3000.

Reduced-motion users can read all content without waiting for animations. Detail panels stay above the toolbar so Close remains usable on desktop. The counter uses an inline SVG, not a font-dependent emoji.
