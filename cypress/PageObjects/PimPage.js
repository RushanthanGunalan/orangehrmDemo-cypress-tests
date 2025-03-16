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
    // cy.get("button[type='submit']").click();
  }

  addOptionalEmployeeDetails(middleName) {
    cy.get("input[placeholder='Middle Name']").type(middleName);
  }

  validateEmployeeDetails(urlFragment, firstName, lastName, middleName = "") {
    cy.url().should("include", urlFragment);

    cy.get("input[placeholder='First Name']").should("have.value", firstName);
    cy.get("input[placeholder='Last Name']").should("have.value", lastName);

    if (middleName) {
      cy.get("input[placeholder='Middle Name']").should(
        "have.value",
        middleName
      );
    }

    cy.get(".oxd-text.oxd-text--h6.--strong")
      .should("contain", firstName)
      .should("contain", lastName);
  }

  createLoginDetails(randomID, userName, passWord, checkStatus = true) {
    cy.get(
      "span.oxd-switch-input.oxd-switch-input--active.--label-right"
    ).click();

    cy.get(
      "div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']"
    )
      .eq(0)
      .type(randomID);

    cy.get(
      "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)"
    ).type(userName);
    cy.get('input[type="password"]').eq(0).type(passWord);
    cy.get('input[type="password"]').eq(1).type(passWord);

    // if (checkStatus) {
    //   cy.get("input[value = '1']").click();
    // } else {
    //   cy.get("input[value = '2']").click();
    // }

    cy.get("button[type='submit']").click();
  }

  validateLoginDetails(userName, passWord, firstName, lastName) {
    cy.get("p.oxd-userdropdown-name").click();

    cy.get(
      "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)"
    )
    .click();

    cy.get("input[placeholder='Username']").type(userName);

    cy.get("input[placeholder='Password']").type(passWord);

    cy.get("button[type='submit']").click();

    cy.get("p.oxd-userdropdown-name")
      .should("contain", firstName)
      .should("contain", lastName);
  }
}

export default PimPage;
