import { checkbox } from '@pages/GX-588-Checkbox/Checkbox.js';
import { confirm } from '@pages/GX-588-Checkbox/Checkbox.js';
import { confirm2 } from '@pages/GX-588-Checkbox/Checkbox.js';
let Rnumber;

describe('GX2-1465 | ✅ToolsQA | Elements | Check Box', () => {
	before('Setting variables', () => {
		let lengthToggle;
		cy.visit('/checkbox');
		checkbox.clickHometoggle();
		checkbox
			.Toggle()
			.its('length')
			.then(length1 => {
				lengthToggle = length1;
				Cypress.env('length1', lengthToggle);
				Rnumber = Cypress._.random(1, length1 - 1);
			});
		checkbox.elements.toggle().eq(0).click();
	});
	it('GX2- 1466 | TC1: Validate that each checkbox autocheck the inner ones.', () => {
		checkbox.elements.toggle().eq(0).click();
		checkbox.selectingFolder(Rnumber);
		checkbox.checkingFolder(Rnumber);
		cy.wrap(confirm).each((value, index) => {
			expect(
				value
					.toLowerCase()
					.replace(/\s/g, '')
					.replace(/\.[^.]*$/, '')
			).to.equal(confirm2[index].toLowerCase().replace(/\s/g, ''));
		});

		it.only('GX2- 1466 | TC2: Validate that all the folders and files are available', () => {
			checkbox.clickEspandall();
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
});
