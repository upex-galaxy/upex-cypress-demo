import { removeLogs } from '@helper/RemoveLogs';
const credentials = require('../../../fixtures/data/formData.Page.json');
describe('GX-15295|✅ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/text-box');
		// cy.url().should('contain', 'text-box');
	});

	it('15296 | TC1: Validate press buttom submit with empty fields.', () => {
		cy.get('#submit').click();
	});
	it('15296 | TC2: Validate press buttom submit with  filled fields.', () => {
		cy.get("[type='text']").type(credentials.username);
		cy.get("[type='email']").type(credentials.emailcorrecto);
		cy.get('[placeholder="Current Address"]').type(credentials.currentaddress);
		cy.get('#permanentAddress').type(credentials.permanentaddress);
		cy.get('#submit').click();
		cy.get('#userName-wrapper');
		cy.get('#userEmail-wrapper');
		cy.get('#currentAddress-wrapper');
		cy.get('#permanentAddress-wrapper');
	});
	it('15296 | TC3: Validate press buttom submit with and email without @', () => {
		cy.get("[type='text']").type(credentials.username);
		cy.get("[type='email']").type(credentials.emailsinarroba);
		cy.get('[placeholder="Current Address"]').type(credentials.currentaddress);
		cy.get('#permanentAddress').type(credentials.permanentaddress);
		cy.get('#submit').click();
		cy.get('#userName-wrapper');
		cy.get('#userEmail-wrapper');
		cy.get('#currentAddress-wrapper');
		cy.get('#permanentAddress-wrapper');
		cy.get("[type='email']").type(credentials.emailsinarroba).should('have.class', 'mr-sm-2 field-error form-control');
	});
	it('15296 | TC4: Validate press buttom submit with and email that not conteins  (minimum) 1 alphanumeric character before “@”', () => {
		cy.get("[type='text']").type(credentials.username);
		cy.get("[type='email']").type(credentials.emailsincaracterbefore);
		cy.get('[placeholder="Current Address"]').type(credentials.currentaddress);
		cy.get('#permanentAddress').type(credentials.permanentaddress);
		cy.get('#submit').click();
		cy.get('#userName-wrapper');
		cy.get('#userEmail-wrapper');
		cy.get('#currentAddress-wrapper');
		cy.get('#permanentAddress-wrapper');
		cy.get("[type='email']").type(credentials.emailsincaracterbefore).should('have.class', 'mr-sm-2 field-error form-control');
	});
	it('15296 | TC5: Validate press buttom submit with and email that not conteins (minimum) 1 alphanumeric character after @', () => {
		cy.get("[type='text']").type(credentials.username);
		cy.get("[type='email']").type(credentials.emailsincaracterafter);
		cy.get('[placeholder="Current Address"]').type(credentials.currentaddress);
		cy.get('#permanentAddress').type(credentials.permanentaddress);
		cy.get('#submit').click();
		cy.get('#userName-wrapper');
		cy.get('#userEmail-wrapper');
		cy.get('#currentAddress-wrapper');
		cy.get('#permanentAddress-wrapper');
		cy.get("[type='email']").type(credentials.emailsincaracterafter).should('have.class', 'mr-sm-2 field-error form-control');
	});
	it('15296 | TC6: Validate press buttom submit with and email that not contain “.” after: 1 alphanumeric character after @.', () => {
		cy.get("[type='text']").type(credentials.username);
		cy.get("[type='email']").type(credentials.emailcaracterbeforepunto);
		cy.get('[placeholder="Current Address"]').type(credentials.currentaddress);
		cy.get('#permanentAddress').type(credentials.permanentaddress);
		cy.get('#submit').click();
		cy.get('#userName-wrapper');
		cy.get('#userEmail-wrapper');
		cy.get('#currentAddress-wrapper');
		cy.get('#permanentAddress-wrapper');
		cy.get("[type='email']").type(credentials.emailcaracterbeforepunto).should('have.class', 'mr-sm-2 field-error form-control');
	});

	it('15296 | TC7: Validate press buttom submit with and email that not contain (minimum) 2 alphanumeric characters after “.”', () => {
		cy.get("[type='text']").type(credentials.username);
		cy.get("[type='email']").type(credentials.emailsincaracafterpunto);
		cy.get('[placeholder="Current Address"]').type(credentials.currentaddress);
		cy.get('#permanentAddress').type(credentials.permanentaddress);
		cy.get('#submit').click();
		cy.get('#userName-wrapper');
		cy.get('#userEmail-wrapper');
		cy.get('#currentAddress-wrapper');
		cy.get('#permanentAddress-wrapper');
		cy.get("[type='email']").type(credentials.emailsincaracafterpunto).should('have.class', 'mr-sm-2 field-error form-control');
	});
});
removeLogs();
