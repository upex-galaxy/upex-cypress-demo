Feature: ✅ToolsQA | Forms | Practice Form

    Background: Estar situado en el apartado de Practice Form
        Given ingresar al apartado de practice form de la page de DemoQA

    Scenario: 14847 | TC1: Validar enviar el Form con datos validos corectamente
        When El usuario ingrese un dato valido en campo First Name
        And El usuario ingrese un dato valido en el campo Last Name
        And El usuario ingrese un dato valido en el campo Email
        And El usuario seleccione un radio-button de Genero
        And El usuario seleccione una Fecha De Nacimiento
        And El usuario seleccione un Checkbox de Hobbies
        And El usuario seleccione una imagen para subir
        And El usuario ingrese un dato valido en domicilio
        And El usuario seleccione un Estado
        And El usuario seleccione una Ciudad
        And El usuario envie el Form completado
        Then Aparecera un Pop-up con la informacion que el usuario completo

    Scenario Outline: 14847 | TC2: Validar NO completar el registro
        When El usuario completa el Campo First Name con '<fName>'
        And El usuario completa el campo Last Name con '<lName>'
        And el usuario completa el campo Email con '<email>'
        And El usuario seleciona un genero con '<gender>'
        And El usuario completa el campo Mobile con '<mobile>'
        And El usuario presione el boton de Submit
        Then NO aparecera el Pop-up con la informacion completada
        Examples:
            | fName | lName | email  | gender          | mobile     |
            |       | Messi | x@x.xx | #gender-radio-1 | 1234567890 |
            | Leo   |       | @x.xx  | #gender-radio-1 | 1234567890 |
            | Leo   | Messi | @x.xx  | #gender-radio-1 | 1234567890 |
            | Leo   | Messi | @x.xx  | #gender-radio-1 | 1234567890 |
            | Leo   | Messi | x@.xx  | #gender-radio-2 | 1234567890 |
            | Leo   | Messi | xx.xx  | #gender-radio-3 | 1234567890 |
            | Leo   | Messi | x@xxx  | #gender-radio-3 | 1234567890 |
            | Leo   | Messi | x@x.x  | #gender-radio-2 | 1234567890 |
            | Leo   | Messi | x@x.xx | #gender-radio-1 | 234567890  |
            | Leo   | Messi | x@x.xx | #gender-radio-3 | i234567890 |
            | Leo   | Messi | x@x.xx | #gender-radio-1 | !234567890 |