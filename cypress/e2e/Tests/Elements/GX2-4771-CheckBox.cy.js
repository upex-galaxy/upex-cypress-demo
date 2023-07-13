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
});
