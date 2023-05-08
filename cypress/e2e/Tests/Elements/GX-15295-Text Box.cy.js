describe('GX-15295|✅ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
		cy.fixture('cypress / fixtures / data / form2.json').then(credentials => {
			this.credentials = credentials;
		});
	});

	it('15296 | TC1: Validate press buttom submit with empty fields.', () => {
		cy.get("[type='text']").type(this.credentials.usernamevacio);
		cy.get("[type='email']").type(this.credentials.emailvacio);
		cy.get('[placeholder="Current Address"]').type(this.credentials.currentaddressvacio);
		cy.get('[textarea="permanentAddress"]').type(this.credentials.permanentaddressvacia);
		cy.get('#submit').click();
	});
	it('15296 | TC2: Validate press buttom submit with  filled fields.', () => {
		// Write your test case two here
	});
	it('15296 | TC3: Validate press buttom submit with and email without @', () => {
		// Write your test case two here
	});
	it('15296 | TC4: Validate press buttom submit with and email that not conteins  (minimum) 1 alphanumeric character before “@”', () => {
		// Write your test case two here
	});
	it('15296 | TC5: Validate press buttom submit with and email that not conteins  (minimum) 1 alphanumeric character after @', () => {
		// Write your test case two here
	});
	it('15296 | TC6: Validate press buttom submit with and email that not contain “.” after: 1 alphanumeric character after @.', () => {
		// Write your test case two here
	});
	it('15296 | TC7: Validate press buttom submit with and email that not contain “.” after: 1 alphanumeric character after @.', () => {
		// Write your test case two here
	});
	it('15296 | TC8: Validate press buttom submit with and email that not contain (minimum) 2 alphanumeric characters after “.”', () => {
		// Write your test case two here
	});
	it('15296 | TC9: Validate press buttom submit if field is invalid is displayed as a red border.', () => {
		// Write your test case two here
	});
});
