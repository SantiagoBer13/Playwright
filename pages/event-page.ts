import { expect, type Locator, type Page } from "playwright/test";

export class EventPage{
    readonly page: Page
    readonly inputName: Locator
    readonly inputCategory: Locator
    readonly inputDate: Locator
    readonly inputSort: Locator
    readonly buttonFilter: Locator
    readonly buttonDeleteFilter: Locator

    constructor(page: Page){
        this.page = page
        this.inputName = page.getByLabel('Name:')
        this.inputCategory = page.getByLabel('Category:')
        this.inputDate = page.getByLabel('Date:')
        this.inputSort = page.getByLabel('Sort By:')
        this.buttonFilter = page.getByRole('button', { name: '' })
        this.buttonDeleteFilter = page.getByRole('button', { name: '' })
    }

    async fillAllInputs(){
        await this.inputName.click()
        await this.inputName.fill("t")
        await this.inputCategory.click()
        await this.inputCategory.selectOption('educativo');
        await this.inputDate.click()
        await this.inputDate.fill('2024-01-25')
        await this.inputDate.press("Enter")
        await this.inputSort.click()
        await this.inputSort.selectOption('1');
    }

    async clickButtonFilter(){
        await this.buttonFilter.click()
    }

    async clickButtonDeleteFilter(){
        await this.buttonDeleteFilter.click()
    }

}