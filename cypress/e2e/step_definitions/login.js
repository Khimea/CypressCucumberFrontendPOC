import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  
  const loginPage = require("../../pages/LoginPage");

  Given("Quiero logear en la pagina saucedemo",() => {
    cy.visit("/")
  })

  When("Entro con el usuario {string}, con contraseña {string}, y clcikeamos en login", (username,password) => {
    loginPage.submitLogin(username,password)
  });

  When("Entro con el usuario {string}", (username) => {
    loginPage.typeUsername(username)
  });
  When("con contraseña {string}", (password) => {
    loginPage.typePassword(password)
  });

  When("Click en login",() => {
    loginPage.clickLogin()
  })

  Then("la url tiene que llevarnos al inventario", () => {
    cy.url().should("contains", "/inventory.html");
  });

  Then("validamos que estamos en el inventario", () => {
    cy.url().should("contains", "/inventory.html");
  });
