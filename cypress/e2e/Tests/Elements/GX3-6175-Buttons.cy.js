describe('GX3-6175 TOOLSQA ELEMENTS BUTTONS', () => {
	beforeEach('PRC: The user should be on the URL https://demoqa.com/buttons', () => {
		cy.visit('https://demoqa.com/buttons');
	});

	it('US GX3-6175 | TC 1 | VALIDAR HACER CLICK EN EL BOTON  DOUBLE CLICK', () => {
		cy.get('#doubleClickBtn').should('be.visible').and('be.enabled').dblclick();
	});

	it('US GX3-6175|TC 2 | VALIDAR HACER CLICK EN EL BOTÓN  RIGHT CLICK', () => {
		cy.get('button#rightClickBtn').should('be.visible').and('be.enabled').rightclick();
	});

	it('US GX3-6175 | TC 3 | VALIDAR HACER CLICK EN EL BOTÓN  CLICK ME', () => {
		cy.get('.btn.btn-primary:not(#doubleClickBtn):not(#rightClickBtn)').should('be.visible').and('be.enabled').click();
	});

	it('US GX3-6175 | TC 4 | VALIDAR QUE SE MUESTRE EL MENSAJE AL HACER CLICK EN EL BOTON  DOUBLE CLICK  ', () => {
		cy.get('#doubleClickBtn').should('be.visible').and('be.enabled').dblclick();
		cy.get('#doubleClickMessage').should('be.visible').and('contain', 'You have done a double click');
	});
	it('US GX3-6175 | TC 5 | VALIDAR QUE SE MUESTRE EL MENSAJE AL HACER CLICK EN BOTON RIGHT CLICK ', () => {
		cy.get('button#rightClickBtn').should('be.visible').and('be.enabled').rightclick();
		cy.get('p[id=rightClickMessage]').should('be.visible').and('contain', 'You have done a right click');
	});

	it('US GX3-6175 | TC 6 | VALIDAR QUE SE MUESTRE MENSAJE DE BOTON  CLICK ME ', () => {
		cy.get('.btn.btn-primary:not(#doubleClickBtn):not(#rightClickBtn)').should('be.visible').and('be.enabled').click();
		cy.get('p#dynamicClickMessage').should('contain', 'You have done a dynamic click');
	});
});
