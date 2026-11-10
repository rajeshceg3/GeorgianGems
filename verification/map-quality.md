# Reliability repair - 11 November 2026

Executed locally in real Chromium, not on a physical iPhone:

- Canonical live-tile maps inspected at 320/390/1440px. Tiles render geographic labels/roads instead of the previous API-key-required images. Visible attribution and all toolbar controls fit the phone.
- All twelve detail panels captured and inspected at all three widths, with reduced motion. Fixed permanently transparent content under reduced motion and a toolbar overlay blocking the desktop Close button.
- New browser gate: 3 width cases pass, traversing every place by search and keyboard entry, save/reload persistence, all filters, both journeys and Reset. Tile responses are stubbed during automated traversal.
- Existing Python UX, enhancements (tooltips, legends, progress) and visual checks executed successfully with tile requests blocked.
- UI glyph/core-to-backdrop measurements across toolbar labels: 21 samples, lowest 7.521:1. Map data labels themselves are supplied by OpenStreetMap and are not part of this UI contrast measurement.
- No rendered mismatched site photos; numbered category pins and numbered count clusters instead. Font-dependent emoji removed from controls.
- UNESCO framing checked against https://whc.unesco.org/en/statesparties/ge (four listed properties). Unverified current hours and fees removed from display.

Remaining: the inherited historical stories, travel tips and logistics have not had a complete source audit. This round repairs map/function reliability and misleading photo/status claims, not every travel fact. Production checks are recorded separately after deployment.
