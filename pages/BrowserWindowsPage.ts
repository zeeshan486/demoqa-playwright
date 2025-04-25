import { Page } from '@playwright/test';

export class BrowserWindowsPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/browser-windows');
  }

  async openNewTabAndVerify() {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.page.click('#tabButton'),
    ]);

    await newPage.waitForLoadState();
    const text = await newPage.locator('body').textContent();
    return text?.trim();
  }
}
