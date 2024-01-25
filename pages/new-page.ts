import { expect, type Locator, type Page } from "@playwright/test"

export class NewPage{
    readonly page: Page
    readonly inputName: Locator
    readonly filterName: string
    readonly buttonFilter: Locator
    readonly buttonDeleteFilter: Locator
    readonly elementsFiltered: Locator

    constructor(page: Page){
        this.page = page
        this.inputName = page.getByLabel('Name:');
        this.buttonFilter = page.getByRole("button", { name: 'Filter ' })
        this.buttonDeleteFilter = page.getByRole('button', { name: 'Delete ' })
        this.filterName = "no"
    }

    async fillInputName(){
        await this.inputName.fill(this.filterName)
    }

    async clickButtonFilter(){
        await this.buttonFilter.click()
    }

    async clickButtonDeleteFilter(){
        await this.buttonDeleteFilter.click()
    }

    async assertElementsFiltered() {
        await this.page.waitForSelector('.news-row div div h3');
        await this.page.waitForTimeout(3000);
    
        const elementsFiltered = this.page.locator('.news-row div div h3');
        const count = await elementsFiltered.count();
        console.log(count);
    
        const regex = new RegExp(this.filterName, "i");
    
        for (let i = 0; i < count; i++) {
            await expect(elementsFiltered.nth(i)).toHaveText(regex);
        }
    }
    
    /*
    async assertElementsFiltered(){
        console.log(this.elementsFiltered)
        for (const row of await this.elementsFiltered.all())
            await expect(row).toHaveText(/fiesta/i);
    }
    */
}