import AccountPage from "../support/pages/AccountPage"
import MyAccountPage from "../support/pages/MyAccountPage"
import { faker } from '@faker-js/faker'

describe('Automation Practice - User Registration', () => {

  let accountpage = new AccountPage()
  let myaccountpage = new MyAccountPage()

  it('User Registeration', () => {
    const user = {
      email: faker.internet.email(),
      password: faker.internet.password(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      birthDate: {
        day: '14',
        month: 'February',
        year: '1992'
      },
      gender: true,
      company: faker.company.name(),
      address: faker.address.streetAddress(),
      city: 'New York',
      state: 'New York',
      zipCode: '10001',
      country: 'United States',
      info: faker.lorem.sentence(),
      homePhone: '720-353-0983',
      mobilePhone: '720-353-0983',
      alias: 'Home'
    }

    accountpage.loadAccountPage()
    accountpage.performSignUp(user)
    myaccountpage.getUsername().then((username) => {
      expect(username).to.eql(user.firstName + ' ' + user.lastName)
    })
  })
})