import { form } from '@pages/Form.Page';

describe('US # : GX-8748', () => {
	beforeEach('Precondition: user is currently in the page form', () => {
		form.visit();
	});

	it('US #8748: TS 11663 | TC1 : Should submit the form with all the required fields', () => {
		const name = 'Florencia';
		const email = 'florgomez@hotmail.com';
		const currentaddress = 'Liniers 345';
		const permanentaddress = 'Viel 234';

		//fullfield

		form.fillForm(name, email, currentaddress, permanentaddress);

		//assertionform
		form.get.inputName().should('have.value', name);
		form.get.inputEmail().should('have.value', email);
		form.get.inputCaddress().should('have.value', currentaddress);
		form.get.inputPaddress().should('have.value', permanentaddress);

		//submit
		form.submitForm();
		//assertionconfirm
		form.get.assertConfirm().should('contain', name);
		form.get.assertConfirm().should('contain', email);
		form.get.assertConfirm().should('contain', currentaddress);
		form.get.assertConfirm().should('contain', permanentaddress);
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
