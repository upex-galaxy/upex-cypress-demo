import data from '../../../fixtures/data/GX-23698-PracticeForm.json';
import { removeLogs } from '@helper/RemoveLogs';
import { usuario } from '@pages/Forms/GX-23698-PracticeForm';
import { faker } from '@faker-js/faker';

let firstname = faker.name.firstName();
let lastname = faker.name.lastName();
let movile = faker.phone.number('##########');
let address = faker.address.streetAddress();
let Mail = [data.Email1, data.Email3, data.Email5, data.Email8];

describe('US GX-23698 | TS: ✅ToolsQA | Forms | Practice Form', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/automation-practice-form');
	});

	it('23699 | TC1: Validate if every field are empty, not send the form', () => {
		usuario.datos.LastName().should('have.value', data.vacio);
		usuario.datos.FirstName().should('have.value', data.vacio);
		usuario.datos.Mobile().should('have.value', data.vacio);
		usuario.datos.Email().should('have.value', data.vacio);
		usuario.datos.subjectContainer().should('have.value', data.vacio);
		usuario.datos.currentAddress().should('have.value', data.vacio);
		usuario.datos.submit().click();
		usuario.datos.Email().should('have.css', 'border-color', 'rgb(40, 167, 69)');
		usuario.datos.FirstName().should('have.css', 'border-color', 'rgb(220, 53, 69)');
		usuario.datos.LastName().should('have.css', 'border-color', 'rgb(220, 53, 69)');
		usuario.datos.gender().should('have.css', 'border-color', 'rgb(33, 37, 41)');
		usuario.datos.Mobile().should('have.css', 'border-color', 'rgb(220, 53, 69)');
	});

	it('23699 | TC2: Validate complete the form with valid data', () => {
		const mail = data.Email7;
		usuario.FillForm(lastname, firstname, mail, movile);
		const nombreCompleto = lastname + ' ' + firstname;
		usuario.datos.Mobile().invoke('val').should('have.length', 10);
		let suE = [];

		usuario.datos.selectSubj().type(data.Pref1);
		usuario.datos.seleccionarSub().click();
		usuario.datos.subjectContainer().contains('Maths');
		suE[0] = 'Maths';
		usuario.datos.selectSubj().type(data.Pref2);
		usuario.datos.seleccionarSub().click();
		usuario.datos.subjectContainer().contains('Chemistry');
		suE[1] = 'Chemistry';

		const addressE = usuario.datos.currentAddress().type(address);

		let genderE;
		const genderCod = usuario.getRandomNumber(0, 2);
		usuario.datos.gender().eq(genderCod).click();
		if (genderCod === 1) {
			genderE = 'Female';
		} else if (genderCod === 0) {
			genderE = 'Male';
		} else {
			genderE = 'Other';
		}

		let hobbyE;
		const hobbyCod = usuario.getRandomNumber(3, 5);
		usuario.datos.hobby().eq(hobbyCod).click();
		if (hobbyCod === 3) {
			hobbyE = 'Sports';
		} else if (hobbyCod === 4) {
			hobbyE = 'Reading';
		} else {
			hobbyE = 'Music';
		}
		usuario.datos.uploadPicture().click();
		usuario.datos.uploadPicture().selectFile({
			contents: Cypress.Buffer.from('Imagen'),
			fileName: data.Photo,
		});
		var fotoE = data.Photo;
		let anio;
		let mes;
		let dia;
		let fechaSeleccionada;
		usuario.datos.dateOfBirth().click();
		var randomMonth = usuario.getRandomNumber(0, 11);
		usuario.datos.month().select(randomMonth);
		var randomYear = usuario.getRandomNumber(0, 100);
		usuario.datos.year().select(randomYear);
		var randomWeek = usuario.getRandomNumber(0, 5);
		usuario.datos.week().eq(randomWeek);

		if (randomMonth === 3 || randomMonth === 5 || randomMonth === 8 || randomMonth === 10) {
			var randomDay = usuario.getRandomNumber(0, 29);
			usuario.datos.day().eq(randomDay).click();
			anio = randomYear + 1900;
			mes = usuario.obtenerNombreMesEnIngles(randomMonth + 1);
			dia = randomDay + 1;
			fechaSeleccionada = `${dia} ${mes},${anio}`;
		}
		if (
			randomMonth === 0 ||
			randomMonth === 2 ||
			randomMonth === 4 ||
			randomMonth === 6 ||
			randomMonth === 7 ||
			randomMonth === 9 ||
			randomMonth === 11
		) {
			var randomDay = usuario.getRandomNumber(0, 30);
			usuario.datos.day().eq(randomDay).click();
			anio = randomYear + 1900;
			mes = usuario.obtenerNombreMesEnIngles(randomMonth + 1);
			dia = randomDay + 1;
			fechaSeleccionada = `${dia} ${mes},${anio}`;
		}
		if (randomMonth === 1) {
			var randomDay = usuario.getRandomNumber(0, 27);
			usuario.datos.day().eq(randomDay).click();
			anio = randomYear + 1900;
			mes = usuario.obtenerNombreMesEnIngles(randomMonth + 1);
			dia = randomDay + 1;
			fechaSeleccionada = `${dia} ${mes},${anio}`;
		}

		let StateRandom = usuario.getRandomNumber(1, 4);
		usuario.datos.selectState().click();
		usuario.datos.selectState2().eq(StateRandom).click({ force: true });
		let CityRandom;
		let State;
		let City;

		if (StateRandom === 1) {
			State = 'NCR';
			CityRandom = usuario.getRandomNumber(1, 3);
			usuario.datos.selectCity().click();
			usuario.datos.selectCity2().eq(CityRandom).click({ force: true });
			if (CityRandom === 1) {
				City = 'Delhi';
			}
			if (CityRandom === 2) {
				City = 'Gurgaon';
			}
			if (CityRandom === 3) {
				City = 'Noida';
			}
		}
		if (StateRandom === 2) {
			State = 'Uttar Pradesh';
			CityRandom = usuario.getRandomNumber(1, 3);
			usuario.datos.selectCity().click();
			usuario.datos.selectCity2().eq(CityRandom).click({ force: true });
			if (CityRandom === 1) {
				City = 'Agra';
			}
			if (CityRandom === 2) {
				City = 'Lucknow';
			}
			if (CityRandom === 3) {
				City = 'Merrut';
			}
		}
		if (StateRandom === 3) {
			State = 'Haryana';
			CityRandom = usuario.getRandomNumber(1, 2);
			usuario.datos.selectCity().click();
			usuario.datos.selectCity2().eq(CityRandom).click({ force: true });
			if (CityRandom === 1) {
				City = 'Karnal';
			}
			if (CityRandom === 2) {
				City = 'Panipat';
			}
		}
		if (StateRandom === 4) {
			State = 'Rajasthan';
			CityRandom = usuario.getRandomNumber(1, 2);
			usuario.datos.selectCity().click();
			usuario.datos.selectCity2().eq(CityRandom).click();
			if (CityRandom === 1) {
				City = 'Jaipur';
			}
			if (CityRandom === 2) {
				City = 'Jaiselmer';
			}
		}
		let StateCity = State + ' ' + City;
		cy.log(StateCity);

		usuario.datos.submit().click();
		cy.get('.modal-content').should('be.visible');
		usuario.datos.contenidoFormulario().should('be.visible');
		usuario.datos.contenidoFormulario().contains(nombreCompleto).should('be.visible');
		usuario.datos.contenidoFormulario().contains(mail).should('be.visible');
		usuario.datos.contenidoFormulario().contains(genderE).should('be.visible');
		usuario.datos.contenidoFormulario().contains(movile).should('be.visible');
		usuario.datos.contenidoFormulario().contains(hobbyE).should('be.visible');
		usuario.datos.contenidoFormulario().contains(address).should('be.visible');
		usuario.datos.contenidoFormulario().contains(fechaSeleccionada);
		usuario.datos.contenidoFormulario().contains(fotoE).should('be.visible');
		usuario.datos.contenidoFormulario().contains(StateCity).should('be.visible');
		//usuario.datos.contenidoFormulario().contains(suE).should('be.visible');
	});

	it('23699 | TC3: Validate complete the form with invalid data ', () => {
		const mail = usuario.obtenerAleatorio(Mail);

		usuario.FillForm(lastname, firstname, mail, movile);
		const nombreCompleto = lastname + ' ' + firstname;
		usuario.datos.Mobile().invoke('val').should('have.length', 10);
		let suE = [];

		usuario.datos.selectSubj().type(data.Pref1);
		usuario.datos.seleccionarSub().click();
		usuario.datos.subjectContainer().contains('Maths');
		suE[0] = 'Maths';
		usuario.datos.selectSubj().type(data.Pref2);
		usuario.datos.seleccionarSub().click();
		usuario.datos.subjectContainer().contains('Chemistry');
		suE[1] = 'Chemistry';

		const addressE = usuario.datos.currentAddress().type(address);

		let genderE;
		const genderCod = usuario.getRandomNumber(0, 2);
		usuario.datos.gender().eq(genderCod).click();
		if (genderCod === 1) {
			genderE = 'Female';
		} else if (genderCod === 0) {
			genderE = 'Male';
		} else {
			genderE = 'Other';
		}

		let hobbyE;
		const hobbyCod = usuario.getRandomNumber(3, 5);
		usuario.datos.hobby().eq(hobbyCod).click();
		if (hobbyCod === 3) {
			hobbyE = 'Sports';
		} else if (hobbyCod === 4) {
			hobbyE = 'Reading';
		} else {
			hobbyE = 'Music';
		}
		usuario.datos.uploadPicture().click();
		usuario.datos.uploadPicture().selectFile({
			contents: Cypress.Buffer.from('Imagen'),
			fileName: data.Photo,
		});
		var fotoE = data.Photo;
		let anio;
		let mes;
		let dia;
		let fechaSeleccionada;
		usuario.datos.dateOfBirth().click();
		var randomMonth = usuario.getRandomNumber(0, 11);
		usuario.datos.month().select(randomMonth);
		var randomYear = usuario.getRandomNumber(0, 100);
		usuario.datos.year().select(randomYear);
		var randomWeek = usuario.getRandomNumber(0, 5);
		usuario.datos.week().eq(randomWeek);

		if (randomMonth === 3 || randomMonth === 5 || randomMonth === 8 || randomMonth === 10) {
			var randomDay = usuario.getRandomNumber(0, 29);
			usuario.datos.day().eq(randomDay).click();
			anio = randomYear + 1900;
			mes = usuario.obtenerNombreMesEnIngles(randomMonth + 1);
			dia = randomDay + 1;
			fechaSeleccionada = `${dia} ${mes},${anio}`;
		}
		if (
			randomMonth === 0 ||
			randomMonth === 2 ||
			randomMonth === 4 ||
			randomMonth === 6 ||
			randomMonth === 7 ||
			randomMonth === 9 ||
			randomMonth === 11
		) {
			var randomDay = usuario.getRandomNumber(0, 30);
			usuario.datos.day().eq(randomDay).click();
			anio = randomYear + 1900;
			mes = usuario.obtenerNombreMesEnIngles(randomMonth + 1);
			dia = randomDay + 1;
			fechaSeleccionada = `${dia} ${mes},${anio}`;
		}
		if (randomMonth === 1) {
			var randomDay = usuario.getRandomNumber(0, 27);
			usuario.datos.day().eq(randomDay).click();
			anio = randomYear + 1900;
			mes = usuario.obtenerNombreMesEnIngles(randomMonth + 1);
			dia = randomDay + 1;
			fechaSeleccionada = `${dia} ${mes},${anio}`;
		}

		let StateRandom = usuario.getRandomNumber(1, 4);
		usuario.datos.selectState().click();
		usuario.datos.selectState2().eq(StateRandom).click({ force: true });
		let CityRandom;
		let State;
		let City;

		if (StateRandom === 1) {
			State = 'NCR';
			CityRandom = usuario.getRandomNumber(1, 3);
			usuario.datos.selectCity().click();
			usuario.datos.selectCity2().eq(CityRandom).click({ force: true });
			if (CityRandom === 1) {
				City = 'Delhi';
			}
			if (CityRandom === 2) {
				City = 'Gurgaon';
			}
			if (CityRandom === 3) {
				City = 'Noida';
			}
		}
		if (StateRandom === 2) {
			State = 'Uttar Pradesh';
			CityRandom = usuario.getRandomNumber(1, 3);
			usuario.datos.selectCity().click();
			usuario.datos.selectCity2().eq(CityRandom).click({ force: true });
			if (CityRandom === 1) {
				City = 'Agra';
			}
			if (CityRandom === 2) {
				City = 'Lucknow';
			}
			if (CityRandom === 3) {
				City = 'Merrut';
			}
		}
		if (StateRandom === 3) {
			State = 'Haryana';
			CityRandom = usuario.getRandomNumber(1, 2);
			usuario.datos.selectCity().click();
			usuario.datos.selectCity2().eq(CityRandom).click({ force: true });
			if (CityRandom === 1) {
				City = 'Karnal';
			}
			if (CityRandom === 2) {
				City = 'Panipat';
			}
		}
		if (StateRandom === 4) {
			State = 'Rajasthan';
			CityRandom = usuario.getRandomNumber(1, 2);
			usuario.datos.selectCity().click();
			usuario.datos.selectCity2().eq(CityRandom).click();
			if (CityRandom === 1) {
				City = 'Jaipur';
			}
			if (CityRandom === 2) {
				City = 'Jaiselmer';
			}
		}
		let StateCity = State + ' ' + City;
		cy.log(StateCity);

		usuario.datos.submit().click();
		usuario.datos.Email().should('have.css', 'border-color', 'rgb(220, 53, 69)');
	});

	it('23699 | TC4: Validate if field date picker has the current date as a default value.', () => {
		const fechaActual = new Date();
		const dia = fechaActual.getDate();
		const mes = fechaActual.toLocaleString('default', { month: 'short' });
		const mesCapitalized = mes.charAt(0).toUpperCase() + mes.slice(1);
		const año = fechaActual.getFullYear();
		const mesIngles = usuario.traducirMes(mesCapitalized);
		const diaFormateado = dia < 10 ? `0${dia}` : dia;
		const fechaFormateada = `${diaFormateado} ${mesIngles} ${año}`;
		usuario.datos.dateOfBirth().should('have.value', fechaFormateada);
	});
});
removeLogs();
