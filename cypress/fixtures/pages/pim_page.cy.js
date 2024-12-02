import pim from "../elements/pim_elements.js";
import addpim from "../elements/addpim_elements.js";

export class PIMPage{
    clickAddPIM(){
    const AddPIMButton = cy.xpath(pim.addBtn).as('AddPIMButton');
    AddPIMButton.click();
    }

    fillFirstName(firstnameData) {
        const firstnameField = cy.xpath(addpim.firstnameField).as('firstnameField');
        firstnameField.type(firstnameData);
    }

    fillMiddleName(middlenameData) {
        const middlenameField = cy.xpath(addpim.middlenameField).as('middlenameField');
        middlenameField.type(middlenameData);
    }

    fillLastName(lastnameData) {
        const lastnameField = cy.xpath(addpim.lastnameField).as('lastnameField');
        lastnameField.type(lastnameData);
    }

    fillIdEmployee(idData) {
        const idEmployeeField = cy.xpath(addpim.idField).as('idEmployeeField');
        idEmployeeField.clear().type(idData);
    }

    clickSaveButton() {
        const SaveButton = cy.xpath(addpim.saveBtn).as('SaveButton');
        SaveButton.click();
    }

    validateAddPIMSuccess() { 
        cy.xpath('//*[@id="app"]/div[1]').contains("Successfully Saved");
    }

    validateRequiredNameSuccess() { 
        cy.xpath(addpim.requiredMessage).should('be.visible');
    }

    validateDoubleIDSuccess() {
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div').contains("Employee Id already exists");
    }
}