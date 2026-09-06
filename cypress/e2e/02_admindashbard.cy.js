//** 2. Admin Dashboard **//
// 2.1 Verify dashboard after admin login
// 2.2 Verify sidebar navigation
// 2.3 Verify Add Branch opens from dashboard
// 2.4 Verify Logout from dashboard

import { dashboardlocator } from "../support/locator";

describe("It verify dashboard of adminn", () => {

  beforeEach(() => {
  cy.log(Cypress.config("baseUrl"));
  cy.visit("/");
  cy.login();
  });

  afterEach(function () {
  if (this.currentTest.state === "failed") {
  cy.log("failed " + this.currentTest.title);
  } else {
  cy.log("passed " + this.currentTest.title);
  }
  });

  //Verify dashboard after admin login
  it("It verify dashboard of admin after logged in", () => {
  cy.get("body").should("contain.text", "Branch");
  });

  //Verify sidebar navigation
  it("Verify sidebar navigation", () => {
  cy.xpath(dashboardlocator.SiderBarMenu).click();
  cy.xpath(dashboardlocator.BranchMenu).click();
  cy.get("body").should("contain.text", "Branches");
  });

  //Verify Add Branch opens from dashboard
  it("Verify Add Branch opens from dashboard", () => {
  cy.xpath(dashboardlocator.AddBranch).click({ force: true });
  cy.get("body").should("contain.text", "Add Branches");
  });

  //Verify Logout from dashboard
  it("Verify Logout from dashboard", () => {
  cy.get(".flex.items-center.rounded-xl.cursor-pointer").eq(10).click();
  cy.xpath(dashboardlocator.LogoutButton).click();
  cy.get('button[data-variant="delete"]').click();
  cy.get("body").should("contain.text", "Welcome back");
  });

});
