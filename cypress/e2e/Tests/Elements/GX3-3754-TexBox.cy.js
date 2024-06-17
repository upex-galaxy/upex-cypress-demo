import data from '@data/Elements/GX3-3754-TextBox.json'
describe('GX3-3754| ToolsQA | Elements | Text Box: Fill form and Submit',()=>{
	beforeEach('PRC: El usuario debe estar situado en la pagina Demo Qa',()=>{
		cy.visit('/text-box')
	})
	it.only('3755 | TC1: Validar registrar correctamente al ingresar los datos en el formulairo.',()=>{
		cy.get('#userName').type(data.dataValid.fullName)
		cy.get('#userEmail').type(data.dataValid.email)
		cy.get('#currentAddress').type(data.dataValid.currentAddress)
		cy.get('#permanentAddress').type(data.dataValid.permanentAddress)

		cy.log(data.hola)

	});
	it('3755 | TC2: Validar No registrar correctamente cuando el campo de "Full Name" esta vacio.',()=>{
		cy.get('')

	});
	it('3755 | TC3: Validar No registrar correctamente cuando el campo de "Current Address" esta vacio.',()=>{
		cy.get('')

	});
	it('3755 | TC4: Validar No registrar correctamente cuando el campo de"Permanet Address" esta vacio.',()=>{
		cy.get('')

	});
	it('3755 | TC1: Validar registrar correctamente al ingresar los datos en el formulairo.',()=>{
		cy.get('')

	});

});