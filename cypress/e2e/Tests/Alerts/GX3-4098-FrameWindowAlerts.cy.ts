import { alertPage } from '@pages/GX3-4098-AlertFrameWindow.Page';
describe('GX3 4098 |ToolsQA | Alert-Frame-Window | Alerts', () => {
	beforeEach('PRC: El usuario debe estar situado en la pagina de Demo QA', () => {
		cy.visit('https://demoqa.com/alerts');
		cy.url().should('contain', 'alerts');
	});
	it('4099 | TC1: Validate the first "click me" button. An alert with the text "You clicked the button" must appear.', () => {
		alertPage.actionAlertButton();
		cy.on('window:alert', (str) => expect(str).to.equal('You clicked a button'));

	});
	it('4099 | TC2: Validate the second "click me" button. An alert must appear 5 seconds after the click.', () => {
		alertPage.timerAlert();
		cy.on('window:alert', (str) => expect(str).to.equal('This alert appeared after 5 seconds'));
		//cy.get.alertTimerButton({ timeout: 5000 }).should('contain.text','This alert appeared after 5 seconds');

	});
	it('4099 | TC3: Validate the third "click me" button. If the "OK" option is selected, a “You selected OK” confirmation message must appear.', () => {
		alertPage.confirmAlert();
		 cy.on('window:confirm', (str) => {expect(str).to.equal('Do you confirm action?');
			return true;
		});
		alertPage.get.confirmResult().should('have.text','You selected Ok');
	});
});