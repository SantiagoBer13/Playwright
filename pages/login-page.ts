import { expect,  type Page, type Locator } from '@playwright/test'
import { CORREO_ADMI, PASS_ADMI } from "../config.js"

export class LoginPage {
    readonly page: Page;
    readonly buttonSignIn: Locator;
    readonly inputMail: Locator;
    readonly inputPassword: Locator;
    readonly buttonSignInLogin: Locator;

    constructor(page: Page){
        this.page = page;
        this.buttonSignIn = page.getByRole('main').getByRole('button', { name: 'SIGN IN' });
        this.inputMail = page.getByPlaceholder('Email')
        this.inputPassword = page.getByPlaceholder('Password')
        this.buttonSignInLogin = page.getByRole("button", {name: "Sign In", exact: true})
    }

    async clickButtonSignIn(){
        await this.buttonSignIn.click()
    }

    async clickButtonSignInLogin(){
        await this.buttonSignInLogin.click()
    }

    async fillAllInputCorrect(){
        await this.page.getByPlaceholder('Email').click();
        await this.page.getByPlaceholder('Email').fill(CORREO_ADMI!);
        await this.page.getByPlaceholder('Password').click();
        await this.page.getByPlaceholder('Password').fill(PASS_ADMI!);
    }

    async fillAllInputError(){
        await this.page.getByPlaceholder('Email').click();
        await this.page.getByPlaceholder('Email').fill('jose@gmail.com');
        await this.page.getByPlaceholder('Password').click();
        await this.page.getByPlaceholder('Password').fill('Jbtrp002');
    }

    async assertLoginError(){
        const errorMessage = await this.page.waitForSelector('text=¡Credenciales Invalidas!', { timeout: 15000 });
        await expect(errorMessage.isVisible()).resolves.toBe(true);
    }

    async assertLoginSucesfull(){
        const successMessage = await this.page.waitForSelector('text=¡Inicio de sesion exitoso!', { timeout: 15000 });
        await expect(successMessage.isVisible()).resolves.toBe(true);
    }

}