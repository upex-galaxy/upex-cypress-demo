describe('ToolsQA | Book Store Applications | Login: Fill form and Login', () => {
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

	beforeEach('Precondiciones: Usuario debe estar situado en el login page', () => {
		cy.visit('https://demoqa.com/login');
	});
	it('10681 | TC1: validate no login by username incorrect', () => {
		cy.get('[type="text"]').type('leonardoamh');
		cy.get('[type="password"]').type('pass1234');
		cy.get('#login').click();
		// cy.contains('Invalid username or password!');
	});
	it('10681 | TC2: validate no login by password incorrect', () => {
		cy.get('[type="text"]').type('leonardoamh011');
		cy.get('[type="password"]').type('Pass121212');
		cy.get('#login').click();
		// cy.contains('Invalid username or password!');
	});
	it('10681 | TC3: validate no login by username empty', () => {
		cy.get('[type="password"]').type('holamundo');
		cy.get('#login').click();
		cy.get('[class="mr-sm-2 is-invalid form-control"]').should('be.visible');
	});
	it('10681 | TC4: validate no login by password empty', () => {
		cy.get('[type="text"]').type('leonardoamh011');
		cy.get('#login').click();
		cy.get('[class="mr-sm-2 is-invalid form-control"]').should('be.visible');
	});
	it('10681 | TC5: validate login with correct username or password', () => {
		cy.get('[type="text"]').type('leonardoamh011');
		cy.get('[type="password"]').type('L#o.123456');
		cy.get('#login').click();
		// cy.contains('leonardoamh011');
	});
});
