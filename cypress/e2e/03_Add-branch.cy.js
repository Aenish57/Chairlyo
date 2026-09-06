//** 3. Add Branch **//
// 3.1 Verify Add Branch section opens

describe('Add Branch', () => {

//Login and open Add Branch section
  it('Should open Add Branch section', () => {
    cy.visit('/login')
    cy.get('#email').type('skilladmin@test.com')
    cy.get("input[name='password']").type('Skill@123')
    cy.get("button[type='submit']").click()
    cy.contains("button", "Add Branch")
    .filter(":visible")
    .first()
    .click();
  })

})
