import { getGenderString, getHobbiesString, yearString } from '../../../support/helper/GX3-2141';
import { practiceForm } from '../../../support/pages/GX3-2141-PracticeForm.Page';
import { faker } from '@faker-js/faker';

describe('2141 | ToolsQA | Forms | Practice Form', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/automation-practice-form');
	});

	it('2141 | TC1: Validate filling out form with valid values', function () {
		const name = faker.person.firstName();
		const lastname = faker.person.lastName();
		const email = faker.internet.email();
		const randomNumber = faker.number.int({ min: 0, max: 2 });
		const number = faker.string.numeric(10);
		const month = faker.date.month();
		const year = yearString();
		const day = faker.number.int({ min: 0, max: 31 });
		const subject = ['Chemistry', 'Maths', 'Arts'];
		const address = faker.location.streetAddress({ useFullAddress: true });

		practiceForm.insertName(name);
		practiceForm.insertLastname(lastname);
		practiceForm.insertEmail(email);
		practiceForm.selectGender(randomNumber);
		practiceForm.insertMobile(number);
		practiceForm.selectDate(month, year, day);
		practiceForm.insertSubject(subject);
		practiceForm.selectHobby(randomNumber);
		practiceForm.unploadPicture();
		practiceForm.insertAdress(address);
		practiceForm.selectState();
		practiceForm.selectCity();
		practiceForm.clickBtnSubmit();

		// Assertions TABLE
		practiceForm.tableTd().eq(1).should('have.text', `${name} ${lastname}`);
		practiceForm.tableTd().eq(3).should('have.text', email);
		practiceForm.tableTd().eq(5).should('contain.text', getGenderString(randomNumber));
		practiceForm.tableTd().eq(7).should('contain', number);

		practiceForm.tableTd().eq(9).should('contain.text', `${day} ${month},${year}`);
		practiceForm.tableTd().eq(11).should('have.text', 'Chemistry, Maths, Arts');
		practiceForm.tableTd().eq(13).should('have.text', getHobbiesString(randomNumber));
		practiceForm.tableTd().eq(15).should('include.text', '.png');
		practiceForm.tableTd().eq(17).should('have.text', address);
		practiceForm.tableTd().eq(19).should('have.text', 'Uttar Pradesh Lucknow');
	});
});
