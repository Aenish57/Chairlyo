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
  e2e: {
    baseUrl: "https://qa02.stage.chairlyo.com",
    slowTestThreshold: 3000,

    setupNodeEvents(on, config) {
      config.env.USERNAME = process.env.USERNAME;
      config.env.PASSWORD = process.env.PASSWORD;

      return config;
    },
  },
});




