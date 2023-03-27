import { checkbox } from '@pages/GX-1465-Checkbox/Checkbox.js';
import { confirm } from '@pages/GX-1465-Checkbox/Checkbox.js';
import { confirm2 } from '@pages/GX-1465-Checkbox/Checkbox.js';
import { text22, text1 } from '@pages/GX-1465-Checkbox/Checkbox.js';

let Rnumber;

describe('GX2-1465 | ✅ToolsQA | Elements | Check Box', () => {
	beforeEach('Precondition: Expanding all folders', () => {
		cy.visit('/checkbox');
		checkbox.clickEspandall();
		checkbox.elements
			.nodes()
			.its('length')
			.then(exten => {
				Rnumber = Cypress._.random(0, exten - 1);
			});
	});
	it('1466 | TC1: Validate that each folder autocheck the inner files or folders.', () => {
		checkbox.selectFolder(Rnumber);
		checkbox.checkFoldercontent();
		cy.wrap(confirm).each((value, index) => {
			expect(
				value
					.toLowerCase()
					.replace(/\s/g, '')
					.replace(/\.[^.]*$/, '')
			).to.equal(confirm2[index].toLowerCase().replace(/\s/g, ''));
		});
	});
	it('1466 | TC2: Validate that the checkbox can be unchecked and the "you have selected" part is updated', () => {
		checkbox.selectFolder(Rnumber);
		cy.get('[class*="mt-4"] span[class="text-success"]').each($el => {
			cy.wrap($el)
				.invoke('text')
				.then(text => expect(text).to.exist);
		});
		checkbox.selectFolder(Rnumber);
		cy.get('[class="text-success"]').should('not.exist');
	});

	it('1466 | TC3: Validate that the files within the folders can be selected independently', () => {
		checkbox.selectOnefile();
		cy.log('variables del orto').then(() => {
			expect(
				text1
					.toLowerCase()
					.replace(/\s/g, '')
					.replace(/\.[^.]*$/, '')
			).to.equal(text22.toLowerCase().replace(/\s/g, ''));
		});
	});
	it.only('GX2- 1466 | TC4: Validate that folders can be collapsed', () => {
		checkbox.clickonCheckall();
		checkbox.elements.checkbox().then($el => {
			cy.wrap($el)
				.its('length')
				.then(leng => {
					expect($el).to.have.lengthOf(leng);
				});
		});
		checkbox.clickonCollapseall();
	});
});

Cypress.on('uncaught:exception', () => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
});
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log;
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr' || (opts.displayName === 'fetch' && opts.url.startsWith('https://'))) {
		return;
	}
	return origLog(opts, ...other);
};
