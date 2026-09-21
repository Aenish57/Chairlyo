import { CustomersLocator } from "../support/locator";

describe("Customer Add Functionality", () => {

  beforeEach(() => {

    cy.visit("/");

    cy.BranchAdminLogin();

    cy.xpath(CustomersLocator.Management).click();

  });

  const uniqueId = Date.now();
  const firstName = `Customer${uniqueId}`;
  const lastName = "Test";
  const phone = "98" + String(uniqueId).slice(-8);
  const email = `customer${uniqueId}@test.com`;
  const address = "Kathmandu";
  const note = "Customer creation test";


  it("Verify customer creation", () => {

    cy.xpath(CustomersLocator.CustomerPage).click();

    cy.xpath(CustomersLocator.AddCustomer).first().click();


    // First Name
    cy.get(CustomersLocator.Firstname)
      .should("be.visible")
      .type(firstName);


    // Last Name
    cy.get(CustomersLocator.LastName)
      .should("be.visible")
      .type(lastName);


    // Phone Number
    cy.get(CustomersLocator.PhoneNo)
      .should("be.visible")
      .type(phone);


    // Email
    cy.get(CustomersLocator.Email_id)
      .should("be.visible")
      .type(email);
    
    //Gender select
    cy.contains('button[role="combobox"]', "Select Gender").click();

    //Gender Select
    cy.get('[role=option]').contains("Male").click();

    //DOB
    cy.get(CustomersLocator.DOB).click();
    cy.get('button[aria-label="Choose the Nepali month"]').click();

    cy.contains('[role="option"]', "Bhadra").click();

    cy.get('button[aria-label="Choose the Nepali year"]').click();

    cy.contains('[role="option"]', "2079").click();

    cy.contains("button", /^22$/).click();

    // Address
    cy.get(CustomersLocator.Address)
      .should("be.visible")
      .type(address);


    // Note
    cy.get(CustomersLocator.Note)
      .should("be.visible")
      .type(note);


    // // Gender
    // cy.get(CustomersLocator.Genderdropdown)
    // .should('exist')
    // .should('be.visible')
    //   .click();

    // cy.xpath(CustomersLocator.Gender)
    // .should("be.visible")
    //   .click();


    // Save Customer
    cy.xpath(CustomersLocator.CreateCustomer)
      .should("be.visible")
      .click();

  });

});