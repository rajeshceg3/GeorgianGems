const {test,expect}=require('@playwright/test');
const places=['Historical Monuments of Mtskheta','Upper Svaneti','Gelati Monastery','Colchic Rainforests and Wetlands','Vardzia Cave Monastery','Uplistsikhe Cave Town','David Gareji Monasteries','Gergeti Trinity Church','Prometheus Cave','Martvili Canyon','Ananuri Fortress','Sighnaghi'];
for(const motion of ['reduce','no-preference'])for(const width of [320,390,1440])test(`${width}px ${motion} map, twelve details and preserved guide functions`,async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.route('https://tile.openstreetmap.org/**',r=>r.fulfill({contentType:'image/png',body:Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Wl6pL8AAAAASUVORK5CYII=','base64')}));
 await page.setViewportSize({width,height:844});await page.emulateMedia({reducedMotion:motion});await page.goto('/');await page.click('#start-btn');await expect(page.locator('#intro-overlay')).toHaveAttribute('aria-hidden','true');
 await expect(page.locator('#progress-tracker svg')).toBeVisible();await expect(page.locator('.site-cluster').first()).toBeVisible();
 for(const s of ['#search-input','#journey-btn','#progress-tracker','[data-category="all"]','[data-category="Cultural"]','[data-category="Natural"]','[data-category="favorites"]']){const r=await page.locator(s).boundingBox();expect(r.x).toBeGreaterThanOrEqual(0);expect(r.x+r.width).toBeLessThanOrEqual(width+.1);}
 await page.screenshot({path:`verification/current/${width}-map.png`});
 for(let i=0;i<places.length;i++){
  console.log(width,i,places[i]);await page.fill('#search-input',places[i]);const pin=page.getByRole('button',{name:places[i],exact:true});await expect(pin).toBeVisible();await pin.press('Enter');await expect(page.locator('#info-panel')).toHaveClass(/visible/);await expect(page.locator('#info-content h2')).toHaveText(places[i]);await expect(page.locator('#info-content h2')).toHaveCSS('opacity','1');
  await expect(page.locator('#info-content img,.nearby-img')).toHaveCount(0);await expect(page.locator('.info-label')).not.toContainText(['Hours']);await expect(page.locator('#info-content')).not.toContainText('GEL');
  await expect(page.locator('.status-source')).toHaveAttribute('href','https://whc.unesco.org/en/statesparties/ge');
  await expect.poll(()=>page.locator('#info-content').evaluate(el=>el.scrollTop)).toBe(0);
  await page.screenshot({path:`verification/current/${width}-${motion}-place-${i}.png`});
  if(i===0){await page.locator('.fav-btn').click();await expect(page.locator('.fav-btn')).toHaveText('Saved');}
  await page.click('#close-btn');await expect(page.locator('#info-panel')).not.toHaveClass(/visible/);
 }
 await page.fill('#search-input','');await page.click('[data-category="favorites"]');await expect(page.locator('.marker-pin')).toHaveCount(1);
 await page.reload();await page.click('#start-btn');await page.click('[data-category="favorites"]');await expect(page.locator('.marker-pin')).toHaveCount(1);
 await page.click('[data-category="Natural"]');await expect(page.locator('[data-category="Natural"]')).toHaveAttribute('aria-pressed','true');
 await page.click('[data-category="Cultural"]');await expect(page.locator('[data-category="Cultural"]')).toHaveAttribute('aria-pressed','true');
 for(const id of ['royal_path','wild_horizons']){await page.click('#journey-btn');await expect(page.locator('#journey-menu')).toHaveClass(/visible/);await page.click(`[data-journey="${id}"]`);await expect(page.locator('.journey-line')).toHaveCount(1);}
 await page.click('#reset-view-btn');expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);expect(errors).toEqual([]);
});
