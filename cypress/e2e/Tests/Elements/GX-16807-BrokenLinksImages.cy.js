import { imagePage } from '@pages/BrokenLinksImages.Page';
const brokenLinkImgPage = Cypress.env('endpoint').brokenLinkImg;

describe('ToolsQA | Elements | Broken Links Images', () => {
	beforeEach('PRC:', () => {
		Cypress.config('Browser', 'electron');
		/*cy.visit(brokenLinkImgPage);
		cy.url().should('contain', brokenLinkImgPage);*/
	});
	// -- Start: Cypress Tests --
	it('16808 | Validate that the Tools QA logo must be displayed correctly', () => {
		cy.visit(brokenLinkImgPage);
		cy.url().should('contain', brokenLinkImgPage);

		imagePage.getNameImg(0).then(name => {
			// Make assertions to extract the name of the img
			expect(name).to.equal('Toolsqa.jpg');
		});
		imagePage.getPropertyImg(0).then($img => {
			const { width, height } = $img;
			//Cypress.env('imagenGuardada', $img);
			expect(width).to.equal(347);
			expect(height).to.equal(100);
		});
	});
	it('16808 | Validate that a broken image icon should appear', () => {
		cy.visit(brokenLinkImgPage);
		cy.url().should('contain', brokenLinkImgPage);

		imagePage.getNameImg(1).then(name => {
			expect(name).to.equal('Toolsqa_1.jpg');
		});
		imagePage.getPropertyImg(1).then($img => {
			const { width, height } = $img;
			expect(width).to.equal(0);
			expect(height).to.equal(0);
		});
	});
	it('16808 | Validate that valid link must be working correctly', () => {
		cy.visit(brokenLinkImgPage);
		cy.url().should('contain', brokenLinkImgPage);

		imagePage.clickRedirectLink(0);
		cy.url().should('contain', 'demoqa');

		imagePage.getPropertyImg().then($img => {
			const { width, height } = $img;
			expect(width).to.equal(347);
			expect(height).to.equal(100);
		});
	});
	it('16808 | Validate that invalid link must go to a webpage showing a 500 status code', () => {
		cy.visit(brokenLinkImgPage);
		cy.url().should('contain', brokenLinkImgPage);

		cy.intercept('GET', 'http://the-internet.herokuapp.com/status_codes/500').as('invalidImg');

		imagePage.clickRedirectLink(1);
		cy.should('contain', 'Click Here for Broken Link');

		cy.wait('@invalidImg').then(resp => {
			cy.log(resp);
			expect(resp.response.statusCode).to.equal(500);
		});
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
