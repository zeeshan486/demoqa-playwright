import {test,expect} from "@playwright/test";
import { FormPage } from "../pages/FormPage";
import { FormData } from "../pages/types";

const formData: FormData = {
    firstName: "John",
    lastName: "Doe",
    email: "email@yopmail.com",
    mobile: "1234567890",
    dob: "10/04/2000",
    subject: "English",
    path: "./test-data/image.webp",
    currentAddress: "123 Main St, Cityville",
    state: "NCR",
    city: "Delhi",
  };

test.describe("Form Page", () => {

    test("Form Submission", async ({ page }) => {
    
        const formPage = new FormPage(page);
        await formPage.goto();
        const successMessage  = await formPage.fillForm(formData)

            const modalScreenshot = await formPage.takeModalScreenshot();

            await expect(modalScreenshot).toMatchSnapshot('form-modal.png', { threshold: 0.1 });
           expect(successMessage).toContain("Thanks for submitting the form");



    })




})