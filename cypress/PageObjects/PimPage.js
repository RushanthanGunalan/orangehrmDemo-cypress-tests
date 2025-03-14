class PimPage {
  verifyPimPageisLoaded() {
    cy.get("span.oxd-text.oxd-text--span.oxd-main-menu-item--name")
      .contains("PIM")
      .click();

    cy.url().should("include", "/pim/viewEmployeeList");

    // cy.get(
    //   "h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"
    // ).should("include", "PIM");
  }

  ClickandVerifyAddEmployee(urlFragment) {
    cy.get(
      "button[class='oxd-button oxd-button--medium oxd-button--secondary']"
    ).click();

    cy.url().should("include", urlFragment);
  }

  addRequiredEmployeeDetails(firstName, lastName) {
    cy.get("input[placeholder='First Name']").type(firstName);
    cy.get("input[placeholder='Last Name']").type(lastName);
    cy.get("button[type='submit']").click();
  }

  validateEmployeeDetails(urlFragment, firstName, lastName) {
    cy.url().should("include", urlFragment);

    cy.get("input[placeholder='First Name']").should("have.value", firstName);
    cy.get("input[placeholder='Last Name']").should("have.value", lastName);

    cy.get(".oxd-text.oxd-text--h6.--strong")
      .should("contain", firstName)
      .should("contain", lastName);
  }
}

export default PimPage;
