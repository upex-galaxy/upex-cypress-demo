describe('Pruebas con sesión en Cypress', () => {
	before(() => {
		cy.session('login', () => {
			cy.visit('https://example.com/login');
			cy.get('input[name="username"]').type('usuario');
			cy.get('input[name="password"]').type('contraseña');
			cy.get('button[type="submit"]').click();
		});
	});

	beforeEach(() => {
		cy.session('login');
	});

	it('debería acceder a la página de inicio', () => {
		cy.visit('https://example.com/inicio');
		cy.contains('Bienvenido, usuario').should('be.visible');
	});

	it('debería acceder a la página de perfil', () => {
		cy.visit('https://example.com/perfil');
		cy.contains('Perfil de usuario').should('be.visible');
	});
});

// describe('GX3 - 5963 - tools - qa - elements - buttons', () => {
// 	beforeEach('El usuario debe estar situdo en la pagina de Demo QA', () => {
// 		cy.visit('https://demoqa.com/buttons');
// 		cy.url().should('include', 'buttons');
// 		cy.get('h1.text-center').should('have.text', 'Buttons');
// 	});

// 	it('Validar hacer doble click en Buttons Bouble Click Me', () => {
// 		cy.get('#doubleClickBtn').dblclick();
// 		cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
// 	});

// 	it('Validar hacer click derecho en Buttons Right Click Me', () => {
// 		cy.get('#rightClickBtn').rightclick();
// 		cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
// 	});

// 	it('Validar hacer click en buttons Click Me y visualizacion de mensaje', () => {
// 		cy.get('.btn.btn-primary').eq(2).click();
// 		cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click');
// 	});
// });
