export function loginViaUI(user){
    cy.visit('/index.php?rt=account/login');

    cy.log('**Submit login form ...**');
    cy.get('#loginFrm_loginname').type(user.loginName);
    cy.get('#loginFrm_password').type(user.password);
    cy.get('#loginFrm button').click();

    
}

export function login2(user){
    cy.visit('/index.php?rt=account/login');

    cy.log('**Submit login form ...**');
    user.loginName ? cy.get('#loginFrm_loginname').type(user.loginName) : cy.log('User loginname is empty, skip entering login name');
    user.password ? cy.get('#loginFrm_password').type(user.password) : cy.log('User loginname is empty, skip entering password');
    cy.get('#loginFrm button').click();

}

export function findProductByName(productName){
    const visitNextPageIfPossible = () => {
        cy.get('.contentpanel [class="thumbnails grid row list-inline"]').then((products) => {
          if (products.find(`[title="${productName}"]`).length > 0) {
            return
          }
          cy.get('.pagination').children().contains('>').click()
          visitNextPageIfPossible()
        })
      }
    
      visitNextPageIfPossible()
    
      cy.log('знайшли продукт')
    
      cy.get('.contentpanel [class="thumbnails grid row list-inline"]').contains(productName)
      .closest('[class="col-md-3 col-sm-6 col-xs-12"]').find('[class="fa fa-cart-plus fa-fw"]').click()
      
      if(productName == 'Creme Precieuse Nuit 50ml'){
      cy.get('.contentpanel [class="thumbnails grid row list-inline"]').contains(productName)
      .closest('[class="col-md-3 col-sm-6 col-xs-12"]').find('[class="fa fa-shopping-cart fa-fw"]').click()
      } else{
        cy.get('.productpagecart .cart').click()
      }
      
      cy.log('Verify order')
      cy.get('[class="container-fluid cart-info product-list"]')
      .should('contain', productName)

            
          
}