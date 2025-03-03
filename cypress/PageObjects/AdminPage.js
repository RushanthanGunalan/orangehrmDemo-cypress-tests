class AdminPage {
  verifyAdminPageisLoaded() {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"
    );
    cy.url().should("include", "/admin/viewSystemUsers");
    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-level").should(
      "have.text",
      "User Management"
    );
  }

  navigateTo(url, urlFragment, breadcrumbName) {
    cy.visit(url);

    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-level").should(
      "have.text",
      breadcrumbName
    );
    cy.url().should("include", urlFragment);
  }

  validateNavigation(pageName, urlFragment) {
    cy.get(".oxd-text.oxd-text--h6.orangehrm-main-title").should(
      "have.text",
      pageName
    );

    cy.url().should("include", urlFragment);
  }

  //Adding User from User Save URL

  clickAddandVerifyURL(urlFragment) {
    cy.get(
      "button[class='oxd-button oxd-button--medium oxd-button--secondary']"
    ).click();
    cy.url().should("include", urlFragment);
  }

  AddUserRoleandVerify(userRole) {
    cy.get(".oxd-select-text").eq(0).click(); //Pinpointing the locator of the first dropdown
  }
}

export default AdminPage;
