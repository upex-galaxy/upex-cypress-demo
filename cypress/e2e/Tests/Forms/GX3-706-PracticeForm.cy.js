import { faker } from '@faker-js/faker';
import { formPage } from '@pages/Forms/GX-706-PracticeForm.Page';

describe('GX3-706 ToolsQA | Forms | Practice Form', () => {
	beforeEach('PCR: Usuario debe situarse en el web de Demo QA', () => {
		cy.visit('/automation-practice-form');
		cy.url().should('contain', 'automation-practice-form');
	});

	it('707 | TC1: Validar poder crear el registro de estudiante con valores válidos', () => {
		const randomFirstName = faker.name.firstName();
		const randomLastName = faker.name.lastName();
		const ramdomEmail = faker.internet.email();
		const randomGender = Cypress._.random(0, 2);
		const randomMobile = faker.datatype.number({ min: 1000000000, max: 9999999999 });
		const randomSubject = faker.random.alpha({ count: 1, casing: 'lower', bannedChars: ['f', 'j', 'k', 'ñ', 'q', 'w', 'x', 'z'] });
		const randomHobbies = faker.datatype.number({ min: 3, max: 5 });
		const randomDate = formPage.get.selectDate();
		const randomAddress = faker.address.streetAddress();
		const randomState = Cypress._.random(0, 3);
		const randomCity = Cypress._.random();
		const randomSelectState = formPage.selectRandomState(randomState);
		const randomSelectCity = formPage.selectRandomCity(randomCity);

		formPage.typeFirstName(randomFirstName);
		formPage.typeLastName(randomLastName);
		formPage.typeEmail(ramdomEmail);
		formPage.selectGender(randomGender);
		formPage.typeMobile(randomMobile);
		formPage.selectBirthDay();
		formPage.get.selectDate().should('contain', randomDate);
		randomDate.invoke('val').then(dateOfBirt => {
			expect(dateOfBirt).to.match(/^(0[1-9]|[12]\d|3[01]) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (19\d\d|20\d\d|2100)$/);
		});
		formPage.typeSubjects(randomSubject);
		formPage.selectRandomHobbie(randomHobbies);
		formPage.selectPicture();
		formPage.typeAdress(randomAddress);
		formPage.selectRandomState(randomState);
		formPage.selectRandomCity(randomCity);
		formPage.selectSubmit();

		formPage.get.completeForm().should('be.visible');
		const expectedMessage = 'Thanks for submitting the form';
		formPage.get.completeFormMessage().should('have.text', expectedMessage);
		formPage.get.completeForm().should('be.visible');
		formPage.get.firstNameFormResult().should('contain', randomFirstName);
		formPage.get.lastNameFormResult().should('contain', randomLastName);
		formPage.get.mailFormResult().should('contain', ramdomEmail);
		const genderOptions = ['Male', 'Female', 'Other'];
		const selectedGender = genderOptions[randomGender];
		formPage.get.genderFormResult().invoke('text').should('include', `Gender${selectedGender}`);
		formPage.get.mobileFormResult().should('contain', randomMobile);
		formPage.get.subjectFormResult().then(subjectText => {
			const actualText = subjectText.text();
			const reget = new RegExp(randomSubject, 'i');
			expect(actualText).to.match(reget);
		});
		const hobbiesOptions = ['Sports', 'Reading', 'Music'];
		expect(randomHobbies).to.be.within(3, 5);
		const selectedHobbies = hobbiesOptions[randomHobbies - 3];
		formPage.get.hobbiesFormResult().invoke('text').should('include', `Hobbies${selectedHobbies}`);
		formPage.get.imageFormResult().should('contain', 'upexlogo.png');
		formPage.get.addressFormResult().should('contain', randomAddress);
		formPage.get
			.stateAndCityFormResult()
			.invoke('text')
			.should('include', `State and City${randomSelectState.toString()} ${randomSelectCity.toString()}`);
	});
});
