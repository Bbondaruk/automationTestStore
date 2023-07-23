import { faker } from '@faker-js/faker';
import user from '../fixtures/user.json'
import { loginViaUI, login2 } from '../support/helper';

    it('Login user with valid credetials)', () => {    
        loginViaUI(user)
      })

  it('Login user without password)', () => {
    
    user.password = '';
  
    login2(user)
  })

  it('Login user without loginname)', () => {
    
    user.loginName = '';
  
    login2(user)
  })

  it('Login user without credetials)', () => {
    
    user.password = '';
    user.loginName = '';
  
    login2(user)
  })

//   user.firstName = faker.person.firstName();
//   user.loginName = faker.internet.userName();