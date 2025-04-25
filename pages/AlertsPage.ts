import { Page } from '@playwright/test';

export class AlertsPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/alerts');
  }

  async triggerAlert() {
    this.page.once('dialog', async dialog => await dialog.accept());
    await this.page.click('#alertButton');
  }

  async triggerConfirm(accept = true) {
    this.page.once('dialog', async dialog =>
      accept ? await dialog.accept() : await dialog.dismiss()
    );
    await this.page.click('#confirmButton');
  }

  async triggerPrompt(text: string) {
    this.page.once('dialog', async dialog => await dialog.accept(text));
    await this.page.click('#promtButton');
  }
}
