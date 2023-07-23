import user from '../fixtures/user.json'
import AccountAccountPage from '../support/pages/AccountAccountPage';
import AccountLoginPage from '../support/pages/AccountLoginPage';
import BasePage from '../support/pages/BasePage';
import HomePage from '../support/pages/HomePage';

beforeEach( () => {
  HomePage.visit();

    cy.log('**Opening login form ...**');
    AccountLoginPage.getLoginOrRegisterButton().click();
})

it('Login with empty fields', () => {
    

  cy.log('**Clear fields and click on "Login" button**');
  AccountLoginPage.getLoginFormLoginNameField().type('{selectAll}{backSpace}');
  AccountLoginPage.getLoginFormPasswordField().type('{selectAll}{backSpace}');
  AccountLoginPage.getLoginButton().click();

  cy.log('**Verifying URL**');
  cy.location().should(loc =>{
    expect(loc.toString()).to.eq('https://automationteststore.com/index.php?rt=account/login')
  })
  cy.log('**Verifying error message**');
  AccountLoginPage.getLoginAlert().then(Alert => {
    expect(Alert).to.include.text('Error: Incorrect login or password provided.');
    expect(Alert).to.have.css('color', 'rgb(169, 68, 66)')
  })
  cy.log('**Verifying we are not logged in**');
  cy.reload();
  AccountLoginPage.getLoginAlert()
  .should('include.text', 'Unknown error encountered. Please try again!');
  cy.location().should(loc =>{
    expect(loc.toString()).to.eq('https://automationteststore.com/index.php?rt=account/login')
})
})

it('Login  without username', () => {
    
  cy.log('**Enter only password and click "Login" button**');
  AccountLoginPage.getLoginFormLoginNameField().type('{selectAll}{backSpace}');
  AccountLoginPage.getLoginFormPasswordField().type(user.password);
  AccountLoginPage.getLoginButton().click();

  cy.log('**Verifying URL**');
  cy.location().should(loc =>{
    expect(loc.toString()).to.eq('https://automationteststore.com/index.php?rt=account/login')
  })
  cy.log('**Verifying error message**');
  AccountLoginPage.getLoginAlert().then(Alert => {
    expect(Alert).to.include.text('Error: Incorrect login or password provided.');
    expect(Alert).to.have.css('color', 'rgb(169, 68, 66)')
  })
  cy.log('**Verifying we are not logged in**');
  cy.reload();
  AccountLoginPage.getLoginAlert()
  .should('include.text', 'Unknown error encountered. Please try again!');
  cy.location().should(loc =>{
    expect(loc.toString()).to.eq('https://automationteststore.com/index.php?rt=account/login')
  })
})
  
it('Login  without password', () => {
    
  cy.log('**Enter only password and click "Login" button**');
  AccountLoginPage.getLoginFormLoginNameField().type(user.loginName);
  AccountLoginPage.getLoginFormPasswordField().type('{selectAll}{backSpace}');
  AccountLoginPage.getLoginButton().click();

  cy.log('**Verifying URL**');
  cy.location().should(loc =>{
    expect(loc.toString()).to.eq('https://automationteststore.com/index.php?rt=account/login')
  })
  cy.log('**Verifying error message**');
  AccountLoginPage.getLoginAlert().then(Alert => {
    expect(Alert).to.include.text('Error: Incorrect login or password provided.');
    expect(Alert).to.have.css('color', 'rgb(169, 68, 66)')
  })
  cy.log('**Verifying we are not logged in**');
  cy.reload();
  AccountLoginPage.getLoginAlert()
  .should('include.text', 'Unknown error encountered. Please try again!');
  cy.location().should(loc =>{
    expect(loc.toString()).to.eq('https://automationteststore.com/index.php?rt=account/login')
  })
})



  it('Login', () => {
    

    cy.log('**Submit login form ...**');
    AccountLoginPage.getLoginFormLoginNameField().type(user.loginName);
    AccountLoginPage.getLoginFormPasswordField().type(user.password);
    AccountLoginPage.getLoginButton().click();

    cy.log('**Verifying "My account" page ...**');
    AccountAccountPage.getGreetingUserName().should('have.text', user.firstName);
  })