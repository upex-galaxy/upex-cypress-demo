import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import "dotenv/config";

export default defineConfig({
  // @Ely: CYPRESS DASHBOARD PARA VER NUESTRAS EJECUCIONES EN LA WEB:
  //? ID del proyecto CYPRESS-DEMO-CLOUD. Record Key para usar: "b6bde345-a36c-4fab-ad8c-cddc065d2cba"
  projectId: "2pw67q",

  // @Ely: Link para ver el proyecto Cloud: https://cloud.cypress.io/projects/2pw67q/analytics/runs-over-time
  // 1280×720 is considered to be the most suitable screen resolution for the desktop website version:
  viewportWidth: 1920,

  viewportHeight: 1080,
  downloadsFolder: "cypress/downloads",
  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots",
  screenshotOnRunFailure: true,
  scrollBehavior: "center",

  // Number of times to retry a failed test. If a number is set, tests will retry in both runMode and openMode:
  retries: process.env.CI ? 2 : 0,

  // Whether Cypress will record a video of the test run when running on headless:
  video: Boolean(process.env.CI),

  // Whether Cypress will watch and restart tests on test file changes:
  watchForFileChanges: false,

  // En Caso de hacer testing en SUT con seguridad web:
  chromeWebSecurity: false,

  // multi-reporters: one report.xml + mochawesome.json per file.
  reporter: "cypress-multi-reporters",

  reporterOptions: {
    configFile: "cypress.reporter.chrome.json",
  },

  // E2E Testing runner
  e2e: {
    baseUrl: "https://demoqa.com",
    // Glob pattern to determine what test files to load:
    specPattern: ["cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    excludeSpecPattern: ["cypress/e2e/**/*.example.cy.js"],
    // Use Cypress plugins:
    setupNodeEvents(on, config) {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      on("file:preprocessor", createBundler());
      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },

  env: {},

  component: {
    devServer: {
      framework: "vue",
      bundler: "webpack",
    },
  },
});
