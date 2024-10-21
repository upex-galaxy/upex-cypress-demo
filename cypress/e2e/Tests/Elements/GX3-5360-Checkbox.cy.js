describe('GX3-5360 | ToolsQA | Elements | Checkbox', () => {
	beforeEach('PRC: User is on the website DemoQA ', () => {
		cy.visit('https://demoqa.com/checkbox');
		cy.url().should('contain', 'checkbox');
		cy.get('h1').should('have.text', 'Check Box');
	});
	it('5381 | TC1: Validate all folders are expanded when clicking the Expand All button', () => {
		cy.get('[title="Expand all"]').click();
		cy.get('ol>*').eq(0).should('have.class', 'rct-node-expanded');
	});
	it('5381 | TC2: Validate all folders are collapsed when clicking the Collpase All button', () => {
		cy.get('[title= "Collapse all"]').click();
		cy.get('ol>*').should('have.class', 'rct-node-collapsed');
	});
	it('5381 | TC3: Validate folders Desktop, Documents, Downloads expand when opening the Home folder', () => {
		cy.get('[title= "Toggle"]').eq(0).click();
		cy.get('[for="tree-node-desktop"]').should('be.visible');
		cy.get('[for="tree-node-documents"]').should('be.visible');
		cy.get('[for="tree-node-downloads"]').should('be.visible');
	});
	it('5381 | TC4: Validate folders Notes, Commands expand when opening the Desktop folder', () => {
		cy.get('[title= "Toggle"]').eq(0).click();
		cy.get('[title="Toggle"]').eq(1).click();
		cy.get('[for="tree-node-notes"]').should('be.visible');
		cy.get('[for="tree-node-commands"]').should('be.visible');
	});
	it('5381 | TC5: Validate folders WorkSpace, Office expand when opening the Documents folder', () => {
		cy.get('[title= "Toggle"]').eq(0).click();
		cy.get('[title="Toggle"]').eq(2).click();
		cy.get('[for="tree-node-workspace"]').should('be.visible');
		cy.get('[for="tree-node-office"]').should('be.visible');
	});
	it('5381 | TC6: Validate folders React, Angular, Veu expand when opening the WorkSpace folder', () => {
		cy.get('[title= "Toggle"]').eq(0).click();
		cy.get('[title="Toggle"]').eq(2).click();
		cy.get('[title="Toggle"]').eq(3).click();
		cy.get('[for="tree-node-react"]').should('be.visible');
		cy.get('[for="tree-node-angular"]').should('be.visible');
		cy.get('[for="tree-node-veu"]').should('be.visible');
	});
	it('5381 | TC7: Validate folders Public, Private, Classified, General expand when opening the Office folder', () => {
		cy.get('[title= "Toggle"]').eq(0).click();
		cy.get('[title="Toggle"]').eq(2).click();
		cy.get('[title="Toggle"]').eq(4).click();
		cy.get('[for="tree-node-public"]').should('be.visible');
		cy.get('[for="tree-node-private"]').should('be.visible');
		cy.get('[for="tree-node-classified"]').should('be.visible');
		cy.get('[for="tree-node-general"]').should('be.visible');
	});
	it('5381 | TC8: Validate folders Word File.doc, Excel File.doc expand when opening the Downloads folder', () => {
		cy.get('[title= "Toggle"]').eq(0).click();
		cy.get('[title="Toggle"]').eq(3).click();
		cy.get('[for="tree-node-wordFile"]').should('be.visible');
		cy.get('[for="tree-node-excelFile"]').should('be.visible');
	});
	it('5381 | TC9: Validate all checkboxes under Home autocheck when folder Home is checked ', () => {
		cy.get('.rct-checkbox').eq(0).click();
		cy.get('.rct-checkbox>*').eq(0).should('have.class', 'rct-icon-check');
		cy.get('#result>*').should('have.class', 'text-success');
	});
	it('5381 | TC10: Validate all checkboxes under Desktop autocheck when folder Desktop is checked  ', () => {
		cy.get('[title= "Toggle"]').eq(0).click();
		cy.get('[title="Toggle"]').eq(1).click();
		cy.get('.rct-checkbox').eq(1).click();
		cy.get('.rct-checkbox>*').eq(1).should('have.class', 'rct-icon-check');
		cy.get('#result>*').should('have.class', 'text-success');
	});
	it('5381 | TC11: Validate all checkboxes under Documents autocheck when folder Documents is checked', () => {
		cy.get('[title= "Toggle"]').eq(0).click();
		cy.get('[title="Toggle"]').eq(2).click();
		cy.get('[title="Toggle"]').eq(3).click();
		cy.get('[title="Toggle"]').eq(4).click();
		cy.get('.rct-checkbox').eq(2).click();
		cy.get('.rct-checkbox>*').eq(2).should('have.class', 'rct-icon-check');
		cy.get('#result>*').should('have.class', 'text-success');
	});
	it('5381 | TC12: Validate all checkboxes under Downloads autocheck when folder Downloads is checked ', () => {
		cy.get('[title= "Toggle"]').eq(0).click();
		cy.get('[title="Toggle"]').eq(3).click();
		cy.get('.rct-checkbox').eq(3).click();
		cy.get('.rct-checkbox>*').eq(3).should('have.class', 'rct-icon-check');
		cy.get('#result>*').should('have.class', 'text-success');
	});
});
