describe('ToolsQA | Forms | Practice Form', () => {

	const url      = 'https://demoqa.com/automation-practice-form';
	const title    = 'ToolsQA';
	const contain  = 'form';
	const protocol = 'https';
	const hostname = 'demoqa.com';
	const id       = '1456';
	const path     = 'DOM/toolsqa/Form/Form.page';
	let the;

	before('Inicializar la data', () =>	{

		cy.fixture(path).then((data) => {
			the = data;
		});
	});

    beforeEach('Precondición: El usuario debe estar situado en la página web https://demoqa.com/automation-practice-form', () => {

		cy.getUrl(url, contain, title, protocol, hostname);
		cy.viewport(600, 800);		
	});

    it(`US-GX-${id} | TC1: Validar poder registrarse correctamente cuando todos los campos son válidos`, () => {
        cy.fillForm(the.firstName.valid, 
					the.lastName.valid, 
					the.email.valid, 
					the.mobile.valid, 
					the.dateOfBirth.validMonth, 
					the.dateOfBirth.validDay, 
					the.subjects.valid1, 
					the.currentAddress.message, 
					the.state.select, 
					the.city.select);
    });
});

// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', (err, runnable) => {
	// Returning false here prevents Cypress from.
	// Failing the test.
	return false;
});

// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log;

Cypress.log = function (opts, ...other) {

	if (opts.displayName === 'xhr' || (opts.displayName === 'fetch' && opts.url.startsWith('https://'))) {
		return
	};

	return origLog(opts, ...other);
};