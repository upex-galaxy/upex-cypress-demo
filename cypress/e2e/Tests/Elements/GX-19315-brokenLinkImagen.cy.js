import { removeLogs } from '@helper/RemoveLogs';
import { broken } from '@pages/Elements/GX-19315-Broken.Page';

describe('✅ToolsQA | Elements | Brocken', () => {
	beforeEach('Estar situado en demoqa/broken', () => {
		cy.visit('https://demoqa.com/broken');
		cy.url().should('contain', 'broken');
	});
	it('19316 | TC1: Validate image "TOOLS QA" is displayed correctly', () => {
		broken.elements.validImageText().should('exist'); // verifica que el texto 'Valid image'exista
		broken.elements.validImage().should('be.visible');
		broken.elements.validImage().should('have.css', 'overflow-clip-margin', 'content-box');
	});

	it('19316 | TC2: Validate broken image is not displayed and says "broken image"', () => {
		broken.elements.brokenImageText().should('exist');
		broken.elements.invalidImage().should('be.visible');
		broken.elements.invalidImage().should('have.css', 'overflow', 'clip');
	});

	it('19316 | TC3: Validate do click on the link "Click Here for Valid Link" successfully redirects the page', () => {
		broken.clickValidLinkAndVerifyRedirection();
		cy.url().should('contain', 'demoqa.com');
		cy.title().should('not.be.empty');
	});

	it('19316 | TC4: Validate do click on the link "Click Here for Broken Link" shows an error message', () => {
		broken.clickBrokenLinkAndVerifyErrorMessage();
		broken.elements.errorMessage().should('exist');
	});
});

removeLogs();
