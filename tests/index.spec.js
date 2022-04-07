const { test, expect } = require("@playwright/test");

test("basic test", async ({ page }) => {
  await page.goto("https://translate.google.com/");
  const title = page.locator(".VfPpkd-Jh9lGc");
  // await expect(title).toHaveText("Playwright");
  console.log(await title)
  // for(let i in title) {
  // }
});
