const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "chromeWebSecurity": false,
    "defaultCommandTimeout": 20000,
    "execTimeout": 30000,
    "pageLoadTimeout": 30000,
    "watchForFileChanges": true,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
