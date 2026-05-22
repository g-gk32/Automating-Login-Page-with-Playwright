import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 30000,

  fullyParallel: true,

  retries: 1,

  reporter: [
    ['list'],
    ['html'],
    ['allure-playwright']
  ],

  use: {
    browserName: 'chromium',

    headless: true,

    screenshot: 'only-on-failure',

    trace: 'retain-on-failure',

    video: 'retain-on-failure'
  }
});