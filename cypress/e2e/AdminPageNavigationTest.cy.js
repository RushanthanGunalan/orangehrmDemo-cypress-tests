import AdminPage from "../PageObjects/AdminPage";
import DashboardPage from "../PageObjects/DashboardPage";
import Login from "../PageObjects/LoginPage";

const ln = new Login();
const db = new DashboardPage();
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

  it("navigation Test to Admin>Job(Job Titles)", () => {
    ap.navigateTo(
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList",
      "/admin/viewJobTitleList",
      "Job"
    );

    ap.validateNavigation("Job Titles", "/admin/viewJobTitleList");
  });

  it("navigation Test to Admin>Job(Pay Grades)", () => {
    ap.navigateTo(
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewPayGrades",
      "/admin/viewPayGrades",
      "Job"
    );

    ap.validateNavigation("Pay Grades", "/admin/viewPayGrades");
  });
  it("navigation Test to Admin>Job(Employment Status)", () => {
    ap.navigateTo(
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/employmentStatus",
      "/admin/employmentStatus",
      "Job"
    );

    ap.validateNavigation("Employment Status", "/admin/employmentStatus");
  });

  it("navigation Test to Admin>Job(Job Categories)", () => {
    ap.navigateTo(
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/jobCategory",
      "/admin/jobCategory",
      "Job"
    );

    ap.validateNavigation("Job Categories", "/admin/jobCategory");
  });

  it("navigation Test to Admin>Job(Work Shifts)", () => {
    ap.navigateTo(
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/workShift",
      "/admin/workShift",
      "Job"
    );

    ap.validateNavigation("Work Shifts", "/admin/workShift");
  });
});
