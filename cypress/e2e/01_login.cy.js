//** 1. Chairlyo Login **//
// 1.1 Login with valid credentials
// 1.2 Verify password is case-sensitive
// 1.3 Verify login with empty fields

import { loginlocator} from "../support/locator";
describe('Chairlyo Login', () => {
  beforeEach(() =>{
  cy.visit("https://qa02.stage.chairlyo.com/login");
  });
  afterEach(() => {
  cy.log("Test execution  completed ");
  });

//Logining in with valid credential
  it('Should Login with valid credential', () => {
  cy.get(loginlocator.email).type("skilladmin@test.com");
  cy.get(loginlocator.password).type("Skill@123");
  cy.xpath(loginlocator.login).click();

  cy.url().should("eq", "https://qa02.stage.chairlyo.com/");
  })

//Logining in with case sesastive password
//   it("Password should be case sensative", () => {
//   cy.get(loginlocator.email).type("skilladmin@test.com");
//   cy.get(loginlocator.password).type("SKILL@123");
//   cy.xpath(loginlocator.login).click();
//   cy.get("body").should("not.contain.text", "Logged in");
//   });

// //Logining in with empty space
//   it("no login should be successfull", () => {
//   cy.get(loginlocator.email);
//   cy.get(loginlocator.password);
//   cy.xpath(loginlocator.login).click();
//   cy.get("body").should("contain.text", "Welcome back");
//   });
})
