// const { defineConfig } = require("cypress");
// const dotenv = require("dotenv");
// dotenv.config({ path: "./cypress/.env" });
// module.exports = defineConfig({
//   // allowCypressEnv: false,

//   e2e: {
    
//     baseUrl: "https://qa02.stage.chairlyo.com",
//     setupNodeEvents(on, config) {
//       config.env.USERNAME = process.env.USERNAME;
//       config.env.PASSWORD = process.env.PASSWORD;

//       return config;

//       // implement node event listeners here
//     },
//   },
// });
const { defineConfig } = require("cypress");
const dotenv = require("dotenv");

dotenv.config({
  path: "./cypress/.env",
  override: true
});

module.exports = defineConfig({
  // allowCypressEnv: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions:{
    reportDir: 'cypress/reports',
    reportFilename: 'report',
    overwrite: true,
    html: true,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  
  e2e: {
    // baseURL: process.env.BASE_URL,
    // env:{
    // username: process.env.Cypress_USERNAME,
    // password: process.env.Cypress_PASSWORD,
    // },
    baseUrl: "https://qa02.stage.chairlyo.com",
    slowTestThreshold: 3000,

    setupNodeEvents(on, config) {
  config.env.USERNAME = process.env.USERNAME;
  config.env.PASSWORD = process.env.PASSWORD;
  
  config.env.BRANCH_ADMIN_EMAIL = process.env.BRANCH_ADMIN_EMAIL;
  config.env.BRANCH_ADMIN_PASSWORD = process.env.BRANCH_ADMIN_PASSWORD;

  require('cypress-mochawesome-reporter/plugin')(on);

  return config;
},
    chromeWebSecurity: false,
  },
});




