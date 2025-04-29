import {Locator,Page} from "@playwright/test";
import { FormData } from "../pages/types";

export class FormPage{

    readonly page:Page;
    readonly firstName:Locator;
    readonly lastName:Locator;  
    readonly email:Locator;
    readonly gender:Locator;
    readonly mobile:Locator;
    readonly dob:Locator;
    readonly subjects:Locator;
    readonly hobbies:Locator;
    readonly uploadPicture:Locator;
    readonly currentAddress:Locator;
    readonly state:Locator;
    readonly city:Locator;
    readonly submit:Locator;
    readonly results:Locator;
    readonly modal:Locator;

    constructor(page:Page){
    this.page = page;
    this.firstName = this.page.locator("#firstName");
    this.lastName = this.page.locator("#lastName");
    this.email = this.page.locator("#userEmail");       
    this.gender = this.page.locator('//label[@for="gender-radio-1"]')
    this.mobile = this.page.locator("#userNumber");
    this.dob = this.page.locator("#dateOfBirthInput");
    this.subjects = this.page.locator("#subjectsInput");
    this.hobbies = this.page.locator("//label[@for = 'hobbies-checkbox-1']");
    this.uploadPicture = this.page.locator("#uploadPicture");
    this.currentAddress = this.page.locator("#currentAddress");
    this.state = this.page.locator("#state");
    this.city = this.page.locator("#city");
    this.submit = this.page.locator("#submit");
    this.results = this.page.locator("#example-modal-sizes-title-lg");
    this.modal = this.page.locator(".modal-content");
    
    }

    async goto(){
        await this.page.goto("/automation-practice-form");
    }

async fillForm(data:FormData){

    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.email.fill(data.email);
    await this.gender.click();
    await this.mobile.fill(data.mobile);
    await this.dob.fill(data.dob);
    await this.dob.press("Enter");
    await this.subjects.fill(data.subject);
    await this.subjects.press("Enter");
    await this.hobbies.click();
    await this.uploadPicture.setInputFiles(data.path);
    await this.currentAddress.fill(data.currentAddress);
    await this.state.click();
    await this.page.getByText(data.state,{exact:true}).click() ; 
    await this.city.click();
    await this.page.getByText(data.city,{exact:true}).click() ;
    await this.submit.click();
    await this.results.waitFor({state:"visible"});
    const text  = await this.results.textContent();
    return text;

}

async takeModalScreenshot(): Promise<Buffer> {
    await this.modal.waitFor({ state: 'visible' });
    const screenshotBuffer = await this.modal.screenshot();
    return screenshotBuffer;
  }
  
  
  

}