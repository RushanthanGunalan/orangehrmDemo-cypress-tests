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

  it("Add Employee Details with only required fields", () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const middleName = faker.person.middleName();

    pp.addRequiredEmployeeDetails(firstName, lastName);

    pp.validateEmployeeDetails(
      "/pim/viewPersonalDetails",
      firstName,
      lastName,
      "" // empty string instead of middleName Params
    );
  });

  it("Add Employee Details with optional fields", () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const middleName = faker.person.middleName();

    pp.addRequiredEmployeeDetails(firstName, lastName);

    if (middleName) {
      pp.addOptionalEmployeeDetails(middleName);
    }

    pp.validateEmployeeDetails(
      "/pim/viewPersonalDetails",
      firstName,
      lastName,
      middleName || ""
    );
  });

  it("Add Employee Details with optional fields", () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const userName = faker.internet.username();
    const passWord = faker.internet.password((length = 7));
    const randomID = faker.string.alphanumeric(6);

    pp.addRequiredEmployeeDetails(firstName, lastName);

    pp.createLoginDetails(randomID, userName, passWord, passWord, false);

    cy.wait(5000); // Wait for 5 seconds (2000ms)

    pp.validateEmployeeDetails("/pim/viewPersonalDetails", firstName, lastName);

    pp.validateLoginDetails(userName, passWord, firstName, lastName);
  });
});
