import AccountPage from "../support/pages/AccountPage"
import MyAccountPage from "../support/pages/MyAccountPage"

describe('Automation Practice - User Sign In', () => {

    let accountpage = new AccountPage()
    let myaccountpage = new MyAccountPage()

    let validUsers
    let invalidUser

    before(() => {
        cy.fixture('registeredusers').then((users) => {
            validUsers = users
        })

        cy.fixture('invalidusers').then((user) => {
            invalidUser = user
        })
    })


    it('User Sign In - Login with valid users', () => {
        accountpage.loadAccountPage()

        validUsers.forEach((user) => {
            accountpage.performSignin(user)
            cy.url().should('contain', 'controller=my-account')
            //myaccountpage.performLogout()
            //cy.url().should('contain', 'controller=authentication&back=my-account')
        })
    })

    it.skip('User Sign In - Login with invaid users', () => {
        accountpage.loadAccountPage()
        accountpage.performSignin(invalidUser)        
        cy.url().should('contain', 'controller=authentication')
    })
})