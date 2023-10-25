describe('GX-40938 | TS: ✅ToolsQA | Elements | Broken Links Images', () => {
	beforeEach('Estar ubicado en la pagina de demoqa', () => {
		cy.visit('/broken');
		cy.wait(2000);
	});
	it.skip('40945| TC1: Validar que el logotipo de Tool QA se muestre correctamente', () => {
		cy.get('img[src="/images/Toolsqa.jpg"]').eq(1).should('be.visible');
	});
	it.skip('40945| TC2: Validar que aparezcas la imagen rota en el titulo “Broken image”', () => {
		cy.get('img[src="/images/Toolsqa_1.jpg"]').should('be.visible');
	});
	it.skip('40945| TC3: Validar que al hacer click en el link “Valid link” funcione correctamente', () => {
		cy.get('[href="http://demoqa.com"]').click();
		cy.url().should('contain', 'https://demoqa.com/');
	});
	it('40945| TC4: Validar que al hacer click en el link “Broken link” se  muestre un error', () => {
		cy.get('[href="http://the-internet.herokuapp.com/status_codes/500"]').click();
		cy.get('p').should('contain', 'This page returned a 500 status code.');
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
