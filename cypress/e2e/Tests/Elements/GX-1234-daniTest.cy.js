import data from '@data/GX-1234-daniTestData.json';
describe('Practicando con Cypress', () => {
	beforeEach(() => {
		cy.visit(data.radioButtonEndpoint);
		cy.url().should('contain', data.radioButtonEndpoint);
	});
	it('TC01: Validar el funcionamiento del botón "YES"', () => {
		cy.get('#yesRadio').parent().click();
	});
	it('TC02: Validar el funcionamiento del botón "Impressive"', () => {
		expect(1).to.equal(1);
	});
	it('TC03: Validar el funcionamiento del botón "NO"', () => {
		expect(1).to.equal(1);
	});
	// before(); //se ejecturá una ves al inicio de la ejecución
	// beforeEach(); // se ejecuta antes de cada prueba

	// after(); // se ejecuta al final de la ejecución
	// afterEach(); // se ejecuta al final de cada prueba
});
