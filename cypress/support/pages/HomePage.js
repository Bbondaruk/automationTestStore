import BasePage from "./BasePage";

class HomePage extends BasePage {
    visit() {
        cy.visit('/')
    }

    getSearchField(){
        return cy.get('input#filter_keyword');
    }

    getProductCartButton() {
        return cy.get('.productcart');
    }

    getQuickBasketButton() {
        return cy.get('.quick_basket');
    }
}
export default new HomePage();