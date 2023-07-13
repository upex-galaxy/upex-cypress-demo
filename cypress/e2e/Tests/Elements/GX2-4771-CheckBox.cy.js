import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

import { Selected } from '@pages/Elements/GX2-4771-CheckBox.Page';

describe('GX2-4771-✅-tools-qa-elements-check-box', () => {
	beforeEach('precondition', () => {
		cy.visit('/checkbox');
	});

	it('4772 | TC1: Validar el funcionamiento del Botón “Expand All”.', () => {
		cy.fixture('data/GX2-4771-CheckBox').then(the => {
			Selected.get.ButtonExpandAll().click();
			Selected.get.FolderExpanded().should('have.lengthOf', the.Folder.MaxFolderOpen);
		});
	});

	it('4772 | TC2: Validar el funcionamiento del Botón “Collapse All”.', () => {
		cy.fixture('data/GX2-4771-CheckBox').then(the => {
			//Precondition the whole folder is expanded
			Selected.get.ButtonExpandAll().click();
			// Use the collapse all button to close all folders.
			Selected.get.ButtonCollapseAll().click();
			Selected.get.FolderExpanded().should('have.length', the.Folder.MinFolderOpen);
		});
	});
});
