import { Page, Locator } from '@playwright/test';

export class AlertsPage {
  readonly page: Page;
  readonly alertButton: Locator;
  readonly confirmButton: Locator;
  readonly promptButton: Locator;
  readonly timeAlertButton: Locator;  

  constructor(page: Page) {
    this.page = page;
    this.alertButton = page.locator('#alertButton');
    this.confirmButton = page.locator('#confirmButton');
    this.promptButton = page.locator('#promtButton');
    this.timeAlertButton = page.locator('#timerAlertButton');
  }

  async open() {
    await this.page.goto('https://demoqa.com/alerts');
  }

  async triggerAlert() {
    let alertText:string="";
    this.page.once('dialog', async dialog => {
      alertText = dialog.message();
      await dialog.accept();
     
    });
    
    await this.alertButton.click();
    return alertText;
  }

  async handleTimeAlert(){
  let alertText:string="";
  this.page.once('dialog', async dialog => {
  alertText = dialog.message();
  await dialog.accept();

  })
  await this.timeAlertButton.click();
  await this.page.waitForTimeout(6000); // Wait for 6 seconds to allow the alert to appear
  return alertText;
  }

  async handleConfirm(accept: boolean) {
    this.page.once('dialog', async dialog => {
      if (accept) {
        await dialog.accept();
      } else {
        await dialog.dismiss();
      }
    });
    await this.confirmButton.click();
  }

  async handlePrompt(input: string) {
    this.page.once('dialog', async dialog => {
      await dialog.accept(input);
    });
    await this.promptButton.click();
  }
}
