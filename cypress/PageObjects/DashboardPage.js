class DashboardPage {
  verifyDashboardisLoaded() {
    cy.url().should("include", "/dashboard/index");
    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should(
      "have.text",
      "Dashboard"
    );
  }

  navigateTo(url, pageName, urlFragment) {
    cy.visit(url);
    cy.get(
      "a[class='oxd-main-menu-item active'] span[class='oxd-text oxd-text--span oxd-main-menu-item--name']"
    )
      .should("have.text", pageName)
      .click();
    cy.url().should("include", urlFragment);
  }

  validateNavigation(pageName, urlFragment) {
    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should(
      "have.text",
      pageName
    );
    cy.url().should("include", urlFragment);
  }
}

export default DashboardPage;
