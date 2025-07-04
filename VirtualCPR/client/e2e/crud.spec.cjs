const { test, expect } = require("@playwright/test");

// Adjust selectors and data as per your actual UI

test.describe("CRUD API E2E Tests", () => {
  test.beforeEach(async ({ page }) => {
    // Start at the home page
    await page.goto("/");
  });

  test("1. Navigate to Add User and Create User (POST /add)", async ({
    page,
  }) => {
    // Navigate to Add User page via navbar
    await page.click("a[href='/AddUser']");
    await expect(page).toHaveURL("/AddUser");

    // Fill the form with actual field names
    await page.fill("input[name='name']", "Test User");
    await page.fill("input[name='githubUsername']", "testuser123");
    await page.fill("input[name='YourQuote']", "This is a test quote");

    // Submit the form
    await page.click("button[type='submit']");

    // Should redirect to /Read page after successful creation
    await expect(page).toHaveURL("/Read");
  });

  test("2. Read All Users (GET /read)", async ({ page }) => {
    // Navigate to Read Users page
    await page.click("a[href='/Read']");
    await expect(page).toHaveURL("/Read");

    // Check if table is visible
    await expect(page.locator("table")).toBeVisible();

    // Check if table headers are present with more specific selectors
    await expect(page.locator("thead th").first()).toContainText("Name");
    await expect(page.locator("thead th").nth(1)).toContainText(
      "GitHub Username"
    );
    await expect(page.locator("thead th").nth(2)).toContainText("Your Message");
  });

  test("3. Edit User (GET /edit/:id and POST /edit/:id)", async ({ page }) => {
    // Go to Read page to find a user to edit
    await page.goto("/Read");

    // Wait for table to load and click first Edit button
    await page.waitForSelector("table tbody tr");
    await page.click("button:has-text('Edit')");

    // Should be on edit page
    await expect(page.url()).toContain("/Edit/");

    // Form should be pre-filled (wait for data to load)
    await page.waitForFunction(() => {
      const nameInput = document.querySelector("input[name='name']");
      return nameInput && nameInput.value !== "";
    });

    // Update the form
    await page.fill("input[name='name']", "Updated Test User");
    await page.fill("input[name='githubUsername']", "updateduser123");
    await page.fill("input[name='YourQuote']", "Updated test quote");

    // Submit the form
    await page.click("button[type='submit']");

    // Should redirect to /Read page after successful update
    await expect(page).toHaveURL("/Read");
  });

  test("4. Delete User (POST /delete)", async ({ page }) => {
    // Go to Read page to find a user to delete
    await page.goto("/Read");

    // Wait for table to load
    await page.waitForSelector("table tbody tr");

    // Count initial rows
    const initialRows = await page.locator("table tbody tr").count();

    // Click first Delete button
    await page.click("button:has-text('Delete')");

    // Wait a moment for deletion to process and redirect
    await page.waitForTimeout(2000);

    // Should still be on /Read page
    await expect(page).toHaveURL("/Read");

    // There should be one less row (or no rows if it was the last one)
    const finalRows = await page.locator("table tbody tr").count();
    expect(finalRows).toBeLessThanOrEqual(initialRows);
  });

  test("5. Full CRUD Flow", async ({ page }) => {
    const uniqueName = `Flow Test User ${Date.now()}`;
    await page.click('a[href="/AddUser"]');
    await page.fill('input[name="name"]', uniqueName);
    await page.fill('input[name="githubUsername"]', "flowtest123");
    await page.fill('input[name="YourQuote"]', "Testing full flow");
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL("/Read");
    await expect(
      page.locator(`tr:has-text('${uniqueName}')`).first()
    ).toBeVisible();
    await page
      .locator(`tr:has-text('${uniqueName}')`)
      .locator('button:has-text("Edit")')
      .click();
    await page.waitForFunction((name) => {
      const nameInput = document.querySelector('input[name="name"]');
      return nameInput && nameInput.value === name;
    }, uniqueName);
    await page.fill('input[name="name"]', `${uniqueName} Updated`);
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL("/Read");
    await expect(
      page.locator(`tr:has-text('${uniqueName} Updated')`).first()
    ).toBeVisible();
    await page
      .locator(`tr:has-text('${uniqueName} Updated')`)
      .locator('button:has-text("Delete")')
      .click();
    await page.waitForTimeout(2000);
    await page.reload();
    await page.waitForLoadState("networkidle");
    const userExists = await page
      .locator(`tr:has-text('${uniqueName} Updated')`)
      .count();
    expect(userExists).toBe(0);
  });
});
