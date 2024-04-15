//* El describe (o contexto) es el que contenerá los test y/o los hooks
describe('GX3-3098 | Elements | Radio Buttons',() => {
	before('precondition',() => {
		cy.clearAllCookies();
	}); //* Antes de todos los test y se ejecuta una sola vez

	beforeEach(() => {
		cy.visit('/buttons');
		//! Con esta aserción vemos la URL
		cy.url().should('contain', 'buttons');
		//! Con esta aserción vemos el texto de la etiqueta h1
		cy.get('h1').should('have.text', 'Buttons');
	}); //* Antes de cada test
	// after(); //* Despues de todos los test
	// afterEach(); //* Despues de cada test
	it('3099 | TC1: Validar el funcionamiento del botón Double Click Me', () => {
		cy.get('#doubleClickBtn').dblclick();
	});
});