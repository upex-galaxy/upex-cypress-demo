@US_GX-9552
Feature: ✅ToolsQA | Elements | Text Box: Fill form and Submit

  Background: Estar en la sección de Text Box de la pagina
    Given QA aprendiz esta en la sección Text Box

  @TC_GX-9577 @Elements @Feature @L1 @TextBox @ToolsQA
  Scenario: 9553 | TC1: Validar que al no ingresar datos en Name, Current Address, Permanent Address y Email no se muestre nada
    When el aprendiz QA no ingresa datos en los campos "Name", "Current Address", "Permanent Address", "Email" y envía los datos
    Then no aparece ningún mensaje

  @TC_GX-9578 @Elements @Feature @L1 @TextBox @ToolsQA
  Scenario: 9553 | TC2: Validar que al ingresar datos en Name, Current Address, Permanent Address y Email se muestre los datos
    When el aprendiz QA ingresa datos en los campos de Name, Current Address, Permanent Address, Email y envía los datos
    Then muestra un mensaje con los datos que se ingreso

  @TC_GX-9579 @Elements @Feature @L1 @TextBox @ToolsQA 
  Scenario Outline: 9553 | TC3: Validar que al no ingresar <datos correctos> en el Email se muestre el borde en color rojo
    When el aprendiz QA ingresa el email sin '<datos>'
    Then cambia a rojo el borde del campo Email

    Examples: 
      | datos                                          |
      | @                                              |
      | 1 carácter alfanumérico antes del “@“          |
      | 1 carácter alfanumérico después del “@“        |
      | “.“ y 1 carácter alfanumérico después del “@“  |
      | 2 caracteres alfanuméricos después del “.“     |
