import forgot_password from "../elements/forgotpassword_elements.js";


export class ForgotPasswordPage{
    fillusernameField(usernameData) {
        const usernameField = cy.xpath(forgot_password.usernameField).as('usernameield');
        usernameField.type(usernameData);
    }

    clickcancelButton() {
        const CancelButton = cy.xpath(forgot_password.cancelBtn).as('CancelButton');
        CancelButton.click();
    }

    clickresetpasswordButton() {
        const ResetPasswordButton = cy.xpath(forgot_password.resetpasswordBtn).as('ResetPasswordButton');
        ResetPasswordButton.click();
    }

    validateForgotPasswordSuccess() {
        cy.xpath(forgot_password.successMessage).should('be.visible').contains("Reset Password link sent successfully");
    }

    validateForgotPasswordSuccess() {
        cy.xpath(forgot_password.successMessage).should('be.visible').contains("Reset Password link sent successfully");
    }

    validateForgotPasswordUnsuccess() {
        cy.xpath(forgot_password.successMessage).should('be.visible').contains("Username not found!");
    }

    validateCancelButton() {
        cy.url().should('eq', `${Cypress.env('base_url')}auth/login`);
    }
}
