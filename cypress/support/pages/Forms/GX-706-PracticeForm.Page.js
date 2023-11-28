import { faker } from '@faker-js/faker';
const randomFirsName = faker.person.firstName();
const randomLastName = faker.person.lastname();
const randomMobile = faker.number.mobile();
const randomSubjets = faker.text.subjets();
const randomAdress = faker.address.address();

class Formulario {
	get = {
		inputFirstName: () => cy.get('[id="firstName"]'),
		inputLastName: () => cy.get('[id="lastName"]'),
		inputMail: () => cy.get('[id="userEmail"]'),
		selectGenero: () => cy.get('div[class*="custom-control-inline"]'),
		inputMobile: () => cy.get('[id="userNumber"]'),
		selectDate: () => cy.get('[id="dateOfBirthInput"]'),
		inputSubject: () => cy.get('[id="subjectsContainer"]'),
		selectHobbie: () => cy.get('div[class*="custom-control-inline"]'),
		selectFileButton: () => cy.get('[id="uploadPicture"]'),
		inputAddress: () => cy.get('[id="currentAddress"]'),
		selectState: () => cy.get('[class=" css-1hwfws3"]').eq(0),
		selectCity: () => cy.get('[class=" css-1hwfws3"]').eq(1),
		submitButton: () => cy.get('[id="submit"]'),
	};
}
export const form = new Formulario();
