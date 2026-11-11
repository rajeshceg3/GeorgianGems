# Verify GeorgianGems
Georgian Gems - key-free map and phone guide.
## Launch
`npm install`; the playwright config serves the app itself.
## Doctor
`python3 .cursor/skills/verify-georgian-gems/verify.py`
## Drive
Runs node --check on script.js, then the repo playwright suite (6 tests) in real Chromium.
## Evidence
`.cursor/skills/verify-georgian-gems/evidence.json`
## Cleanup
Playwright manages its server.
## Known boundaries
Chromium coverage as configured in the repo.
