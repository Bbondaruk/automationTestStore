import BasePage from "./BasePage";

class AccountLoginPage extends BasePage {
    visit() {
        cy.visit('/index.php?rt=account/login');
    }

    getRegisterButton() {
        return cy.get('#accountFrm button');
    }

    getLoginButton(){
        return cy.get('#loginFrm button');
    }

    getLoginFormLoginNameField(){
        return cy.get('#loginFrm_loginname');
    }

    getLoginFormPasswordField(){
        return cy.get('#loginFrm_password');
    }

    getLoginAlert() {
        return cy.get('.alert.alert-error.alert-danger')
    }
}
export default new AccountLoginPage();