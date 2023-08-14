import data from '../../../fixtures/data/GX-27519-TextBox.json';
describe('TS#27520 : ✅ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('Precondition: user should be stay in register page', () => {
		cy.visit('https://demoqa.com/text-box'); // Esto es un Comando de Acción directa
		cy.url().should('contain', 'text-box');
	});
	it('US # | TC#1: 27520 | Validate submit form with empty data', () => {
		//complete Form
		cy.get(data.fullName.input).should('be.empty');
		cy.get(data.email.input).should('be.empty');
		cy.get(data.currentAddress.input).should('be.empty');
		cy.get(data.permanentAddress.input).should('be.empty');
		//click Submit
		cy.get(data.buttonSubmit).click();
		//assert
		cy.get(data.fullName.output).should('not.exist');
		cy.get(data.email.output).should('not.exist');
		cy.get(data.currentAddress.output).should('not.exist');
		cy.get(data.permanentAddress.output).should('not.exist');
	});
	it('US # | TC#2: 27520 | Validatgit e submit form with valid data', () => {
		//complete Form
		cy.get(data.fullName.input).type(data.fullName.data.valid);
		cy.get(data.fullName.input).should('have.value', data.fullName.data.valid);
		cy.get(data.email.input).type(data.email.data.valid);
		cy.get(data.email.input).should('have.value', data.email.data.valid);
		cy.get(data.currentAddress.input).type(data.currentAddress.data.valid);
		cy.get(data.currentAddress.input).should('have.value', data.currentAddress.data.valid);
		cy.get(data.permanentAddress.input).type(data.permanentAddress.data.valid);
		cy.get(data.permanentAddress.input).should('have.value', data.permanentAddress.data.valid);
		//click Submit
		cy.get(data.buttonSubmit).click();
		//assert
		cy.get(data.fullName.output).should('contain', data.fullName.data.valid);
		cy.get(data.email.output).should('contain', data.email.data.valid);
		cy.get(data.currentAddress.output).should('contain', data.currentAddress.data.valid);
		cy.get(data.permanentAddress.output).should('contain', data.permanentAddress.data.valid);
	});
	it('US # | TC#3: 27520 | Validate not submit form when email not contain “@”', () => {
		//complete Form
		cy.get(data.fullName.input).type(data.fullName.data.validNumber);
		cy.get(data.fullName.input).should('have.value', data.fullName.data.validNumber);
		cy.get(data.email.input).type(data.email.data.invalid.not_At);
		cy.get(data.email.input).should('have.value', data.email.data.invalid.not_At);
		cy.get(data.currentAddress.input).type(data.currentAddress.data.validNumber);
		cy.get(data.currentAddress.input).should('have.value', data.currentAddress.data.validNumber);
		cy.get(data.permanentAddress.input).type(data.permanentAddress.data.validNumber);
		cy.get(data.permanentAddress.input).should('have.value', data.permanentAddress.data.validNumber);
		//click Submit
		cy.get(data.buttonSubmit).click();
		//assert
		cy.get(data.email.input).should('have.css', 'border', '1px solid rgb(255, 0, 0)');
		cy.get(data.fullName.output).should('not.exist');
		cy.get(data.email.output).should('not.exist');
		cy.get(data.currentAddress.output).should('not.exist');
		cy.get(data.permanentAddress.output).should('not.exist');
	});
	it('US # | TC#4: 27520 | Validate not submit form when email not contain (minimum) 1 alphanumeric character before “@”', () => {
		//complete Form
		cy.get(data.fullName.input).type(data.fullName.data.stringSpace);
		cy.get(data.fullName.input).should('have.value', data.fullName.data.stringSpace);
		cy.get(data.email.input).type(data.email.data.invalid.not_At_Char);
		cy.get(data.email.input).should('have.value', data.email.data.invalid.not_At_Char);
		cy.get(data.currentAddress.input).type(data.currentAddress.data.stringSpace);
		cy.get(data.currentAddress.input).should('have.value', data.currentAddress.data.stringSpace);
		cy.get(data.permanentAddress.input).type(data.permanentAddress.data.stringSpace);
		cy.get(data.permanentAddress.input).should('have.value', data.permanentAddress.data.stringSpace);
		//click Submit
		cy.get(data.buttonSubmit).click();
		//assert
		cy.get(data.email.input).should('have.css', 'border', '1px solid rgb(255, 0, 0)');
		cy.get(data.fullName.output).should('not.exist');
		cy.get(data.email.output).should('not.exist');
		cy.get(data.currentAddress.output).should('not.exist');
		cy.get(data.permanentAddress.output).should('not.exist');
	});
	it('US # | TC#5: 27520 | Validate not submit form when email not contain (minimum) 1 alphanumeric character after “@”', () => {
		//complete Form
		cy.get(data.fullName.input).should('be.empty');
		cy.get(data.email.input).type(data.email.data.invalid.not_Char_At);
		cy.get(data.email.input).should('have.value', data.email.data.invalid.not_Char_At);
		cy.get(data.currentAddress.input).should('be.empty');
		cy.get(data.permanentAddress.input).should('be.empty');
		//click Submit
		cy.get(data.buttonSubmit).click();
		//assert
		cy.get(data.email.input).should('have.css', 'border', '1px solid rgb(255, 0, 0)');
		cy.get(data.fullName.output).should('not.exist');
		cy.get(data.email.output).should('not.exist');
		cy.get(data.currentAddress.output).should('not.exist');
		cy.get(data.permanentAddress.output).should('not.exist');
	});
	it('US # | TC#6: 27520 | Validate not submit form when email not contain “.” after: 1 alphanumeric character after “@”', () => {
		//complete Form
		cy.get(data.fullName.input).should('be.empty');
		cy.get(data.email.input).type(data.email.data.invalid.not_At_Char_Point);
		cy.get(data.email.input).should('have.value', data.email.data.invalid.not_At_Char_Point);
		cy.get(data.currentAddress.input).should('be.empty');
		cy.get(data.permanentAddress.input).should('be.empty');
		//click Submit
		cy.get(data.buttonSubmit).click();
		//assert
		cy.get(data.email.input).should('have.css', 'border', '1px solid rgb(255, 0, 0)');
		cy.get(data.fullName.output).should('not.exist');
		cy.get(data.email.output).should('not.exist');
		cy.get(data.currentAddress.output).should('not.exist');
		cy.get(data.permanentAddress.output).should('not.exist');
	});
	it('US # | TC#7: 27520 | Validate not submit form when email not contain (minimum) 2 alphanumeric characters after “.”', () => {
		//complete Form
		cy.get(data.fullName.input).should('be.empty');
		cy.get(data.email.input).type(data.email.data.invalid.not_Point_Char_Char);
		cy.get(data.email.input).should('have.value', data.email.data.invalid.not_Point_Char_Char);
		cy.get(data.currentAddress.input).should('be.empty');
		cy.get(data.permanentAddress.input).should('be.empty');
		//click Submit
		cy.get(data.buttonSubmit).click();
		//assert
		cy.get(data.email.input).should('have.css', 'border', '1px solid rgb(255, 0, 0)');
		cy.get(data.fullName.output).should('not.exist');
		cy.get(data.email.output).should('not.exist');
		cy.get(data.currentAddress.output).should('not.exist');
		cy.get(data.permanentAddress.output).should('not.exist');
	});
});
//Se importa la funcion
import { removeLogs } from '@helper/RemoveLogs';
//Se ejecuta la funcion para evitar los errores (puedes hacerlo al final de tu codigo)
removeLogs();
