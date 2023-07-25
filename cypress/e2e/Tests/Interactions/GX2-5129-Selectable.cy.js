import { selectable } from '../support/pages/Interactions/GX2-5129-Selectable.page';
describe('5129 | TS: | Interactions | Selectable', () => {
	beforeEach('visitar la página de Demo QA', () => {

		it( '5129| TC1:' ,() => {
			cy.visit('https://demoqa.com/selectable'),
			selectable.clickBttnGrid();
		});
		
	});
});