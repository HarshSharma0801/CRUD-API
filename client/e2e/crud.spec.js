const { test, expect } = require("@playwright/test");

// Adjust selectors and data as per your actual UI

test.describe("CRUD API E2E", () => {
  test("Create User (POST /add)", async ({ page }) => {
    await page.goto("/");
    await page.click("text=Add User");
    await page.fill('input[name="name"]', "Test User");
    await page.fill('input[name="email"]', "testuser@example.com");
    await page.click('button[type="submit"]');
    await expect(page.locator("text=User added successfully")).toBeVisible();
  });

  test("Read All Users (GET /read)", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("table")).toBeVisible();
    await expect(page.locator("text=Test User")).toBeVisible();
  });

  test("Read Single User (GET /edit/:id)", async ({ page }) => {
    await page.goto("/");
    await page.click("text=Edit"); // Clicks the first edit button
    await expect(page.locator('input[name="name"]')).toHaveValue(/Test User/);
  });

  test("Update User (POST /edit/:id)", async ({ page }) => {
    await page.goto("/");
    await page.click("text=Edit");
    await page.fill('input[name="name"]', "Updated User");
    await page.click('button[type="submit"]');
    await expect(page.locator("text=User updated successfully")).toBeVisible();
  });

  test("Delete User (POST /delete)", async ({ page }) => {
    await page.goto("/");
    await page.click("text=Delete"); // Clicks the first delete button
    await expect(page.locator("text=User deleted successfully")).toBeVisible();
  });
});
