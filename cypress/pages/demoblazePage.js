const element = require("./obj").elements;
const addProduct= element.addProduct
const compra= element.Compra
class homeDemoblaze {

    clickProduct = (productName) => {
        addProduct.products().contains(productName).click();
    };


    addToCart() {
        addProduct.addProductToCart().click()
        cy.on('window:confirm', () => true);
    }

    comeToHome() {
        addProduct.homeBtn().click();
    }

    seeTheCart() {
        addProduct.cartBtn().click()
    }

    createOrder() {
        compra.verOrdenCompra().click()
    }

    fillForm() {
        compra.nameInput()
        compra.countryInput()
        compra.cityInput()
        compra.cardInput()
        compra.monthInput()
        compra.yearInput()
         
    }

    completBuy() {
        compra.buyBtn().click()
    }

    msgCompra() {
        compra.validateBuyLbl().invoke('text').should('eq', 'Thank you for your purchase!')
    };
}

module.exports = new homeDemoblaze();