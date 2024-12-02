import login from "../../fixtures/elements/login_elements.js";


export class LoginPage{
    navigateLoginPage() {
        const urlOrangeHRM = Cypress.env('base_url');
        cy.log(urlOrangeHRM);
        cy.visit(urlOrangeHRM);
    }

    fillusernameField(usernameData) {
        const usernameField = cy.xpath(login.usernameField).as('usernameield');
        usernameField.type(usernameData);
    }

    fillPasswordField(passwordData) {
        const passwordField = cy.xpath(login.passwordField).as('passwordField');
        passwordField.type(passwordData);
    }

    clickLoginButton() {
        const LoginButton = cy.xpath(login.loginBtn).as('LoginButton');
        LoginButton.click();
    }

    redirectForgotPassword() {
        const forgotpasswordButton = cy.xpath(login.forgotpasswordBtn).as('forgotpasswordButton');
        forgotpasswordButton.click();
    }

    validateLoginSuccess() {
        cy.url().should('eq', `${Cypress.env('base_url')}dashboard/index`);
    }

    validateLoginUnsuccess() {
        cy.xpath(login.invalidMessage).should('be.visible').contains("Invalid credentials");
    }

    validateRequiredField() {
        cy.xpath(login.requiredMessage).should('be.visible').contains("Required");
    }

}
