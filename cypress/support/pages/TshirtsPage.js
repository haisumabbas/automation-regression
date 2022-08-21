/// <reference types="Cypress" />
import tshirtsselectors from '../selectors/TshirtsSelectors'

export default class TshirtsPage {

    addProductToCart() {
        const buttonCount = Cypress.$(tshirtsselectors.addtocart).length

        if(buttonCount > 0) {
            cy.get(tshirtsselectors.addtocart).last().should('be.visible').click()
        }
    }

    getModalHeading() {
        return cy.getElementText(tshirtsselectors.modalheading)
    }

    closeModal() {
        cy.get(tshirtsselectors.modalcross).should('be.visible').click()
    }

    hoverCartSegment() {
        cy.hover(tshirtsselectors.cart, tshirtsselectors.removefromcart)
    }    

    getCartQuantity(empty) {
        if(empty)
            return cy.getElementText(tshirtsselectors.emptycart)
        else
            return cy.getElementText(tshirtsselectors.cartquantity)
    }

    removeProductFromCart() {
        cy.get(tshirtsselectors.removefromcart).should('be.visible').click()
    }
}