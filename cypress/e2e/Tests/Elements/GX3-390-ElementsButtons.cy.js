describe('⚡️ToolsQA | Elements | Buttons', () => {
	beforeEach('Usuario debe estar situado en el endpoint buttons', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contain', 'buttons');
	});
	it('392 | TC1: Validar hacer doble click en el botón de doble click', () => {
		cy.get("[type='button']")
			.eq(1)
			.dblclick()
			.should('be.visible')
			.and('not.equal', 'triple')
			.and('contain', 'Double')
			.and('have.id', 'doubleClickBtn');
		cy.wait(2000);
	});
	it('392 | TC2: Validar hacer click derecho en el botón de click derecho', () => {
		cy.get('#rightClickBtn')
			.rightclick()
			.should('not.equal', 'right')
			.and('not.be.empty')
			.and('contain', 'Righ')
			.and('have.attr', 'type', 'button');
		cy.wait(2000);
	});
	it('392 | TC3: Validar hacer click en el botón de click', () => {
		cy.get('.mt-4 > button').eq(1).click().should('exist').and('have.attr', 'type', 'button').and('contain.text', 'Me');
	});
});
