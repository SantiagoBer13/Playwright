import { type Page, type Locator, expect } from "@playwright/test"

export class HomePage{
    readonly page: Page;
    readonly seeAllNews: Locator;
    readonly seeAllEvents: Locator;
    readonly seeAllServices: Locator;
    readonly eventsPageTitle: string;
    readonly newsPageTitle: string;
    readonly servicesPageTitle: string;

    constructor(page:Page){
        this.page = page;
        this.seeAllNews = page.locator('app-news-list').getByRole('button', { name: 'See All' });
        this.seeAllEvents = page.locator('app-events-list').getByRole('button', { name: 'See All' })
        this.seeAllServices = page.locator('app-carousel-services').getByRole('button', { name: 'See All' });
        this.newsPageTitle = "News"
        this.eventsPageTitle = "Bienvenido a Nuestros Eventos en Club Harmony"
        this.servicesPageTitle = "Know Our Services"
    }

    async clickButtonAllNews(){
        await this.seeAllNews.click()
    }

    async clickButtonAllEvents(){
        await this.seeAllEvents.click()
    }

    async clickButtonAllServices(){
        await this.seeAllServices.click()
    }

    async assertNewPageTitle(){
        await expect(this.page).toHaveTitle(this.newsPageTitle)
        await expect(this.page).toHaveURL("https://club-harmony.web.app/news")
    }

    async assertEventPageTitle(){
        await expect(this.page).toHaveTitle(this.eventsPageTitle)
        await expect(this.page).toHaveURL("https://club-harmony.web.app/events")
    }

    async assertServicesPageTitle(){
        await expect(this.page).toHaveTitle(this.servicesPageTitle)
        await expect(this.page).toHaveURL("https://club-harmony.web.app/services")
    }
}