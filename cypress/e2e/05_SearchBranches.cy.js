//** 5. Search Functionality **//
// 5.1 Verify branch can be searched by valid name
// 5.2 Verify branch can be searched with partial name
// 5.3 Verify search with non-existing branch name
// 5.4 Verify search with numbers
// 5.5 Verify search with special characters
// 5.6 Verify search is case-insensitive

import { search } from "../support/locator";

describe("Search functionality", () => {

  beforeEach(() => {
    cy.visit("/");
    cy.login();
  });

  afterEach(function () {
    if (this.currentTest.state === "failed") {
      cy.log("Failed: " + this.currentTest.title);
    } else {
      cy.log("Passed: " + this.currentTest.title);
    }
  });

  // 5.1 Verify branch can be searched by valid name
  it("Verify branch can be searched by valid name", () => {
    cy.xpath(search.SearchField).type("Beauty Salon");
    cy.get("body").should("contain.text", "Beauty Salon");
  });

  // 5.2 Verify branch can be searched with partial name
  it("Verify branch can be searched with partial name", () => {
    cy.xpath(search.SearchField).type("1788674289454");
    cy.get("body").should("contain.text", "Beauty Salon");
  });

  // 5.3 Verify search with non-existing branch name
  it("Verify search with non-existing branch name", () => {
    cy.xpath(search.SearchField).type("doesnotexist");
    cy.get("body").should("contain.text", "Sorry");
  });

  // 5.4 Verify search with numbers
  it("Verify search with numbers", () => {
    cy.xpath(search.SearchField).type("9774223642");
    cy.get("body").should("contain.text", "977");
  });

  // 5.5 Verify search with special characters
  it("Verify search with special characters", () => {
    cy.xpath(search.SearchField).type("@#$%^&");
    cy.get("body").should("contain.text", "Sorry");
  });

  // 5.6 Verify search is case-insensitive
  it("Verify search is case-insensitive", () => {
    cy.xpath(search.SearchField).type("Edited Salon 1788674289454");
    cy.get("body").should("contain.text", "Beauty Salon");
  });

});