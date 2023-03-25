import { rBTN } from '@pages/elementRadioButton.Page';
const radioButtonPage = Cypress.env('endpoint').radioButton;

describe('ToolsQA | Elements | Radio Buttons', () => {
	beforeEach('Precondicion: Usuario debe estar situado en el RadioButton page', () => {
		cy.visit(radioButtonPage);
		cy.url().should('contain', radioButtonPage);
	});

	it('11015 | TC1: Validar visualizar que el mensaje que se muestra corresponda al nombre del RadioButtton Yes cuando se seleccione', () => {
		rBTN.checkYes();
		rBTN.viewMsgTxt().should('have.text', 'You have selected Yes');
	});

	it('11015 | TC2: Validar visualizar que el mensaje que se muestra corresponda al nombre del RadioButtton Impressive cuando se seleccione', () => {
		rBTN.checkImp();
		rBTN.viewMsgTxt().should('have.text', 'You have selected Impressive');
	});

	it('11015 | TC3: Validar que no se permita seleccionar cuando se pase el cursor por encima del RadioButton No', () => {
		rBTN.checkNo();
		rBTN.checkNo().should('be.disabled');
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
