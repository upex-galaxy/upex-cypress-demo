import { Dinamico } from '@pages/Elements/GX3-888-Dinamic';
describe('US GX3-888 | TS: ToolsQA | Elements | Dynamic Properties', () => {
	beforeEach('Estar en la pagina de demoqa', () => {
		cy.visit('https://demoqa.com/dynamic-properties');
	});
	it.skip('25131|TC1:Validar poder obtener elemento “This text has random Id“', () => {
		Dinamico.Randomtext().should('contain', 'This text has random Id');
	});
	it('888|TC2:Validar que el elemento este habilitado después de 5 segundos', () => {
		Dinamico.buttomDisabled().should('be.disabled');
		cy.wait(5000);
		Dinamico.buttomEnabled().should('not.be.disabled');
	});
	it.skip('22812 | TC03: Validar cambiar estado de elemento "Color Change" al pasar cinco segundos', () => {
		cy.get('button#colorChange', { timeout: 4999 }).should('not.have.css', 'color', 'rgb(220, 53, 69)');
		cy.get('button#colorChange', { timeout: 5000 }).should('have.css', 'color', 'rgb(220, 53, 69)');
	});

	it.skip('22812 | TC04: Validar cambiar estado de elemento "Visible" al pasar cinco segundos', () => {
		cy.get('button#visibleAfter', { timeout: 4999 }).should('not.exist');
		cy.get('button#visibleAfter', { timeout: 5000 }).should('be.visible');
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
