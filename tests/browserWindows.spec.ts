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


  test('open new window and verify content', async ({ page }) => {

    const browserWindows = new BrowserWindowsPage(page);
    await browserWindows.goto();
    const newWindowText = await browserWindows.openNewWindowAndVerify();

    expect(newWindowText).toContain('This is a sample page'); 

  })

  test('open new window message and verify content', async ({ page }) => {

    const browserWindows = new BrowserWindowsPage(page);
    await browserWindows.goto();
    const newWindowMessageText = await browserWindows.openNewWindowMessageAndVerify();
    expect(newWindowMessageText).toContain('Knowledge increases by sharing'); 

  })

});
