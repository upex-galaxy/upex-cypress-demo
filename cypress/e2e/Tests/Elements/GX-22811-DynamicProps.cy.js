import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('US GX-22811 | ToolsQA | Elements | Dynamic Properties', () => {
	beforeEach('PRC: Usuario debe ubicarse en la Dynamic Properties Page', () => {
		cy.visit('https://demoqa.com/dynamic-properties');
		cy.url().should('contain', 'dynamic-properties');
	});

	it('22812 | TC01: Validar poder obtener elemento “This text has random Id“', () => {
		cy.get('p').should('contain', 'This text has random Id');
	});

	it('22812 | TC02: Validar cambiar estado de elemento "Enable" al pasar cinco segundos', () => {
		cy.get('button#enableAfter', { timeout: 4999 }).should('be.disabled');
		cy.get('button#enableAfter', { timeout: 5000 }).should('be.enabled');
	});

	it('22812 | TC03: Validar cambiar estado de elemento "Color Change" al pasar cinco segundos', () => {
		cy.get('button#colorChange', { timeout: 4999 }).should('not.have.css', 'color', 'rgb(220, 53, 69)');
		cy.get('button#colorChange', { timeout: 5000 }).should('have.css', 'color', 'rgb(220, 53, 69)');
	});

	it('22812 | TC04: Validar cambiar estado de elemento "Visible" al pasar cinco segundos', () => {
		cy.get('button#visibleAfter', { timeout: 4999 }).should('not.exist');
		cy.get('button#visibleAfter', { timeout: 5000 }).should('be.visible');
	});
});
