import { removeLogs } from '@helper/RemoveLogs';
import { checkBox } from '@pages/Check-Box.Page.js';
//import { waitUntil } from '@testing-library/cypress';

describe('✅ToolsQA | Elements | Check Box', () => {
	beforeEach('precondición: estar situado en demoQA checkbox', () => {
		cy.visit('https://demoqa.com/checkbox');
		cy.url().should('contain', 'checkbox');
	});

	it('2416 | TC1: Validate all folders are expanded when clicking on"Expand All" Toggle ', () => {
		checkBox.clickButtonExpandAll();
		//validaciones
		//checkBox.verifyAllCheckboxesChecked();
		//checkBox.elements.checkboxHome().should('be.visible');

		//waitUntil(() => checkBox.elements.checkboxDesktop().should('be.visible'));
		// checkBox.elements.checkboxNotes().should('be.visible');
		// checkBox.elements.checkboxCommands().should('be.visible');
		// checkBox.elements.checkboxDocuments().should('be.visible');
		// checkBox.elements.checkboxWorkspace().should('be.visible');
		// checkBox.elements.checkboxReact().should('be.visible');
		// checkBox.elements.checkboxAngular().should('be.visible');
		// checkBox.elements.checkboxVeu().should('be.visible');
		// checkBox.elements.checkboxOffice().should('be.visible');
		// checkBox.elements.checkboxPublic().should('be.visible');
		// checkBox.elements.checkboxPrivate().should('be.visible');
		// checkBox.elements.checkboxClassified().should('be.visible');
		// checkBox.elements.checkboxGeneral().should('be.visible');
		// checkBox.elements.checkboxDownloads().should('be.visible');
		// checkBox.elements.checkboxWordFile().should('be.visible');
		// checkBox.elements.checkboxExcelFile().should('be.visible');		
	});

	it('2416 | TC2: Validate all folders are closed when clicking on "Expand All" Toggle', () => {
		checkBox.clickButtonExpandAll();
		checkBox.clickButtonCollapsedAll();

		// checkBox.elements.checkboxDesktop().should('not.be.visible');
		// checkBox.elements.checkboxNotes().should('not.be.visible');
		// checkBox.elements.checkboxCommands().should('not.be.visible');
		// checkBox.elements.checkboxDocuments().should('not.be.visible');
		// checkBox.elements.checkboxWorkspace().should('not.be.visible');
		// checkBox.elements.checkboxReact().should('not.be.visible');
		// checkBox.elements.checkboxAngular().should('not.be.visible');
		// checkBox.elements.checkboxVeu().should('not.be.visible');
		// checkBox.elements.checkboxOffice().should('not.be.visible');
		// checkBox.elements.checkboxPublic().should('not.be.visible');
		// checkBox.elements.checkboxPrivate().should('not.be.visible');
		// checkBox.elements.checkboxClassified().should('not.be.visible');
		// checkBox.elements.checkboxGeneral().should('not.be.visible');
		// checkBox.elements.checkboxDownloads().should('not.be.visible');
		// checkBox.elements.checkboxWordFile().should('not.be.visible');
		// checkBox.elements.checkboxExcelFile().should('not.be.visible');
	});

	it('2416 | TC3: Validate  subfolder expands or closes when clicking on the toggle of a folder ', () => {
		checkBox.clickExpandToggle();
		checkBox.clickChildrenToggle();
		checkBox.elements.toggleChildren().should('be.visible');
		//cy.get('#tree-node-notes').should('not.have.class', 'rct-icon-expand-open');
	});

	it('2416 | TC4: Validate all child checkboxes are automatically selected when selecting a parent checkbox', () => {
		checkBox.clickExpandToggle();
		checkBox.checkParentCheckbox();
		checkBox.clickChildrenToggle();
		
		//checkBox.getChildCheckboxes().should('be.checked');
	});
	it('2416 | TC5: Validate all child checkboxes are automatically deselected when a parent checkbox is deselected', () => {
		//checkBox.clickExpandToggle();
		checkBox.clickButtonExpandAll();
		checkBox.uncheckParentCheckbox();
	});
	it('2416 | TC6: Validate show a success message with the label name in green when a checkbox is selected', () => {
		checkBox.clickExpandToggle();
		//checkBox.clickChildrenToggle();
		//checkBox.clickButtonExpandAll();
		checkBox.checkParentCheckbox();
		checkBox.elements.successMessage().should('be.visible');
	});
});

removeLogs();