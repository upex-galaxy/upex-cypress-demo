import { checkbox } from '../../../support/pages/GX3-3241-Checkbox.page';

describe('GX3-3241 | ToolsQA | Elements | Checkbox', () => {
	beforeEach('Precon: Go to DemoQA webpage', () => {
		cy.visit('https://demoqa.com/checkbox');
		cy.url().should('contain', 'checkbox');
	});
	it('GX3-3242 | TC1 | Verify that the user can expand all folders and then collapse all except "Home"', () => {
		checkbox.clickExpandAll();
		checkbox.fetchAndStoreFolderNames();
		cy.get<string[]>('@folderNames').then((folderNames: string[]) => {
			folderNames.forEach((name: string) => {
				cy.contains('.rct-title', name).should('be.visible');
			});
		});
		checkbox.clickCollapseAll();
		checkbox.fetchAndStoreFolderNames();
		cy.get<string[]>('@folderNames').then((folderNames: string[]) => {
			expect(folderNames.length).to.eq(1);
			expect(folderNames[0]).to.eq('Home');
			cy.contains('.rct-title', 'Home').should('be.visible');
		});
	});

});
