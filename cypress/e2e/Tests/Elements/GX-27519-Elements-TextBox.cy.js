import data from '../../../fixtures/data/GX-27519-TextBox.json';
describe('TS#27520 : ✅ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('Precondition: user should be stay in register page', () => {
		cy.visit('https://demoqa.com/text-box'); // Esto es un Comando de Acción directa
		cy.url().should('contain', 'text-box');
	});
	it('US # | TC#1: 27520 | Validate submit fill form with empty data', () => {
		cy.fixture('data/GX-27519-TextBox').then(the => {
			//complete Form
			cy.get(the.fullName.input).should('be.empty');
			cy.get(the.email.input).should('be.empty');
			cy.get(the.currentAddress.input).should('be.empty');
			cy.get(the.permanentAddress.input).should('be.empty');
			//click Submit
			cy.get(the.buttonSubmit).click();
			//assert
			cy.get(the.fullName.output).should('not.exist');
			cy.get(the.email.output).should('not.exist');
			cy.get(the.currentAddress.output).should('not.exist');
			cy.get(the.permanentAddress.output).should('not.exist');
		});
	});
	it('US # | TC#2: 27520 | Validate submit fill form with valid data', () => {
		cy.fixture('data/GX-27519-TextBox').then(the => {
			//complete Form
			cy.get(the.fullName.input).type(the.fullName.data.valid);
			cy.get(the.fullName.input).should('have.value', the.fullName.data.valid);
			cy.get(the.email.input).type(the.email.data.valid);
			cy.get(the.email.input).should('have.value', the.email.data.valid);
			cy.get(the.currentAddress.input).type(the.currentAddress.data.valid);
			cy.get(the.currentAddress.input).should('have.value', the.currentAddress.data.valid);
			cy.get(the.permanentAddress.input).type(the.permanentAddress.data.valid);
			cy.get(the.permanentAddress.input).should('have.value', the.permanentAddress.data.valid);
			//click Submit
			cy.get(the.buttonSubmit).click();
			//assert
			cy.get(the.fullName.output).should('contain', the.fullName.data.valid);
			cy.get(the.email.output).should('contain', the.email.data.valid);
			cy.get(the.currentAddress.output).should('contain', the.currentAddress.data.valid);
			cy.get(the.permanentAddress.output).should('contain', the.permanentAddress.data.valid);
		});
	});
	it('US # | TC#3: 27520 | Validate not submit fill form when email not contain “@”', () => {
		cy.fixture('data/GX-27519-TextBox').then(the => {
			//complete Form
			cy.get(the.fullName.input).type(the.fullName.data.validNumber);
			cy.get(the.fullName.input).should('have.value', the.fullName.data.validNumber);
			cy.get(the.email.input).type(the.email.data.invalid.not_At);
			cy.get(the.email.input).should('have.value', the.email.data.invalid.not_At);
			cy.get(the.currentAddress.input).type(the.currentAddress.data.validNumber);
			cy.get(the.currentAddress.input).should('have.value', the.currentAddress.data.validNumber);
			cy.get(the.permanentAddress.input).type(the.permanentAddress.data.validNumber);
			cy.get(the.permanentAddress.input).should('have.value', the.permanentAddress.data.validNumber);
			//click Submit
			cy.get(the.buttonSubmit).click();
			//assert
			cy.get(the.email.input).should('have.css', 'border', '1px solid rgb(255, 0, 0)');
			cy.get(the.fullName.output).should('not.exist');
			cy.get(the.email.output).should('not.exist');
			cy.get(the.currentAddress.output).should('not.exist');
			cy.get(the.permanentAddress.output).should('not.exist');
		});
	});
	// it('US # | TC#4: 27520 | ', () => {
	// 	cy.fixture('data/GX-27519-TextBox').then(the => {
	// 		//complete Form
	// 		cy.get(the.fullName.input).type(the.fullName.data.valid);
	// 		cy.get(the.fullName.input).should('be.empty');
	// 		cy.get(the.email.input).type(the.email.data.valid);
	// 		cy.get(the.email.input).should('be.empty');
	// 		cy.get(the.currentAddress.input).type(the.currentAddress.data.valid);
	// 		cy.get(the.currentAddress.input).should('be.empty');
	// 		cy.get(the.permanentAddress.input).type(the.permanentAddress.data.valid);
	// 		cy.get(the.permanentAddress.input).should('be.empty');
	// 		//click Submit
	// 		cy.get(the.buttonSubmit).click();
	// 		//assert
	// 		cy.get(the.fullName.output).should('contain', the.fullName.data.valid);
	// 		cy.get(the.email.output).should('contain', the.email.data.valid);
	// 		cy.get(the.currentAddress.output).should('contain', the.currentAddress.data.valid);
	// 		cy.get(the.permanentAddress.output).should('contain', the.permanentAddress.data.valid);
	// 	});
	// });
	// it('US # | TC#5: 27520 | ', () => {
	// 	cy.fixture('data/GX-27519-TextBox').then(the => {
	// 		//complete Form
	// 		cy.get(the.fullName.input).type(the.fullName.data.valid);
	// 		cy.get(the.fullName.input).should('be.empty');
	// 		cy.get(the.email.input).type(the.email.data.valid);
	// 		cy.get(the.email.input).should('be.empty');
	// 		cy.get(the.currentAddress.input).type(the.currentAddress.data.valid);
	// 		cy.get(the.currentAddress.input).should('be.empty');
	// 		cy.get(the.permanentAddress.input).type(the.permanentAddress.data.valid);
	// 		cy.get(the.permanentAddress.input).should('be.empty');
	// 		//click Submit
	// 		cy.get(the.buttonSubmit).click();
	// 		//assert
	// 		cy.get(the.fullName.output).should('contain', the.fullName.data.valid);
	// 		cy.get(the.email.output).should('contain', the.email.data.valid);
	// 		cy.get(the.currentAddress.output).should('contain', the.currentAddress.data.valid);
	// 		cy.get(the.permanentAddress.output).should('contain', the.permanentAddress.data.valid);
	// 	});
	// });
	// it('US # | TC#6: 27520 | ', () => {
	// 	cy.fixture('data/GX-27519-TextBox').then(the => {
	// 		//complete Form
	// 		cy.get(the.fullName.input).type(the.fullName.data.valid);
	// 		cy.get(the.fullName.input).should('be.empty');
	// 		cy.get(the.email.input).type(the.email.data.valid);
	// 		cy.get(the.email.input).should('be.empty');
	// 		cy.get(the.currentAddress.input).type(the.currentAddress.data.valid);
	// 		cy.get(the.currentAddress.input).should('be.empty');
	// 		cy.get(the.permanentAddress.input).type(the.permanentAddress.data.valid);
	// 		cy.get(the.permanentAddress.input).should('be.empty');
	// 		//click Submit
	// 		cy.get(the.buttonSubmit).click();
	// 		//assert
	// 		cy.get(the.fullName.output).should('contain', the.fullName.data.valid);
	// 		cy.get(the.email.output).should('contain', the.email.data.valid);
	// 		cy.get(the.currentAddress.output).should('contain', the.currentAddress.data.valid);
	// 		cy.get(the.permanentAddress.output).should('contain', the.permanentAddress.data.valid);
	// 	});
	// });
	// it('US # | TC#7: 27520 | ', () => {
	// 	cy.fixture('data/GX-27519-TextBox').then(the => {
	// 		//complete Form
	// 		cy.get(the.fullName.input).type(the.fullName.data.valid);
	// 		cy.get(the.fullName.input).should('be.empty');
	// 		cy.get(the.email.input).type(the.email.data.valid);
	// 		cy.get(the.email.input).should('be.empty');
	// 		cy.get(the.currentAddress.input).type(the.currentAddress.data.valid);
	// 		cy.get(the.currentAddress.input).should('be.empty');
	// 		cy.get(the.permanentAddress.input).type(the.permanentAddress.data.valid);
	// 		cy.get(the.permanentAddress.input).should('be.empty');
	// 		//click Submit
	// 		cy.get(the.buttonSubmit).click();
	// 		//assert
	// 		cy.get(the.fullName.output).should('contain', the.fullName.data.valid);
	// 		cy.get(the.email.output).should('contain', the.email.data.valid);
	// 		cy.get(the.currentAddress.output).should('contain', the.currentAddress.data.valid);
	// 		cy.get(the.permanentAddress.output).should('contain', the.permanentAddress.data.valid);
	// 	});
	// });
});
//Se importa la funcion
import { removeLogs } from '@helper/RemoveLogs';
//Se ejecuta la funcion para evitar los errores (puedes hacerlo al final de tu codigo)
removeLogs();
