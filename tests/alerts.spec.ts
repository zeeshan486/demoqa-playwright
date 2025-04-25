import { test, expect } from '@playwright/test';
import { AlertsPage } from '../pages/AlertsPage';

test.describe('DemoQA Alerts Tests', () => {
  test('handle simple alert', async ({ page }) => {
    const alertsPage = new AlertsPage(page);
    await alertsPage.open();
    await alertsPage.triggerAlert();
    console.log(await alertsPage.triggerAlert())
    expect(await alertsPage.triggerAlert()).toContain('You clicked a button');
  });

test('handle timer alert',async({page})=>{
  const alertPage = new AlertsPage(page);
  await alertPage.open();
  await alertPage.handleTimeAlert();
  expect(await alertPage.handleTimeAlert()).toContain('This alert appeared after 5 seconds');
})

  test('handle confirm dialog (accept)', async ({ page }) => {
    const alertsPage = new AlertsPage(page);
    await alertsPage.open();
    await alertsPage.handleConfirm(true);
    await page.pause()
    await expect(page.locator('#confirmResult')).toContainText('Ok');
  });

  test('handle prompt with input', async ({ page }) => {
    const alertsPage = new AlertsPage(page);
    await alertsPage.open();
    await alertsPage.handlePrompt('PlaywrightUser');
    await page.pause()
    await expect(page.locator('#promptResult')).toContainText('PlaywrightUser');
  });
});
