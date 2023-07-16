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
    
    //   return cy.get('запит діва з потрібним продуктом')


 
//  cy.get('.contentpanel [class="thumbnails grid row list-inline"]')
//  .then(products =>{
//     let length =  products.find(`[title="${productName}"]`).length
//     // if(length == 0) {
//     //     cy.get('.pagination').children().contains('>').click()
//     // } else{
//     //     //продукт є - щось зробити
//     // }
    
//     for(length; length < 1; length = products.find(`[title="${productName}"]`).length){
        
//         cy.get('.pagination').children().contains('>').click()
        
//     }
//     cy.log('**CODE DOSHEL**')
//  })
//  for(let length = 0; length < 1;){
//     cy.wait(5000)
//     cy.get('.contentpanel [class="thumbnails grid row list-inline"]')
//         .then(products => {
//             length = products.find(`[title="${productName}"]`).length
            
//             cy.get('.pagination').children().contains('>').click()
//         })
//         length = 1
//     cy.log('**CODE DOSHEL**')
//  }
    // cy.get('.contentpanel [class="thumbnails grid row list-inline"]')
    // .then(products => {
    //     // let length =  products.find(`[title="${productName}"]`).length
    //     // if(length == 0){
    //     //     cy.get('.pagination').children().contains('>').click()
    //     // } else{
    //     //     cy.log('Nashel')
    //     // }
    // })

            
          
}