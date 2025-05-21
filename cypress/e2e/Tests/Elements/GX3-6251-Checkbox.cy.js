describe('GX3-6251-Checkbox', () => {
	beforeEach('PRC:User need to be on Buttons page', () => {
		cy.visit('https://demoqa.com/checkbox');
		cy.url().should('include', 'checkbox');
	});
	it('GX3-6252 | TC1:Validar Expandir y contraer la carpeta home desde los botones "Expand all" y "Collapse All"', () => {
		cy.get('.rct-option.rct-option-expand-all').click();
		cy.get('.rct-icon.rct-icon-uncheck').eq(0).click();
		cy.contains('Desktop').should('be.visible');
	});
	it('GX3-6252 | TC2: Validar Expandir y contraer la carpeta home y al seleccionar check se marquen Home,Desktop, Documents, Downloads', () => {
		cy.get('.rct-icon.rct-icon-expand-close').click();
		cy.get('.rct-icon.rct-icon-uncheck').eq(0).click();
		cy.contains('Desktop').should('be.visible');
		cy.contains('Documents').should('be.visible');
		cy.contains('Downloads').should('be.visible');
		cy.get('#result').should('contain.text', 'You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile');
	});
	it('GX3-6252 | TC3: Validar Expandir y contraer la carpeta Desktop y al hacer check se marquen los archivos Notes y Commands', () => {
		cy.get('.rct-icon.rct-icon-expand-close').click();
		cy.get('.rct-icon.rct-icon-expand-close').eq(0).click();
		cy.get('.rct-icon.rct-icon-uncheck').eq(1).click();
		cy.contains('Desktop').should('be.visible');
		cy.contains('Notes').should('be.visible');
		cy.contains('Commands').should('be.visible');
		cy.contains('Documents').should('be.visible');
		cy.contains('Downloads').should('be.visible');
		cy.get('#result').should('contain.text', 'You have selected :desktopnotescommands');
	});
	it('GX3-6252 | TC4: Validar Expandir y contraer la carpeta Documents y al hacer check se marquen las subcarpetas Workspace y Office', () => {
		cy.get('.rct-icon.rct-icon-expand-close').click();
		cy.get('.rct-icon.rct-icon-expand-close').eq(1).click();
		cy.get('.rct-icon.rct-icon-uncheck').eq(2).click();
		cy.contains('Documents').should('be.visible');
		cy.contains('WorkSpace').should('be.visible');
		cy.contains('Office').should('be.visible');
		cy.get('#result').should('contain.text', 'You have selected :documentsworkspacereactangularveuofficepublicprivateclassifiedgeneral');
		cy.get('.rct-icon.rct-icon-expand-open').eq(1).click();
	});
	it('GX3-6252 | TC5: Validar Expandir y contraer la subcarpeta Workspace y al hacer click se marquen los archivos React, Angular, Veu', () => {
		cy.get('.rct-icon.rct-icon-expand-close').click();
		cy.get('.rct-icon.rct-icon-expand-close').eq(1).click();
		cy.get('.rct-icon.rct-icon-expand-close').eq(1).click();
		cy.get('.rct-icon.rct-icon-uncheck').eq(3).click();
		cy.contains('React').should('be.visible');
		cy.contains('Angular').should('be.visible');
		cy.contains('Veu').should('be.visible');
		cy.get('#result').should('contain.text', 'You have selected :workspacereactangularveu');
		cy.get('.rct-icon.rct-icon-expand-open').eq(1).click();
	});
	it('GX3-6252 | TC6: Validar Expandir y contraer la subcarpeta Office y al hacer click se marquen los archivos Public, General, Private, Classified', () => {
		cy.get('.rct-icon.rct-icon-expand-close').click();
		cy.get('.rct-icon.rct-icon-expand-close').eq(1).click();
		cy.get('.rct-icon.rct-icon-expand-close').eq(2).click();
		cy.get('.rct-icon.rct-icon-uncheck').eq(4).click();
		cy.contains('Public').should('be.visible');
		cy.contains('Private').should('be.visible');
		cy.contains('Classified').should('be.visible');
		cy.contains('General').should('be.visible');
		cy.get('#result').should('contain.text', 'You have selected :officepublicprivateclassifiedgeneral');
		cy.get('.rct-icon.rct-icon-expand-open').eq(1).click();
	});
	it('GX3-6252 | TC7: Validar Expandir y contraer la carpeta Downloads y al hacer check se marquen los archivos WorldFile.doc y ExcelFile.doc', () => {
		cy.get('.rct-icon.rct-icon-expand-close').click();
		cy.get('.rct-icon.rct-icon-expand-close').eq(2).click();
		cy.get('.rct-icon.rct-icon-uncheck').eq(3).click();
		cy.contains('Word File.doc').should('be.visible');
		cy.contains('Excel File.doc').should('be.visible');
		cy.get('#result').should('contain.text', 'You have selected :downloadswordFileexcelFile');
		cy.get('.rct-icon.rct-icon-expand-open').eq(1).click();
	});
});
