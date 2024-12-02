
import { LoginPage } from "../../fixtures/pages/login_page.cy.js"
import { ForgotPasswordPage } from "../../fixtures/pages/forgetpassword_page.cy.js"

let loginPage = new LoginPage()
let forgotpasswordPage = new ForgotPasswordPage()

before(() => {
    cy.clearAllCookies();
});

describe('Forgot Password Page', { testIsolation: false }, () => {
    beforeEach(() => {
        loginPage.navigateLoginPage();
        loginPage.redirectForgotPassword();
    });

    it('Click Cancel Button', () => {
        forgotpasswordPage.clickcancelButton();
        forgotpasswordPage.validateCancelButton();
    });

    it('Forgot Password with valid username', () => {
        forgotpasswordPage.fillusernameField(Cypress.env('valid_username'));
        forgotpasswordPage.clickresetpasswordButton();
        cy.wait(3000);
        forgotpasswordPage.validateForgotPasswordSuccess();
    });

    it('Forgot Password with invalid username', () => {
        forgotpasswordPage.fillusernameField(Cypress.env('invalid_username'));
        forgotpasswordPage.clickresetpasswordButton();
        cy.wait(3000);
        forgotpasswordPage.validateForgotPasswordUnsuccess();
    });
});

describe('Login Page', { testIsolation: false }, () => {
    beforeEach(() => {
        loginPage.navigateLoginPage();
    });

    it('Click login button without filled the field', () => {
        loginPage.clickLoginButton();
        cy.wait(1000);
        loginPage.validateRequiredField();
    });

    it('Login with invalid credentials', () => {
        loginPage.fillusernameField(Cypress.env('invalid_username'));
        loginPage.fillPasswordField(Cypress.env('invalid_password'));
        loginPage.clickLoginButton();
        cy.wait(1000);
        loginPage.validateLoginUnsuccess();
    });

    it('Login with valid credentials', () => {
        loginPage.fillusernameField(Cypress.env('valid_username'));
        loginPage.fillPasswordField(Cypress.env('valid_password'));
        loginPage.clickLoginButton();
        cy.wait(1000);
        loginPage.validateLoginSuccess();
    });
});