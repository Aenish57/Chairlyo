//** 4. Branch CRUD Functionality **//
// 4.1 Verify navigation to Add Branch
// 4.2 Verify branch creation with valid data
// 4.3 Verify edit of branch function
// 4.4 Verify deletion of branch function

import { branchlocator, search } from "../support/locator";

describe("Branch Add functionality", () => {
beforeEach(() => {
cy.visit("/");
cy.login();
});

after(() => {
  cy.get(".flex.items-center.rounded-xl.cursor-pointer")
    .eq(10)
    .click();

  cy.contains("Logout").click();

//   cy.get('button[data-variant="delete"]').click();
});

const uniqueId = Date.now();
const BranchName = `Beauty Salon ${uniqueId}`;
const EditedBranchName = `Edited Salon ${uniqueId}`;
const Slug = `beauty-salon-${uniqueId}`;
const FirstName = `First${uniqueId}`;
const LastName = `Last${uniqueId}`;
const BranchEmail = `branch${uniqueId}@test.com`;
const AdminEmail = `admin${uniqueId}@test.com`;
const Phone = "977" + '98' + String(uniqueId).slice(-8);
const Password = "Password@123";


it("Verify Branch CRUD Functionality", () => {

  // 4.1 Navigate to Add Branch
  cy.xpath(branchlocator.AddBranch).click({ force: true });
  cy.url().should("include", "/branches/add");

  // 4.2 Create branch
  cy.get(branchlocator.BranchName).type(BranchName);
  cy.get(branchlocator.Slug).type(Slug);
  cy.log(`Phone: ${Phone}`);
  cy.log(`Phone length: ${Phone.length}`);
  cy.get(branchlocator.BranchPhone).eq(0).clear().type("Nepal").type(Phone);
  cy.get(branchlocator.BranchEmail).type(BranchEmail);

  cy.xpath(branchlocator.Status).click();

  cy.get('button[role="combobox"]')
    .filter(':has(span[data-slot="select-value"])')
    .then(($btn) => {
      if ($btn.attr("aria-expanded") === "false") {
        cy.wrap($btn).click();
      }
    });

  cy.get('[role="option"]').contains(/^Active$/).click({ force: true });

  cy.get(branchlocator.Address).type("Kathmandu, Nepal");
  cy.get(branchlocator.FirstName).type(FirstName);
  cy.get(branchlocator.LastName).type(LastName);
  cy.get(branchlocator.AdminEmail).type(AdminEmail);
  cy.get(branchlocator.Password).type(Password);
  cy.log(`Phone: ${Phone}`);
  cy.log(`Phone length: ${Phone.length}`);
  cy.get(branchlocator.AdminPhone).eq(1).clear().type("Nepal").type(Phone);

  cy.xpath(branchlocator.CreateBranch).click();

  cy.get("body").should("contain.text", BranchName);

  // 4.3 Edit branch
  cy.xpath(search.SearchField).type(BranchName);
  cy.get("body").should("contain.text", BranchName);

  cy.xpath(branchlocator.EditBranch).click({ force: true });

  cy.get("body").should("contain.text", "Save Changes");

  cy.get(branchlocator.BranchName)
    .clear()
    .type(`Edited Salon ${uniqueId}`);

  cy.xpath(branchlocator.UpdateBranch).click({ force: true });

  // 4.4 Delete branch
  cy.xpath(search.SearchField)
    .clear()
    .type(`Edited Salon ${uniqueId}`);

  cy.get("body").should("contain.text", `Edited Salon ${uniqueId}`);
  // Select the branch checkbox
  cy.xpath(
  `//tbody/tr[contains(., "Edited Salon ${uniqueId}")]//button[@aria-label="Select row"]`
  ).click({ force: true });
  cy.xpath('//button[normalize-space()="Delete"]')
  .should("be.visible")
  .click({ force: true });

  // cy.xpath(branchlocator.DeleteBranch).first().click({ force: true });
  // cy.wait(1000);
  cy.xpath(branchlocator.ConfirmDelete).type("Delete Branch");

  cy.xpath(branchlocator.Delete).click();

  cy.xpath(search.SearchField).clear().type(BranchName, { force:true});

  cy.get("body").should(
    "not.contain.text",
    `Edited Salon ${uniqueId}`
  );
});
// //Navigate to Add Branch section
// it("Verify navigation to Add Branch", () => {
// cy.xpath(branchlocator.AddBranch).click({ force: true });
// cy.url().should("include", "/branches/add");
// });

// //Create branch with valid details
// it("Verify branch creation with valid data", () => {
// // cy.xpath(branchlocator.AddBranch).click({ force: true });
// cy.get(branchlocator.BranchName).type(BranchName);
// cy.get(branchlocator.Slug).type(Slug);
// cy.get(branchlocator.BranchPhone).eq(0).clear().type("+977").type(Phone);
// cy.get(branchlocator.BranchEmail).type(BranchEmail);
// cy.xpath(branchlocator.Status).click();
// cy.get('button[role="combobox"]')
// .filter(':has(span[data-slot="select-value"])')
// .then(($btn) => {
//     if ($btn.attr("aria-expanded") === "false") {
//         cy.wrap($btn).click();
//     }
// });
// cy.get('[role="option"]').contains(/^Active$/).click({ force: true });
// cy.get(branchlocator.Address).type("Kathmandu, Nepal");
// cy.get(branchlocator.FirstName).type(FirstName);
// cy.get(branchlocator.LastName).type(LastName);
// cy.get(branchlocator.AdminEmail).type(AdminEmail);
// cy.get(branchlocator.Password).type(Password);
// cy.get(branchlocator.AdminPhone).eq(1).clear().type("+977").type(Phone);
// cy.xpath(branchlocator.CreateBranch).click();
// cy.get("body").should("contain.text", BranchName);
// });

// //Edit existing branch
// it("Verify edit of branch function", () => {
// cy.log(BranchName);
// cy.xpath(search.searchclick).type(BranchName);
// cy.get("body").should("contain.text", BranchName);
// cy.xpath(branchlocator.EditBranch).click({ force: true });
// cy.get("body").should("contain.text", "Save Changes");
// cy.get(branchlocator.BranchName).clear().type(EditedBranchName);
// cy.xpath(branchlocator.UpdateBranch).click({ force: true });
// cy.get("body").should("contain.text", "Branch");
// });

// //Delete existing branch
// it("Verify deletion of branch function", () => {
// cy.xpath(search.searchclick).type(EditedBranchName);
// cy.get("body").should("contain.text", EditedBranchName);
// cy.xpath(branchlocator.DeleteBranch).click({ force: true });
// cy.xpath(branchlocator.ConfirmDelete).type("Delete Branch");
// cy.xpath(branchlocator.Delete).click();
// cy.xpath(search.searchclick).clear();
// cy.get("body").should("not.contain.text", 'Edited salon ${uniqueID}');
// });
});
