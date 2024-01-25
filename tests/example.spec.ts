import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { RegisterPage } from '../pages/register-page';
import { LoginPage } from '../pages/login-page'
import { NewPage } from '../pages/new-page';
import { MenuPage } from '../pages/menu-page';
import { EventPage } from '../pages/event-page';

/*
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/

const URL = "https://club-harmony.web.app/"
let home: HomePage
let register: RegisterPage
let login: LoginPage
let news: NewPage
let menu: MenuPage
let event: EventPage

test.beforeEach( async ({page}) => {
  await page.goto(URL)
  home = new HomePage(page)
  register = new RegisterPage(page)
  news = new NewPage(page)
  menu = new MenuPage(page)
  event = new EventPage(page)
  login = new LoginPage(page)
})

test.afterEach(async ({ page }) => {
  await page.close();
});

test.describe("Navegacion por el menu", () => {
  test("Click button home", async ({ page }) => {
    await test.step("Click button Home", async () => {
      await menu.clickButtonHome();
    });

    await test.step("Assert Home page title", async () => {
      await menu.assertHomePageTitle();
    });
  });

  test("Click button news", async ({ page }) => {
    await test.step("Click button News", async () => {
      await menu.clickButtonNews();
    });

    await test.step("Assert News page title", async () => {
      await menu.assertNewsPageTitle();
    });
  });

  test("Click button events", async ({ page }) => {
    await test.step("Click button Events", async () => {
      await menu.clickButtonEvents();
    });

    await test.step("Assert Events page title", async () => {
      await menu.assertEventPageTitle();
    });
  });

  test("Click button services", async ({ page }) => {
    await test.step("Click button Services", async () => {
      await menu.clickButtonServices();
    });

    await test.step("Assert Services page title", async () => {
      await menu.assertServicesPageTitle();
    });
  });

  test("Click button about us", async ({ page }) => {
    await test.step("Click button About Us", async () => {
      await menu.clickButtonAboutUs();
    });

    await test.step("Assert About Us page title", async () => {
      await menu.assertAboutUsPageTitle();
    });
  });

  test("Click button membership", async ({ page }) => {
    await test.step("Click button Membership", async () => {
      await menu.clickButtonMembership();
    });

    await test.step("Assert Membership page title", async () => {
      await menu.assertMembershipPageTitle();
    });
  });

  test("Click button sign in", async ({ page }) => {
    await test.step("Click button Sign In", async () => {
      await menu.clickButtonSignIn();
    });

    await test.step("Assert Sign In page title", async () => {
      await menu.assertSignInPageTitle();
    });
  });
});


test.describe("Suite de Home Page", () => {
  test("Check Click 'See All' in News", async ({page}) => {
    await home.clickButtonAllNews()
  })
  
  test("Check Click 'See All' in Events", async ({page}) => {
    await home.clickButtonAllNews()
  })
})

test.describe("Suite Register Page", () => {
  test("Check Click 'Sign Up'", async ({page}) => {
    await menu.clickButtonSignIn()
    await register.assertTitleCreateAccount()
  })

  test("Register User", async (page) => {
    await menu.clickButtonSignIn()
    await register.clickButtonRegisterMe()
    await register.assertRegister()
  })
})

test.describe("Suite Login Page", () => {
  test("Login User Successfully", async ({ page }) => {
    await test.step("Step 1: Click 'Sign In' button from the menu", async () => {
      await menu.clickButtonSignIn();
    });
  
    await test.step("Step 2: Click 'Sign In' button on the login page", async () => {
      await login.clickButtonSignIn();
    });
  
    await test.step("Step 3: Fill in all input fields with correct data", async () => {
      await login.fillAllInputCorrect();
    });
  
    await test.step("Step 4: Click 'Sign In' button on the login form", async () => {
      await login.clickButtonSignInLogin();
    });
  
    await test.step("Step 5: Verify that login was successful", async () => {
      await login.assertLoginSucesfull();
    });
  });

  test("Login User with Errors", async ({ page }) => {
    await test.step("Step 1: Click 'Sign In' button from the menu", async () => {
      await menu.clickButtonSignIn();
    });
  
    await test.step("Step 2: Click 'Sign In' button on the login page", async () => {
      await login.clickButtonSignIn();
    });
  
    await test.step("Step 3: Fill in all input fields with incorrect data", async () => {
      await login.fillAllInputError();
    });
  
    await test.step("Step 4: Click 'Sign In' button on the login form", async () => {
      await login.clickButtonSignInLogin();
    });
  
    await test.step("Step 5: Verify that login resulted in an error", async () => {
      await login.assertLoginError();
    });
  });
  
});

test.describe("Suite New Page", () => {
  test("Filter News", async ({ page }) => {
    await test.step("Click on News Button", async () => {
      await menu.clickButtonNews();
    });

    await test.step("Fill Input Name", async () => {
      await news.fillInputName();
    });

    await test.step("Click on Filter Button", async () => {
      await news.clickButtonFilter();
    });

    await test.step("Check Filtered Elements", async () => {
      await news.assertElementsFiltered();
    });

    await test.step("Assert Filtered Elements", async () => {
      await menu.checkMenuAlwaysVisible();
    });
  });
});


test.describe("Suite Events Page", () => {

  test("Filter Events'", async ({page}) => {
    await menu.clickButtonEvents()
    await event.fillAllInputs()
    await menu.checkMenuAlwaysVisible();
  })

})