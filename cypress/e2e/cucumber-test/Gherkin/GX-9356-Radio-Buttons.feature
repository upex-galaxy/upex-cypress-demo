Feature: Radio Button

    Background: Estar en la sección de Radio Button de la página
    Given Aprendiz QA esta en la sección Radio Button

@9357-TC1
Scenario: 9357 | TC1: Validar que se muestre la etiqueta “Yes” cuando se selecciona el RB “Yes”
    When el QA aprendiz hace click en el radio button “Yes”
    Then aparecer el siguente mensaje "You have selected Yes" 

@9357-TC2
Scenario: 9357 | TC2: Validar que se muestre la etiqueta “Impressive” cuando se selecciona el RB “Impressive”
    When el QA aprendiz hace click en el radio button “Impressive”
    Then aparecer el siguente mensaje "You have selected Impressive" 

@9357-TC3
Scenario: 9357 | TC3: Validar que no se pueda seleccionar con el mouse el RB "No"
    When el QA aprendiz quiera seleccionar el mouse sobre el radio button "No"
    Then no puede estar diponible para ser seleccionado
