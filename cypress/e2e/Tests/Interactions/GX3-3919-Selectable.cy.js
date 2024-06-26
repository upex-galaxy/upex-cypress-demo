import { selectablePage } from '@pages/GX3-3919-Selectable.page.js';
describe('GX-3 3920 |ToolsQA | Interactions | Selectable', () => {
	beforeEach('PRC: El usuario debe estar situado en la pagina de Demo QA', () => {
		cy.visit('https://demoqa.com/selectable');
		cy.url().should('contain', 'selectable');
	});
	it('3920 | TC1: Validar que la pestaña "List" este abierta por defecto', () => {
		selectablePage.get.listTab().should('have.attr', 'aria-selected', 'true');
	});
	it('3920 | TC2: Validar que solo se pueda mostrar una pestaña a la vez', () => {
		selectablePage.get.listTab().should('have.attr', 'aria-selected', 'true');
		selectablePage.clickListButton();
		selectablePage.get.listTab().should('have.attr', 'aria-selected', 'true');
	});
	it('3920 | TC3: Validar que los elementos de "List" se puedan seleccionar', () => {
		selectablePage.clickListButton();
		selectablePage.get.buttonCras().should('have.class', 'active');
		selectablePage.get.buttonDapibus().should('have.class', 'active');
		selectablePage.get.buttonMorbi().should('have.class', 'active');
		selectablePage.get.buttonPorta().should('have.class', 'active');
	});
	it.only('3920 | TC4: Validar que los elementos de "List" se puedan deseleccionar', () => {
		selectablePage.clickListButton();
		selectablePage.clickListButton();
		selectablePage.get.buttonCras().should('not.have.class', 'active');
		selectablePage.get.buttonDapibus().should('not.have.class', 'active');
		selectablePage.get.buttonMorbi().should('not.have.class', 'active');
		selectablePage.get.buttonPorta().should('not.have.class', 'active');
	});
});
