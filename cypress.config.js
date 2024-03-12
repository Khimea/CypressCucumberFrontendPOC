const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://www.demoblaze.com/",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});