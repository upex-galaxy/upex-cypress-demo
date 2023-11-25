// import { removeLogs } from '@helper/RemoveLogs';
// import { broken } from '@pages/Elements/GX-19315-Broken.Page';

// describe('✅ToolsQA | Elements | Broken', () => {
// 	beforeEach('Be located in demoqa/broken', () => {
// 		cy.visit('/broken');
// 		cy.url().should('contain', 'broken');
// 	});
// 	it('19316 | TC1: Validate image "TOOLS QA" is displayed correctly', () => {
// 		broken.elements.validImageText().should('exist'); // verifica que el texto 'Valid image'exista
// 		broken.elements.validImage().should('be.visible');
// 		broken.elements.validImage().should('have.attr', 'src', '/images/Toolsqa.jpg'); // Verifica el atributo src de la imagen
// 		broken.elements.validImage().invoke('prop', 'naturalWidth').should('equal', 347); // Verifica el ancho de la imagen
// 		broken.elements.validImage().invoke('prop', 'naturalHeight').should('equal', 100); // Verifica el alto de la imagen
// 	});

// 	it('19316 | TC2: Validate image is broken and says "broken image"', () => {
// 		broken.elements.brokenImageText().should('exist');
// 		broken.elements.invalidImage().should('be.visible');
// 		broken.elements.invalidImage().should('have.attr', 'src', '/images/Toolsqa_1.jpg'); // Verifica el atributo src de la imagen
// 		broken.elements.invalidImage().invoke('prop', 'naturalWidth').should('equal', 0);
// 		broken.elements.invalidImage().invoke('prop', 'naturalHeight').should('equal', 0);
// 	});

// 	it('19316 | TC3: Validate do click on the link "Click Here for Valid Link" successfully redirects the page', () => {
// 		broken.clickValidLinkAndVerifyRedirection();
// 		cy.url().should('contain', 'demoqa.com');
// 		cy.title().should('not.be.empty');
// 	});

// 	it('19316 | TC4: Validate do click on the link "Click Here for Broken Link" shows an error message', () => {
// 		broken.clickBrokenLinkAndVerifyErrorMessage();
// 		cy.should('contain', 'Click Here for Broken Link');
// 		broken.elements.errorMessage().should('exist');
// 	});
// });

// removeLogs();
