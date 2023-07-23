import BasePage from "./BasePage";

class AccountSuccessPage extends BasePage {
    visit() {
        cy.visit('/index.php?rt=account/account')
    }

    getGreetingUserName() {
        return cy.get('.heading1 .subtext');
    }
}
export default new AccountSuccessPage();