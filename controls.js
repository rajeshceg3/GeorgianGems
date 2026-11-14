// One deliberate entry; no timer, hover-to-wake or stored Pin state.
(() => {
 const toggle=document.getElementById('explore-toggle'), panel=document.getElementById('filter-control');
 const tools=document.getElementById('map-tools');
 const ready=()=>{
  const zoom=document.querySelector('.leaflet-control-zoom');
  if(!zoom){requestAnimationFrame(ready);return;}
  tools.append(zoom,document.getElementById('sound-btn'),document.getElementById('reset-view-btn'));
 };
 ready();
 const close=(restore=true)=>{panel.hidden=true;panel.inert=true;toggle.setAttribute('aria-expanded','false');if(restore)toggle.focus();};
 toggle.addEventListener('click',()=>{
  if(!panel.hidden){close();return;}
  document.dispatchEvent(new Event('close-place'));
  panel.hidden=false;panel.inert=false;toggle.setAttribute('aria-expanded','true');document.getElementById('search-input').focus();
 });
 document.getElementById('explore-close').addEventListener('click',()=>close());
 document.addEventListener('close-explore',()=>close(false));
 document.getElementById('start-btn').addEventListener('click',()=>{toggle.hidden=false;});
 document.addEventListener('keydown',e=>{
  const story=document.getElementById('info-panel');
  const active=!panel.hidden?panel:!story.hidden?story:null;if(!active)return;
  if(e.key==='Escape' && active===panel){e.preventDefault();close();}
  if(e.key==='Tab'){
   const items=[...active.querySelectorAll('button,input,a[href],[tabindex="0"]')].filter(x=>x.getClientRects().length);
   const first=items[0],last=items[items.length-1];if(!first)return;
   if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
   else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
  }
 });
})();
