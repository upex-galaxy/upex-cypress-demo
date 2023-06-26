import { faker } from '@faker-js/faker';
import { studentForm } from '../../../support/pages/Forms/GX-19307-Student-Form';
import the from '../../../fixtures/data/GX-19307-Student-Form.json';

const randomFirstName = faker.name.firstName();
const randomLastName = faker.name.lastName();
const randomEmail = faker.internet.email();
const randomGender = faker.datatype.number({ min: 0, max: 2 });
const genderOptions = {
	0: 'Male',
	1: 'Female',
	2: 'Other',
};
const stringGender = genderOptions[randomGender];
const randomMobile = faker.phone.number('341#######');
const randomMonth = faker.helpers.arrayElement(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
const randomYear = faker.datatype.number({ min: 1940, max: 2022 });
const stringYear = randomYear.toString();
const randomDay = faker.datatype.number({ min: 1, max: 28 });
let formattedDay;
if (randomDay < 10) {
	formattedDay = '0' + randomDay;
} else {
	formattedDay = String(randomDay);
}
const dateAssertion = formattedDay + ' ' + randomMonth + ' ' + stringYear;
const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.toLocaleString('en-US', { month: 'long' });
const currentYear = currentDate.getFullYear();
const currentDateAssertion = currentDay + ' ' + currentMonth + ',' + currentYear;
const randomHobby = faker.datatype.number({ min: 3, max: 5 });
const hobbiesOptions = {
	3: 'Sports',
	4: 'Reading',
	5: 'Music',
};
const stringHobby = hobbiesOptions[randomHobby];
const randomCurrentAddress = faker.address.streetAddress();

describe('✅ToolsQA | Forms | Practice Form', () => {
	beforeEach('Precondición: Usuario debe estar en pagina de Student Registration Form', () => {
		cy.visit(the.url);
		cy.url().should('contain', the.assertions.Url);
	});
	it('19308 | TC01 - Validar usuario completa formulario correctamente', () => {
		studentForm.typeRandomFirstName(randomFirstName);
		studentForm.get.FirstName().should('have.value', randomFirstName);
		studentForm.typeRandomLastName(randomLastName);
		studentForm.get.LastName().should('have.value', randomLastName);
		studentForm.typeRandomEmail(randomEmail);
		studentForm.get.Email().should('have.value', randomEmail);
		studentForm.clickGender(randomGender);
		studentForm.get.AllGender().should('be.checked', randomGender);
		studentForm.typeRandomMobile(randomMobile);
		studentForm.get.Mobile().should('have.value', randomMobile);
		studentForm.selectMonth(randomMonth);
		studentForm.selectYear(stringYear);
		studentForm.selectDay(randomDay);
		studentForm.get.DateOfBirth().should('have.value', dateAssertion);
		studentForm.typeSubjects();
		studentForm.get.Subjects().should('contain', the.data.Subjects);
		studentForm.clickHobby(randomHobby);
		studentForm.get.AllHobbies().should('be.checked', randomHobby);
		studentForm.selectPicture();
		studentForm.get.Picture().should('have.prop', 'files');
		studentForm.typeRandomCurrentAddress(randomCurrentAddress);
		studentForm.get.CurrentAddress().should('have.value', randomCurrentAddress);
		studentForm.selectState();
		studentForm.get.State().should('contain', the.data.StateAndCity.State);
		studentForm.selectCity();
		studentForm.get.City().should('contain', the.data.StateAndCity.City);
		studentForm.submitButton();

		studentForm.get.TableStudentName().should('contain', randomFirstName);
		studentForm.get.TableStudentName().should('contain', randomLastName);
		studentForm.get.TableStudentEmail().should('contain', randomEmail);
		studentForm.get.TableGender().should('contain', stringGender);
		studentForm.get.TableMobile().should('contain', randomMobile);
		studentForm.get.TableDateOfBirth().should('contain', randomMonth);
		studentForm.get.TableDateOfBirth().should('contain', stringYear);
		studentForm.get.TableDateOfBirth().should('contain', randomDay);
		studentForm.get.TableSubjects().should('contain', the.assertions.Subjects.Subjects);
		studentForm.get.TableHobbies().should('contain', stringHobby);
		studentForm.get.TablePicture().should('contain', the.assertions.Picture.Picture);
		studentForm.get.TableAddress().should('contain', randomCurrentAddress);
		studentForm.get.TableStateAndCity().should('contain', the.assertions.StateAndCity.State);
		studentForm.get.TableStateAndCity().should('contain', the.assertions.StateAndCity.City);
	});

	it('19308 | TC02 - Validar no poder registrarse ingresando campos FirsName, LastName, Gender y Mobile vacíos', () => {
		studentForm.typeRandomEmail(randomEmail);
		studentForm.get.Email().should('have.value', randomEmail);
		studentForm.selectMonth(randomMonth);
		studentForm.selectYear(stringYear);
		studentForm.selectDay(randomDay);
		studentForm.get.DateOfBirth().should('have.value', dateAssertion);
		studentForm.typeSubjects();
		studentForm.get.Subjects().should('contain', the.data.Subjects);
		studentForm.clickHobby(randomHobby);
		studentForm.get.AllHobbies().should('be.checked', randomHobby);
		studentForm.selectPicture();
		studentForm.get.Picture().should('have.prop', 'files');
		studentForm.typeRandomCurrentAddress(randomCurrentAddress);
		studentForm.get.CurrentAddress().should('have.value', randomCurrentAddress);
		studentForm.selectState();
		studentForm.get.State().should('contain', the.data.StateAndCity.State);
		studentForm.selectCity();
		studentForm.get.City().should('contain', the.data.StateAndCity.City);
		studentForm.submitButton();

		studentForm.get.FirstName().should('be.empty');
		studentForm.get.LastName().should('be.empty');
		studentForm.get.AllGender().should('not.be.selected');
		studentForm.get.Mobile().should('be.empty');
		studentForm.get.SubmitTable().should('not.exist');
	});

	it('19308 | TC03 - Validar no poder registrarse ingresando “Mobile Number” con letras', () => {
		studentForm.typeRandomFirstName(randomFirstName);
		studentForm.get.FirstName().should('have.value', randomFirstName);
		studentForm.typeRandomLastName(randomLastName);
		studentForm.get.LastName().should('have.value', randomLastName);
		studentForm.typeRandomEmail(randomEmail);
		studentForm.get.Email().should('have.value', randomEmail);
		studentForm.clickGender(randomGender);
		studentForm.get.AllGender().should('be.checked', randomGender);
		studentForm.typeMobileWithLetters();
		studentForm.get.Mobile().should('not.contain', the.assertions.Mobile.NoNumbers);
		studentForm.selectMonth(randomMonth);
		studentForm.selectYear(stringYear);
		studentForm.selectDay(randomDay);
		studentForm.get.DateOfBirth().should('have.value', dateAssertion);
		studentForm.typeSubjects();
		studentForm.get.Subjects().should('contain', the.data.Subjects);
		studentForm.clickHobby(randomHobby);
		studentForm.get.AllHobbies().should('be.checked', randomHobby);
		studentForm.selectPicture();
		studentForm.get.Picture().should('have.prop', 'files');
		studentForm.typeRandomCurrentAddress(randomCurrentAddress);
		studentForm.get.CurrentAddress().should('have.value', randomCurrentAddress);
		studentForm.selectState();
		studentForm.get.State().should('contain', the.data.StateAndCity.State);
		studentForm.selectCity();
		studentForm.get.City().should('contain', the.data.StateAndCity.City);
		studentForm.submitButton();

		studentForm.get.SubmitTable().should('not.exist');
	});

	it('19308 | TC04 - Validar usuario no ingresa “Date of Birth” en el formulario', () => {
		studentForm.typeRandomFirstName(randomFirstName);
		studentForm.get.FirstName().should('have.value', randomFirstName);
		studentForm.typeRandomLastName(randomLastName);
		studentForm.get.LastName().should('have.value', randomLastName);
		studentForm.typeRandomEmail(randomEmail);
		studentForm.get.Email().should('have.value', randomEmail);
		studentForm.clickGender(randomGender);
		studentForm.get.AllGender().should('be.checked', randomGender);
		studentForm.typeRandomMobile(randomMobile);
		studentForm.get.Mobile().should('have.value', randomMobile);
		studentForm.typeSubjects();
		studentForm.get.Subjects().should('contain', the.data.Subjects);
		studentForm.clickHobby(randomHobby);
		studentForm.get.AllHobbies().should('be.checked', randomHobby);
		studentForm.selectPicture();
		studentForm.get.Picture().should('have.prop', 'files');
		studentForm.typeRandomCurrentAddress(randomCurrentAddress);
		studentForm.get.CurrentAddress().should('have.value', randomCurrentAddress);
		studentForm.selectState();
		studentForm.get.State().should('contain', the.data.StateAndCity.State);
		studentForm.selectCity();
		studentForm.get.City().should('contain', the.data.StateAndCity.City);
		studentForm.submitButton();

		studentForm.get.TableDateOfBirth().should('contain', currentDateAssertion);
	});

	it('19308 | TC05 - Validar tabla de registro donde Subjects, Hobbies y Picture estén vacíos', () => {
		studentForm.typeRandomFirstName(randomFirstName);
		studentForm.get.FirstName().should('have.value', randomFirstName);
		studentForm.typeRandomLastName(randomLastName);
		studentForm.get.LastName().should('have.value', randomLastName);
		studentForm.typeRandomEmail(randomEmail);
		studentForm.get.Email().should('have.value', randomEmail);
		studentForm.clickGender(randomGender);
		studentForm.get.AllGender().should('be.checked', randomGender);
		studentForm.typeRandomMobile(randomMobile);
		studentForm.get.Mobile().should('have.value', randomMobile);
		studentForm.selectMonth(randomMonth);
		studentForm.selectYear(stringYear);
		studentForm.selectDay(randomDay);
		studentForm.get.DateOfBirth().should('have.value', dateAssertion);
		studentForm.typeRandomCurrentAddress(randomCurrentAddress);
		studentForm.get.CurrentAddress().should('have.value', randomCurrentAddress);
		studentForm.selectState();
		studentForm.get.State().should('contain', the.data.StateAndCity.State);
		studentForm.selectCity();
		studentForm.get.City().should('contain', the.data.StateAndCity.City);
		studentForm.submitButton();

		studentForm.get.TableSubjects().should('be.empty');
		studentForm.get.TableHobbies().should('be.empty');
		studentForm.get.TablePicture().should('be.empty');
	});

	it('19308 | TC06 - Validar tabla de registro donde Address, State y City estén vacíos', () => {
		studentForm.typeRandomFirstName(randomFirstName);
		studentForm.get.FirstName().should('have.value', randomFirstName);
		studentForm.typeRandomLastName(randomLastName);
		studentForm.get.LastName().should('have.value', randomLastName);
		studentForm.typeRandomEmail(randomEmail);
		studentForm.get.Email().should('have.value', randomEmail);
		studentForm.clickGender(randomGender);
		studentForm.get.AllGender().should('be.checked', randomGender);
		studentForm.typeRandomMobile(randomMobile);
		studentForm.get.Mobile().should('have.value', randomMobile);
		studentForm.selectMonth(randomMonth);
		studentForm.selectYear(stringYear);
		studentForm.selectDay(randomDay);
		studentForm.get.DateOfBirth().should('have.value', dateAssertion);
		studentForm.typeSubjects();
		studentForm.get.Subjects().should('contain', the.data.Subjects);
		studentForm.clickHobby(randomHobby);
		studentForm.get.AllHobbies().should('be.checked', randomHobby);
		studentForm.selectPicture();
		studentForm.get.Picture().should('have.prop', 'files');
		studentForm.submitButton();

		studentForm.get.TableAddress().should('be.empty');
		studentForm.get.TableStateAndCity().should('be.empty');
	});

	it('19308 | TC07 - Validar usuario no ingresa “Email” en el formulario', () => {
		studentForm.typeRandomFirstName(randomFirstName);
		studentForm.get.FirstName().should('have.value', randomFirstName);
		studentForm.typeRandomLastName(randomLastName);
		studentForm.get.LastName().should('have.value', randomLastName);
		studentForm.clickGender(randomGender);
		studentForm.get.AllGender().should('be.checked', randomGender);
		studentForm.typeRandomMobile(randomMobile);
		studentForm.get.Mobile().should('have.value', randomMobile);
		studentForm.selectMonth(randomMonth);
		studentForm.selectYear(stringYear);
		studentForm.selectDay(randomDay);
		studentForm.get.DateOfBirth().should('have.value', dateAssertion);
		studentForm.typeSubjects();
		studentForm.get.Subjects().should('contain', the.data.Subjects);
		studentForm.clickHobby(randomHobby);
		studentForm.get.AllHobbies().should('be.checked', randomHobby);
		studentForm.selectPicture();
		studentForm.get.Picture().should('have.prop', 'files');
		studentForm.typeRandomCurrentAddress(randomCurrentAddress);
		studentForm.get.CurrentAddress().should('have.value', randomCurrentAddress);
		studentForm.selectState();
		studentForm.get.State().should('contain', the.data.StateAndCity.State);
		studentForm.selectCity();
		studentForm.get.City().should('contain', the.data.StateAndCity.City);
		studentForm.submitButton();

		studentForm.get.TableStudentEmail().should('be.empty');
	});

	it('19308 | TC08 - Validar no poder registrarse ingresando “Email” sin @', () => {
		studentForm.typeRandomFirstName(randomFirstName);
		studentForm.get.FirstName().should('have.value', randomFirstName);
		studentForm.typeRandomLastName(randomLastName);
		studentForm.get.LastName().should('have.value', randomLastName);
		studentForm.get.Email().type(the.data.StudentEmail.WrongStudentEmail1);
		studentForm.get.Email().should('not.contain', the.assertions.StudentEmail.WrongStudentEmail1);
		studentForm.clickGender(randomGender);
		studentForm.get.AllGender().should('be.checked', randomGender);
		studentForm.typeRandomMobile(randomMobile);
		studentForm.get.Mobile().should('have.value', randomMobile);
		studentForm.selectMonth(randomMonth);
		studentForm.selectYear(stringYear);
		studentForm.selectDay(randomDay);
		studentForm.get.DateOfBirth().should('have.value', dateAssertion);
		studentForm.typeSubjects();
		studentForm.get.Subjects().should('contain', the.data.Subjects);
		studentForm.clickHobby(randomHobby);
		studentForm.get.AllHobbies().should('be.checked', randomHobby);
		studentForm.selectPicture();
		studentForm.get.Picture().should('have.prop', 'files');
		studentForm.typeRandomCurrentAddress(randomCurrentAddress);
		studentForm.get.CurrentAddress().should('have.value', randomCurrentAddress);
		studentForm.selectState();
		studentForm.get.State().should('contain', the.data.StateAndCity.State);
		studentForm.selectCity();
		studentForm.get.City().should('contain', the.data.StateAndCity.City);
		studentForm.submitButton();

		studentForm.get.SubmitTable().should('not.exist');
	});

	it('19308 | TC09 - Validar no poder registrarse ingresando “Email” sin un carácter alfanumérico antes del @', () => {
		studentForm.typeRandomFirstName(randomFirstName);
		studentForm.get.FirstName().should('have.value', randomFirstName);
		studentForm.typeRandomLastName(randomLastName);
		studentForm.get.LastName().should('have.value', randomLastName);
		studentForm.get.Email().type(the.data.StudentEmail.WrongStudentEmail2);
		studentForm.get.Email().should('not.contain', the.assertions.StudentEmail.WrongStudentEmail2);
		studentForm.clickGender(randomGender);
		studentForm.get.AllGender().should('be.checked', randomGender);
		studentForm.typeRandomMobile(randomMobile);
		studentForm.get.Mobile().should('have.value', randomMobile);
		studentForm.selectMonth(randomMonth);
		studentForm.selectYear(stringYear);
		studentForm.selectDay(randomDay);
		studentForm.get.DateOfBirth().should('have.value', dateAssertion);
		studentForm.typeSubjects();
		studentForm.get.Subjects().should('contain', the.data.Subjects);
		studentForm.clickHobby(randomHobby);
		studentForm.get.AllHobbies().should('be.checked', randomHobby);
		studentForm.selectPicture();
		studentForm.get.Picture().should('have.prop', 'files');
		studentForm.typeRandomCurrentAddress(randomCurrentAddress);
		studentForm.get.CurrentAddress().should('have.value', randomCurrentAddress);
		studentForm.selectState();
		studentForm.get.State().should('contain', the.data.StateAndCity.State);
		studentForm.selectCity();
		studentForm.get.City().should('contain', the.data.StateAndCity.City);
		studentForm.submitButton();

		studentForm.get.SubmitTable().should('not.exist');
	});

	it('19308 | TC10 - Validar no poder registrar ingresando “Email” sin un carácter alfanumérico después del @', () => {
		studentForm.typeRandomFirstName(randomFirstName);
		studentForm.get.FirstName().should('have.value', randomFirstName);
		studentForm.typeRandomLastName(randomLastName);
		studentForm.get.LastName().should('have.value', randomLastName);
		studentForm.get.Email().type(the.data.StudentEmail.WrongStudentEmail3);
		studentForm.get.Email().should('not.contain', the.assertions.StudentEmail.WrongStudentEmail3);
		studentForm.clickGender(randomGender);
		studentForm.get.AllGender().should('be.checked', randomGender);
		studentForm.typeRandomMobile(randomMobile);
		studentForm.get.Mobile().should('have.value', randomMobile);
		studentForm.selectMonth(randomMonth);
		studentForm.selectYear(stringYear);
		studentForm.selectDay(randomDay);
		studentForm.get.DateOfBirth().should('have.value', dateAssertion);
		studentForm.typeSubjects();
		studentForm.get.Subjects().should('contain', the.data.Subjects);
		studentForm.clickHobby(randomHobby);
		studentForm.get.AllHobbies().should('be.checked', randomHobby);
		studentForm.selectPicture();
		studentForm.get.Picture().should('have.prop', 'files');
		studentForm.typeRandomCurrentAddress(randomCurrentAddress);
		studentForm.get.CurrentAddress().should('have.value', randomCurrentAddress);
		studentForm.selectState();
		studentForm.get.State().should('contain', the.data.StateAndCity.State);
		studentForm.selectCity();
		studentForm.get.City().should('contain', the.data.StateAndCity.City);
		studentForm.submitButton();

		studentForm.get.SubmitTable().should('not.exist');
	});

	it('19308 | TC11 - Validar no poder registrarse ingresando “Email” sin contener . después del @', () => {
		studentForm.typeRandomFirstName(randomFirstName);
		studentForm.get.FirstName().should('have.value', randomFirstName);
		studentForm.typeRandomLastName(randomLastName);
		studentForm.get.LastName().should('have.value', randomLastName);
		studentForm.get.Email().type(the.data.StudentEmail.WrongStudentEmail4);
		studentForm.get.Email().should('not.contain', the.assertions.StudentEmail.WrongStudentEmail4);
		studentForm.clickGender(randomGender);
		studentForm.get.AllGender().should('be.checked', randomGender);
		studentForm.typeRandomMobile(randomMobile);
		studentForm.get.Mobile().should('have.value', randomMobile);
		studentForm.selectMonth(randomMonth);
		studentForm.selectYear(stringYear);
		studentForm.selectDay(randomDay);
		studentForm.get.DateOfBirth().should('have.value', dateAssertion);
		studentForm.typeSubjects();
		studentForm.get.Subjects().should('contain', the.data.Subjects);
		studentForm.clickHobby(randomHobby);
		studentForm.get.AllHobbies().should('be.checked', randomHobby);
		studentForm.selectPicture();
		studentForm.get.Picture().should('have.prop', 'files');
		studentForm.typeRandomCurrentAddress(randomCurrentAddress);
		studentForm.get.CurrentAddress().should('have.value', randomCurrentAddress);
		studentForm.selectState();
		studentForm.get.State().should('contain', the.data.StateAndCity.State);
		studentForm.selectCity();
		studentForm.get.City().should('contain', the.data.StateAndCity.City);
		studentForm.submitButton();

		studentForm.get.SubmitTable().should('not.exist');
	});

	it('19308 | TC12 - Validar no poder registrarse ingresando “Email” sin 2 caracteres alfanuméricos después del .', () => {
		studentForm.typeRandomFirstName(randomFirstName);
		studentForm.get.FirstName().should('have.value', randomFirstName);
		studentForm.typeRandomLastName(randomLastName);
		studentForm.get.LastName().should('have.value', randomLastName);
		studentForm.get.Email().type(the.data.StudentEmail.WrongStudentEmail5);
		studentForm.get.Email().should('not.contain', the.assertions.StudentEmail.WrongStudentEmail5);
		studentForm.clickGender(randomGender);
		studentForm.get.AllGender().should('be.checked', randomGender);
		studentForm.typeRandomMobile(randomMobile);
		studentForm.get.Mobile().should('have.value', randomMobile);
		studentForm.selectMonth(randomMonth);
		studentForm.selectYear(stringYear);
		studentForm.selectDay(randomDay);
		studentForm.get.DateOfBirth().should('have.value', dateAssertion);
		studentForm.typeSubjects();
		studentForm.get.Subjects().should('contain', the.data.Subjects);
		studentForm.clickHobby(randomHobby);
		studentForm.get.AllHobbies().should('be.checked', randomHobby);
		studentForm.selectPicture();
		studentForm.get.Picture().should('have.prop', 'files');
		studentForm.typeRandomCurrentAddress(randomCurrentAddress);
		studentForm.get.CurrentAddress().should('have.value', randomCurrentAddress);
		studentForm.selectState();
		studentForm.get.State().should('contain', the.data.StateAndCity.State);
		studentForm.selectCity();
		studentForm.get.City().should('contain', the.data.StateAndCity.City);
		studentForm.submitButton();

		studentForm.get.SubmitTable().should('not.exist');
	});
});

import { removeLogs } from '@helper/RemoveLogs';

removeLogs();
