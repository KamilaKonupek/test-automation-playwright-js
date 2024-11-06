import { test } from "@playwright/test";

test("should open login page", async ({ page }) => {
    await page.goto("/prihlaseni");
    console.log(await page.title());

await page.locator ("form").screenshot({ path: "css_form.png" }); 
await page.locator ("input").nth(1).screenshot ( { path: "css_id_input.png"});
await page.locator("#email").screenshot({ path: "css_id_email.png" });
await page.locator("#password").screenshot({ path: "css_id_password.png" });

await page.locator(".btn-primary").screenshot({ path: "css_class_button.png" });

await page.locator('[type="password"]').screenshot({ path: "css_type_password.png" });
await page.locator('[type*="ass"]').screenshot({ path: "css_type_ass.png" });
await page.locator('[type$="word"]').screenshot({ path: "css_type_word.png" });
await page.locator('[type^="pass"]').screenshot({ path: "css_type_passw.png" });

await page.locator ('input#email' ).screenshot ( { path: "css_input_email.png"});
await page.locator ('input[type="password"]' ).screenshot ( { path: "css_input_type_password.png"});
await page.locator ('button.btn-primary' ).screenshot ( { path: "css_button_class_btn_primary.png"});

await page
.locator("div")
.locator("form")
.locator('input[type$="word"]')
.screenshot({ path: "chain.png" });

await page.getByRole("heading", { level: 1 }).screenshot({ path: "playwright_role.png" })
await page.getByLabel("Email" ).screenshot({ path: "playwright_label.png" })
await page.getByText("Zapomněli jste své heslo?").screenshot({ path: "playwright_text.png" })






});
