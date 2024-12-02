const { defineConfig } = require("cypress");

require('dotenv').config();

module.exports = defineConfig({
  projectId: 'tdrqd6',
  e2e: {
    pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        preserveCookies({ cookies }) {
          savedCookies = cookies;
          return null;
      },
      applySavedCookies() {
          return savedCookies || [];
      },
      preserveLocalStorage({ localStorageData }) {
          savedLocalStorage = localStorageData;
          return null;
      },
      applySavedLocalStorage() {
          return savedLocalStorage || {};
      },
        
        // chromeWebSecurity: false,

        /* A custom task to generate JWT token for overriding Unleash toggles.
         *
         * We decided to separate this function from overrideFeatureToggle
         * command because when we put the below code there it keeps failing.
         * It seems this is because the jwt generation feature is asynchronous,
         * so it conflicting with Cypress's async system. So to work around
         * the issue, we wrap this function into a custom task that could be
         * called from inside the overrideFeatureToggle custom command.
         *
         * More References:
         * - https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Commands-Are-Asynchronous : official documentation about how cypress asynchronous command worked
         * - https://stackoverflow.com/q/65736979 : Here the asker also use custom
         *   task to work around async code issue
         * - https://stackoverflow.com/questions/58680757/in-cypress-when-to-use-custom-command-vs-task : explanation regarding custom task vs custom command, and use cases for each of them
         */
                
      })
    },

    excludeSpecPattern: [
      // Prod Spec
      // 'cypress/e2e/daily_regression',
      
      // Stagging Spec
      // 'cypress/e2e/daily_regression',
    ],

    env: {
      base_url: process.env.BASE_URL,
      valid_username: process.env.ORANGEHRM_VALID_USERNAME,
      valid_password: process.env.ORANGEHRM_VALID_PASSWORD,
      invalid_username: process.env.ORANGEHRM_INVALID_USERNAME,
      invalid_password: process.env.ORANGEHRM_INVALID_PASSWORD,
    }, 

    chromeWebSecurity: false,
    testIsolation: true,

    },
  },
);
