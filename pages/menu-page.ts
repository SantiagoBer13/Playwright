import { expect, type Locator, type Page } from "playwright/test";

export class MenuPage{
    readonly page: Page;
    readonly buttonHome: Locator;
    readonly buttonNews: Locator;
    readonly buttonEvents: Locator;
    readonly buttonServices: Locator;
    readonly buttonAboutUs: Locator;
    readonly buttonMembership: Locator;
    readonly buttonSignIn: Locator;
    readonly menu: Locator

    constructor(page: Page){
        this.page = page;
        this.buttonHome = page.getByRole('link', { name: 'HOME' });
        this.buttonNews = page.getByRole('link', { name: 'NEWS' });
        this.buttonEvents = page.getByRole('link', { name: 'EVENTS' });
        this.buttonServices = page.getByRole('link', { name: 'SERVICES' });
        this.buttonAboutUs = page.getByRole('link', { name: 'ABOUTS US' });
        this.buttonMembership = page.getByRole('link', { name: 'MEMBERSHIP' })
        this.buttonSignIn = page.getByRole('button', { name: 'SIGN IN' })
        this.menu = page.locator('nav').filter({ hasText: 'CCLUB' })
    }

    async clickButtonHome(){
        await this.buttonHome.click()
    }

    async clickButtonNews(){
        await this.buttonNews.click()
    }

    async clickButtonEvents(){
        await this.buttonEvents.click()
    }

    async clickButtonServices(){
        await this.buttonServices.click()
    }

    async clickButtonAboutUs(){
        await this.buttonAboutUs.click()
    }

    async clickButtonMembership(){
        await this.buttonMembership.click()
    }

    async clickButtonSignIn(){
        await this.buttonSignIn.click()
    }

    async assertHomePageTitle(){
        await expect(this.page.getByRole('heading', { name: 'Club Harmony' })).toBeVisible()
        await expect(this.page).toHaveURL("https://club-harmony.web.app/home")
    }

    async assertNewsPageTitle(){
        await expect(this.page.getByRole('heading', { name: 'News' })).toBeVisible()
        await expect(this.page).toHaveURL("https://club-harmony.web.app/news")
    }

    async assertEventPageTitle(){
        await expect(this.page.getByRole('heading', { name: 'Bienvenido a Nuestros Eventos' })).toBeVisible()
        await expect(this.page).toHaveURL("https://club-harmony.web.app/events")
    }

    async assertServicesPageTitle(){
        await expect(this.page.getByRole('heading', { name: 'Know Our Services' })).toBeVisible()
        await expect(this.page).toHaveURL("https://club-harmony.web.app/services")
    }

    async assertAboutUsPageTitle(){
        await expect(this.page.getByRole('heading', { name: 'About Us' })).toBeVisible()
        await expect(this.page).toHaveURL("https://club-harmony.web.app/about-us")
    }

    async assertMembershipPageTitle(){
        await expect(this.page).toHaveURL("https://club-harmony.web.app/membership")
    }

    async assertSignInPageTitle(){
        await expect(this.page).toHaveURL("https://club-harmony.web.app/auth")
    }

    async checkMenuAlwaysVisible(){
        await expect(this.menu).toBeVisible()
    }
}