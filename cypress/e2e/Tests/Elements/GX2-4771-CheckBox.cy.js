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

	it('4772 | TC3: Validar el funcionamiento del Botón “Checkbox” que al seleccionar "Home" selecciona todos los folders', () => {
		cy.fixture('data/GX2-4771-CheckBox').then(the => {
			Selected.SelectedCheckbox(0);
			Selected.get.CheckedBox().should('be.checked');
			Selected.get
				.SelectedResult()
				.invoke('text')
				.then(Result => {
					cy.log(Result);
					expect(Result.toLowerCase()).to.have.contain(the.OptionFolder.Home);
				});
		});
	});

	it('4772 | TC4: Validar el funcionamiento del Botón “Checkbox” seleccionar un folder se muestre su contenido dentro de result', () => {
		//Precondition the whole folder is expanded
		Selected.get.ButtonExpandAll().click();
		// Use random selected
		let c = Selected.SelectedCheckboxRandom();
		Selected.get
			.SelectedResult()
			.invoke('text')
			.then(Result => {
				cy.log(Result);
				expect(Result.toLowerCase()).to.have.contain(Selected.ResultSpect(c));
			});
	});
});
