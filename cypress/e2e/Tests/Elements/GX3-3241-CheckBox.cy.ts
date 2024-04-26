import { checkbox } from '../../../support/pages/GX3-3241-Checkbox.page';

describe('GX3-3241 | ToolsQA | Elements | Checkbox', () => {
	beforeEach('Precon: Go to DemoQA webpage', () => {
		cy.visit('https://demoqa.com/checkbox');
		cy.url().should('contain', 'checkbox');
	});
	it('GX3-3242 | TC1 | Verify that clicking the "Expand All" button expands all folders', () => {
		checkbox.clickExpandAll();
		checkbox.fetchAndStoreFolderNames();
		cy.get<string[]>('@folderNames').then((folderNames: string[]) => {
			folderNames.forEach((name: string) => {
				cy.contains('.rct-title', name).should('be.visible');
			});
		});
	});
});
