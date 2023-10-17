import { faker } from '@faker-js/faker';

class FormPage {
	get = {
		form: () => cy.get('#userForm'),
		inputName: () => this.get.form().get('label.form-label'),
		field: () => this.get.form().get('#userName-wrapper'),
	};

	getFormInputTextList() {
		let inputNames = [];
		this.get.inputName().each(input => {
			inputNames.push(input.text());
		});
		return inputNames;
	}

	getInputRow(fieldName) {
		return this.get.form().contains(fieldName).parent().parent();
	}

	typeInputFieldFormat(fieldName, tagLocator) {
		const inputText = {
			Name: [faker.name.firstName(), faker.name.lastName()],
			Email: faker.internet.email(),
			'Mobile(10 Digits)': faker.phone.number(),
			'Current Address': faker.address.streetAddress(),
		};
		this.getInputRow(fieldName).then(row => {
			cy.wrap(row).within(() => {
				cy.get(tagLocator).then($input => {
					if ($input.length >= 2) {
						const field = inputText[fieldName];
						cy.wrap($input).eq(0).type(field[0]);
						cy.wrap($input).eq(1).type(field[1]);
					} else {
						cy.wrap($input).type(inputText[fieldName]);
					}
				});
			});
		});
	}

	typeInputTextField(fieldName) {
		this.typeInputFieldFormat(fieldName, 'input');
	}
	typeInputTextArea(fieldName) {
		this.typeInputFieldFormat(fieldName, 'textarea');
	}
}

export const formPage = new FormPage();
