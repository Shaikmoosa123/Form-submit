const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
watchForFileChanges: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
