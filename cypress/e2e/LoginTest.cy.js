import Login from "./../PageObjects/LoginPage";

describe("First Login Test", () => {
  it("Login Authentication", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    const ln = new Login();
    ln.setUsername("Admin");
    ln.setPassword("admin123");
    ln.clickSubmit();
    ln.verifyLogin();
  });
});
