const {test, expect} = require("@playwright/test");
const {username, password} = require("../fixtures/fixtures");

/**
 * Lesson 3: Locators and element interactions
 */

test("should login and list applications", async ({ page }) => {

    await page.goto("/prihlaseni");

      // Finding email field, checking if it is enabled and visible
      const emailField = page.getByLabel("Email");

      await page.getByLabel("Email").isVisible();
      await page.getByLabel("Email").isEnabled();

      console.log("Email field is visible" + await emailField.isVisible());
      console.log("Email field is enabled" + await emailField.isEnabled());
  
      // Finding password field, checking if it is enabled and visible
      const passwordField = page.getByLabel("Heslo");
      console.log("Password field is visible" + await passwordField.isVisible());
      console.log("Password field is enabled" + await passwordField.isEnabled());
  
      // Finding login button, checking text content
      const loginButton = page.getByRole("button", { name: "Přihlásit"});
      console.log("Login button text: " + await loginButton.textContent());
  
      // Finding forgot password link
      const link = page.getByText("Zapomněli jste své heslo?").getAttribute("href");
      console.log("Forgot password? link: " + await link);



       // Login
    await emailField.fill(username);
    await passwordField.fill(password);
    await loginButton.click();

    //nebo taky:

    await page.getByLabel('Email').fill(username);
    await page.getByLabel('Heslo').fill(password);
    await page.getByRole('Button'),{ name: 'Přihlásit' }.click();

    console.log('WOHOOO');
    console.log(await page.getByRole('button', {name: 'Lišák Admin'}).textContent());

});






