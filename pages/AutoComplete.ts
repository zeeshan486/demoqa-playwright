import { Locator, Page } from "@playwright/test";

export class AutoCompletePage{

    readonly page:Page;
    readonly singleColorInput:Locator;
    readonly multiColorInput:Locator;
    readonly colorSelected:Locator;

    constructor(page:Page){
        this.page = page;
        this.singleColorInput = this.page.locator("#autoCompleteSingleInput");
        this.multiColorInput = this.page.locator("#autoCompleteMultipleInput");
        this.colorSelected = this.page.locator(".auto-complete__single-value");
    }

async goto(){
    await this.page.goto("/auto-complete");
}

async fillSingleColorInput(color:string){
    await this.singleColorInput.fill(color);
    await this.singleColorInput.press("Enter");

}

async getSingleColorSelected(){
    return this.colorSelected.textContent();
}







}