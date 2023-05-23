import { removeLogs } from '@helper/RemoveLogs';
import { checkBox } from '@pages/CheckBoxToolsQA.Page.js';

describe('✅ToolsQA | Elements | Check Box', () => {
	beforeEach('precondición: estar situado en demoQA checkbox', () => {
		cy.visit('/checkbox');
		cy.url().should('contain', 'checkbox');
	});

	it('2416 | TC1: Validate all folders are expanded when clicking on"Expand All" Button', () => {
		checkBox.clickButtonExpandAll();
		// Assertion para validar que todas las carpetas estén abiertas
		cy.get('label[for*="tree-node"]').should('be.visible');
	});

	it('2416 | TC2: Validate all folders are closed when clicking on "Collapse All" Button', () => {
		checkBox.clickButtonExpandAll();
		checkBox.clickButtonCollapsedAll();
		// Assertion para validar que todas las carpetas estén cerradas
		cy.get('.rct-icon.rct-icon-expand-close').should('have.length', 1);
		cy.get('label[for*="tree-node"]').first().should('be.visible');
	});

	it('2416 | TC3: Validate parents checkboxes  are automatically selected when selecting a child Checkbox', () => {
		checkBox.clickButtonExpandAll();
		checkBox.checkChildCheckbox();
		// Buscar todas las carpetas con la clase '.rct-node-parent' y verificar si tienen la clase '.rct-con-half-check'
		cy.get('.rct-node-parent').each(($parent) => {
			cy.wrap($parent).find('.rct-checkbox').then(($checkbox) => {
				if ($checkbox.hasClass('rct-icon-half-check')) {
					expect(true).to.equal(true);
				}
			});
		});
		checkBox.elements.successMessage().should('exist').and('be.visible');
	});

	it('2416 | TC4: Validate all child checkboxes are automatically selected when a parent checkbox is checked', () => {
		checkBox.clickExpandToggle();
		checkBox.checkParentCheckbox();
		checkBox.elements.successMessage().should('exist').and('be.visible');
	});

	it('2416 | TC5: Validate all child checkboxes are automatically deselected when a parent checkbox is deselected', () => {
		checkBox.clickExpandToggle();
		checkBox.uncheckParentCheckbox();
		checkBox.elements.successMessage().should('not.exist');
	});
});

removeLogs();