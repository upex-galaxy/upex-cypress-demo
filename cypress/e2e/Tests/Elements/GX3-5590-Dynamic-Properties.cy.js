describe('US GX3-5590 | ToolsQA | Elements | Dynamic Properties', () => {
	beforeEach('PRC: Abrir la url dynamic-properties de ToolsQA', () => {
		cy.visit('https://demoqa.com/dynamic-properties');
		cy.url().should('contain', 'dynamic-properties');
	});

	it('US # GX3-5590 | TC#01: Validar el texto del tag paragraph', () => {
		const TXT_PARAGRAPH = '[class="col-12 mt-4 col-md-6"] p';

		cy.get(TXT_PARAGRAPH).should('exist').and('contain.text', 'This text has random Id').and('be.visible');
	});

	it('US # GX3-5590 | TC#02: Validar el cambio de estado del button "enableAfter"', () => {
		const BUTTON_ENABLE_AFTER = '[class="col-12 mt-4 col-md-6"] button#enableAfter.mt-4.btn.btn-primary';

		cy.get(BUTTON_ENABLE_AFTER).should('exist').and('be.not.enabled');
		cy.get(BUTTON_ENABLE_AFTER, { timeout: 5000 }).should('exist').and('be.enabled');
	});

	it('US # GX3-5590 | TC#03: Validar el cambio de color del button "colorChange"', () => {
		const BUTTON_COLOR_CHANGE = '[class="col-12 mt-4 col-md-6"] button#colorChange.mt-4.btn.btn-primary';

		cy.get(BUTTON_COLOR_CHANGE).should('exist').and('be.visible');
		cy.get(BUTTON_COLOR_CHANGE, { timeout: 5000 }).should('have.class', 'text-danger');
	});

	it('US # GX3-5590 | TC#04: Validar el cambio de visibilidad del button "visibleAfter"', () => {
		const BUTTON_VISIBLE_AFTER = '[class="col-12 mt-4 col-md-6"] button#visibleAfter.mt-4.btn.btn-primary';

		cy.get(BUTTON_VISIBLE_AFTER).should('not.exist');
		cy.get(BUTTON_VISIBLE_AFTER, { timeout: 5000 }).should('exist').and('be.visible');
	});
});
