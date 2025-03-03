import AdminPage from "../PageObjects/AdminPage";
import Login from "../PageObjects/LoginPage";

const ln = new Login();
const ap = new AdminPage();

describe("navigation Test to Sub sections of Admin Page", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    ln.setUsername("Admin");
    ln.setPassword("admin123");
    ln.clickSubmit();
    ap.verifyAdminPageisLoaded();
  });

  it("Add User from Save User URL", () => {
    ap.clickAddandVerifyURL("/admin/saveSystemUser");
    ap.AddUserRoleandVerify("Admin");
  });
});
