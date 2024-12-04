import navbar from "../elements/navbar_elements.js";

export class Menu{
    searchMenu(menuSearchData) {
        const SearchMenuField = cy.get(navbar.searchField).as('SearchMenuField');
        SearchMenuField.type(menuSearchData);
    }
    
    navigateAdminPage() {
        const AdminMenuButton = cy.get(navbar.adminBtn).as('AdminMenuButton');
        AdminMenuButton.click().wait(3000);
    }

    navigatePIMPage() {
        const PIMMenuButton = cy.get(navbar.pimBtn).as('PIMMenuButton');
        PIMMenuButton.click().wait(3000);
    }

    navigateLeavePage() {
        const LeaveMenuButton = cy.get(navbar.leaveBtn).as('LeaveMenuButton');
        LeaveMenuButton.click().wait(3000);
    }

    navigateTimePage() {
        const TimeMenuButton = cy.get(navbar.timeBtn).as('TimeMenuButton');
        TimeMenuButton.click().wait(3000);
    }

    navigateRecruitmentPage() {
        const RecruitmentMenuButton = cy.get(navbar.recruitBtn).as('RecruitmentMenuButton');
        RecruitmentMenuButton.click().wait(3000);
    }

    navigateInfoPage() {
        const InfoMenuButton = cy.get(navbar.infoBtn).as('InfoMenuButton');
        InfoMenuButton.click().wait(3000);
    }

    navigatePerfomancePage() {
        const PerfomanceMenuButton = cy.get(navbar.performBtn).as('PerfomanceMenuButton');
        PerfomanceMenuButton.click().wait(3000);
    }

    navigateDashboardPage() {
        const DashboardMenuButton = cy.get(navbar.homeBtn).as('DashboardMenuButton');
        DashboardMenuButton.click().wait(3000);
    }

    navigateDirectoryPage() {
        const DirectoryMenuButton = cy.get(navbar.directoryBtn).as('DirectoryMenuButton');
        DirectoryMenuButton.click().wait(3000);
    }

    navigateMaintenancePage() {
        const MaintenanceMenuButton = cy.get(navbar.maintenanceBtn).as('MaintenanceMenuButton');
        MaintenanceMenuButton.click().wait(3000);
    }

    navigateClaimPage() {
        const ClaimMenuButton = cy.get(navbar.claimBtn).as('ClaimMenuButton');
        ClaimMenuButton.click().wait(3000);
    }

    navigateBuzzPage() {
        const BuzzMenuButton = cy.get(navbar.buzzBtn).as('BuzzMenuButton');
        BuzzMenuButton.click().wait(3000);
    }
}