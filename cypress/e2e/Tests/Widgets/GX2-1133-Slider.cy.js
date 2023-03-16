import { slider } from '@pages/Slider.Page.js';
import { removeLogs } from '@helper/RemoveLogs';
describe('✅ToolsQA | Widgets | Slider', () => {
	before('precondition: the user must be positioned on the demoQa/slider page', () => {
		cy.visit('https://demoqa.com/slider');
		cy.url().should('include', 'slider');
	});

	it('1134 TC1: Verify that the output value updates automatically when sliding the slider to a position.', () => {
		cy.fixture('data/slider').then(the => {
			const { set: valueSetter } = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
			const randomValue = Cypress._.random(0, the.maxValue - the.minValue);

			slider.get
				.inputSlider()
				.should('have.value', the.originalValue)
				.should('have.attr', 'min', the.minValue)
				.should('have.attr', 'max', the.maxValue)
				.then($slider => {
					valueSetter.call($slider[0], randomValue);
				})
				.trigger('change');
			slider.get.inputSlider().should('have.value', randomValue);
		});
	});
});

removeLogs();
