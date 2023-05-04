describe('US GX-14854 | ToolsQA | Elements | Dynamic Properties', () => {
	beforeEach('PRC: Usuario debe estar situado en Dynamic properties page', () => {
		cy.visit('https://demoqa.com/dynamic-properties');
		//cy.url().should('contain', 'Dynamic Properties');
	});
	it('14855|TC1: Validar que el button "Will enable 5 seconds" no esta habilitado para clickear y esta invisible', () => {
		cy.fixture('DOM/elements').then(the => {
			cy.get(the.firstButton).should('not.be.enabled').should('be.disabled');
		});
	});
	it('14855|TC2: Validar que las letras del button "Color Change" es de color blanco al cargar el sitio ', () => {
		cy.fixture('DOM/elements').then(the => {
			cy.get(the.secondButton).should('have.css', 'color').and('eq', 'rgb(255, 255, 255)');
		});
	});
	it('14855|TC3: Validar que el button "Visible After 5 Seconds" no este visible al cargar el sitio ', () => {
		cy.fixture('DOM/elements').then(the => {
			cy.get(the.thirdButton).should('not.exist');
		});
	});
	it('14855|TC4: Validar que el button "Will enable 5 seconds" esta habilitado para realizarle clic y es invisible luego de 5 segundos', () => {
		
		cy.fixture('DOM/elements').then(the => {
			cy.get(the.firstButton,{timeout:5000}).should('be.enabled').should('be.visible').click();
		});
	});
	it('14855|TC5: Validar que las letras del button "Color Change" es de color rojo luego de 5 segundos', () => {
		cy.fixture('DOM/elements').then(the => {
			cy.get(the.secondButton,{timeout:5000}).should('have.css', 'color').and('eq', 'rgb(220, 53, 69)');
		});
	});
	it('148555|TC6: Validar que el button "Visible After 5 Seconds" este visible luego de 5 segundos', () => {
		cy.fixture('DOM/elements').then(the => {
			cy.get(the.thirdButton,{timeout:5000}).should('be.visible').click();
		});
	});
});

Cypress.on('uncaught:exception', () => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
});
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log;
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr' || (opts.displayName === 'fetch' && opts.url.startsWith('https://'))) {
		return;
	}
	return origLog(opts, ...other);
};
