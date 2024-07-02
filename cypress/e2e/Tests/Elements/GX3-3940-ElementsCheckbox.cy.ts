import { checkBoxPage } from '@pages/GX3-3940-ElementsCheckbox.Page';
describe('GX-3 3941 | ToolsQA | Elements | Checkbox', () => {
	beforeEach('PRC: El usuario debe estar situado en la pagina de Demo QA',() => {
		cy.visit('https://demoqa.com/checkbox');
		cy.url().should('contain','checkbox');
	});
	it('3941 | TC1: Validar que el "Bulk Action" pueda expandir y colapsar todos los folders"', () => {
		checkBoxPage.clickExpandButton();
		checkBoxPage.get.expandReaction().should('have.class', 'rct-node-expanded');
		checkBoxPage.clickCollapseButton();
		checkBoxPage.get.collapseReaction().should('have.class','rct-node-collapsed');

	});
	it('3941 | TC2: Validar que el check box "Desktop" debe automarcar el interior y mostrar el mensaje de éxito',() => {
		checkBoxPage.clickDesktopToggle();
		//checkBoxPage.get.verifyCommandChecked().should('have.class','rct-icon rct-icon-check');
		cy.get('@desktopCheckboxIcon').should('have.class', 'rct-icon rct-icon-check');
		cy.get('@noteCheckboxIcon').should('have.class', 'rct-icon rct-icon-check');
		cy.get('@commandCheckboxIcon').should('have.class', 'rct-icon rct-icon-check');
		checkBoxPage.get.verifyResultMessage().should('have.text','desktopnotescommands');
	});
	it('3941 | TC3: Validar que el check box "Documents" debe automarcar el interior y mostrar el mensaje de éxito', () => {
		checkBoxPage.clickDocToggle();
		cy.get('@documentsCheckboxIcon').should('have.class','rct-icon-check');
		cy.get('@workspaceCheckboxIcon').should('have.class','rct-icon-check');
		cy.get('@officeCheckboxIcon').should('have.class','rct-icon-check');
		//checkBoxPage.get.verifyResultMessage().should('have.text','documents workspace office');

	});

});
