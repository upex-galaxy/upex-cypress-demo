describe('GX3-3810 |ToolsQA | Elements | Dynamic Properties',()=>{
	beforeEach('PRC:El usuario debe estar situado en la pagina de Demo QA', () => {
		cy.visit('https://demoqa.com/dynamic-properties');
		cy.url().should('include', 'dynamic-properties');
	});
	it('3810 | TC1: Validar el Id dinamico del elemento “This text has random Id"',()=>{
		cy.get('.col-12.mt-4.col-md-6 p').should('have.text','This text has random Id');

	})
	it('3810 | TC2: Validar que el elemento "Will enable 5 secconds" debe afirmarse antes y despues de que se habilite',()=>{
		//cy.get('#enableAfter').should ('have.class','mt-4 btn')
		cy.get('#enableAfter',{timeout: 5000}).should('be.visible')
		//cy.wait(8000)
		//cy.get('#enableAfter').should('be.visible')
		
	})
	it('3810 | TC3: Validar que el elemento "color change" debe afirmarse antes y despues de cambiar de color',()=>{
		cy.get('#colorChange').should ('have.class','btn-primary')
		cy.get('#colorChange',{timeout: 5000}).should ('have.class','text-danger')
	})
	it('3810 | TC4: Validar que el elemento "Visible after 5 seconds" debe afirmarse antes y despues de que sea visible ',()=>{
		//cy.get('#visibleAfter').should ('have.class','mt-4 btn btn-primary')
		cy.get('#visibleAfter',{timeout: 5000}).should ('be.visible')
	})
});