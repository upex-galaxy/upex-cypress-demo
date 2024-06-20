describe('GX3-3810 |ToolsQA | Elements | Dynamic Properties',()=>{
	beforeEach('PRC:El usuario debe estar situado en la pagina de Demo QA', () => {
		cy.visit('https://demoqa.com/dynamic-properties');
		cy.url().should('include', 'dynamic-properties');
	});
	it('3810 | TC1: Validar que el elemento "Will enable 5 secconds" tenga un "Dynamic ID" en el dom y se habilite después de 5 seg.',()=>{
		cy.get('.col-12.mt-4.col-md-6 p').should('have.text','This text has random Id');

	})
	it('3810 | TC1: Validar que el elemento "Will enable 5 secconds" tenga un "Dynamic ID" en el dom y se habilite después de 5 seg.',()=>{
		cy.get('#enableAfter',{timeout: 10000}).should('be.visible')
		//cy.wait(8000)
		//cy.get('#enableAfter').should('be.visible')
		
	})
});