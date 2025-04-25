import { test, expect } from '@playwright/test';
import { AlertsPage } from '../pages/AlertsPage';

test.describe('DemoQA Alerts Handling', () => {
  test('Accept simple alert', async ({ page }) => {
    const alertPage = new AlertsPage(page);
    await alertPage.goto();
    await alertPage.triggerAlert();
  });

  test('Dismiss confirm alert', async ({ page }) => {
    const alertPage = new AlertsPage(page);
    await alertPage.goto();
    await alertPage.triggerConfirm(false);
    await expect(page.locator('#confirmResult')).toContainText('Cancel');
  });

  test('Send text in prompt alert', async ({ page }) => {
    const alertPage = new AlertsPage(page);
    await alertPage.goto();
    await alertPage.triggerPrompt('PlaywrightUser');
    await expect(page.locator('#promptResult')).toContainText('PlaywrightUser');
  });
});
