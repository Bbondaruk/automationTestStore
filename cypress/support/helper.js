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