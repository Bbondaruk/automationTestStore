import BasePage from "./BasePage";

class CheckoutPage extends BasePage {
    visit() {
        cy.visit('/index.php?rt=checkout/cart');
    }

    getShoppingCartList() {
        return cy.get('[class="container-fluid cart-info product-list"]');
    }
    
    getCheckoutButton() {
        return cy.get('[class="container-fluid cart-info product-list"] #cart_checkout1');
    }

    getShippmentDetailsTable() {
        return cy.get('.table.confirm_shippment_options');
    }

    getPaymentDetailsTable() {
        return cy.get('.table.confirm_payment_options');
    }

    getConfirmOrderButton() {
        return cy.get('#checkout_btn');
    }

    getTextThankyou() {
        return cy.get('.maintext');
    }
   
}
export default new CheckoutPage(); 