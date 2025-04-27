import { Page,Locator, Frame } from '@playwright/test';

export class IframesPage {

  readonly page: Page;


  constructor( page: Page) {

    this.page = page;
  
  }

  async goto() {
    await this.page.goto('/frames');
  }

  async getFrameText(frameId: string): Promise<string> {
    const frame: Frame | null =  this.page.frame({ name: frameId });
    if (!frame) throw new Error(`Frame ${frameId} not found`);
    const heading = await frame.locator('h1').textContent();
    return heading?.trim() || '';
  }
}
