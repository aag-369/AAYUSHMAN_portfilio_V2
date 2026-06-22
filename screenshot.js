const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1920, height: 1080 }
  });
  await page.goto('http://localhost:3000');

  // Wait a bit for animations to settle
  await page.waitForTimeout(3000);

  await page.screenshot({ path: 'hero.png' });

  await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'about.png' });

  await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'skills.png' });

  await browser.close();
})();
