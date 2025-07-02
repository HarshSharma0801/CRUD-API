// playwright.config.js
// @ts-check
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: "./e2e",
  timeout: 30000,
  retries: 0,
  use: {
    baseURL: "http://192.168.5.15:5173",
    proxy: {
      server: "http://192.168.5.15:16789",
    },
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
};

module.exports = config;
