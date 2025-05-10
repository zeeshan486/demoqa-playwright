import { Page } from "@playwright/test";

export class Slider {

    readonly page:Page;
    readonly slider: string;
    readonly sliderValue: string;

    constructor(page: Page) {
        this.page = page;
        this.slider = 'input[type="range"]';
        this.sliderValue = '#sliderValue';
    }

    async goto()    {
        await this.page.goto('/slider');
    }


    async setSliderValue(value: number) {
        const slider = this.page.locator(this.slider);
    
        await slider.fill(String(value));
        await slider.dispatchEvent('input');

        const sliderValue = this.page.locator(this.sliderValue);
        const valueText = await sliderValue.getAttribute('value');
        return valueText;


    }


}
