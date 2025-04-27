import { Locator, Page } from "@playwright/test";


export class UploadDownloadPage {
 readonly page:Page
 readonly uploadFileInput:Locator
 readonly uploadedFileName:Locator
 readonly downloadFileButton:Locator
    constructor(page:Page) {
        this.page = page;
        this.uploadFileInput = this.page.locator("#uploadFile");
        this.uploadedFileName = this.page.locator("#uploadedFilePath");
        this.downloadFileButton = this.page.locator("#downloadButton");
    }

    async goto() {
        await this.page.goto("/upload-download");
    }

    async downloadFile() {
        await this.downloadFileButton.click();
        // Wait for the download to complete
        const [download] = await Promise.all([
            this.page.waitForEvent("download"),
            this.downloadFileButton.click(),
        ]);
        // Save the downloaded file to a specific location
        const path = await download.path();
        console.log(`Downloaded file path: ${path}`);
    }

    async uploadFile(filePath: string) {
        await this.uploadFileInput.setInputFiles(filePath);
    }

    async getUploadedFileName() {
        await this.uploadedFileName.waitFor({ state: "visible" });
        return await this.uploadedFileName.textContent();
    }




}