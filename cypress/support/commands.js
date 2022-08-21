// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import AccountPage from "../support/pages/AccountPage"

Cypress.Commands.add('updateUsersListing', (user) => {
    cy.fixture('registeredusers').then((users) => {
        users.push(user)
        cy.writeFile('cypress/fixtures/registeredusers.json', '')
        console.log(users)
        cy.writeFile('cypress/fixtures/registeredusers.json', JSON.stringify(users))
    })
})


Cypress.Commands.add('getElementText', (selector) => {
    cy.get(selector).scrollIntoView()
    cy.get(selector).invoke('text').then((elementText) => {
        return elementText
    })
})

Cypress.Commands.add('login', (user) => {
    let accountpage = new AccountPage()
    accountpage.loadAccountPage()
    accountpage.performSignin(user)
    cy.url().should('contain', 'controller=my-account')
})

Cypress.Commands.add('hover', (hoverElement, visibleElement) => {
    cy.get(hoverElement).scrollIntoView()
    cy.get(hoverElement).trigger('mouseover')
    cy.get(visibleElement).should('be.visible')
})
