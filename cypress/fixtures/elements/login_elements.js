module.exports = {
    usernameField: "(//input[@placeholder='Username'])[1]",
    passwordField: "(//input[@placeholder='Password'])[1]",
    loginBtn: "(//button[normalize-space()='Login'])[1]",
    forgotpasswordBtn: "(//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header'])[1]",
    invalidMessage: "(//div[@class='oxd-alert-content oxd-alert-content--error'])[1]",
    requiredMessage: "(//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message'][normalize-space()='Required'])[1]"
}