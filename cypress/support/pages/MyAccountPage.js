/// <reference types="Cypress" />
import myaccountselectors from '../selectors/MyAccountSelectors'

export default class MyAccountPage {

    performLogout () {
        cy.get(myaccountselectors.signout).should('be.visible').click()
    }    

    getUsername() {
        return cy.getElementText(myaccountselectors.username)
    }    

    navigateToTshirtsPage() {
        cy.get(myaccountselectors.tshirts).should('be.visible').click()
    }
}