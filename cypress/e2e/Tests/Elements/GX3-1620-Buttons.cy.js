describe('US 1620 | ToolsQA | Elements | Buttons', () => {
	beforeEach('Precondition: User is on ToolsQA web, Buttons section', ()=>{
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contain', 'buttons');
	});
	it('1621 | TC1: Check that a message is triggered when double clicking the “Double Click Me” button', ()=>{
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage').should('be.visible').and('have.text', 'You have done a double click');
	});
	it('1621 | TC2: Check that a message is triggered when right clicking the “Right Click Me” button', ()=>{
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage').should('be.visible').and('have.text', 'You have done a right click');
	});
	it('1621 | TC3: Check that a message is triggered when clicking the “Click Me” button', ()=>{
		cy.get('button').eq(3).click();
		cy.get('#dynamicClickMessage').should('be.visible').and('have.text', 'You have done a dynamic click');
	});
	it('1621 | TC4: Check that a message is NOT triggered when clicking the “Double Click Me” button', ()=>{
		cy.get('#doubleClickBtn').click();
		cy.get('#doubleClickMessage').should('not.exist');
	});
	it('1621 | TC5: Check that a message is NOT triggered when right clicking the “Double Click Me” button', ()=>{
		cy.get('#doubleClickBtn').rightclick();
		cy.get('#doubleClickMessage').should('not.exist');
	});
	it('1621 | TC6: Check that a message is NOT triggered when clicking the “Right Click Me” button', ()=>{
		cy.get('#rightClickBtn').click();
		cy.get('#rightClickMessage').should('not.exist');
	});
	it('1621 | TC7: Check that a message is NOT triggered when right clicking the “Click Me” button', ()=>{
		cy.get('button').eq(3).rightclick();
		cy.get('#dynamicClickMessage').should('not.exist');
	});
});
