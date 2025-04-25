import { Page } from '@playwright/test';

export class ShadowDomPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://shoelace.style/components/button/');

    // Wait for shadow root to render
    await this.page.waitForSelector('sl-button');
  }

  async clickShadowButton() {
    const button = this.page.locator('sl-button');
    await button.click();
  }

  async getShadowButtonText(): Promise<string> {
    const button = this.page.locator('sl-button').first();
    return (await button.textContent())?.trim() || '';
  }
}
