# Test info

- Name: DemoQA Alerts Tests >> handle timer alert
- Location: D:\Appening\Playwright_Projects\demoqa-playwright\tests\alerts.spec.ts:13:5

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "This alert appeared after 5 seconds"
Received string:    ""
    at D:\Appening\Playwright_Projects\demoqa-playwright\tests\alerts.spec.ts:17:45
```

# Page snapshot

```yaml
- img "adplus-dvertising"
- iframe
- banner:
  - link:
    - /url: https://demoqa.com
    - img
- img
- text: Elements
- img
- img
- text: Forms
- img
- img
- text: Alerts, Frame & Windows
- img
- list:
  - listitem:
    - img
    - text: Browser Windows
  - listitem:
    - img
    - text: Alerts
  - listitem:
    - img
    - text: Frames
  - listitem:
    - img
    - text: Nested Frames
  - listitem:
    - img
    - text: Modal Dialogs
- img
- text: Widgets
- img
- img
- text: Interactions
- img
- img
- text: Book Store Application
- img
- heading "Alerts" [level=1]
- text: Click Button to see alert
- button "Click me"
- text: On button click, alert will appear after 5 seconds
- button "Click me"
- text: On button click, confirm box will appear
- button "Click me"
- text: On button click, prompt box will appear
- button "Click me"
- iframe
- img "Build PlayWright tests with AI"
- iframe
- contentinfo: © 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { AlertsPage } from '../pages/AlertsPage';
   3 |
   4 | test.describe('DemoQA Alerts Tests', () => {
   5 |   test('handle simple alert', async ({ page }) => {
   6 |     const alertsPage = new AlertsPage(page);
   7 |     await alertsPage.open();
   8 |     await alertsPage.triggerAlert();
   9 |     console.log(await alertsPage.triggerAlert())
  10 |     expect(await alertsPage.triggerAlert()).toContain('You clicked a button');
  11 |   });
  12 |
  13 | test('handle timer alert',async({page})=>{
  14 |   const alertPage = new AlertsPage(page);
  15 |   await alertPage.open();
  16 |   await alertPage.handleTimeAlert();
> 17 |   expect(await alertPage.handleTimeAlert()).toContain('This alert appeared after 5 seconds');
     |                                             ^ Error: expect(received).toContain(expected) // indexOf
  18 | })
  19 |
  20 |   test('handle confirm dialog (accept)', async ({ page }) => {
  21 |     const alertsPage = new AlertsPage(page);
  22 |     await alertsPage.open();
  23 |     await alertsPage.handleConfirm(true);
  24 |     await page.pause()
  25 |     await expect(page.locator('#confirmResult')).toContainText('Ok');
  26 |   });
  27 |
  28 |   test('handle prompt with input', async ({ page }) => {
  29 |     const alertsPage = new AlertsPage(page);
  30 |     await alertsPage.open();
  31 |     await alertsPage.handlePrompt('PlaywrightUser');
  32 |     await page.pause()
  33 |     await expect(page.locator('#promptResult')).toContainText('PlaywrightUser');
  34 |   });
  35 | });
  36 |
```