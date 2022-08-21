/// <reference types="Cypress" />

import accountselectors from '../selectors/AccountSelectors'

export default class AccountPage {

    loadAccountPage () {
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
        cy.title().should('contain', 'Login - My Store')
    }    

    performPreSignup(user) {
        cy.get(accountselectors.signup.presignup.registeremail).should('be.visible').clear().type(user.email)
        cy.get(accountselectors.signup.presignup.createaccount).should('be.visible').click()        
    }

    performPostSignup(user) {
        cy.get(accountselectors.signup.postsignup.gender.male).scrollIntoView()

        if(user.gender)
            cy.get(accountselectors.signup.postsignup.gender.male).click()
        else 
        cy.get(accountselectors.signup.postsignup.gender.female).click()

        cy.get(accountselectors.signup.postsignup.firstname).should('be.visible').clear().type(user.firstName)
        cy.get(accountselectors.signup.postsignup.lastname).should('be.visible').clear().type(user.lastName)
        cy.get(accountselectors.signup.postsignup.password).should('be.visible').clear().type(user.password)
        cy.get(accountselectors.signup.postsignup.birthdate.day).select(user.birthDate.day)
        cy.get(accountselectors.signup.postsignup.birthdate.month).select(user.birthDate.month)
        cy.get(accountselectors.signup.postsignup.birthdate.year).select(user.birthDate.year)

        cy.get(accountselectors.signup.postsignup.address.firstname).should('be.visible').clear().type(user.firstName)
        cy.get(accountselectors.signup.postsignup.address.lastname).should('be.visible').clear().type(user.firstName)
        cy.get(accountselectors.signup.postsignup.address.company).should('be.visible').clear().type(user.company)

        cy.get(accountselectors.signup.postsignup.address.address1).should('be.visible').clear().type(user.address)
        cy.get(accountselectors.signup.postsignup.address.address2).should('be.visible').clear().type(user.address)
        cy.get(accountselectors.signup.postsignup.address.city).should('be.visible').clear().type(user.city)
        cy.get(accountselectors.signup.postsignup.address.state).select(user.state)
        cy.get(accountselectors.signup.postsignup.address.zipcode).should('be.visible').clear().type(user.zipCode)
        cy.get(accountselectors.signup.postsignup.address.country).select(user.country)
        
        cy.get(accountselectors.signup.postsignup.address.additionalinformation).should('be.visible').clear().type(user.info)
        
        cy.get(accountselectors.signup.postsignup.address.homephone).should('be.visible').clear().type(user.homePhone)
        cy.get(accountselectors.signup.postsignup.address.mobilephone).should('be.visible').clear().type(user.mobilePhone)
        
        cy.get(accountselectors.signup.postsignup.address.addressalias).should('be.visible').clear().type(user.alias)

        cy.get(accountselectors.signup.postsignup.submitAccount).should('be.visible').click()        
    }

    performSignUp(user) {
        this.performPreSignup(user)
        this.performPostSignup(user)

        cy.updateUsersListing(user)
    }

    performSignin(user) {
        cy.get(accountselectors.signin.email).should('be.visible').clear().type(user.email)
        cy.get(accountselectors.signin.password).should('be.visible').clear().type(user.password)
        this.validateSignInRequiredFields(user)
        cy.get(accountselectors.signin.submitlogin).should('be.visible').click()
    }

    validateSignInRequiredFields(user) {
        cy.get(accountselectors.signin.email).should('have.value', user.email)
        cy.get(accountselectors.signin.password).should('be.value', user.password)
    }
}