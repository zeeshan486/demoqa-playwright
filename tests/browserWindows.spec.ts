import { test, expect } from '@playwright/test';
import { BrowserWindowsPage } from '../pages/BrowserWindowsPage';
import { generateRandomName, delay } from '../utils/helpers';

const randomName = generateRandomName();

test.describe('DemoQA - Browser Windows', () => {
  test('Open new tab and verify content', async ({ page }) => {
    const browserWindows = new BrowserWindowsPage(page);
    await browserWindows.goto();
    const newTabText = await browserWindows.openNewTabAndVerify();

    expect(newTabText).toContain('This is a sample page');
  });
});
