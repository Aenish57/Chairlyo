import { loginlocator } from "./locator";
Cypress.Commands.add("login", () => {
  cy.env(["USERNAME"]).then((env) => {
  cy.get(loginlocator.email).should("be.visible").and("not.be.disabled").type(env.USERNAME);
});

  cy.env(["PASSWORD"]).then((env) => {
  cy.get(loginlocator.password).clear().should("be.visible").and("not.be.disabled").type(env.PASSWORD);
});

  cy.xpath(loginlocator.login).should("be.visible").and("not.be.disabled").click();
});

// BranchAdminLogin

Cypress.Commands.add("BranchAdminLogin", () => {
  cy.env(["BRANCH_ADMIN_EMAIL", "BRANCH_ADMIN_PASSWORD"]).then((env) => {

    cy.get(loginlocator.email)
      .should("be.visible")
      .and("not.be.disabled")
      .clear()
      .type(env.BRANCH_ADMIN_EMAIL);

  cy.get(loginlocator.password)
      .should("be.visible")
      .and("not.be.disabled")
      .clear()
      .type(env.BRANCH_ADMIN_PASSWORD);

    cy.xpath(loginlocator.login)
      .should("be.visible")
      .and("not.be.disabled")
      .click();

  });

});

// Slow down every click by 500ms
Cypress.Commands.overwrite("click", (originalFn, ...args) => {
  return originalFn(...args).then(() => {
    return new Cypress.Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  });
});