import { imagePage } from '@pages/BrokenLinksImages.Page';
const brokenLinkImgPage = Cypress.env('endpoint').brokenLinkImg;

describe('ToolsQA | Elements | Broken Links Images', () => {
	beforeEach('PRC:', () => {
		cy.visit(brokenLinkImgPage);
		cy.url().should('contain', brokenLinkImgPage);
	});
	// -- Start: Cypress Tests --
	it.skip('16808 | Validate that the Tools QA logo must be displayed correctly', () => {
		imagePage.getNameTag(0).then($text => {
			expect($text).eq('Valid image');
		});
		imagePage.getNameImg(0).then(name => {
			// Realizar aserciones para extraer el nombre de la img
			expect(name).to.equal('Toolsqa.jpg');
		});
		imagePage.getPropertyImg(0).then($img => {
			// Realizar aserciones con las dimensiones de la imagen(Valida)
			const { width, height } = $img;
			/*expect(width).to.be.greaterThan(0);
			expect(height).to.be.greaterThan(0);*/
			expect(width).to.equal(347);
			expect(height).to.equal(100);
		});
	});
	it.skip('16808 | Validate that a broken image icon should appear', () => {
		imagePage.getNameTag(1).then($text => {
			expect($text).eq('Broken image');
		});
		imagePage.getNameImg(1).then(name => {
			expect(name).to.equal('Toolsqa_1.jpg');
		});
		imagePage.getPropertyImg(1).then($img => {
			// Realizar aserciones con las propiedades de la img(rota)
			const { width, height } = $img;
			expect(width).to.equal(0);
			expect(height).to.equal(0);
		});
	});
	it('16808 | Validate that valid link must be working correctly', () => {
		imagePage.getNameTag(2).then($text => {
			expect($text).eq('Valid Link');
		});
	});
	it.skip('16808 | Validate that invalid link must go to a webpage showing a 500 status code', () => {
		imagePage.getNameTag(3).then($text => {
			expect($text).eq('Broken Link');
		});
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
