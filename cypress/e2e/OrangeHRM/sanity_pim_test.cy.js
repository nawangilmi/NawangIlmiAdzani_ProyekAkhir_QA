import { PIMPage } from "../../fixtures/pages/pim_page.cy.js"
import { Menu } from "../../fixtures/pages/menu.cy.js"
import { LoginPage } from "../../fixtures/pages/login_page.cy.js"

let pimPage = new PIMPage()
let menu = new Menu()
let loginPage = new LoginPage()

before(() => {
    cy.clearAllCookies();
    loginPage.navigateLoginPage();
    loginPage.fillusernameField(Cypress.env('valid_username'));
    loginPage.fillPasswordField(Cypress.env('valid_password'));
    loginPage.clickLoginButton();
    cy.wait(1000);
});

describe('Add Employee Page', { testIsolation: false }, () => {
    beforeEach(() => {
        menu.navigatePIMPage();
        pimPage.clickAddPIM();
        cy.wait(3000);
    });

    it('Add Employee with Valid Data', () => {
        pimPage.fillFirstName("Maura");
        pimPage.fillMiddleName("Asyafa");
        pimPage.fillLastName("Farmai");
        pimPage.fillIdEmployee("0567");
        pimPage.clickSaveButton();
        cy.wait(10000);
        pimPage.validateAddPIMSuccess();
    });

    it('Add Employee with Same ID', () => {
        pimPage.fillFirstName("Zazu");
        pimPage.fillLastName("Juju");
        pimPage.fillIdEmployee("0567");
        pimPage.clickSaveButton();
        cy.wait(10000);
        pimPage.validateDoubleIDSuccess();
    });

    it('Add Employee with Missing Data', () => {
        pimPage.fillIdEmployee(" ");
        pimPage.clickSaveButton();
        cy.wait(3000);
        pimPage.validateRequiredNameSuccess();
    });
});