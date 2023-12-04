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
		const randomDate = faker.date.between('1980-01-01', '2005-01-01');
		const randomSubject = faker.random.alpha({ count: 1, casing: 'lower', bannedChars: ['f', 'j', 'k', 'ñ', 'q', 'w', 'x', 'z'] });
		const randomHobbies = faker.datatype.number({ min: 3, max: 5 });
		const randomAddress = faker.address.streetAddress();
		const randomState = Cypress._.random(0, 3);
		const randomCity = Cypress._.random();

		formPage.typeFirstName(randomFirstName);
		formPage.typeLastName(randomLastName);
		formPage.typeEmail(ramdomEmail);
		formPage.selectGender(randomGender);
		formPage.typeMobile(randomMobile);
		formPage.selectBirthDay(randomDate);
		formPage.get
			.selectDate()
			.click()
			.then(t => {
				cy.wrap(t).get('.react-datepicker').should('be.visible');
				cy.wrap(t).get('.react-datepicker').click();
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
		cy.get('tr').eq(1).should('contain', randomFirstName);
		cy.get('tr').eq(1).should('contain', randomLastName);
		cy.get('tr').eq(2).should('contain', ramdomEmail);
		const genderOptions = ['Male', 'Female', 'Other'];
		const selectedGender = genderOptions[randomGender];
		cy.get('tr').eq(3).invoke('text').should('include', `Gender${selectedGender}`);
		cy.get('tr').eq(4).should('contain', randomMobile);
		cy.get('tr').eq(6).should('contain', randomSubject);
		const hobbiesOptions = ['Sports', 'Reading', 'Music'];
		expect(randomHobbies).to.be.within(3, 5);
		const selectedHobbies = hobbiesOptions[randomHobbies - 3];
		cy.get('tr').eq(7).invoke('text').should('include', `Hobbies${selectedHobbies}`);
		cy.get('tr').eq(8).should('contain', 'upexlogo.png');
		cy.get('tr').eq(9).should('contain', randomAddress);
		expect(randomState).to.be.within(0, 3);

		// Validar estado y ciudad juntos
		const expectedStateAndCity = `${randomState} ${randomCity}`;
		cy.get('tr').eq(10).invoke('text').should('include', `State and City${expectedStateAndCity}`);
	});
});
