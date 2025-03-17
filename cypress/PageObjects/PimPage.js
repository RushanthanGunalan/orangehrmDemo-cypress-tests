import Login from "./LoginPage";

const eln = new Login();

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

  addEmployeeDetails(firstName, lastName, middleName = "") {
    cy.get("input[placeholder='First Name']").type(firstName);
    cy.get("input[placeholder='Last Name']").type(lastName);
    // cy.get("button[type='submit']").click();
    if (middleName) {
      cy.get("input[placeholder='Middle Name']").type(middleName);
    }

    cy.get("button[type='submit']").click();
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

  createLoginDetailsWithStatusEnabled(randomID, userName, passWord) {
    cy.get(
      "span.oxd-switch-input.oxd-switch-input--active.--label-right"
    ).click();

    cy.get(
      "div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']"
    )
      .eq(0)
      .type(randomID);

    // cy.get(
    //   "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)"
    // ).type(userName);
    cy.xpath(
      "//body/div[@id='app']/div[@class='oxd-layout orangehrm-upgrade-layout']/div[@class='oxd-layout-container']/div[@class='oxd-layout-context']/div[@class='orangehrm-background-container']/div[@class='orangehrm-card-container']/form[@class='oxd-form']/div[@class='orangehrm-employee-container']/div[@class='orangehrm-employee-form']/div[@class='oxd-form-row']/div[1]/div[1]/div[1]/div[2]/input[1]"
    ).type(userName);

    cy.get('input[type="password"]').eq(0).type(passWord);
    cy.get('input[type="password"]').eq(1).type(passWord);

    cy.xpath("//label[normalize-space()='Enabled']").click();

    cy.get("button[type='submit']").click();
  }

  createLoginDetailsWithStatusDisabled(randomID, userName, passWord) {
    cy.get(
      "span.oxd-switch-input.oxd-switch-input--active.--label-right"
    ).click();

    cy.get(
      "div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']"
    )
      .eq(0)
      .type(randomID);

    // cy.get(
    //   "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)"
    // ).type(userName);
    cy.xpath(
      "//body/div[@id='app']/div[@class='oxd-layout orangehrm-upgrade-layout']/div[@class='oxd-layout-container']/div[@class='oxd-layout-context']/div[@class='orangehrm-background-container']/div[@class='orangehrm-card-container']/form[@class='oxd-form']/div[@class='orangehrm-employee-container']/div[@class='orangehrm-employee-form']/div[@class='oxd-form-row']/div[1]/div[1]/div[1]/div[2]/input[1]"
    ).type(userName);

    cy.get('input[type="password"]').eq(0).type(passWord);
    cy.get('input[type="password"]').eq(1).type(passWord);

    cy.xpath("//label[normalize-space()='Disabled']").click();

    cy.get("button[type='submit']").click();
  }

  validateLoginDetails(userName, passWord, firstName, lastName) {
    cy.get("p.oxd-userdropdown-name").click();

    cy.get(
      "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)"
    ).click();

    eln.setUsername(userName);
    eln.setPassword(passWord);
    eln.clickSubmit();

    cy.get("p.oxd-userdropdown-name")
      .should("contain", firstName)
      .should("contain", lastName);
  }

  disabledLoginDetails(userName, passWord) {
    cy.get("p.oxd-userdropdown-name").click();

    cy.get(
      "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)"
    ).click();

    eln.setUsername(userName);
    eln.setPassword(passWord);
    eln.clickSubmit();

    cy.xpath("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']", {
      timeout: 5000,
    }).should("be.visible");
  }
}

export default PimPage;
