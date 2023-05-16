import { imagePage } from '@pages/BrokenLinksImages.Page';
describe('ToolsQA | Elements | Broken Links Images', () => {
	beforeEach('PRC:', () => {
		cy.visit('https://demoqa.com/broken');
		cy.url().should('contain', 'broken');
	});
	// -- Start: Cypress Tests --
	it('16808 | Validate that the Tools QA logo must be displayed correctly', () => {
		imagePage.selectParagraphIndex(0).then($i => {
			const indexText = $i.text();
			expect($i).to.contain(indexText);
			expect(indexText).eq('Valid image');
		});
		imagePage.selectImgIndex(0).then($src => {
			expect($src).exist;
			const imgName = $src.split('/').pop();
			expect(imgName).to.equal('Toolsqa.jpg');

			imagePage.getImageDimensions($src).then(dimensions => {
				const imageWidth = dimensions.width;
				const imageHeight = dimensions.height;
				const message = dimensions.message;

				// Realizar aserciones con las dimensiones de la imagen
				expect(imageWidth).to.equal(347);
				expect(imageHeight).to.equal(100);

				// Realizar aserciones con el mensaje de éxito
				expect(message).to.equal('The Tools QA logo is displayed with the correct dimensions');
			});
		});
	});
	it('16808 | Validate that a broken image icon should appear', () => {
		imagePage.selectParagraphIndex(1).then($i => {
			const indexText = $i.text();
			expect($i).to.contain(indexText);
			expect(indexText).eq('Broken image');
		});
		imagePage.selectImgIndex(1).then($src => {
			expect($src).exist;
			const imgName = $src.split('/').pop();
			expect(imgName).to.equal('Toolsqa_1.jpg');

			imagePage.getImageDimensions($src).then(dimensions => {
				const imageWidth = dimensions.width;
				const imageHeight = dimensions.height;
				const message = dimensions.message;
				cy.log(imageWidth);
				cy.log(imageHeight);

				// Realizar aserciones con las dimensiones de la imagen
				expect(imageWidth).to.equal(347);
				expect(imageHeight).to.equal(100);

				// Realizar aserciones con el mensaje de éxito
				expect(message).to.equal('The Tooling QA logo is NOT shown with the correct dimensions');
			});
		});
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
