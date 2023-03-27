export let confirm = [];
export let confirm2 = [];
let elements;
let lastIndex;
let firstIndex;
let checked;
let number;
let filelength;
export let text1;
export let text22;

class Checkbox {
	elements = {
		checkbox: () => cy.get('span[class="rct-checkbox"]'),
		expandall: () => cy.get('[class*="-expand-all"]'),
		collapseall: () => cy.get('[class*="-collapse-all"]'),
		nodes: () => cy.get('li.rct-node.rct-node-parent.rct-node-expanded'),
		success: () => cy.get('[class="text-success"]'),
		filescheckboxes: () => cy.get('li.rct-node.rct-node-leaf span.rct-text label span.rct-checkbox'),
	};

	selectFolder(number) {
		cy.get('[class*="rct-node-expanded"]')
			.eq(number)
			.within($node => {
				cy.wrap($node).find('span[class="rct-text"] label span[class="rct-checkbox"]').eq(0).click();
			});
	}
	checkFoldercontent() {
		cy.get('[class="rct-icon rct-icon-check"]')
			.its('length')
			.then(scope => {
				checked = scope;

				for (let i = 0; i <= checked - 1; i++) {
					cy.get('[class="text-success"]')
						.eq(i)
						.invoke('text')
						.then(check => {
							confirm2.push(check);
						});
				}
			});

		cy.get('[class="rct-checkbox"] svg').then(items => {
			elements = items;
			const ArrayEl = elements.toArray();
			for (let i = ArrayEl.length - 1; i >= 0; i--) {
				if (ArrayEl[i].getAttribute('class').includes('rct-icon-check')) {
					lastIndex = i;
					break;
				}
			}

			cy.get('[class="rct-checkbox"] svg').then(items => {
				elements = items;
				const ArrayEl = elements.toArray();
				for (let i = 0; i <= lastIndex; i++) {
					if (ArrayEl[i].getAttribute('class').includes('rct-icon-check')) {
						firstIndex = i;
						break;
					}
				}
				cy.log(`First Index is: ${firstIndex}`);
				cy.log(`Lastindex is: ${lastIndex}`);

				for (let i = firstIndex; i <= lastIndex; i++) {
					cy.get('[class="rct-title"]')
						.eq(i)
						.invoke('text')
						.then(info => {
							confirm.push(info.toLowerCase());
						});
				}
			});
		});
	}

	clickEspandall() {
		this.elements.expandall().first().click();
	}
	selectOnefile() {
		checkbox.elements
			.filescheckboxes()
			.its('length')
			.then(leng => {
				filelength = leng;

				checkbox.elements
					.filescheckboxes()
					.its('length')
					.then(filexcheckbox => {
						number = Cypress._.random(0, filexcheckbox - 1);
						this.elements.filescheckboxes().eq(number).click();
						cy.log(`Number is: ${number}`);
						cy.log(`filelength: ${filelength}`);

						cy.get('li[class*="rct-node-leaf"]').then(arr => {
							const newarr = arr.toArray();
							cy.log(newarr);
							for (let i = 0; i <= filelength - 1; i++) {
								if (i === number) {
									cy.wrap(newarr[i])
										.invoke('text')
										.then(txt => {
											text1 = txt;
										});
									cy.log(i);
									break;
								}
							}
						});
					});

				cy.get('[class="text-success"]')
					.first()
					.invoke('text')
					.then(tex => {
						text22 = tex;
					});
			});
	}
	clickonCheckall() {
		this.elements.checkbox().first().click({ force: true });
		this.elements
			.checkbox()
			.its('length')
			.then(leng => {
				filelength = leng;
				cy.get('span[class*="rct-text"]').then(elements => {
					for (let i = 0; i <= filelength - 1; i++) {
						cy.wrap(elements[i])
							.invoke('text')
							.then(txt => {
								confirm.push(txt);
							});
					}
				});
			});
	}
	clickonCollapseall() {
		this.elements.collapseall().first().click();
	}
}

export const checkbox = new Checkbox();
