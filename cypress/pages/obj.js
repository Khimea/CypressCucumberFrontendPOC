let elements = {
    "addProduct":{
        products: () => cy.get(".card-title"),
        addProductToCart: () => cy.get("#tbodyid > div.row > div > a"),
        homeBtn: () => cy.get("#navbarExample > ul > li.nav-item.active > a"),
        cartBtn: () => cy.get("#navbarExample > ul > li:nth-child(4)")
    },
    "Compra":{
        verOrdenCompra: () => cy.get("#page-wrapper > div > div.col-lg-1 > button"),
        nameInput: () => cy.get('#name').click().type('Test'),
        countryInput: () => cy.get('#country').type('Test'),
        cityInput: () => cy.get('#city').type('Test'),
        cardInput: () => cy.get('#card').type('1234 1234 1234 1234'),
        monthInput: () => cy.get('#month').type('11'),
        yearInput: () => cy.get('#year').type('2028'),
        buyBtn: () => cy.get("#orderModal > div > div > div.modal-footer > button.btn.btn-primary"),
        validateBuyLbl: () => cy.get("body > div.sweet-alert.showSweetAlert.visible >h2")
    }
}
module.exports = {
    elements
}