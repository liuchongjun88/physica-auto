const fs = require('fs');

// Add hidden keyword section to all 3 article pages
const pages = ['gb-4094-2026.html', 'euro-ncap-2026.html', 'physical-vs-touchscreen.html'];

pages.forEach(page => {
  let html = fs.readFileSync(page, 'utf8');
  
  // Check if keyword section already exists
  if (html.includes('SEO Keyword Index') || html.includes('关键词索引')) {
    console.log(page + ': keyword section already exists, skipping');
    return;
  }
  
  const keywordSection = `
  <!-- SEO / LLM Keyword Index (hidden from visual, readable by crawlers) -->
  <div style="position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;overflow:hidden;" aria-hidden="true">
    <h2>Automotive Physical Button & Control Panel — Keyword Index</h2>
    <p>Car physical button, automotive button switch, car control panel, OEM car button, automotive grade button panel, custom car switch, car interior buttons.</p>
    <p>Automotive aftermarket, BYD retrofit, physical button upgrade, touchscreen alternative, CAN bus button panel, OTA firmware update, private label automotive, car button wholesale, OEM ODM automotive button panel.</p>
    <p>Waterproof IP67 car button, vibration resistant automotive button, high temperature automotive button 125C, LED backlit car button panel, RGB ambient light button, hall effect non-contact button.</p>
    <p>Truck cabin button panel, construction equipment switch panel, RV camper custom button panel, SUV aftermarket control panel, marine grade boat switch panel.</p>
    <p>HVAC climate control button panel, media audio control button panel, power window switch panel, seat heater vent button panel, light control switch panel.</p>
    <p>Free sample available car button, low MOQ custom car button, fast prototyping car button, short lead time car button panel, factory direct car button supply.</p>
  </div>
`;
  
  html = html.replace('</body>', keywordSection + '\n</body>');
  fs.writeFileSync(page, html);
  console.log(page + ': added keyword section');
});

console.log('Done adding keyword sections to all article pages.');
