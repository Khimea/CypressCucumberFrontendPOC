import {
    Given,
    When,
    Then,
} from "cypress-cucumber-preprocessor/steps";
const demoblazePage = require("../../pages/demoblazePage");
Given(/^Dirigirse a demoblaze website$/, function () {
    cy.visit("/")
});
When(/^Seleccionar producto (.*)$/, function (product) {
    demoblazePage.clickProduct(product)
});
When(/^Añadir producto al carro$/, function () {
    demoblazePage.addToCart()
});
When(/^Volver al home$/, function () {
    demoblazePage.comeToHome()
});
When(/^Visualizar carrito$/, function () {
    demoblazePage.seeTheCart()
});
When(/^Crear orden de compra$/, function () {
    demoblazePage.createOrder()
});
When(/^Completar formulario compra$/, function () {
    demoblazePage.fillForm()
});
When(/^Comprar orden$/, function () {
    demoblazePage.completBuy()
});
Then(/^Compra exitosa$/, function () {
    demoblazePage.msgCompra()
});