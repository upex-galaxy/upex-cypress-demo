/* eslint-disable indent */
import { form } from '@pages/Forms/GX-19713-practiceForm.Page';

const formPage = Cypress.env('endpoint').textBox; //obtenemos la variable de entorno del endpoint

describe('Form fill and submit', () => {
	beforeEach(() => {
		cy.url().should('contain', formPage);
	});

	it('', () => {});
});
