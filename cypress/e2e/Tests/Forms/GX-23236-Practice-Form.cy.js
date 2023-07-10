import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

import { FillForm } from '@pages/Forms/GX-23236-Practice-Form.Page';

import { faker } from '@faker-js/faker';

// DATE OF THE DAY
const dayDate = faker.date.between().toString().split(' ', '4');
const actualDate = dayDate[2] + ' ' + dayDate[1] + ' ' + dayDate[3];

describe('GX-23236-✅-tools-qa-forms-practice-form', () => {
	beforeEach('user is located in the Sut', () => {
		// User can be found on the website
		cy.visit('/automation-practice-form');
	});
	it('23237 | TC01: Validar enviar formulario cuando es completado con data válida', () => {
		cy.fixture('data/GX-23236-Practice-Form.json').then(the => {
			//Fill First Name
			var FirstName = FillForm.EnterName();
			FillForm.get.FirstName().should('have.value', FirstName);

			// Fill Last Name
			var LastName = FillForm.EnterLastName();
			FillForm.get.LastName().should('have.value', LastName);

			// Fill Email
			var Email = FillForm.EnterEmail();
			FillForm.get.Email().should('have.value', Email);

			// Select Gender
			FillForm.SelectGender();
			FillForm.get.Gender().then(select => {
				expect(select.text()).to.contain(Cypress.env('genderSelect'));
			});

			// Fill Mobile
			var Mobile = FillForm.EnterMobile();
			FillForm.get.Mobile().should('have.value', Mobile);

			// Validate that today's date is a default Date of Birth
			FillForm.get.DateOfBirth().should('have.value', actualDate);

			// Select a Date of Birth
			var date = FillForm.SelectRandomDate();
			FillForm.get.DateOfBirth().should('have.value', date);

			// Fill Subjects
			FillForm.EnterSubjects();

			// Select a Subjects Options
			FillForm.SelectOptionSubjects()
				.invoke('text')
				.then(Option => {
					cy.log(Option);
					FillForm.get.Subjects().should('contain.text', Option);
				});

			// Select Hobbies
			FillForm.SelectHobbies();
			FillForm.get.Hobbies().then(Options => {
				expect(Options.text()).to.contain(Cypress.env('selectedHobbies'));
			});

			// Select and Upload File
			FillForm.ChooseFile(the.File.valid1);
			FillForm.get.UploadFile().should('contain.value', the.File.verification.V1);

			// Fill Current Address
			var CurrentAddress = FillForm.EnterCurrentAddress();
			FillForm.get.CurrentAddress().should('have.value', CurrentAddress, { timeout: 5000 });

			// Select to State
			FillForm.SelectState()
				.invoke('text')
				.then(State => {
					cy.log(State);
					FillForm.get.State().should('contain.text', State);
				});

			// Select to City
			FillForm.SelectCity()
				.invoke('text')
				.then(City => {
					cy.log(City);
					FillForm.get.City().should('contain.text', City);
				});

			// Click in the Submit Button
			FillForm.clickSubmit();

			//----->  Modal info check  <--------
			// Verification Student Name
			FillForm.get
				.FormSubmitted()
				.eq(the.Modal.StudentName)
				.should('contain.text', FirstName + ' ' + LastName);
			// Verification Student Email
			FillForm.get.FormSubmitted().eq(the.Modal.StudentEmail).should('contain.text', Email);
			// Verification Gender of selected student
			FillForm.get.FormSubmitted().eq(the.Modal.Gender).should('contain.text', Cypress.env('genderSelect'));
			// Verification Student Mobile
			FillForm.get.FormSubmitted().eq(the.Modal.Mobile).should('contain.text', Mobile);
			//verification to Date of Birth
			FillForm.get.FormSubmitted().eq(the.Modal.DateOfBirth).should('contain', FillForm.FullRandomDate(date));
			// Verification Subject selected
			FillForm.get
				.selectedSubjects()
				.invoke('text')
				.then(Subjects => {
					FillForm.get.FormSubmitted().eq(the.Modal.Subjects).should('contain', Subjects);
				});
			// Verification Hobbies of selected student
			FillForm.get.FormSubmitted().eq(the.Modal.Hobbies).should('contain.text', Cypress.env('selectedHobbies'));
			// Verification that an Picture file was uploaded
			FillForm.get.FormSubmitted().eq(the.Modal.Picture).should('contain', the.File.verification.V1);
			// Verification of the loaded current address
			FillForm.get.FormSubmitted().eq(the.Modal.Address).should('contain', CurrentAddress);
			// Verification of the selected state and city
			FillForm.get
				.selectedState()
				.invoke('text')
				.then(State => {
					cy.log(State);
					FillForm.get
						.selectedCity()
						.invoke('text')
						.then(City => {
							cy.log(City);
							FillForm.get
								.FormSubmitted()
								.eq(the.Modal.StateAndCity)
								.should('contain', State + ' ' + City);
						});
				});
		});
	});
	it.only('23237 | TC02: Validar No enviar formulario cuando el cuando está vacío ', () => {
		cy.fixture('data/GX-23236-Practice-Form.json').then(the => {
			//Empty First Name
			FillForm.get.FirstName().should('have.value', '');

			// Empty Last Name
			FillForm.get.LastName().should('have.value', '');

			// Empty Email
			FillForm.get.Email().should('have.value', '');

			// Not Select Gender
			FillForm.get.Gender().should('not.be.checked');

			// Empty Mobile
			FillForm.get.Mobile().should('have.value', '');

			// Default a Date of Birth
			FillForm.get.DateOfBirth().should('have.value', actualDate);

			// Empty Subjects
			FillForm.get.Subjects().should('have.value', '');

			// Empty Current Address
			FillForm.get.CurrentAddress().should('have.value', '');

			// Click in the Submit Button
			FillForm.clickSubmit();

			// Field validations
			FillForm.get.FirstName().should('have.css', 'border-color', the.RedBorder);
			FillForm.get.LastName().should('have.css', 'border-color', the.RedBorder);
			FillForm.get.Email().should('have.css', 'border-color', the.GreenBorder);
			FillForm.get.optionsGender().should('have.css', 'color', the.RedBorder);
			FillForm.get.Mobile().should('have.css', 'border-color', the.RedBorder);
			FillForm.get.DateOfBirth().should('have.css', 'border-color', the.GreenBorder);
			FillForm.get.CurrentAddress().should('have.css', 'border-color', the.GreenBorder);
		});
	});
});
