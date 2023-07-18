import data from '../../../fixtures/data/GX-23630-PracticeForm.json';
import { removeLogs } from '@helper/RemoveLogs';
import { format } from 'date-fns';
removeLogs();
import { usuario } from '@pages/Forms/GX-23630-PracticeForm';
import { faker } from '@faker-js/faker';

const firstname = faker.name.firstName();
const lastname = faker.name.lastName();
const movile = faker.phone.number('##########');
const address = faker.address.streetAddress();
const Mail = [data.Email1, data.Email3, data.Email5, data.Email8];
const currentDate = new Date();
const actualDate = format(currentDate, 'dd MMM yyyy');
const subjPref = [data.Pref1, data.Pref2, data.Pref3, data.Pref4, data.Pref5];

describe('US GX-23630 | TS: ✅ToolsQA | Forms | Practice Form', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/automation-practice-form');
	});

	it('23631 | TC1: Validate if every field are empty ', () => {
		usuario.datos.submit();
		usuario.datos.Email().should('have.css', 'border-color', 'rgb(206, 212, 218)');
		usuario.datos.FirstName().should('have.css', 'border-color', 'rgb(206, 212, 218)');
		usuario.datos.LastName().should('have.css', 'border-color', 'rgb(206, 212, 218)');
		usuario.datos.gender().should('have.css', 'border-color', 'rgb(33, 37, 41)');
		usuario.datos.Mobile().should('have.css', 'border-color', 'rgb(206, 212, 218)');
	});

	it('23631 | TC2: Validate complete the form with valid data', () => {
		const mail = data.Email7;
		const subject = usuario.obtenerAleatorio(subjPref);
		const subject2 = usuario.obtenerAleatorio(subjPref);

		usuario.FillForm(lastname, firstname, mail, movile);
		usuario.datos.Mobile().invoke('val').should('have.length', 10);

		usuario.datos.selectSubj().type(data.Pref1);
		usuario.datos.seleccionarSub().click();
		usuario.datos.selectSubj().type(data.Pref2);
		usuario.datos.seleccionarSub().click();
		usuario.datos.selectSubj().type(data.Pref3);
		usuario.datos.seleccionarSub().click();

		usuario.datos.currentAddress().type(address);
		const gender = usuario.datos.gender().eq(usuario.getRandomNumber(0, 2)).click();
		if (gender === 1) {
			usuario.datos.gender().should('contain', 'Female');
		} else if (gender === 0) {
			usuario.datos.gender().should('contain', 'Male');
		} else {
			usuario.datos.gender().should('contain', 'Other');
		}
		const hobby = usuario.datos.hobby().eq(usuario.getRandomNumber(3, 5)).click();
		if (hobby === 1) {
			usuario.datos.hobby().should('contain', 'Sports');
		} else if (hobby === 0) {
			usuario.datos.hobby().should('contain', 'Reading');
		} else {
			usuario.datos.hobby().should('contain', 'Music');
		}

		usuario.datos.uploadPicture().click();
		usuario.datos.uploadPicture().selectFile({
			contents: Cypress.Buffer.from('Imagen'),
			fileName: 'photo.jpg',
		});

		usuario.datos.dateOfBirth().click();
		usuario.datos.month().select(usuario.getRandomNumber(0, 11));
		usuario.datos.year().select(usuario.getRandomNumber(0, 100));
		usuario.datos.week().eq(usuario.getRandomNumber(0, 5));
		usuario.datos.day().eq(usuario.getRandomNumber(0, 31)).click();
		expect(usuario.datos.dateOfBirth()).not.to.equal(currentDate);

		usuario.datos.selectState().click();
		usuario.datos.selectState2().eq(usuario.getRandomNumber(1, 3)).click({ force: true });
		usuario.datos.selectCity().click();
		usuario.datos.selectCity2().eq(0).click({ force: true });

		usuario.datos.submit().click();
		usuario.datos.Email().should('have.css', 'border-color', 'rgb(40, 167, 69)');

		usuario.datos.gender().should('be.visible');
		usuario.datos.contenidoFormulario().should('be.visible');
		usuario.datos.contenidoFormulario().contains('td', 'Student Name').should('be.visible');
		usuario.datos.contenidoFormulario().contains('td', 'Student Email').should('be.visible');
		usuario.datos.contenidoFormulario().contains('td', 'Gender').should('be.visible');
		usuario.datos.contenidoFormulario().contains('td', 'Mobile').should('be.visible');
		usuario.datos.contenidoFormulario().contains('td', 'Date of Birth').should('be.visible');
		usuario.datos.contenidoFormulario().contains('td', 'Subjects').should('be.visible');
		usuario.datos.contenidoFormulario().contains('td', 'Hobbies').should('be.visible');
		usuario.datos.contenidoFormulario().contains('td', 'Picture').should('be.visible');
		usuario.datos.contenidoFormulario().contains('td', 'Address').should('be.visible');
		usuario.datos.contenidoFormulario().contains('td', 'State').should('be.visible');
		usuario.datos.contenidoFormulario().contains('td', 'City').should('be.visible');
	});

	it('23631 | TC3: Validate complete the form with invalid data ', () => {
		const mail = usuario.obtenerAleatorio(Mail);

		usuario.FillForm(lastname, firstname, mail, movile);
		const gender = usuario.datos.gender().eq(usuario.getRandomNumber(0, 2)).click();
		usuario.datos.Mobile().invoke('val').should('have.length', 10);
		if (gender === 1) {
			usuario.datos.gender().should('contain', 'Female');
		} else if (gender === 0) {
			usuario.datos.gender().should('contain', 'Male');
		} else {
			usuario.datos.gender().should('contain', 'Other');
		}
		const hobby = usuario.datos.hobby().eq(usuario.getRandomNumber(3, 5)).click();
		if (hobby === 1) {
			usuario.datos.hobby().should('contain', 'Sports');
		} else if (hobby === 0) {
			usuario.datos.hobby().should('contain', 'Reading');
		} else {
			usuario.datos.hobby().should('contain', 'Music');
		}
		usuario.datos.uploadPicture().click();
		usuario.datos.uploadPicture().selectFile({
			contents: Cypress.Buffer.from('Imagen'),
			fileName: 'photo.jpg',
		});
		usuario.datos.selectSubj().type(data.Pref1);
		usuario.datos.seleccionarSub().click();
		usuario.datos.selectSubj().type(data.Pref2);
		usuario.datos.seleccionarSub().click();
		usuario.datos.selectSubj().type(data.Pref3);
		usuario.datos.seleccionarSub().click();

		usuario.datos.dateOfBirth().click();
		usuario.datos.month().select(usuario.getRandomNumber(0, 11));
		usuario.datos.year().select(usuario.getRandomNumber(0, 100));
		usuario.datos.week().eq(usuario.getRandomNumber(0, 5));
		usuario.datos.day().eq(usuario.getRandomNumber(0, 31)).click();
		expect(usuario.datos.dateOfBirth()).not.to.equal(currentDate);

		usuario.datos.selectState().click();
		usuario.datos.selectState2().eq(usuario.getRandomNumber(0, 3)).click({ force: true });
		usuario.datos.selectCity().click();
		usuario.datos.selectCity2().eq(0).click({ force: true });

		usuario.datos.submit().click();
		usuario.datos.Email().should('have.css', 'border-color', 'rgb(220, 53, 69)');
	});

	it('23631 | TC14: Validate if field date picker has the current date as a default value.', () => {
		usuario.datos.dateOfBirth().should('have.value', actualDate);
	});
});
