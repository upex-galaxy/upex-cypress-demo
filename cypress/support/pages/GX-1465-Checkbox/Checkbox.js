export let confirm = [];
export let confirm2 = [];
let elements;
let lastIndex;
let firstIndex;
let checked;
let number;
let filelength;
export let text1, text2;

class Checkbox {
	elements = {
		checkbox: () => cy.get('span[class="rct-checkbox"]'),
		expandall: () => cy.get('[class="rct-icon rct-icon-expand-all"]'),
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
		this.elements.expandall().click();
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

						cy.get('li.rct-node.rct-node-leaf span.rct-text label')
							.then(arr => {
								const newarr = arr.toArray();
								cy.log(newarr);
								for (let i = 0; i <= filelength - 1; i++) {
									if (i === number) {
										text1 = Cypress.$(newarr[i]).text();
									}
									break;
								}
							})
							.then(() => {
								cy.wrap(text1).as('text1');
							});
					});
				cy.get('[class="text-success"]')
					.eq(0)
					.invoke('text')
					.then(tex => {
						text2 = tex;
						cy.log(text2);
					});
			});
		cy.log(text1);
	}
}

export const checkbox = new Checkbox();
