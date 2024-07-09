describe('ToolsQA | Elements | Buttons',()=>{
	beforeEach('Estar situado en  DemoQA',()=>{
		cy.visit('https://demoqa.com/buttons')
		cy.url().should("contain",'buttons')
	})
	it('4035 | TC1: Validar hacer dobleclick en el Boton "double Click Me"',()=>{
		cy.get('#doubleClickBtn').dblclick()
		cy.get('#doubleClickMessage').should("have.text",'You have done a double click')

	})
})