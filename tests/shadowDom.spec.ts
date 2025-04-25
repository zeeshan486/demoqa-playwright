import { test, expect } from '@playwright/test';
import { ShadowDomPage } from '../pages/ShadowDomPage';

test.describe('Shadow DOM interaction test', () => {
  test('Should interact with shadow DOM button', async ({ page }) => {
    const shadowDomPage = new ShadowDomPage(page);
    await shadowDomPage.goto();

    const btnText = await shadowDomPage.getShadowButtonText();
    expect(btnText).toContain('Button');

    await shadowDomPage.clickShadowButton();
    // Optional: add expectation if something happens after click
  });
});
