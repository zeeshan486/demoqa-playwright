import { Locator, Page } from '@playwright/test';

export class BrowserWindowsPage {

  readonly page: Page;
  readonly tabButton: Locator;
  readonly windowButton: Locator;
  readonly newWindowMessage: Locator;


  constructor(page: Page) {
    this.page = page;
    this.tabButton = this.page.locator('#tabButton');
    this.windowButton = this.page.locator('#windowButton');
    this.newWindowMessage = this.page.locator('#messageWindowButton');

  }

  async goto() {
    await this.page.goto('/browser-windows');
  }

  async openNewTabAndVerify() {
   
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.tabButton.click(),
    ]);
    
    await newPage.waitForLoadState();
    const text = await newPage.locator('body').textContent();
    return text?.trim();
  }

async openNewWindowAndVerify() {

  const [newwindow] = await Promise.all([
    this.page.context().waitForEvent('page'),
    this.windowButton.click(),
  ])

  newwindow.waitForLoadState('domcontentloaded')
  const text = await newwindow.locator('body').textContent();
  return text?.trim();

}

async openNewWindowMessageAndVerify() {
  const [newwindow] = await Promise.all([
    this.page.context().waitForEvent('page'),
    this.newWindowMessage.click(),
  ])

  newwindow.waitForLoadState('domcontentloaded')
  const text = await newwindow.locator('body').textContent();
  return text?.trim();
}

}
