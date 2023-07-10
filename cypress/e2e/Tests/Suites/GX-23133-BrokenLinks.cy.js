import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('US GX-23133 | ToolsQA | Elements | Broken Links Images', () => {
	beforeEach('PRC: Usuario debe ubicarse en la Broken Links Page', () => {
		cy.visit('https://demoqa.com/broken');
	});

	it.only('23134 | TC01: Validar visualizar correctamente imagen de ToolsQA al tomar la Valid Image', () => {
		cy.get('div>img[src="/images/Toolsqa.jpg"]').should('be.visible').and('have.prop', 'naturalWidth').and('be.greaterThan', 0);
	});

	it('23134 | TC02: Validar visualizar ícono de imagen roto al tomar la Broken Image', () => {
		cy.get('div>img[src="/images/Toolsqa_1.jpg"]').should('be.visible').and('have.prop', 'naturalWidth').and('be.eq', 0);
	});

	it('23134 | TC03: Validar poder redirigirse a la main page al ingresar el Valid Link', () => {
		cy.get('a[href="http://demoqa.com"]').click();
		cy.url().should('contain', 'demoqa');
	});

	it('23134 | TC04: Validar que el link devuelva un “500 status code” al ingresar al Broken Link', () => {
		cy.get('a[href="http://the-internet.herokuapp.com/status_codes/500"]').click();
		cy.get('#content p').should('contain', '500 status code');
	});
});
