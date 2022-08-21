/// <reference types="Cypress" />

export default class HomePage {

    loadHomePage () {
        cy.visit('http://automationpractice.com/index.php')
    }    

    getSignInElement () {
        return cy.get('.login').should('be.visible')
    }
}