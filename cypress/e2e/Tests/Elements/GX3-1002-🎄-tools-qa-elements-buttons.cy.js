describe('GX3-1002 | TS:🎄ToolsQA | Elements | Buttons', () => {
	//Preconditions
	beforeEach('PRC: Situarse en módulo buttons de la página Demo QA', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contain', 'buttons');
	});

	//Diseño de Test Cases:
	it('GX3-1002 | TC1: Validar hacer Double Click button (Double Click Me) para mostrar mensaje: You have done a double click', () => {
		cy.get('button#doubleClickBtn').dblclick();
		//cy.get('#dynamicClickMessage').should('have.text', 'You have done a double click');
		cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
	});
	it('GX3-1002 | TC2: Validar hacer 1 Click button (Double Click Me)', () => {
		cy.get('button#doubleClickBtn').click();
		cy.get('#dynamicClickMessage').should('not.equal', 'You have done a double click');
	});
	it('GX3-1002 | TC3: Validar hacer Right Click button (Double Click Me)', () => {
		cy.get('button#rightClickBtn').rightclick();
		cy.get('#dynamicClickMessage').should('not.equal', 'You have done a double click');
	});

	it('GX3-1002 | TC4: Validar hacer Click button (Right Click Me) para mostrar mensaje: You have done a right click', () => {
		cy.get('button#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
	});
	it('GX3-1002 | TC5: Validar hacer 1 Click button (Right Click Me)', () => {
		cy.get('button#rightClickBtn').rightclick();
		cy.get('button#rightClickBtn').should('not.equal', 'You have done a right click');
	});
	it('GX3-1002 | TC6: Validar hacer Double Click button (Right Click Me)', () => {
		cy.get('button#rightClickBtn').rightclick();
		cy.get('button#rightClickBtn').should('not.equal', 'You have done a right click');
	});

	it('GX3-1002 | TC7: Validar hacer Click button (Click Me) para mostrar mensaje: You have done a dynamic click', () => {
		cy.get('.btn.btn-primary').eq(2).click();
		cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click');
	});
	it('GX3-1002 | TC8: Validar hacer Double Click button (Click Me)', () => {
		cy.get('.btn.btn-primary').eq(2).dblclick();
		cy.get('#dynamicClickMessage').should('not.equal', 'You have done a dynamic click');
	});
	it('GX3-1002 | TC9: Validar hacer Right Click button (Click Me)', () => {
		cy.get('.btn.btn-primary').eq(2).rightclick();
		cy.get('#dynamicClickMessage').should('not.equal', 'You have done a dynamic click');
	});
});
