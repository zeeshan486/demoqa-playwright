import {test,expect} from "@playwright/test";
import {Slider} from "../pages/Slider";
test.describe("Slider", () => {
test("Slider", async ({page}) => {

    const slider = new Slider(page);
    await slider.goto();
    const value = await slider.setSliderValue(50);
    await expect(value).toBe("50");




})
test("NotMatchSlider", async ({page}) => {

    const slider = new Slider(page);
    await slider.goto();
    const value = await slider.setSliderValue(60);
    await expect(value).not.toBe("50");




})
})