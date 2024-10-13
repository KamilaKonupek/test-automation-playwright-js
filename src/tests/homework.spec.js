import { test } from "@playwright/test";

test("should open registration page", async ({ page }) => {
    await page.goto("https://team8-2022brno.herokuapp.com/registrace");

    await page.screenshot ({path: "homework_login_registrace.png"});
    
});