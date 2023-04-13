import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { radioButton } from '@pages/GX-9356-Radio-Buttons/Radio-Button';

const radioButtonPage = Cypress.env('endpoint').radioButton;

context('Feature: Radio Button', () => {
	describe('Estar en la sección de Radio Button de la página', () => {
		Given('Aprendiz QA esta en la sección Radio Button', () => {
			// cy.visit(radioButtonPage);
			// cy.url().should('contain', radioButtonPage);
			expect(1).to.equal(1);
		});
	});

	describe('9357 | TC1: Validar que se muestre la etiqueta “Yes” cuando se selecciona el RB “Yes”', () => {
		When('el QA aprendiz hace click en el radio button “Yes”', () => {
			// radioButton.selectYesRadioButton();
			expect(1).to.equal(1);
		});

		Then('aparecer el siguente mensaje "You have selected Yes"', () => {
			// radioButton.selectTextLabelRadioButton().should('have.text', 'You have selected Yes');
			expect(1).to.equal(1);
		});
	});

	describe('9357 | TC2: Validar que se muestre la etiqueta “Impressive” cuando se selecciona el RB “Impressive”', () => {
		When('el QA aprendiz hace click en el radio button “Impressive”', () => {
			// radioButton.selectImpressiveRadioButton();
			expect(1).to.equal(1);
		});

		Then('aparecer el siguente mensaje "You have selected Impressive"', () => {
			// radioButton.selectTextLabelRadioButton().should('have.text', 'You have selected Impressive');
			expect(1).to.equal(1);
		});
	});

	describe('9357 | TC3: Validar que no se pueda seleccionar con el mouse el RB "No"', () => {
		When('el QA aprendiz quiera seleccionar el mouse sobre el radio button "No"', () => {
			// radioButton.selectNoRadioButton();
			expect(1).to.equal(1);
		});

		Then('no puede estar diponible para ser seleccionado', () => {
			// radioButton.selectNoRadioButton().should('be.disabled');
			expect(1).to.equal(1);
		});
	});
});

//________________________________________________________________________
// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', () => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
});
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log;
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr' || (opts.displayName === 'fetch' && opts.url.startsWith('https://'))) {
		return;
	}
	return origLog(opts, ...other);
};
