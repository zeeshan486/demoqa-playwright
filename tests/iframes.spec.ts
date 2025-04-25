import { test, expect } from '@playwright/test';
import { IframesPage } from '../pages/IframesPage';

test.describe('DemoQA - Iframes', () => {
  test('Should read text from both iframes', async ({ page }) => {
    const iframePage = new IframesPage(page);
    await iframePage.goto();

    const text1 = await iframePage.getFrameText('frame1');
    const text2 = await iframePage.getFrameText('frame2');

    expect(text1).toBe('This is a sample page');
    expect(text2).toBe('This is a sample page');
  });
});
