import { faker } from '@faker-js/faker';
import user from '../fixtures/user.json';
import {loginViaUI, findProductByName} from '../support/helper';

it('Place order', () => {

    loginViaUI(user);
    
    cy.log('Add random product to cart from main page')
    cy.visit('/');
    cy.get('.productcart').first().click();
    cy.get('.quick_basket').click();

    cy.log('Open basket')
    cy.get('#cart_checkout1').click();

    cy.log('Verify checkout data')
    cy.get('.table.confirm_shippment_options')
    .should('contain', user.firstName)
    .and('contain', user.lastName)
    .and('contain', user.phoneNumber);

    cy.get('.table.confirm_payment_options')
    .should('contain', user.firstName)
    .and('contain', user.lastName)
    .and('contain', user.phoneNumber);

    cy.log('Confirm order')
    cy.get('#checkout_btn').click();

    cy.log('Thank you page displayed')
    cy.get('.maintext').should('contain', 'Your Order Has Been Processed!');
})

it.only('Place order HW', () => {

  loginViaUI(user);
  
  cy.log('Find and add product to cart from search page')
  cy.visit('/');

  cy.get('input#filter_keyword').type('i{enter}');

  let productName = 'Acqua Di Gio Pour Homme'
  findProductByName(productName);
  
  cy.get('.contentpanel [class="thumbnails grid row list-inline"]').contains(productName)
  .closest('[class="col-md-3 col-sm-6 col-xs-12"]').find('[class="fa fa-cart-plus fa-fw"]').click()
  cy.log('before else')
  if(productName == 'Creme Precieuse Nuit 50ml'){
  cy.get('.contentpanel [class="thumbnails grid row list-inline"]').contains(productName)
  .closest('[class="col-md-3 col-sm-6 col-xs-12"]').find('[class="fa fa-shopping-cart fa-fw"]').click()
  } else{
    cy.get('.productpagecart .cart').click()
  }
  cy.log('after else')
  cy.log('Verify order')
  cy.get('[class="container-fluid cart-info product-list"]')
  .should('contain', productName)

  cy.log('Checkout')
  cy.get('[class="container-fluid cart-info product-list"] #cart_checkout1').click()
  
  cy.log('Verify checkout data')
  cy.get('.table.confirm_shippment_options')
  .should('contain', user.firstName)
  .and('contain', user.lastName)
  .and('contain', user.phoneNumber);

  cy.get('.table.confirm_payment_options')
  .should('contain', user.firstName)
  .and('contain', user.lastName)
  .and('contain', user.phoneNumber);

  cy.log('Confirm order')
  cy.get('#checkout_btn').click();

  cy.log('Thank you page displayed')
  cy.get('.maintext').should('contain', 'Your Order Has Been Processed!');
})