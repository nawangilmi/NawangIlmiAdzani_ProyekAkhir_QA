import dashboard from "../elements/dashboard_elements.js";

export class DashboardPage{
    navigateAssignLeave() {
        const assignleaveButton = cy.xpath(dashboard.AssignLeaveBtn).as('assignleaveButton');
        assignleaveButton.click();
    }
}