import { dynamicPropertiesPage } from '@pages/GX3-4228-dynamic-properties.Page';
describe('GX3 4228 |  ToolsQA | Elements | Dynamic Properties', () => {
	beforeEach('PRC: El usuario deberia visitar la pagina', () => {
		cy.visit('https://demoqa.com/dynamic-properties');
		cy.url().should('contain', 'dynamic');
	});
	it('4229 |TC1: Validar el mensaje que se muestra en la pagina', () => {
		dynamicPropertiesPage.get.textElement().should('contain.html', 'This text has random Id');
	});
	it('4229 |TC2: Validar que se habilite el boton en 5 seg', () => {
		dynamicPropertiesPage.get.enableButton().should('be.enabled');
	});
	it('4229 |TC3: Validar el cambio de color del boton en 5 seg', () => {
		dynamicPropertiesPage.get.colorButton().should('have.class', 'text-danger');
	});
	it('4229 |TC4: Validar que se muestra el boton en 5 seg', () => {
		dynamicPropertiesPage.get.visibleButton().should('be.visible');
	});
});
