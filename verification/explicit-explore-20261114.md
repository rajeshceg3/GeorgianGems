# Explicit Explore, 14 November 2026

Replaces hover/timer/Pin chrome and the journey drop-down with one deliberate Explore entry. Search, filters, both visible journeys, progress, zoom, existing sound and reset are in its bounded panel. Place details are bounded, keyboard-closeable, immediately readable and mutually exclusive with Explore. Existing wine/paper styling, map style, camera, clusters, marker effects, content and audio are preserved.

Local checks in real Linux Chromium, not a physical iPhone:
- Nine browser cases passed in split runs: 320/390/1280/1440, normal and reduced OS motion, plus explicit Explore persistence/Escape/focus. Each viewport/motion case opens all twelve places and checks favorite persistence, categories, both journeys, reset and no page errors.
- Additional 320/390/1280 pointer, keyboard, focus trap/return, reading-end, close reachability and live OS-setting checks passed.
- Twelve 390px place screenshots and immediate 320px/1280px story pixels inspected. Removed inherited blur/fade delays from story content after the first visual check found transient blanks.
- Audio structure, all beds/voices, opt-in and mute/close checks passed. No audio code changed.
- npm audit, syntax and whitespace checks passed.

CI uses Ubuntu 24.04: the browser installer used by this suite does not support Ubuntu 26.04 yet.
