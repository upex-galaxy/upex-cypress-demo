describe('GX28670 | ToolsQA | Forms | Practice Form', () => {
	beforeEach('PRC: El usuario debe estar ubicado en la pagina Demoqa', () => {
		cy.visit('automation-practice-form');
	});
	it('28670 | TC01: Validar enviar el  registro con los campos validos', () => {
		const randomFirstName = faker.name.firstName();
		const randomLastName = faker.name.lastName();
		const randomEmail = faker.internet.email();
		const randomMobile = faker.phone.number('##########');
		const letras = faker.random.alpha({ count: 1, casing: 'lower', bannedChars: ['f', 'j', 'k', 'ñ', 'q', 'w', 'x', 'z'] });
		const randomCurrentAddress = faker.address.direction();
		//todo: inptus nombre, apellido y correo
		recordStudent.inputsFillForm({
			firstName: randomFirstName,
			lastName: randomLastName,
			email: randomEmail,
		});
		//todo: Radio button de Genero
		recordStudent.get.genteWrapper().then(genero => {
			const randomIndex = Cypress._.random(0, genero.length - 1);
			recordStudent.get.genteWrapper().eq(randomIndex).click();
			Cypress.env('selecionadoGender', randomIndex);
		});
		recordStudent.inputsFillForm({ mobile: randomMobile }); //todo: telefono

		//todo:  asignaturas: coloca una letra para que despliege las optiones
		recordStudent.get.subjectsSelect().type(letras);
		recordStudent.get.subjectsOptions().then(aleatorio => {
			const randomIndex = Cypress._.random(0, aleatorio - 1);
			recordStudent.get
				.subjectsOptions()
				.eq(randomIndex)
				.click()
				.then(selectSubjects => {
					Cypress.env('selecionadoSubjects', selectSubjects.text());
				});
		});
		//todo: radio button de hobbies
		recordStudent.get.hobbiesWrapper().then(hobbies => {
			const randomIndex = Cypress._.random(0, hobbies.length - 1);
			recordStudent.get.hobbiesWrapper().eq(randomIndex).click();
			Cypress.env('selecionandoHobbis', randomIndex);
		});
		recordStudent.inputsFillForm({ address: randomCurrentAddress }); //todo: direccion

		//todo: estado: realiza click despliega el droopdwon selecionar una opcion
		recordStudent.get.stateInput().click();
		recordStudent.get.OptionDropdown().then(stateOptions => {
			const randomIndex = Cypress._.random(0, stateOptions.length - 1);
			recordStudent.get
				.OptionDropdown()
				.eq(randomIndex)
				.click({ force: true })
				.then(stateSelected => {
					Cypress.env('selecionandoState', stateSelected.text());
				});
		});
		//todo: ciudad: realiza click despliega el droopdwon selecionar una opcion
		recordStudent.get.cityInput().click();
		recordStudent.get.cityOptionDropdown().then(stateOptions2 => {
			const randomIndex = Cypress._.random(0, stateOptions2.length - 1);
			recordStudent.get
				.cityOptionDropdown()
				.eq(randomIndex)
				.click({ force: true })
				.then(selectedCity => {
					Cypress.env('selecionandoCity', selectedCity.text());
					recordStudent.get.selectedCity().should('contain', selectedCity.text());
				});
		});
		recordStudent.get.submitButton().click();

		//todo: validaciones

		recordStudent.get.firstNameInput().should('have.value', randomFirstName).and('have.css', 'border-color', 'rgb(40, 167, 69)');
		recordStudent.get.lastNameInput().should('have.value', randomLastName).and('have.css', 'border-color', 'rgb(40, 167, 69)');
		recordStudent.get.email().should('have.value', randomEmail).and('have.css', 'border-color', 'rgb(40, 167, 69)');
		recordStudent.get.mobile().should('have.value', randomMobile).and('have.css', 'border-color', 'rgb(40, 167, 69)');
		cy.get('*').then(() => {
			recordStudent.get.genderRadio().eq(Cypress.env('selecionadoGender')).should('be.checked');
			recordStudent.get.hobbiescheckbox().eq(Cypress.env('selecionandoHobbis')).should('be.checked');
		});
		recordStudent.get.address().should('have.value', randomCurrentAddress).and('have.css', 'border-color', 'rgb(40, 167, 69)');
		recordStudent.get.stateSelected().then(valueState => {
			expect(valueState.text()).to.equal(Cypress.env('selecionandoState'));
		});
		recordStudent.get.selectedCity().then(valueCity => {
			expect(valueCity.text()).to.equal(Cypress.env('selecionandoCity'));
		});
		recordStudent.get.selectSubjects().then(valueSubjects => {
			expect(valueSubjects.text()).to.equal(Cypress.env('selecionadoSubjects'));
		});
	});
	it('28670 | TC02: Validar enviar el registro con los campos invalidos', () => {
		recordStudent.get.submitButton().click();

		//todo: validaciones
		recordStudent.get.firstNameInput().should('have.css', 'border-color', 'rgb(220, 53, 69)');
		recordStudent.get.lastNameInput().should('have.css', 'border-color', 'rgb(220, 53, 69)');
		recordStudent.get.email().should('have.css', 'border-color', 'rgb(40, 167, 69)');
		recordStudent.get.genteWrapper().should('have.css', 'border-color', 'rgb(33, 37, 41)');
		recordStudent.get.mobile().should('have.css', 'border-color', 'rgb(220, 53, 69)');
		recordStudent.get.birthInput().should('have.css', 'border-color', 'rgb(40, 167, 69)');
		recordStudent.get.hobbiesWrapper().should('have.css', 'border-color', 'rgb(33, 37, 41)');
		recordStudent.get.address().should('have.css', 'border-color', 'rgb(40, 167, 69)');
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
import { recordStudent } from '@pages/Forms/GX-28670-FormsPracticeForm';
import { faker } from '@faker-js/faker';
