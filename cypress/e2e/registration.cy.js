import user from '../fixtures/user.json'

it('Registration', () => {
    cy.visit('/');

    cy.log('**Opening registration form ...**');
    cy.get('#customer_menu_top').click();
    cy.get('#accountFrm button').click();

    cy.log('**Fill in registration form ...**');
    cy.get('#AccountFrm_firstname').type(user.firstName);
    cy.get('#AccountFrm_lastname').type(user.lastName);
    cy.get('#AccountFrm_email').type(user.email);
    cy.get('#AccountFrm_telephone').type(user.phoneNumber);
    cy.get('#AccountFrm_fax').type(user.fax);
    cy.get('#AccountFrm_company').type(user.company);
    cy.get('#AccountFrm_address_1').type(user.address);
    cy.get('#AccountFrm_city').type(user.city);
    cy.get('#AccountFrm_postcode').type(user.zipCode);
    cy.get('#AccountFrm_country_id').select(user.country);
    cy.get('#AccountFrm_zone_id').select(user.region);
    cy.get('#AccountFrm_loginname').type(user.loginName); //Cypress.env('loginName')
    cy.get('#AccountFrm_password').type(user.password);
    cy.get('#AccountFrm_confirm').type(user.password);

    cy.log('**Decline news letter and confirm privacy policy ...**');
    cy.get('#AccountFrm_newsletter0').check();
    cy.get('#AccountFrm_agree').check();

    cy.log('**Confirm registration ...**');
    cy.get('.form-group [type="submit"]').click();

    cy.get('.maintext').should('be.visible').and('contain', 'Your Account Has Been Created!')
  })

  it('Login user after registration', () => {
    cy.visit('/');

    cy.log('**Opening login form ...**');
    cy.get('#customer_menu_top').click();

    cy.log('**Submit login form ...**');
    cy.get('#loginFrm_loginname').type(user.loginName);
    cy.get('#loginFrm_password').type(user.password);
    cy.get('#loginFrm button').click();

    cy.log('**Verifying "My account" page ...**');
    cy.get('.heading1 .subtext').should('have.text', user.firstName);
  })