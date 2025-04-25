import { Page, Frame } from '@playwright/test';

export class IframesPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/frames');
  }

  async getFrameText(frameId: string): Promise<string> {
    const frame: Frame | null = await this.page.frame({ name: frameId });
    if (!frame) throw new Error(`Frame ${frameId} not found`);
    const heading = await frame.locator('h1').textContent();
    return heading?.trim() || '';
  }
}
