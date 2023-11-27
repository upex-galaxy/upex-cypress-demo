// import { removeLogs } from '@helper/RemoveLogs';
// import { brokenL } from '@pages/Elements/GX-23722-BrokenLinks';
// import data from '@data/GX-23722-BrokenLink.json';

// describe.skip('ToolsQA | Elements | Broken Links Images', () => {
// 	beforeEach('Usuario debe estar en la website', () => {
// 		cy.visit('/broken');
// 	});

// 	it('GX-23722 | TC1: Validar las propiedades de imagen valida', () => {
// 		brokenL.get.ValidImage().should('to.exist').and('have.prop', 'width', 347).and('have.prop', 'height', 100);
// 	});

// 	it('GX-23722 | TC2: Validar las propiedades de imagen rota', () => {
// 		brokenL.get.BrokedImage().then(image => {
// 			expect(image).to.be.exist;
// 			expect(image).to.have.prop('naturalWidth').to.be.equal(0);
// 			expect(image).to.have.prop('naturalHeight').to.be.equal(0);
// 		});
// 	});

// 	it('GX-23722 | TC3: Validar las propiedades de link valido', () => {
// 		cy.intercept('GET', data.ValidURL).as('Link1');
// 		brokenL.clickLink(1);
// 		cy.wait('@Link1').its('response.statusCode').should('eq', 200);
// 	});

// 	it('GX-23722 | TC4: Validar las propiedades de link roto', () => {
// 		cy.intercept('GET', data.BrokedURL).as('Link2');
// 		brokenL.clickLink(2);
// 		cy.wait('@Link2').its('response.statusCode').should('eq', 500);
// 	});
// });

// removeLogs();
