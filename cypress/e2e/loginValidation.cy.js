import user from '../fixtures/user.json'

beforeEach( () => {
  cy.visit('/');

    cy.log('**Opening login form ...**');
    cy.get('#customer_menu_top').click();
})

it('Login with empty fields', () => {
    

  cy.log('**Clear fields and click on "Login" button**');
  cy.get('#loginFrm_loginname').type('{selectAll}{backSpace}');
  cy.get('#loginFrm_password').type('{selectAll}{backSpace}');
  cy.get('#loginFrm button').click();

  cy.log('**Verifying URL**');
  cy.location().should(loc =>{
    expect(loc.toString()).to.eq('https://automationteststore.com/index.php?rt=account/login')
  })
  cy.log('**Verifying error message**');
  cy.get('.alert.alert-error.alert-danger').then(Alert => {
    expect(Alert).to.include.text('Error: Incorrect login or password provided.');
    expect(Alert).to.have.css('color', 'rgb(169, 68, 66)')
  })
  cy.log('**Verifying we are not logged in**');
  cy.reload();
  cy.get('.alert.alert-error.alert-danger')
  .should('include.text', 'Unknown error encountered. Please try again!');
  cy.location().should(loc =>{
    expect(loc.toString()).to.eq('https://automationteststore.com/index.php?rt=account/login')
})
})

it('Login  without username', () => {
    
  cy.log('**Enter only password and click "Login" button**');
  cy.get('#loginFrm_loginname').type('{selectAll}{backSpace}');
  cy.get('#loginFrm_password').type(user.password);
  cy.get('#loginFrm button').click();

  cy.log('**Verifying URL**');
  cy.location().should(loc =>{
    expect(loc.toString()).to.eq('https://automationteststore.com/index.php?rt=account/login')
  })
  cy.log('**Verifying error message**');
  cy.get('.alert.alert-error.alert-danger').then(Alert => {
    expect(Alert).to.include.text('Error: Incorrect login or password provided.');
    expect(Alert).to.have.css('color', 'rgb(169, 68, 66)')
  })
  cy.log('**Verifying we are not logged in**');
  cy.reload();
  cy.get('.alert.alert-error.alert-danger')
  .should('include.text', 'Unknown error encountered. Please try again!');
  cy.location().should(loc =>{
    expect(loc.toString()).to.eq('https://automationteststore.com/index.php?rt=account/login')
  })
})
  
it('Login  without password', () => {
    
  cy.log('**Enter only password and click "Login" button**');
  cy.get('#loginFrm_loginname').type(user.loginName);
  cy.get('#loginFrm_password').type('{selectAll}{backSpace}');
  cy.get('#loginFrm button').click();

  cy.log('**Verifying URL**');
  cy.location().should(loc =>{
    expect(loc.toString()).to.eq('https://automationteststore.com/index.php?rt=account/login')
  })
  cy.log('**Verifying error message**');
  cy.get('.alert.alert-error.alert-danger').then(Alert => {
    expect(Alert).to.include.text('Error: Incorrect login or password provided.');
    expect(Alert).to.have.css('color', 'rgb(169, 68, 66)')
  })
  cy.log('**Verifying we are not logged in**');
  cy.reload();
  cy.get('.alert.alert-error.alert-danger')
  .should('include.text', 'Unknown error encountered. Please try again!');
  cy.location().should(loc =>{
    expect(loc.toString()).to.eq('https://automationteststore.com/index.php?rt=account/login')
  })
})



  it('Login', () => {
    

    cy.log('**Submit login form ...**');
    cy.get('#loginFrm_loginname').type(user.loginName);
    cy.get('#loginFrm_password').type(user.password);
    cy.get('#loginFrm button').click();

    cy.log('**Verifying "My account" page ...**');
    cy.get('.heading1 .subtext').should('have.text', user.firstName);
  })