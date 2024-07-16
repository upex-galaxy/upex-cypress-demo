import { alertPage } from '@pages/GX3-4098-AlertFrameWindow.Page';
describe('GX3 4098 |ToolsQA | Alert-Frame-Window | Alerts', () => {
	beforeEach('PRC: El usuario debe estar situado en la pagina de Demo QA', () => {
		cy.visit('https://demoqa.com/alerts');
		cy.url().should('contain', 'alerts');
	});
	it('4099 | TC1: Validate the first "click me" button. An alert with the text "You clicked the button" must appear.', () => {
		//cy.get('alertButton').shoul
	});

});