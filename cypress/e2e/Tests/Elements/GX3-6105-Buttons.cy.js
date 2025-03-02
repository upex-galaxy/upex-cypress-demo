describe('GX3-6105 TOOLSQA ELEMENTS BUTTONS', () => {
	beforeEach('PRC: The user should be on the URL https://demoqa.com/buttons', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.contains('Buttons').should('be.visible');
		cy.url().should('include', '/buttons');
		cy.location('protocol').should('eq', 'https:');
		cy.location('hostname').should('eq', 'demoqa.com');
		cy.request('https://demoqa.com/buttons').its('status').should('eq', 200);
	});

	it('US GX3-6105 | TC 1 | VALIDAR COMPORTAMIENTO DEL BOTÓN DOUBLE CLICK', () => {
		cy.get('#doubleClickBtn', { timeout: 10000 }).should('be.visible').and('be.enabled').dblclick();
	});

	it('US GX3-6105|TC 2 | VALIDAR COMPORTAMIENTO DEL BOTÓN RIGHT CLICK', () => {
		cy.get('button#rightClickBtn', { timeout: 10000 }).should('be.visible').and('be.enabled').rightclick();
	});

	it('US GX3-6105 | TC 3 | VALIDAR COMPORTAMIENTO DEL BOTÓN CLICK ME', () => {
		cy.get('button.btn-primary').eq(2).should('be.visible').and('be.enabled').click();
	});

	it('US GX3-6105 | TC 4 | VALIDAR MENSAJE DE BOTON DOUBLE CLICK ', () => {
		cy.get('#doubleClickBtn', { timeout: 10000 }).should('be.visible').and('be.enabled').dblclick();
		cy.get('#doubleClickMessage').should('be.visible').and('contain', 'You have done a double click');
	});
	it('US GX3-6105 | TC 5 | VALIDAR MENSAJE DE BOTON RIGHT CLICK ', () => {
		cy.get('button#rightClickBtn', { timeout: 10000 }).should('be.visible').and('be.enabled').rightclick();
		cy.get('p[id=rightClickMessage]').should('be.visible').and('contain', 'You have done a right click');
	});

	it('US GX3-6105 | TC 6 | VALIDAR MENSAJE DE BOTON DOUBLE CLICK ', () => {
		cy.get('button.btn-primary').eq(2).should('be.visible').and('be.enabled').click();
		cy.get('p#dynamicClickMessage', { timeout: 10000 }).should('contain', 'You have done a dynamic click');
	});
});
