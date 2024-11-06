import {expect, test} from "@playwright/test";
import {
    username,
    password,
    userFullName,
    applicationsSearchText,
    applicationsPageSize,
} from "../../fixtures/fixtures.js"
import {RegExp} from "../../fixtures/regular-expressions";

test("should open login page", async ({ page }) => {
    await page.goto("/prihlaseni");

    import { username, password, userFullName } from "../fixtures/fixtures";
    await expect("#email").toBeVisible();



});