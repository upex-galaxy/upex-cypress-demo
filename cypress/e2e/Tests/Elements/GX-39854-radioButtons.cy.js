describe('US GX-39854 | ToolsQA | Elements | Radio Buttons', () => {
	// Precondiciones
	beforeEach('The user must be in Tool QA-Raddio-Buttons', () => {
		cy.visit('https://demoqa.com/radio-button');
		cy.url().should('contain', 'radio-button');
	});
	// TC1
	it('39855|  TC1: Validate that “Yes” can be selected in Radio Buttons.', () => {
		cy.get('[for="yesRadio"]').click(); // Click on button
		cy.get('p.mt-3').should('have.text', 'You have selected Yes');
		//cy.get('.text-success').should('have.text', 'Yes')
	});

	//TC2
	it('39855|  TC2: Validate that “Impressive” can be selected in Radio Buttons', () => {
		cy.get('[for="impressiveRadio"]').click(); // Click on button
		cy.get('p.mt-3').should('have.text', 'You have selected Impressive');
		//cy.get('.text-success').should('have.text', 'Impressive')
	});
	//TC3
	it('39855|TC3: Validate that “NO” cannot be selected in Radio Buttons', () => {
		cy.get('#noRadio').should('be.disabled');
		
	});
});
