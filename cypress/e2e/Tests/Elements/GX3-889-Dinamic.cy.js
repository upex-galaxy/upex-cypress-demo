import { Dinamico } from '@pages/Elements/GX3-889-Dinamic';
describe('US GX3-889 | TS: ToolsQA | Elements | Dynamic Properties', () => {
	beforeEach('Estar en la pagina de demoqa', () => {
		cy.visit('https://demoqa.com/dynamic-properties');
	});
	it('892|TC1:Validar poder obtener elemento “This text has random Id“', () => {
		Dinamico.Randomtext().should('contain', 'This text has random Id');
	});
	it('892|TC2:Validar que el elemento este habilitado después de 5 segundos', () => {
		Dinamico.buttomDisabled().should('be.disabled');
		cy.wait(5000);
		Dinamico.buttomEnabled().should('not.be.disabled');
	});
	it('892|TC3: Validar cambiar estado de elemento "Color Change" al pasar cinco segundos', () => {
		Dinamico.buttonColorChange().should('not.have.css', 'color', 'rgb(220, 53, 69)');
		cy.wait(5000);
		Dinamico.buttonColorChange().should('have.css', 'color', 'rgb(220, 53, 69)');
	});
	it('892|TC4: Validar cambiar estado de elemento "Visible" al pasar cinco segundos', () => {
		Dinamico.buttonVisible().should('not.exist');
		cy.wait(5000);
		Dinamico.buttonVisible().should('be.visible');
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
