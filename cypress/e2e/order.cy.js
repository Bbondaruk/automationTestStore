import { faker } from '@faker-js/faker';
import user from '../fixtures/user.json';
import { loginViaUI, findProductByName } from '../support/helper';
import HomePage from '../support/pages/HomePage';
import CheckoutPage from '../support/pages/CheckoutPage';

it('Place order', () => {

  loginViaUI(user);

  cy.log('**Add random product to cart from main page**')
  HomePage.visit()
  HomePage.getProductCartButton().first().click();
  HomePage.getQuickBasketButton().click();

  cy.log('**Open basket**')
  CheckoutPage.getCheckoutButton().click()

  cy.log('**Verify checkout data**')
  CheckoutPage.getShippmentDetailsTable()
    .should('contain', user.firstName)
    .and('contain', user.lastName)
    .and('contain', user.phoneNumber);

  CheckoutPage.getPaymentDetailsTable()
    .should('contain', user.firstName)
    .and('contain', user.lastName)
    .and('contain', user.phoneNumber);

  cy.log('**Confirm order**')
  CheckoutPage.getConfirmOrderButton().click();

  cy.log('**Thank you page displayed**')
  CheckoutPage.getTextThankyou().should('contain', 'Your Order Has Been Processed!');
})

it('Place order HW', () => {

  loginViaUI(user);

  cy.log('**Find and add product to cart from search page**')
  HomePage.visit()

  HomePage.getSearchField().type('i{enter}');

  let productName = 'Acqua Di Gio Pour Homme'
  findProductByName(productName);



  cy.log('**Checkout**')
  CheckoutPage.getCheckoutButton().click()

  cy.log('**Verify checkout data**')
  CheckoutPage.getShippmentDetailsTable()
    .should('contain', user.firstName)
    .and('contain', user.lastName)
    .and('contain', user.phoneNumber);

  CheckoutPage.getPaymentDetailsTable()
    .should('contain', user.firstName)
    .and('contain', user.lastName)
    .and('contain', user.phoneNumber);

  cy.log('**Confirm order**')
  CheckoutPage.getConfirmOrderButton().click();

  cy.log('**Thank you page displayed**')
  CheckoutPage.getTextThankyou().should('contain', 'Your Order Has Been Processed!');
})