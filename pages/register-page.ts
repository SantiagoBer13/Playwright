import { type Page, type Locator, expect } from "@playwright/test"
import exp from "constants"

export class RegisterPage{
    readonly page: Page
    readonly buttonRegisterMe: Locator
    readonly inputName: Locator
    readonly inputSurname: Locator
    readonly inputEmail: Locator
    readonly inputPhone: Locator
    readonly inputDepartment: Locator
    readonly inputCity: Locator
    readonly inputGender: Locator
    readonly inputBirthDate: Locator
    readonly inputPassword: Locator
    readonly titleSucessfullRegister: RegExp

    constructor(page: Page){
        this.page = page
        this.inputName = page.getByPlaceholder('Names', { exact: true })
        this.inputSurname = page.getByPlaceholder('Last Names', {exact: true})
        this.inputEmail = page.getByPlaceholder('Email')
        this.inputPhone = page.getByPlaceholder('Phone')
        this.inputDepartment = page.locator('#department')
        this.inputCity = page.locator("#city")
        this.inputGender = page.locator('div').filter({ hasText: /^Select Your GenderFemaleMasculineIndefinido$/ }).getByRole('combobox')
        this.inputBirthDate = page.locator('input[type="date"]')
        this.inputPassword = page.getByPlaceholder('Password', { exact: true })
        this.buttonRegisterMe = page.getByRole('button', { name: 'Register Me' })
        this.titleSucessfullRegister = /^.*Registro exitoso.*$/i

    }

    async assertTitleCreateAccount(){
        await expect(this.page.getByRole('heading', { name: 'Create Your Account' })).toBeVisible()
    }

    async fillAllInputs(){
        await this.inputName.click()
        await this.inputName.fill("Will")
        await this.inputSurname.click()
        await this.inputSurname.fill("Smith")
        await this.inputEmail.click()
        await this.inputEmail.fill("willSmith@gmail.com")
        await this.inputPhone.click()
        await this.inputPhone.fill("3202456778")
        
        await this.inputDepartment.selectOption('Antioquia');
        await this.inputCity.selectOption('Bogota')
        await this.inputGender.selectOption('m')

        await this.inputBirthDate.click()
        await this.inputBirthDate.fill('2000-07-10')
        await this.inputBirthDate.press("Enter")
        await this.inputPassword.click()
        await this.inputPassword.fill('WillSmith2000')
    }

    async clickButtonRegisterMe(){
        await this.fillAllInputs()
        await this.buttonRegisterMe.click()
    }

    async assertRegister(){
        await expect(this.page.getByText(this.titleSucessfullRegister)).toBeVisible()
    }
}