import test from "@playwright/test";
import { AutoCompletePage } from "../pages/AutoComplete";
test.describe("AutoComplete", () => {
   test("Single Color Input", async ({ page }) => {

        const autoCompletePage = new AutoCompletePage(page);
        await autoCompletePage.goto();
        await autoCompletePage.fillSingleColorInput("Red");
        const colorSelected = await autoCompletePage.getSingleColorSelected();
        test.expect(colorSelected).toBe("Red");
     

    

})
})