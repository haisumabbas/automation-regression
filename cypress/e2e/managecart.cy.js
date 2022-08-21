import AccountPage from "../support/pages/AccountPage"
import MyAccountPage from "../support/pages/MyAccountPage"
import TshirtsPage from "../support/pages/TshirtsPage"

describe('Automation Practice - Manage Cart', () => {

    let myaccountpage = new MyAccountPage()
    let tshirtspage = new TshirtsPage()

    let validUsers
    let invalidUser

    before(() => {
        cy.fixture('registeredusers').then((users) => {
            expect(users.length, "Valid users array has more than 1 user").to.be.greaterThan(0)
            cy.login(users[0])
            myaccountpage.navigateToTshirtsPage()
        })
    })


    it('Manage Cart - Add product to cart', () => {
        tshirtspage.addProductToCart()
        tshirtspage.getModalHeading().then((headingText) => {
            expect(headingText).to.contain('Product successfully added to your shopping cart')
            tshirtspage.closeModal()

            tshirtspage.getCartQuantity(false).then((quantity) => {
                expect(quantity).to.eql('1')
            })
        })
    })

    it.only('Manage Cart - Remove product from cart', () => {
        tshirtspage.addProductToCart()
        tshirtspage.closeModal()
        tshirtspage.hoverCartSegment()
        tshirtspage.removeProductFromCart()
        tshirtspage.getCartQuantity(true).then((quantity) => {
            expect(quantity).to.contain('empty')
        })

    })

    it('Manage Cart - Update product in cart', () => {
        tshirtspage.addProductToCart()
        tshirtspage.closeModal()
        tshirtspage.addProductToCart()
        tshirtspage.closeModal()

        tshirtspage.getCartQuantity(false).then((quantity) => {
            expect(quantity).to.eql('2')
        })


    })
})