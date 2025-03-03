import DashboardPage from "../PageObjects/DashboardPage";
import Login from "../PageObjects/LoginPage";

const ln = new Login();
const db = new DashboardPage();

//First Test
describe("Navigation Test from Dashboard", () => {
  // it("Login Authentication", () => {
  //   cy.visit(
  //     "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  //   );

  //   ln.setUsername("Admin");
  //   ln.setPassword("admin123");
  //   ln.clickSubmit();
  //   db.verifyDashboardisLoaded();
  // });

  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    ln.setUsername("Admin");
    ln.setPassword("admin123");
    ln.clickSubmit();
    db.verifyDashboardisLoaded();
  });

  it("navigation Test to Admin Page", () => {
    db.navigateTo(
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers",

      "Admin",
      "/admin/viewSystemUsers"
    );
    db.validateNavigation("Admin", "/admin/viewSystemUsers");
  });

  it("navigation Test to PIM Page", () => {
    db.navigateTo(
      "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList",

      "PIM",
      "/pim/viewEmployeeList"
    );
    db.validateNavigation("PIM", "/pim/viewEmployeeList");
  });

  it("navigation Test to Leave Page", () => {
    db.navigateTo(
      "https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList",

      "Leave",
      "/leave/viewLeaveList"
    );
    db.validateNavigation("Leave", "/leave/viewLeaveList");
  });

  it("navigation Test to Leave Page", () => {
    db.navigateTo(
      "https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet",

      "Time",
      "/time/viewEmployeeTimesheet"
    );
    db.validateNavigation("Time", "/time/viewEmployeeTimesheet");
  });
});
