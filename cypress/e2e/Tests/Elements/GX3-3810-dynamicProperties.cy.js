describe('GX3-3810 |ToolsQA | Elements | Dynamic Properties', () => {
	beforeEach('PRC:El usuario debe estar situado en la pagina de Demo QA', () => {
		cy.visit('https://demoqa.com/dynamic-properties');
		cy.url().should('include', 'dynamic-properties');
	});

	it('3810 | TC1: Validar el Id dinamico del elemento “This text has random Id"', () => {
		cy.get('.col-12.mt-4.col-md-6 p').should('have.text', 'This text has random Id');
	});

	it('3810 | TC2: Validar que el elemento "Will enable 5 secconds" debe afirmarse antes y despues de que se habilite', () => {
		//Validacion antes de los 5 segundos
		cy.get('#enableAfter').should('not.be.enabled');
		//Validacion despues de los 5 seg
		cy.get('#enableAfter', { timeout: 5000 }).should('be.enabled');
		//cy.wait(8000)
	});

	it('3810 | TC3: Validar que el elemento "color change" debe afirmarse antes y despues de cambiar de color', () => {
		//Validacion antes de los 5 seg 
		cy.get('#colorChange').should('have.class', 'btn-primary');
		//Validacion despues de los 5 seg, cambio de clase
		cy.get('#colorChange', { timeout: 5000 }).should('have.class', 'text-danger');
	});

	it('3810 | TC4: Validar que el elemento "Visible after 5 seconds" debe afirmarse antes y despues de que sea visible ', () => {
		//Validacion antes de que sea visible
		cy.get('#visibleAfter').should('not.exist');
		//Validacion despues de 5seg
		cy.get('#visibleAfter', { timeout: 5000 }).should('be.visible');
	});
});
