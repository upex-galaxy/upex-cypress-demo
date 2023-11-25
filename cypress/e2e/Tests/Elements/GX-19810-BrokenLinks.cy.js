// import { removeLogs } from '@helper/RemoveLogs';
// removeLogs();
// import { brokenLinks } from '@pages/Elements/brokenLinks';

// describe.skip('GX-19810 | Tools | Elements | Broken-Links-Images', () => {
// 	beforeEach('User must be inside the website', () => {
// 		cy.visit('https://demoqa.com/broken');
// 	});
// 	it('19811 | TC1: Validate Tools QA logo displayed correctly.', () => {
// 		brokenLinks.get.validImg().should('be.visible').and('have.css', 'width', '347px').and('have.css', 'height', '100px');
// 	});
// 	it('19811 | TC2: Validate a broken image icon must appear', () => {
// 		brokenLinks.get.brokenImg().then($img => {
// 			cy.wrap($img);
// 			expect($img[0].naturalWidth).to.be.eql(0);
// 			expect($img[0].naturalHeight).to.be.eql(0);
// 		});
// 	});
// 	it('19811 | TC3: Validate the valid link work correctly.', () => {
// 		brokenLinks.get.validLink().should('exist').click();
// 		cy.url().should('include', 'https://demoqa.com/');
// 	});
// 	it('19811 | TC4: Validate the invalid link go to a webpage showing a 500 status code.', () => {
// 		cy.intercept('GET', 'http://the-internet.herokuapp.com/status_codes/500').as('link');
// 		brokenLinks.get.invalidLink().should('exist').click();
// 		cy.url().should('include', 'http://the-internet.herokuapp.com/status_codes/500');
// 		cy.wait('@link').its('response.statusCode').should('eq', 500);
// 	});
// });
