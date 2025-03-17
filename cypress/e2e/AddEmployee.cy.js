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

    pp.validateEmployeeDetails("/pim/viewPersonalDetails", firstName, lastName);
  });

  it("Add Employee Details with optional fields", () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const middleName = faker.person.middleName();

    pp.addEmployeeDetails(firstName, lastName, middleName);

    pp.validateEmployeeDetails(
      "/pim/viewPersonalDetails",
      firstName,
      lastName,
      middleName
    );
  });

  it("Add Employee Details with only required fields and Create Login Credentials", () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const userName = faker.internet.username();
    const passWord = faker.internet.password((length = 7));
    const randomID = faker.string.alphanumeric(6);

    pp.addEmployeeDetails(firstName, lastName);

    pp.createLoginDetails(randomID, userName, passWord, passWord, false);

    cy.wait(5000); // Wait for 5 seconds (2000ms)

    pp.validateEmployeeDetails("/pim/viewPersonalDetails", firstName, lastName);

    pp.validateLoginDetails(userName, passWord, firstName, lastName);
  });

  it("Add Employee Details with oe without optional fields as well and Create Login Credentials with status enabled", () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const middleName = faker.person.middleName();
    const userName = faker.internet.username();
    const passWord = faker.internet.password((length = 7));
    const randomID = faker.string.alphanumeric(6);

    pp.addEmployeeDetails(firstName, lastName, middleName);

    pp.createLoginDetailsWithStatusEnabled(
      randomID,
      userName,
      passWord,
      passWord
    );

    cy.wait(5000); // Wait for 5 seconds (2000ms)

    pp.validateEmployeeDetails(
      "/pim/viewPersonalDetails",
      firstName,
      lastName,
      middleName
    );

    pp.validateLoginDetails(userName, passWord, firstName, lastName);
  });

  it("Add Employee Details with or without Optional fields and Create Login Credentials with status disabled", () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    // const middleName = faker.person.middleName();
    const userName = faker.internet.username();
    const passWord = faker.internet.password((length = 7));
    const randomID = faker.string.alphanumeric(6);

    pp.addEmployeeDetails(firstName, lastName /*middleName*/);

    pp.createLoginDetailsWithStatusDisabled(
      randomID,
      userName,
      passWord,
      passWord
    );

    cy.wait(5000); // Wait for 5 seconds (2000ms)

    pp.validateEmployeeDetails(
      "/pim/viewPersonalDetails",
      firstName,
      lastName
      // middleName
    );

    pp.disabledLoginDetails(userName, passWord, firstName, lastName);
  });
});
