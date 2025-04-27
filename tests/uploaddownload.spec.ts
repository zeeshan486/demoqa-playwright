import {test,expect } from "@playwright/test";
import { UploadDownloadPage } from "../pages/UploadDownloadPage";
import path from "path";


test.describe("Upload and Download", () => {

    test("Upload a file", async ({ page }) => {
  
        const uploadDownloadPage = new UploadDownloadPage(page);
        await uploadDownloadPage.goto();
        const filePath = path.resolve('./test-data/testfile.txt');
        console.log(filePath);
        await uploadDownloadPage.uploadFile(filePath);
        const uploadedFileName = await uploadDownloadPage.getUploadedFileName();
        console.log(uploadedFileName);
        // Verify the uploaded file name
        expect(uploadedFileName).toContain("testfile.txt");
    })

    test("Download a file", async ({ page }) => {
        const uploadDownloadPage = new UploadDownloadPage(page);
        await uploadDownloadPage.goto();
        await uploadDownloadPage.downloadFile();
    })


})