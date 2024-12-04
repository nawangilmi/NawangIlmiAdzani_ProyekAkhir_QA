import { PIMPageList,AddPIMPage,EditPIMPage } from "../../fixtures/pages/pim_page.cy.js"
import { Menu } from "../../fixtures/pages/menu.cy.js"
import { LoginPage } from "../../fixtures/pages/login_page.cy.js"

let addPIMPage = new AddPIMPage()
let menu = new Menu()
let loginPage = new LoginPage()
let listPIMPage = new PIMPageList()
let editPIMPage = new EditPIMPage()

const validimgPath = 'image-test/validimg.jpg';
const invalidfiletypeimgPath = 'image-test/invalidfiletypeimg.webp';
const invalidsizeimgPath = 'image-test/invalidsizeimg.png';

before(() => {
    cy.clearAllCookies();
    loginPage.navigateLoginPage();
    loginPage.fillusernameField(Cypress.env('valid_username'));
    loginPage.fillPasswordField(Cypress.env('valid_password'));
    loginPage.clickLoginButton();
    cy.wait(1000);
});

describe('Add Employee Page (Login details switch off)', { testIsolation: false }, () => {
    beforeEach(() => {
        menu.navigatePIMPage();
        addPIMPage.clickAddPIM();
        cy.wait(1000);
    });

    it('Add Employee with Valid Data', () => {
        addPIMPage.uploadAvatarImage(validimgPath);
        addPIMPage.fillFirstNameField("Maura");
        addPIMPage.fillMiddleNameField("Asyafa");
        addPIMPage.fillLastNameField("Farmai");
        addPIMPage.fillIdEmployeeField("0567");
        addPIMPage.clickSaveButton();
        cy.wait(13000);
        addPIMPage.validateAddPIMSuccess("Maura","Farmai");
    });

    it('Add Employee with Same ID', () => {
        addPIMPage.fillFirstNameField("Zazu");
        addPIMPage.fillLastNameField("Juju");
        addPIMPage.fillIdEmployeeField("0567");
        addPIMPage.clickSaveButton();
        cy.wait(1000);
        addPIMPage.validateDoubleID();
    });

    it('Add Employee with Missing Name', () => {
        addPIMPage.clickSaveButton();
        cy.wait(1000);
        addPIMPage.validateRequiredField();
    });

    it('Add Employee with Missing Id', () => {
        addPIMPage.fillFirstNameField("Maura");
        addPIMPage.fillLastNameField("Farmai");
        addPIMPage.clearIdEmployeeField()
        addPIMPage.clickSaveButton();
        cy.wait(1000);
        addPIMPage.validateRequiredField();
    });

    it('Add Employee with Letters ID', () => {
        addPIMPage.fillFirstNameField("Maura");
        addPIMPage.fillLastNameField("Farmai");
        addPIMPage.fillIdEmployeeField("AHSJDN");
        addPIMPage.clickSaveButton();
        cy.wait(1000);
        addPIMPage.validateLettersID();
    });

    it('Add Employee with ID exceed 10 characters ', () => {
        addPIMPage.fillFirstNameField("Maura");
        addPIMPage.fillLastNameField("Farmai");
        addPIMPage.fillIdEmployeeField("0418924829489284298298439383948");
        addPIMPage.clickSaveButton();
        cy.wait(1000);
        addPIMPage.validateMaximumID();
    });

    it('Add Employee Image with invalid file type', () => {
        addPIMPage.uploadAvatarImage(invalidfiletypeimgPath );
        cy.wait(1000);
        addPIMPage.validateImageInvalidFileType();
    });

    it('Add Employee Image with invalid file size', () => {
        addPIMPage.uploadAvatarImage(invalidsizeimgPath);
        cy.wait(1000);
        addPIMPage.validateImageInvalidSize();
    });

    it('Click Cancel Button', () => {
        addPIMPage.clickCancelButton();
        cy.wait(1000);
        addPIMPage.validateCancelButton();
    });
});

describe('Add Employee Page (Login details switch On)', { testIsolation: false }, () => {
    beforeEach(() => {
        menu.navigatePIMPage();
        addPIMPage.clickAddPIM();
        cy.wait(5000);
        addPIMPage.fillFirstNameField("Maura");
        addPIMPage.fillLastNameField("Farmai");
        addPIMPage.fillIdEmployeeField("0899");
        addPIMPage.switchCreateLoginDetails();
    });

    it('Add Employee with Valid Login Details Data', () => {
        addPIMPage.fillUsernameEmployeeField(Cypress.env('valid_pim_username_1'));
        addPIMPage.fillPasswordEmployeeField(Cypress.env('valid_pim_password'));
        addPIMPage.fillConfirmPasswordEmployeeField(Cypress.env('valid_pim_password'));
        addPIMPage.clickSaveButton();
        cy.wait(13000);
        addPIMPage.validateAddPIMSuccess("Maura", "Farmai");
    });

    it('Add Employee with Missing Username and Password', () => {
        addPIMPage.clickSaveButton();
        addPIMPage.validateRequiredField();
    });

    it('Add Employee with Username less than 5 Characters', () => {
        addPIMPage.fillUsernameEmployeeField(Cypress.env('invalid_pim_username'));
        addPIMPage.fillPasswordEmployeeField(Cypress.env('valid_pim_password'));
        addPIMPage.fillConfirmPasswordEmployeeField(Cypress.env('valid_pim_password'));
        addPIMPage.clickSaveButton();
        addPIMPage.validateUsernameMinimumCharacters();
    });

    it('Add Employee with Double Username', () => {
        addPIMPage.fillUsernameEmployeeField(Cypress.env('valid_pim_username_1'));
        addPIMPage.fillPasswordEmployeeField(Cypress.env('valid_pim_password'));
        addPIMPage.fillConfirmPasswordEmployeeField(Cypress.env('valid_pim_password'));
        addPIMPage.clickSaveButton();
        addPIMPage.validateDoubleUsername();
    });

    const passwordTests = [
        { description: 'less than 7 characters', password: Cypress.env('invalid_pim_lesschar_password'), validation: 'validatePasswordMinimumCharacters' },
        { description: 'no numbers', password: Cypress.env('invalid_pim_nonum_password'), validation: 'validatePasswordMinimumNumber' },
        { description: 'no letters', password: Cypress.env('invalid_pim_noletters_password'), validation: 'validatePasswordMinimumLetter' },
        { description: 'no uppercase letters', password: Cypress.env('invalid_pim_noupper_password'), validation: 'validatePasswordMinimumUppercaseLetter' },
        { description: 'no lowercase letters', password: Cypress.env('invalid_pim_nolower_password'), validation: 'validatePasswordMinimumLowercaseLetter' },
        { description: 'no symbols', password: Cypress.env('invalid_pim_nosymbol_password'), validation: 'validatePasswordMinimumSymbol' },
        { description: 'different password confirmation', password: Cypress.env('invalid_pim_confirm_password'), confirmPassword: (Cypress.env('valid_pim_password')), validation: 'validateDifferentConfirmPassword' }
    ];

    passwordTests.forEach(({ description, password, confirmPassword = password, validation }) => {
        it(`Add Employee with Password that have ${description}`, () => {
            addPIMPage.fillUsernameEmployeeField(Cypress.env('valid_pim_username_2'));
            addPIMPage.fillPasswordEmployeeField(password);
            addPIMPage.fillConfirmPasswordEmployeeField(confirmPassword);
            addPIMPage.clickSaveButton();
            addPIMPage[validation]();
        });
    });
});

describe('PIM List Page', { testIsolation: false }, () => {
    beforeEach(() => {
        menu.navigatePIMPage();
    });

    function handleSearchSectionAction() {
        return listPIMPage.validateSearchSection().then((isValid) => {
          if (!isValid) {
            listPIMPage.clickSearchSectionButtonDown();
            return listPIMPage.validateSearchSection();
          }
          return isValid;
        });
      }
      
      it('Search Employee by Id Only', () => {
        handleSearchSectionAction().then((isValid) => {
          if (isValid) {
            listPIMPage.fillIDSearchField("0567");
            listPIMPage.clickSearchButton();
            cy.wait(2000);
            listPIMPage.validateSearchDatabyId("0567");
          } else {
            throw new Error("Search section could not be validated.");
          }
        });
      });

      it('Search Employee by Name Only', () => {
        handleSearchSectionAction().then((isValid) => {
          if (isValid) {
            listPIMPage.fillNameSearchField("Maura");
            listPIMPage.clickSearchButton();
            cy.wait(2000);
            listPIMPage.validateSearchDatabyName("Maura");
          } else {
            throw new Error("Search section could not be validated.");
          }
        });
      });


      it('Search Employee by Name And Id', () => {
        handleSearchSectionAction().then((isValid) => {
          if (isValid) {
            listPIMPage.fillNameSearchField("Maura");
            listPIMPage.fillIDSearchField("0567");
            listPIMPage.clickSearchButton();
            cy.wait(2000);
            listPIMPage.validateSearchDatabyName("Maura");
            listPIMPage.validateSearchDatabyId("0567");
          } else {
            throw new Error("Search section could not be validated.");
          }
        });
      });

      it('Edit Employee', () => {
        handleSearchSectionAction().then((isValid) => {
            if (isValid) {
                listPIMPage.fillIDSearchField("0567");
                listPIMPage.clickSearchButton();
                cy.wait(2000);
            } else {
              throw new Error("Search section could not be validated.");
            }
          });
        listPIMPage.clickEditButton("0567");
        cy.wait(1000);
        editPIMPage.fillMiddleNameField("Asyifa");
        editPIMPage.fillIdEmployeeField("0976");
        editPIMPage.clickSaveButton();
        menu.navigatePIMPage();
        handleSearchSectionAction().then((isValid) => {
            if (isValid) {
              listPIMPage.fillIDSearchField("0976");
              listPIMPage.clickSearchButton();
              cy.wait(2000);
              listPIMPage.validateSearchDatabyName("Asyifa");
              listPIMPage.validateSearchDatabyId("0976");
            } else {
              throw new Error("Search section could not be validated.");
            }
          });
    });

    it('Delete an Employee but cancelling the deletion', () => {
        handleSearchSectionAction().then((isValid) => {
            if (isValid) {
                listPIMPage.fillIDSearchField("0976");
                listPIMPage.clickSearchButton();
                cy.wait(2000);
            } else {
              throw new Error("Search section could not be validated.");
            }
          });
        listPIMPage.clickDeleteButton("0976");
        cy.wait(2000);
        listPIMPage.clickCancelDeleteButton();
        cy.wait(2000);
        listPIMPage.validateSearchDatabyId("0976");
    });

    it('Delete an Employee but Close the delete popup confirmation', () => {
        handleSearchSectionAction().then((isValid) => {
            if (isValid) {
                listPIMPage.fillIDSearchField("0976");
                listPIMPage.clickSearchButton();
            } else {
              throw new Error("Search section could not be validated.");
            }
          });
        listPIMPage.clickDeleteButton("0976");
        cy.wait(2000);
        listPIMPage.clickCloseDeleteButton();
        cy.wait(2000);
        listPIMPage.validateSearchDatabyId("0976");
    });

    it('Delete an Employee', () => {
        handleSearchSectionAction().then((isValid) => {
            if (isValid) {
                listPIMPage.fillIDSearchField("0976");
                listPIMPage.clickSearchButton();
                cy.wait(2000);
            } else {
              throw new Error("Search section could not be validated.");
            }
          });
        listPIMPage.clickDeleteButton("0976");
        cy.wait(2000);
        listPIMPage.clickConfirmDeleteButton();
        cy.wait(3000);
        listPIMPage.validateDeletedData();
    });

    it('Delete Mutiple Employees', () => {
        handleSearchSectionAction().then((isValid) => {
            if (isValid) {
                listPIMPage.fillNameSearchField("Maura");
                listPIMPage.clickSearchButton();
                cy.wait(2000);
            } else {
              throw new Error("Search section could not be validated.");
            }
          });
        listPIMPage.clickCheckboxesAll();
        listPIMPage.clickDeletedSelectedButton();
        cy.wait(2000);
        listPIMPage.clickConfirmDeleteButton();
        cy.wait(3000);
        listPIMPage.validateDeletedData();
    });
});