import { form } from '@pages/FormPao.Page';
import { removeLogs } from '@helper/RemoveLogs';
import { Given, Then, When, And } from '@badeball/cypress-cucumber-preprocessor';

context('✅ToolsQA | Forms | Practice Form', () => {
	Given('user must be positioned in page demoqa practice form', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('include', 'form');
	});

	describe('11102 | TC1: Submit form filling all fields with valid format', () => {
		When(
			'a student fills out the form with valid data as {string}{string}{string}{string}{string}{string}{string}',
			(firstName, lastName, email, numberPhone, address, subjects, state) => {
				//Select input firstName
				form.get.inputFirstName().type(firstName).should('have.value', firstName);

				//Select input lastName
				form.get.inputLastName().type(lastName).should('have.value', lastName);

				//Select input email
				form.get.inputEmail().type(email).should('have.value', email);

				//Select radio gender
				form.get
					.radioBtnGender()
					.its('length')
					.then(n => Cypress._.random(0, n - 1))
					.then(randomN => {
						form.get.radioBtnGender().eq(randomN).check({ force: true }).should('be.checked');
					});

				//Select and type number phone
				form.get.inputUserNumber().type(numberPhone).should('have.value', numberPhone);

				//Select datepicker
				form.get.inputDatepicker().click();

				//Select año random
				form.get
					.selectYear()
					.children()
					.its('length')
					.then(n => Cypress._.random(0, n - 1))
					.then(randomN => {
						form.get.selectYear().select(randomN);
					});

				//selecciona mes y dia random
				form.get
					.selectMonth()
					.children()
					.its('length')
					.then(n => Cypress._.random(0, n - 1))
					.then(randomN => {
						form.get.selectMonth().select(randomN);
						form.get
							.selectMonth()
							.children()
							.eq(randomN)
							.then($monthSelected => {
								cy.wrap($monthSelected)
									.invoke('text')
									.then($resp => {
										let monthSelected = $resp;
										cy.get(`[aria-label*="${monthSelected}"]`)
											.should('exist')
											.its('length')
											.then(n => Cypress._.random(0, n - 1))
											.then(randomDay => {
												cy.get(`[aria-label*="${monthSelected}"]`).eq(randomDay).click();
											});
									});
							});
					});

				form.get.inputSubjects().type(subjects);
				form.get
					.dropdownSubjectsChildren()
					.its('length')
					.then(n => Cypress._.random(0, n - 1))
					.then(randomN => {
						form.get.dropdownSubjectsChildren().eq(randomN).click();
					});

				form.get
					.checkboxHobbies()
					.its('length')
					.then(n => Cypress._.random(0, n - 1))
					.then(randomN => {
						form.get.checkboxHobbies().eq(randomN).check({ force: true });
					});

				form.get.inputSelectPicture().click();
				form.get.inputSelectPicture().selectFile('cypress/fixtures/images/upexlogo.png');

				//Select and type address
				form.get.textarea().type(address).should('have.value', address);

				//Select state
				form.get.dropdownSelectState().type(state, { force: true });
				form.get
					.dropdownSelectStateChildren()
					.its('length')
					.then(n => Cypress._.random(0, n - 1))
					.then(randomN => {
						form.get.dropdownSelectStateChildren().eq(randomN).click({ force: true });
					});

				//Select city
				form.get.dropdownSelectCity().click({ force: true });
				form.get
					.dropdownSelectCityChildren()
					.its('length')
					.then(n => Cypress._.random(0, n - 1))
					.then(randomN => {
						form.get.dropdownSelectCityChildren().eq(randomN).click({ force: true });
					});
			}
		);
		And('click on the submit button', () => {
			form.get.btnSubmit().click({ force: true });
		});
		Then('should a modal be opened with the successfully loaded data', () => {
			form.get.containerModal().should('be.visible');
		});
	});

	describe('11102 | TC2: Submit form filling all fields with invalid format', () => {
		When('a student fills out the form with invalid data as {string}', (email) => {
			//Select input firstName
			form.get.inputFirstName().type('Anna').should('have.value', 'Anna');

			//Select input lastName
			form.get.inputLastName().type('Ozz').should('have.value', 'Ozz');

			//Select input email
			form.get.inputEmail().type(email).should('have.value', email);

			//Select radio gender
			form.get
				.radioBtnGender()
				.its('length')
				.then(n => Cypress._.random(0, n - 1))
				.then(randomN => {
					form.get.radioBtnGender().eq(randomN).check({ force: true }).should('be.checked');
				});

			//Select and type number phone
			form.get.inputUserNumber().type('3512448591').should('have.value', '3512448591');

			//Select datepicker
			form.get.inputDatepicker().click();

			//Select año random
			form.get
				.selectYear()
				.children()
				.its('length')
				.then(n => Cypress._.random(0, n - 1))
				.then(randomN => {
					form.get.selectYear().select(randomN);
				});

			//selecciona mes y dia random
			form.get
				.selectMonth()
				.children()
				.its('length')
				.then(n => Cypress._.random(0, n - 1))
				.then(randomN => {
					form.get.selectMonth().select(randomN);
					form.get
						.selectMonth()
						.children()
						.eq(randomN)
						.then($monthSelected => {
							cy.wrap($monthSelected)
								.invoke('text')
								.then($resp => {
									let monthSelected = $resp;
									cy.get(`[aria-label*="${monthSelected}"]`)
										.should('exist')
										.its('length')
										.then(n => Cypress._.random(0, n - 1))
										.then(randomDay => {
											cy.get(`[aria-label*="${monthSelected}"]`).eq(randomDay).click();
										});
								});
						});
				});

			form.get.inputSubjects().type('en');
			form.get
				.dropdownSubjectsChildren()
				.its('length')
				.then(n => Cypress._.random(0, n - 1))
				.then(randomN => {
					form.get.dropdownSubjectsChildren().eq(randomN).click();
				});

			form.get
				.checkboxHobbies()
				.its('length')
				.then(n => Cypress._.random(0, n - 1))
				.then(randomN => {
					form.get.checkboxHobbies().eq(randomN).check({ force: true });
				});

			form.get.inputSelectPicture().click();
			form.get.inputSelectPicture().selectFile('cypress/fixtures/images/upexlogo.png');

			//Select and type address
			form.get.textarea().type('Av.Sarmiento 666').should('have.value', 'Av.Sarmiento 666');

			//Select state
			form.get.dropdownSelectState().type('mat', { force: true });
			form.get
				.dropdownSelectStateChildren()
				.its('length')
				.then(n => Cypress._.random(0, n - 1))
				.then(randomN => {
					form.get.dropdownSelectStateChildren().eq(randomN).click({ force: true });
				});

			//Select city
			form.get.dropdownSelectCity().click({ force: true });
			form.get
				.dropdownSelectCityChildren()
				.its('length')
				.then(n => Cypress._.random(0, n - 1))
				.then(randomN => {
					form.get.dropdownSelectCityChildren().eq(randomN).click({ force: true });
				});
		});
		And('must be click on the submit button', () => {
			form.get.btnSubmit().click({ force: true });
		});
		Then('no message is displayed and the fields turns red', () => {
			form.get.containerModal().should('not.exist');
			form.get.inputEmail().should('have.css', 'border-color', 'rgb(220, 53, 69)');
			form.get.inputUserNumber().should('have.css', 'border-color', 'rgb(220, 53, 69)');
		});
	});
});

removeLogs();
