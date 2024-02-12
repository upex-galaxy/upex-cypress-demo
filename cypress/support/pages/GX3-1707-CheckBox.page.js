export default class CheckBoxPage {
	get = {
		expandAll: () => cy.get('.rct-icon-expand-all'),
		collapseAll: () => cy.get('.rct-option-collapse-all'),
		nodeParent: () => cy.get('.rct-node-parent'),
		labelForTreeNodeHome: () => cy.get('[for="tree-node-home"]'),
		expandHome: () => cy.get('span.rct-text:contains("Home")').find('button.rct-collapse-btn'),
		expandBTN: key => cy.get(`span.rct-text:contains(${key})`).find('button.rct-collapse-btn').find('svg.rct-icon-expand-close').click(),
		checkBox: key => cy.contains('label', key).click(),
	};

	checkStatus(status, selected) {
		let newStatus = undefined;
		if (status == undefined && selected == 1) {
			newStatus = 'selected';
		} else if (status == undefined && selected == 0) {
			newStatus = 'unselect';
		} else if ((status == 'selected' && selected == 0) || (status == 'unselect' && selected == 1)) {
			newStatus = 'semiSelect';
		}

		if (newStatus != undefined) {
			return newStatus;
		} else {
			return status;
		}
	}

	textTransform(text) {
		// Convertir la primera letra a minúsculas
		text = text.toLowerCase();

		// Reemplazar espacios con la siguiente letra en mayúsculas
		text = text.replace(/\s+\w/g, match => match.trim().toUpperCase());

		// Eliminar el texto después del punto
		text = text.split('.')[0];

		return text;
	}

	checkBoxScanner() {
		let tree = [];

		this.get.expandAll().first().click();

		this.get.nodeParent().each($el => {
			if ($el.parents('.rct-node').length === 1) {
				cy.wrap($el).then(() => {
					const expandedElement = $el.find('.rct-node-expanded');
					if (expandedElement.length > 0) {
						let folderName = $el.find('.rct-text').first().text();
						tree[folderName] = [];
						tree[folderName]['selected'] = 0;
						$el.find('.rct-node-parent').each(($index2, $el) => {
							cy.wrap($el).then($body => {
								const textElements = $body.find('.rct-text');
								const subFolderName = textElements.eq(0).text();
								tree[folderName][subFolderName] = [];
								tree[folderName][subFolderName]['selected'] = 0;
								for (let i = 1; i < textElements.length; i++) {
									const fileName = Cypress.$(textElements[i]).text().trim();
									tree[folderName][subFolderName][fileName] = 0;
								}
							});
						});
					} else {
						const textElements = $el.find('.rct-text');
						const folderName = textElements.eq(0).text();
						tree[folderName] = [];
						tree[folderName]['selected'] = 0;
						for (let i = 1; i < textElements.length; i++) {
							const fileName = Cypress.$(textElements[i]).text().trim();
							tree[folderName][fileName] = 0;
						}
					}
				});
			}
		});
		this.get.collapseAll().first().click();
		return tree;
	}

	async checkBoxAssigner(tree) {
		tree = this.checkBoxScanner();

		return new Promise(resolve => {
			cy.wrap(null).then(() => {
				tree['selected'] = Math.random() < 0.1 ? 1 : 0;

				for (const key1 in tree) {
					if (key1 == 'selected') {
						continue;
					}

					if (tree['selected'] == 1) {
						tree[key1]['selected'] = 1;
					} else {
						tree[key1]['selected'] = Math.random() < 0.2 ? 1 : 0;
					}

					if (Array.isArray(tree[key1])) {
						for (const key2 in tree[key1]) {
							if (key2 == 'selected') {
								continue;
							}
							if (Array.isArray(tree[key1][key2])) {
								if (tree[key1]['selected'] == 1) {
									tree[key1][key2]['selected'] = 1;
								} else {
									tree[key1][key2]['selected'] = Math.random() < 0.3 ? 1 : 0;
								}

								for (const key3 in tree[key1][key2]) {
									if (key3 == 'selected') {
										continue;
									}

									if (tree[key1][key2]['selected'] == 1) {
										tree[key1][key2][key3] = 1;
									} else {
										tree[key1][key2][key3] = Math.random() < 0.4 ? 1 : 0;
									}
								}
							} else {
								if (tree[key1]['selected'] == 1) {
									tree[key1][key2] = 1;
								} else {
									tree[key1][key2] = Math.random() < 0.4 ? 1 : 0;
								}
							}
						}
					}
				}

				this.checkboxClicker(tree);

				resolve(tree);
			});
		});
	}

	checkboxClicker(tree) {
		if (tree['selected'] == 1) {
			this.get.labelForTreeNodeHome().click();

		} else if (tree['selected'] == 0) {
			this.get.expandHome().click();
			for (const key1 in tree) {
				if (Array.isArray(tree[key1])) {
					if (tree[key1]['selected'] == 1) {
						this.get.checkBox(key1);
						continue;
					} else {
						this.get.expandBTN(key1);
						for (const key2 in tree[key1]) {
							if (Array.isArray(tree[key1][key2])) {
								if (tree[key1]['selected'] == 1) {
									this.get.checkBox(key2);
									continue;
								} else {
									this.get.expandBTN(key2);
									for (const key3 in tree[key1][key2]) {
										if (key3 == 'selected') {
											continue;
										} else if (tree[key1][key2][key3] == 1) {
											this.get.checkBox(key3);
										}
									}
								}
							} else {
								if (key2 == 'selected') {
									continue;
								} else if (tree[key1][key2] == 1) {
									this.get.checkBox(key2);
								}
							}
						}
					}
				}
			}
		}
	}
}
