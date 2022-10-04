Feature: Login page

  Background:
    Given Quiero logear en la pagina saucedemo
  Scenario: Login OK pasoe en conjunto
    When Entro con el usuario "standard_user", con contraseña "secret_sauce", y clcikeamos en login
    Then la url tiene que llevarnos al inventario
  Scenario: Login OK 2 pasos individuales
    When Entro con el usuario "standard_user"
    And con contraseña "secret_sauce"
    And Click en login
    Then validamos que estamos en el inventario