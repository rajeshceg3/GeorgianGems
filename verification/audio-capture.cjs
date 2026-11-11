// Captures the app's real post-gain ambience for three sound places and
// verifies silent start, opt-in, mute, and replay.
const fs = require('fs'), assert = require('assert'), { spawn } = require('child_process');
const pp = require('puppeteer-core');
(async () => {
  let b, s;
  try {
    if (!process.env.URL) { s = spawn('python3', ['-m', 'http.server', '8798'], { stdio: 'ignore' }); await new Promise(r => setTimeout(r, 350)); }
    b = await pp.launch({ executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome', headless: true, args: ['--no-sandbox', '--enable-unsafe-swiftshader'] });
    const p = await b.newPage();
    await p.setViewport({ width: 390, height: 844 });
    await p.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
    await p.evaluateOnNewDocument(() => {
      const c = AudioNode.prototype.connect;
      AudioNode.prototype.connect = function (d, ...a) {
        const r = c.call(this, d, ...a);
        if (d instanceof AudioDestinationNode) {
          if (!this.context.__tee) this.context.__tee = this.context.createMediaStreamDestination();
          window.__tee = this.context.__tee;
          c.call(this, this.context.__tee);
        }
        return r;
      };
    });
    await p.goto(process.env.URL || 'http://127.0.0.1:8798', { waitUntil: 'domcontentloaded' });
    await p.click('#start-btn');
    await p.waitForSelector('.site-cluster', { timeout: 30000 });
    assert.equal(await p.evaluate(() => window.gemSound.ctx), null, 'silent start');
    await p.click('#sound-btn');
    await p.waitForFunction(() => window.gemSound.ctx && window.gemSound.ctx.state === 'running');
    const dir = process.env.AUDIO_OUT || '/downloads/gems-audio';
    fs.mkdirSync(dir, { recursive: true });
    const evidence = [];
    for (const [label, site] of [['map', null], ['caves', 'Prometheus Cave'], ['cultural', 'Gelati Monastery']]) {
      if (site) {
        await p.type('#search-input', site);
        await new Promise(r => setTimeout(r, 600));
        const opened = await p.evaluate(name => {
          const pin = [...document.querySelectorAll('.marker-pin')].find(e => (e.getAttribute('aria-label') || e.textContent || '').includes(name));
          if (!pin) return false;
          pin.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
          return true;
        }, site);
        assert(opened, 'pin found for ' + site);
        await p.waitForFunction(() => document.querySelector('#info-panel').classList.contains('visible'));
      }
      await new Promise(r => setTimeout(r, 2600));
      const bytes = await p.evaluate(async () => {
        const chunks = [], r = new MediaRecorder(window.__tee.stream);
        r.ondataavailable = e => chunks.push(e.data);
        const done = new Promise(ok => (r.onstop = ok));
        r.start(); await new Promise(ok => setTimeout(ok, 4000)); r.stop(); await done;
        return [...new Uint8Array(await new Blob(chunks, { type: r.mimeType }).arrayBuffer())];
      });
      fs.writeFileSync(dir + '/gem-app-' + label + '.webm', Buffer.from(bytes));
      evidence.push({ place: label, bytes: bytes.length });
      if (site) { await p.click('#close-btn'); await p.$eval('#search-input', e => { e.value = ''; e.dispatchEvent(new Event('input', { bubbles: true })); }); }
    }
    await p.click('#sound-btn');
    await p.waitForFunction(() => window.gemSound.ctx === null);
    await p.click('#sound-btn');
    await p.waitForFunction(() => window.gemSound.ctx && window.gemSound.ctx.state === 'running');
    await p.click('#sound-btn');
    await p.waitForFunction(() => window.gemSound.ctx === null);
    await p.screenshot({ path: 'verification/sound-btn-390.png' });
    fs.writeFileSync('verification/audio.json', JSON.stringify({ silentStart: true, offAndReplay: true, captures: evidence, capture: 'actual post-gain Web Audio output; synthesized Caucasus ambience', humanListening: false, sound: 'synthesized mountain wind, bells, cave drips, river water; no voice, no melody, not a field recording' }, null, 2));
    console.log('PASS gem ambience captured for map/caves/cultural, off and replay, silent start');
  } finally { await b?.close(); s?.kill(); }
})().catch(e => { console.error(e); process.exit(1); });
