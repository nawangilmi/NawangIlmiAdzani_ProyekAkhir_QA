import navbar from "../elements/navbar_elements.js";

export class Menu{
    searchMenu(menuSearchData) {
        const SearchMenuField = cy.get(navbar.searchField).as('SearchMenuField');
        SearchMenuField.type(menuSearchData);
    }
    
    navigateAdminPage() {
        const AdminMenuButton = cy.get(navbar.adminBtn).as('AdminMenuButton');
        AdminMenuButton.click();
    }

    navigatePIMPage() {
        const PIMMenuButton = cy.get(navbar.pimBtn).as('PIMMenuButton');
        PIMMenuButton.click();
    }

    navigateLeavePage() {
        const LeaveMenuButton = cy.get(navbar.leaveBtn).as('LeaveMenuButton');
        LeaveMenuButton.click();
    }

    navigateTimePage() {
        const TimeMenuButton = cy.get(navbar.timeBtn).as('TimeMenuButton');
        TimeMenuButton.click();
    }

    navigateRecruitmentPage() {
        const RecruitmentMenuButton = cy.get(navbar.recruitBtn).as('RecruitmentMenuButton');
        RecruitmentMenuButton.click();
    }

    navigateInfoPage() {
        const InfoMenuButton = cy.get(navbar.infoBtn).as('InfoMenuButton');
        InfoMenuButton.click();
    }

    navigatePerfomancePage() {
        const PerfomanceMenuButton = cy.get(navbar.performBtn).as('PerfomanceMenuButton');
        PerfomanceMenuButton.click();
    }

    navigateDashboardPage() {
        const DashboardMenuButton = cy.get(navbar.homeBtn).as('DashboardMenuButton');
        DashboardMenuButton.click();
    }

    navigateDirectoryPage() {
        const DirectoryMenuButton = cy.get(navbar.directoryBtn).as('DirectoryMenuButton');
        DirectoryMenuButton.click();
    }

    navigateMaintenancePage() {
        const MaintenanceMenuButton = cy.get(navbar.maintenanceBtn).as('MaintenanceMenuButton');
        MaintenanceMenuButton.click();
    }

    navigateClaimPage() {
        const ClaimMenuButton = cy.get(navbar.claimBtn).as('ClaimMenuButton');
        ClaimMenuButton.click();
    }

    navigateBuzzPage() {
        const BuzzMenuButton = cy.get(navbar.buzzBtn).as('BuzzMenuButton');
        BuzzMenuButton.click();
    }
}