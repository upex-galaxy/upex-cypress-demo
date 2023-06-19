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

		studentForm.assertionFirstName().should('contain', randomFirstName);
		studentForm.assertionLastName().should('contain', randomLastName);
		studentForm.assertionEmail().should('contain', randomEmail);
		studentForm.assertionGender().should('contain', stringGender);
		studentForm.assertionMobile().should('contain', randomMobile);
		studentForm.assertionMonth().should('contain', randomMonth);
		studentForm.assertionYear().should('contain', stringYear);
		studentForm.assertionDay().should('contain', randomDay);
		studentForm.assertionSubjects().should('contain', the.assertions.Subjects.Subjects);
		studentForm.assertionHobbies().should('contain', stringHobby);
		studentForm.assertionPicture().should('contain', the.assertions.Picture.Picture);
		studentForm.assertionAddress().should('contain', randomCurrentAddress);
		studentForm.assertionState().should('contain', the.assertions.StateAndCity.State);
		studentForm.assertionState().should('contain', the.assertions.StateAndCity.City);
	});

	it('19308 | TC02 - Validar usuario no ingresa “First Name” en el formulario', () => {
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

		studentForm.get.FirstName().should('be.empty');
		studentForm.get.SubmitTable().should('not.exist');
	});

	it('19308 | TC03 - Validar usuario no ingresa “Last Name” en el formulario', () => {
		studentForm.typeRandomFirstName(randomFirstName);
		studentForm.get.FirstName().should('have.value', randomFirstName);
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

		studentForm.get.LastName().should('be.empty');
		studentForm.get.SubmitTable().should('not.exist');
	});

	it('19308 | TC04 - Validar usuario no ingresa “Gender” en el formulario', () => {
		studentForm.typeRandomFirstName(randomFirstName);
		studentForm.get.FirstName().should('have.value', randomFirstName);
		studentForm.typeRandomLastName(randomLastName);
		studentForm.get.LastName().should('have.value', randomLastName);
		studentForm.typeRandomEmail(randomEmail);
		studentForm.get.Email().should('have.value', randomEmail);
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

		studentForm.get.AllGender().should('not.be.selected');
		studentForm.get.SubmitTable().should('not.exist');
	});

	it('19308 | TC05 - Validar usuario no ingresa “Mobile Number” en el formulario', () => {
		studentForm.typeRandomFirstName(randomFirstName);
		studentForm.get.FirstName().should('have.value', randomFirstName);
		studentForm.typeRandomLastName(randomLastName);
		studentForm.get.LastName().should('have.value', randomLastName);
		studentForm.typeRandomEmail(randomEmail);
		studentForm.get.Email().should('have.value', randomEmail);
		studentForm.clickGender(randomGender);
		studentForm.get.AllGender().should('be.checked', randomGender);
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

		studentForm.get.Mobile().should('be.empty');
		studentForm.get.SubmitTable().should('not.exist');
	});

	it('19308 | TC06 - Validar usuario ingresa “Mobile Number” en el formulario con letras', () => {
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

	it('19308 | TC07 - Validar usuario no ingresa “Date of Birth” en el formulario', () => {
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

		//Se skipea assertion por falta de conocimiento, aca iría la fecha actual
	});

	it('19308 | TC08 - Validar usuario no ingresa “Subjects” en el formulario', () => {
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

		studentForm.assertionSubjects().should('be.empty');
	});

	it('19308 | TC09 - Validar usuario no ingresa “Hobbies” en el formulario', () => {
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
		studentForm.selectPicture();
		studentForm.get.Picture().should('have.prop', 'files');
		studentForm.typeRandomCurrentAddress(randomCurrentAddress);
		studentForm.get.CurrentAddress().should('have.value', randomCurrentAddress);
		studentForm.selectState();
		studentForm.get.State().should('contain', the.data.StateAndCity.State);
		studentForm.selectCity();
		studentForm.get.City().should('contain', the.data.StateAndCity.City);
		studentForm.submitButton();

		studentForm.get.AllHobbies().should('not.be.selected');
	});

	it('19308 | TC10 - Validar usuario no ingresa “Picture” en el formulario', () => {
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
		studentForm.typeRandomCurrentAddress(randomCurrentAddress);
		studentForm.get.CurrentAddress().should('have.value', randomCurrentAddress);
		studentForm.selectState();
		studentForm.get.State().should('contain', the.data.StateAndCity.State);
		studentForm.selectCity();
		studentForm.get.City().should('contain', the.data.StateAndCity.City);
		studentForm.submitButton();

		studentForm.assertionPicture().should('be.empty');
	});

	it('19308 | TC11 - Validar usuario no ingresa “Current Address” en el formulario', () => {
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
		studentForm.selectState();
		studentForm.get.State().should('contain', the.data.StateAndCity.State);
		studentForm.selectCity();
		studentForm.get.City().should('contain', the.data.StateAndCity.City);
		studentForm.submitButton();

		studentForm.assertionAddress().should('be.empty');
	});

	it('19308 | TC12 - Validar usuario no ingresa “State and City” en el formulario', () => {
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
		studentForm.submitButton();

		studentForm.assertionState().should('be.empty');
		studentForm.assertionCity().should('be.empty');
	});

	it('19308 | TC13 - Validar usuario no ingresa “Email” en el formulario', () => {
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

		studentForm.assertionEmail().should('be.empty');
	});

	it('19308 | TC14 - Validar usuario ingresa “Email” en el formulario sin @', () => {
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

	it('19308 | TC15 - Validar usuario ingresa “Email” en el formulario sin un carácter alfanumérico antes del @', () => {
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

	it('19308 | TC16 - Validar usuario ingresa “Email” en el formulario sin un carácter alfanumérico después del @', () => {
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

	it('19308 | TC17 - Validar usuario ingresa “Email” en el formulario sin contener . después del @', () => {
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

	it('19308 | TC18 - Validar usuario ingresa “Email” en el formulario sin 2 caracteres alfanuméricos después del .', () => {
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
