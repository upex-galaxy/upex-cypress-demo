@US_GX-9552
Feature: ✅ToolsQA | Elements | Text Box: Fill form and Submit

	Background: Estar en la seccion de Text Box de la pagina
		Given QA aprendiz esta en la seccion Text Box

	@TC_GX-9577 @Elements @Feature @L1 @TextBox @ToolsQA @focus
	Scenario: 9553 | TC1: Validar que al no ingresar datos en Name, Current Address, Permanent Address y Email no se muestre nada
		When el aprendiz QA no ingresa datos en los campos "Name", "Current Address", "Permanent Address" y "Email"
		And hace click en el boton de "Submit"
		Then no aparece ningun mensaje

	@TC_GX-9578 @Elements @Feature @L1 @TextBox @ToolsQA @focus
	Scenario: 9553 | TC2: Validar que al ingresar datos en Name, Current Address, Permanent Address y Email se muestre los datos
		When el aprendiz QA ingrese datos en los campos de '<Name>', '<Current Address>', '<Permanent addresss>' y '<Email>'
		And hace click en el boton de "Submit"
		Then de mostrar un mensaje con los datos que se ingreso

	@TC_GX-9579 @Elements @Feature @L1 @TextBox @ToolsQA
	Scenario: 9553 | TC3: Validar que al no tener “@“ en el campo Email se muestre el borde rojo
		When el prendiz Qa ingrese el email sin "@"
		And hace click en el boton "Submit"
		Then de cambiar el borde del input de email de color rojo

	@TC_GX-9580 @Elements @Feature @L1 @TextBox @ToolsQA
	Scenario: 9553 | TC4: Validar que al no tener 1 caracter alfanumerico antes del “@“ en el campo Email se muestre el borde rojo
		When el prendiz Qa ingrese el email sin 1 caracter alfanumerico antes del “@“
		And hace click en el boton "Submit"
		Then de cambiar el borde del input de email de color rojo

	@TC_GX-9581 @Elements @Feature @L1 @TextBox @ToolsQA
	Scenario: 9553 | TC5: Validar que al no tener 1 caracter alfanumerico despues del “@“ en el campo Email se muestre el borde rojo
		When el prendiz Qa ingrese el email sin 1 caracter alfanumerico despues del “@“
		And hace click en el boton "Submit"
		Then de cambiar el borde del input de email de color rojo

	@TC_GX-9582 @Elements @Feature @L1 @TextBox @ToolsQA
	Scenario: 9553 | TC6: Validar que al no tener “.“  y 1 caracter alfanumerico despues del “@“ en el campo Email se muestre el borde rojo
		When el prendiz QA ingrese el email sin “.“ y 1 caracter alfanumerico despues del “@“
		And hace click en el boton "Submit"
		Then de cambiar el borde del input de email de color rojo

	@TC_GX-9583 @Elements @Feature @L1 @TextBox @ToolsQA
	Scenario: 9553 | TC7: Validar que al no tener 2 caracteres alfanumericos despues del “.“ en el campo Email se muestre el borde rojo
		When el prendiz QA ingrese el email sin 2 caracteres alfanumericos despues del “.“
		And hace click en el boton "Submit"
		Then de cambiar el borde del input de email de color rojo
