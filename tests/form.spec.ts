import {test,expect} from "@playwright/test";
import { FormPage } from "../pages/FormPage";

test.describe("Form Page", () => {

    test("Form Submission", async ({ page }) => {
    
        const formPage = new FormPage(page);
        await formPage.goto();
        const successMessage  = await formPage.fillForm(
            "John",
            "Doe",
            "email@yopmail.com",
            "1234567890","10/04/2000","English","./test-data/image.webp","123 Main St, Cityville","NCR","Delhi")

            const modalScreenshot = await formPage.takeModalScreenshot();

            await expect(modalScreenshot).toMatchSnapshot('form-modal.png', { threshold: 0.1 });
           expect(successMessage).toContain("Thanks for submitting the form");



    })




})