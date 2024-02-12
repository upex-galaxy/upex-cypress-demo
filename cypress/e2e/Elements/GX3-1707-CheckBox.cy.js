import CheckBoxPage from '@pages/GX3-1707-CheckBox.page';

describe('🧪GX3-1707 | TS: ⚡️ToolsQA | Elements | Check Box', () => {
	beforeEach('Acceder a la pagina: https://demoqa.com/checkbox', () => {
		cy.visit('https://demoqa.com/checkbox');
	});
	it('1707 | TC01: verificar poder seleccionar checkbox exitosamente', () => {
		const checkBoxPage = new CheckBoxPage();
		checkBoxPage.checkBoxAssigner().then(tree => {
			checkBoxPage.get.expandAll().first().click();
			if (tree['selected'] == 1) {
				cy.get('label:contains(Home)').find('.rct-checkbox').find('.rct-icon-check');
			}

			let status = [];
			let selected = 0;

			for (const key1 in tree) {
				for (const key2 in tree[key1]) {
					if (key2 != 'selected' && tree[key1][key2] == 1) {
						cy.get(`label:contains(${key2})`).find('.rct-checkbox').find('.rct-icon-check');
						status[key1] = checkBoxPage.checkStatus(status[key1], tree[key1][key2]);
						status[key2] = checkBoxPage.checkStatus(status[key2], tree[key1][key2]);
						status['Home'] = checkBoxPage.checkStatus(status['Home'], tree[key1][key2]);
					} else if (key2 != 'selected' && tree[key1][key2] == 0 && !Array.isArray(tree[key1][key2])) {
						cy.get(`label:contains(${key2})`).find('.rct-checkbox').find('.rct-icon-uncheck');
						status[key1] = checkBoxPage.checkStatus(status[key1], tree[key1][key2]);
						status['Home'] = checkBoxPage.checkStatus(status['Home'], tree[key1][key2]);
					} else if (Array.isArray(tree[key1][key2])) {
						for (const key3 in tree[key1][key2]) {
							if (key3 != 'selected' && tree[key1][key2][key3] == 1) {
								cy.get(`label:contains(${key3})`).find('.rct-checkbox').find('.rct-icon-check');
								status[key1] = checkBoxPage.checkStatus(status[key1], tree[key1][key2][key3]);
								status[key2] = checkBoxPage.checkStatus(status[key2], tree[key1][key2][key3]);
								status[key3] = checkBoxPage.checkStatus(status[key3], tree[key1][key2][key3]);
								status['Home'] = checkBoxPage.checkStatus(status['Home'], tree[key1][key2][key3]);
							} else if (key3 != 'selected' && tree[key1][key2][key3] == 0) {
								cy.get(`label:contains(${key3})`).find('.rct-checkbox').find('.rct-icon-uncheck');
								status[key1] = checkBoxPage.checkStatus(status[key1], tree[key1][key2][key3]);
								status[key2] = checkBoxPage.checkStatus(status[key2], tree[key1][key2][key3]);
								status['Home'] = checkBoxPage.checkStatus(status['Home'], tree[key1][key2][key3]);
							}
						}
					}
					if (key2 != 'selected' && Array.isArray(tree[key1][key2])) {
						switch (status[key2]) {
							case 'selected':
								cy.get(`label:contains(${key2})`).find('.rct-checkbox').find('.rct-icon-check');
								break;
							case 'semiSelect':
								cy.get(`label:contains(${key2})`).find('.rct-checkbox').find('.rct-icon-half-check');
								break;
							default:
								cy.get(`label:contains(${key2})`).find('.rct-checkbox').find('.rct-icon-uncheck');
								break;
						}
					}
				}
				if (key1 != 'selected') {
					switch (status[key1]) {
						case 'selected':
							cy.get(`label:contains(${key1})`).find('.rct-checkbox').find('.rct-icon-check');
							break;
						case 'semiSelect':
							cy.get(`label:contains(${key1})`).find('.rct-checkbox').find('.rct-icon-half-check');
							break;
						default:
							cy.get(`label:contains(${key1})`).find('.rct-checkbox').find('.rct-icon-uncheck');
							break;
					}
				}
				if (key1 != 'selected' && tree[key1] == 1) {
					cy.get(`label:contains(${key1})`).find('.rct-checkbox').find('.rct-icon-check');
				}
			}
			for (const key in status) {
				if (status[key] == 'selected') {
					selected = 1;
					cy.get('#result').find('span.text-success').contains(checkBoxPage.textTransform(key)).should('exist');
				}
			}
			if (selected == 1) {
				cy.get('#result').find('span').contains('You have selected :').should('exist');
			} else {
				cy.get('#result').find('span').contains('You have selected :').should('not.exist');
			}
		});
	});
});
