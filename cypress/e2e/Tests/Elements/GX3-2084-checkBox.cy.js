import { checkboxPage } from '../../../support/pages/GX3-2084-space-Checkout.Page.js';

describe('', () => {
	beforeEach('', () => {
		cy.visit('https://demoqa.com/checkbox');
		cy.url().should('contain', 'checkbox');
	});

	it('2084 |TC01 Expand all and collapse all', () => {
		checkboxPage.clickExpandCheck();
		checkboxPage.get.uncheckedCheckBoxes().should('have.length', 17);
		checkboxPage.clickCollapseCheck();
		checkboxPage.get.uncheckedCheckBoxes('have.length', 1);
	});

	it('2084 |TC02 Check random and compare with display result', () => {
		checkboxPage.get.uncheckedCheckBoxes('have.length', 1);
		checkboxPage.clickExpandCheck();
		checkboxPage.get
			.uncheckedCheckBoxes()
			.its('length')
			.then(count => {
				const randomCheck = Cypress._.random(count);
				checkboxPage.get.allCheckBoxs().eq(randomCheck).check({ force: true });
				checkboxPage.get.allCheckBoxs().eq(randomCheck).should('be.checked');

				checkboxPage.get.allCheckBoxs().eq(0).check({ force: true });
				checkboxPage.get.allCheckBoxs().eq(0).should('be.checked');

				checkboxPage.get.allCheckBoxs().eq(randomCheck).uncheck({ force: true });
				checkboxPage.get.allCheckBoxs().eq(randomCheck).should('not.be.checked');
			});

		const labels = [];
		checkboxPage.get.checkBoxesSelected().each(element => {
			labels.push(element.text());
		});

		const successTexts = [];
		checkboxPage.get
			.textSuccess()
			.each(element => {
				successTexts.push(element.text());
			})
			.then(() => {
				const checkLabels = labels.map(text => text.toLowerCase().replace(' ', '').replace('.doc', ''));
				const displayTexts = successTexts.map(text => text.toLowerCase());
				expect(displayTexts).deep.equal(checkLabels);
			});
	});
});
