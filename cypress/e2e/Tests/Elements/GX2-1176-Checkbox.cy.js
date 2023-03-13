import { checkbox } from '@pages/Checkbox.Page.js';
describe('✅ToolsQA | Elements | Check Box', () => {
	beforeEach('precondición: estar situado en demoQA checkbox', () => {
		cy.visit('https://demoqa.com/checkbox');
		cy.url().should('contain', 'checkbox');
	});
	it('1177 | TC1: Validar hacer Checked y Expand en el Directorio principal.', () => {
		checkbox.checkFolderHome();
		checkbox.get.rootCheckbox().should('be.checked');

		checkbox.clickExpandToggle();
		checkbox.clickAllButtonCollapsed();
		checkbox.clickAllButtonCollapsed();
		let results = [];
		checkbox.get
			.labelTitle()
			.each(($title) => {
				let text = $title.text();
				text = text.replace(/.doc| /gi, '');
				results.push(text);
			})
			.then(() => {
				results.forEach((text) => {
					cy.get('.text-success').contains(text, { matchCase: false }).should('exist');
				});
			});
		checkbox.get.checkAllButton().should('be.checked');
	});

	it('1177 | TC2: Validar hacer Checked y Expand en el Subdirectorio.', () => {
		checkbox.clickExpandToggle();
		checkbox.get
			.buttonOnlyCollapsed()
			.its('length')
			.then((n) => Cypress._.random(0, n - 1))
			.then((randomN) => {
				checkbox.get.inputOnlyCollapsed().eq(randomN).check({ force: true });
				checkbox.get.buttonOnlyCollapsed().eq(randomN).click();
				let results = [];
				checkbox.get
					.liOnlyExpanded()
					.eq(1)
					.within(() => {
						checkbox.get.labelTitle().each(($el) => {
							let text = $el.text();
							text = text.replace(/.doc| /gi, '');
							results.push(text);
						});
					})
					.then(() => {
						results.forEach((text) => {
							checkbox.get.textSuccess().contains(text, { matchCase: false }).should('exist');
						});
					});
			});
	});

	it('1177 | TC3: Validar hacer checked en un archivo', () => {
		checkbox.clickExpandToggle();
		checkbox.get
			.buttonOnlyCollapsed()
			.its('length')
			.then((n) => Cypress._.random(0, n - 1))
			.then((randomN) => {
				checkbox.get.buttonOnlyCollapsed().eq(randomN).click();
				let results = [];
				checkbox.get
					.liOnlyExpanded()
					.eq(1)
					.within(() => {
						//con este código quería explorar la posibilidad de que se adentre en el folder documents pero no se pudo porque encuentra los elementos pero no les da click
						// if (checkbox.get.buttonOnlyCollapsed().length > 0) {
						// 	checkbox.get.buttonOnlyCollapsed().eq(0).click();
						// }
						//checkbox.get.liOnlyExpanded().within(() => {
						cy.get('ol')
							.find('input')
							.its('length')
							.then((n) => Cypress._.random(0, n - 1))
							.then((randomCheck) => {
								cy.get('ol').find('input').eq(randomCheck).check({ force: true });
								cy.get('ol')
									.find('.rct-title')
									.eq(randomCheck)
									.then(($el) => {
										let text = $el.text();
										text = text.replace(/.doc| /gi, '');
										results.push(text);
									});
							});
						//});
					})
					.then(() => {
						results.forEach((text) => {
							checkbox.get.textSuccess().contains(text, { matchCase: false }).should('exist');
						});
					});
			});
	});

	it('1177 | TC4: Validar Expand y Collapse All desde el button plus(+) y minus(-).', () => {
		checkbox.clickExpandAll();
		checkbox.get.labelAll().should('be.visible');
		checkbox.clickCollapsedAll();
		checkbox.get.labelAll().first().should('be.visible');
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
