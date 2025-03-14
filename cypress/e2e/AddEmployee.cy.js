import Login from "../PageObjects/LoginPage";
import { faker } from "@faker-js/faker";
import PimPage from "../PageObjects/PimPage";

const ln = new Login();
const pp = new PimPage();

describe("navigation Test to PIM page and Click Add Employee Button", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    ln.setUsername("Admin");
    ln.setPassword("admin123");
    ln.clickSubmit();
    pp.verifyPimPageisLoaded();
    pp.ClickandVerifyAddEmployee("/pim/addEmployee");
  });

  it("Add Employee Details", () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    pp.addRequiredEmployeeDetails(firstName, lastName);

    pp.validateEmployeeDetails("/pim/viewPersonalDetails", firstName, lastName);
  });
});
