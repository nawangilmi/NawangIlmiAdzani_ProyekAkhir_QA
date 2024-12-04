import pim from "../elements/pim_elements.js";
import addpim from "../elements/addpim_elements.js";
import editpim from "../elements/editpim_elements.js";

export class AddPIMPage{
    clickAddPIM(){
    const AddPIMButton = cy.xpath(pim.addBtn).as('AddPIMButton');
    AddPIMButton.click();
    }

    fillFirstNameField(firstnameData) {
        const firstnameField = cy.xpath(addpim.firstnameField).as('firstnameField');
        firstnameField.type(firstnameData);
    }

    fillMiddleNameField(middlenameData) {
        const middlenameField = cy.xpath(addpim.middlenameField).as('middlenameField');
        middlenameField.type(middlenameData);
    }

    fillLastNameField(lastnameData) {
        const lastnameField = cy.xpath(addpim.lastnameField).as('lastnameField');
        lastnameField.type(lastnameData);
    }

    fillIdEmployeeField(idData) {
        const idEmployeeField = cy.xpath(addpim.idField).as('idEmployeeField');
        idEmployeeField.clear().type(idData);
    }

    clearIdEmployeeField() {
        const idEmployeeField = cy.xpath(addpim.idField).as('idEmployeeField');
        idEmployeeField.clear();
    }

    fillUsernameEmployeeField(usernameData) {
        const UsernameEmployeeField = cy.xpath(addpim.usernameField).as('UsernameEmployeeField');
        UsernameEmployeeField.type(usernameData);
    }

    fillPasswordEmployeeField(passwordData) {
        const passwordEmployeeField = cy.xpath(addpim.passwordField).as('passwordEmployeeField');
        passwordEmployeeField.type(passwordData);
    }

    fillConfirmPasswordEmployeeField(passwordData) {
        const confirmpasswordEmployeeField = cy.xpath(addpim.cnfrmpasswordField).as('confirmpasswordEmployeeField');
        confirmpasswordEmployeeField.type(passwordData);
    }

    uploadAvatarImage(imageData) {
        const addImageButton = cy.xpath(addpim.imgBtn).as('addImageButton');
        const addImageField= cy.xpath(addpim.imgField).as('addImageField');
        addImageButton.click();
        addImageField.selectFile(`cypress/fixtures/${imageData}`, { force: true });
    }

    clickEnabledStatus() {
        const EnabledStatusButton = cy.xpath(addpim.enableRadio).as('EnabledStatusButton');
        EnabledStatusButton.click();
    }

    clickDisabledStatus() {
        const DisabledStatusButton = cy.xpath(addpim.disableRadio).as('DisabledStatusButton');
        DisabledStatusButton.click();
    }

    clickSaveButton() {
        const SaveButton = cy.xpath(addpim.saveBtn).as('SaveButton');
        SaveButton.click();
    }

    clickCancelButton() {
        const CancelButton = cy.xpath(addpim.cancelBtn).as('CancelButton');
        CancelButton.click();
    }

    switchCreateLoginDetails() {
        const CreateLoginDetailsSwitch = cy.xpath(addpim.loginSwitch).as('CreateLoginDetailsSwitch');
        CreateLoginDetailsSwitch.click();
    }

    validateAddPIMSuccess(firstnameData,lastnameData) { 
        cy.xpath(`(//h6[normalize-space()='${firstnameData} ${lastnameData}'])[1]`).should('be.visible');
    }

    validateCancelButton() { 
        cy.url().should('eq', `${Cypress.env('base_url')}pim/viewEmployeeList`);
    }

    validateRequiredField() { 
        cy.xpath(addpim.requiredMessage).should('be.visible');
    }

    validateDoubleID() {
        cy.xpath(addpim.addpimCard).contains("Employee Id already exists");
    }

    validateLettersID() {
        cy.xpath(addpim.addpimCard).contains("Id should be with numbers");
    }

    validateMaximumID() {
        cy.xpath(addpim.addpimCard).contains("Should not exceed 10 characters");
    }

    validateImageInvalidSize() {
        cy.xpath(addpim.addpimCard).contains("Attachment Size Exceeded");
    }

    validateImageInvalidFileType() {
        cy.xpath(addpim.addpimCard).contains("File type not allowed");
    }

    validateDifferentConfirmPassword() {
        cy.xpath(addpim.addpimCard).contains("Passwords do not match");
    }

    validateUsernameMinimumCharacters() {
        cy.xpath(addpim.addpimCard).contains("Should be at least 5 characters");
    }

    validateDoubleUsername() {
        cy.xpath(addpim.addpimCard).contains("Username already exists");
    }

    validatePasswordMinimumCharacters() {
        cy.xpath(addpim.addpimCard).contains("Should have at least 7 characters");
    }

    validatePasswordMinimumNumber() {
        cy.xpath(addpim.addpimCard).contains("Your password must contain minimum 1 number");
    }

    validatePasswordMinimumLetter() {
        cy.xpath(addpim.addpimCard).contains("Your password must contain minimum 1 lower-case letter");
    }

    validatePasswordMinimumUppercaseLetter() {
        cy.xpath(addpim.addpimCard).contains("Your password must contain minimum 1 upper-case letter");
    }

    validatePasswordMinimumLowercaseLetter() {
        cy.xpath(addpim.addpimCard).contains("Your password must contain minimum 1 lower-case letter");
    }

    validatePasswordMinimumSymbol() {
        cy.xpath(addpim.addpimCard).contains("Your password must contain minimum 1 symbol");
    }
}

export class PIMPageList{
    fillNameSearchField(nameData) {
        const namesearchField = cy.xpath(pim.nameField).as('namesearchField');
        namesearchField.type(nameData);
    }

    fillIDSearchField(IdData) {
        const idsearchField = cy.xpath(pim.idField).as('idsearchField');
        idsearchField.type(IdData);
    }

    clickResetButton() {
        const resetButton = cy.xpath(pim.resetBtn).as('resetButton');
        resetButton.click();
    }

    clickSearchButton(){
        const searchButton = cy.xpath(pim.searchBtn).as('searchButton');
        searchButton.click();
    }
    
    clickSearchSectionButtonDown() {
        const SearchSectionDownButton = cy.xpath(pim.infoDownBtn).as('SearchSectionDownButton');
        SearchSectionDownButton.click();
    }

    clickEditButton(IdData) {
        cy.contains('.oxd-table-row', IdData).find('button i.bi-pencil-fill').first().click(); 
    }

    clickDeleteButton(IdData) {
        cy.contains('.oxd-table-row', IdData).find('button i.bi-trash').first().click(); 
    }

    clickConfirmDeleteButton() {
        const ConfirmDeleteButton = cy.xpath(pim.confirmDeleteBtn).as('ConfirmDeleteButton');
        ConfirmDeleteButton.click();
    }

    clickCancelDeleteButton() {
        const cancelDeleteButton = cy.xpath(pim.canceldeleteBtn).as('cancelDeleteButton');
        cancelDeleteButton.click();
    }

    clickCloseDeleteButton() {
        const closeDeleteButton = cy.xpath(pim.closeDeleteBtn).as('closeDeleteButton');
        closeDeleteButton.click();
    }

    clickCheckboxesAll() {
        const checkboxesAllButton = cy.xpath(pim.checkBox).as('checkboxesAllButton');
        checkboxesAllButton.click();
    }

    clickDeletedSelectedButton() {
        const DeletedSelectedButton = cy.xpath(pim.deleteselectedBtn).as('DeletedSelectedButton');
        DeletedSelectedButton.click();
    }

    validateDeletedData() {
        cy.xpath("(//div[@class='orangehrm-horizontal-padding orangehrm-vertical-padding'])[1]").contains("No Records Found");
    }

    validateSearchSection() {
        return cy.xpath(pim.idField).should('exist').then(($el) => {
          return $el.is(':visible');
        });
      }

    validateSearchDatabyName(nameData) {
        cy.xpath("(//div[@class='orangehrm-container'])[1]").contains(nameData);
    }

    validateSearchDatabyId(IdData) {
        cy.xpath("(//div[@class='orangehrm-container'])[1]").contains(IdData);
    }
}

export class EditPIMPage{
    clickSaveButton() {
        const SaveButton = cy.xpath(editpim.saveBtn).as('SaveButton');
        SaveButton.click();
    }

    clickJobSection() {
        const JobButton = cy.xpath(editpim.jobBtn).as('JobButton');
        JobButton.click();
    }

    clickJobTitle(jobTitleData) {
        const jobtitleDropdown = cy.xpath(editpim.jobtitleDropdown).as('jobtitleDropdown');
        jobtitleDropdown.type(jobTitleData).click();
    }

    clickSaveJobButton() {
        const SaveJobButton = cy.xpath(editpim.saveJobBtn).as('SaveJobButton');
        SaveJobButton.click();
    }


    fillFirstNameField(firstnameData) {
    const firstnameField = cy.xpath(editpim.firstnameField).as('firstnameField');
    firstnameField.clear().type(firstnameData);
    }

    fillMiddleNameField(middlenameData) {
    const middlenameField = cy.xpath(editpim.middlenameField).as('middlenameField');
    middlenameField.clear().type(middlenameData);
    }

    fillLastNameField(lastnameData) {
    const lastnameField = cy.xpath(editpim.lastnameField).as('lastnameField');
    lastnameField.clear().type(lastnameData);
    }

    fillIdEmployeeField(idData) {
        const idEmployeeField = cy.xpath(editpim.idField).as('idEmployeeField');
        idEmployeeField.clear().type(idData);
    }


}