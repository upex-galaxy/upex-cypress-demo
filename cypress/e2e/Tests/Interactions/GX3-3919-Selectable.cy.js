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
		selectablePage.get.gridButton().should('have.attr', 'aria-selected', 'false');
	});
	it('3920 | TC3: Validar que los elementos de "List" se puedan seleccionar', () => {
		selectablePage.clickListButton();
		selectablePage.get.buttonCras().should('have.class', 'active');
		selectablePage.get.buttonDapibus().should('have.class', 'active');
		selectablePage.get.buttonMorbi().should('have.class', 'active');
		selectablePage.get.buttonPorta().should('have.class', 'active');
	});
	it('3920 | TC4: Validar que los elementos de "List" se puedan deseleccionar', () => {
		selectablePage.clickListButton();
		selectablePage.clickListButton();
		selectablePage.get.buttonCras().should('not.have.class', 'active');
		selectablePage.get.buttonDapibus().should('not.have.class', 'active');
		selectablePage.get.buttonMorbi().should('not.have.class', 'active');
		selectablePage.get.buttonPorta().should('not.have.class', 'active');
	});
	it('3920 | TC5: Validar que los elementos de "Grid" se puedan seleccionar', () => {
		selectablePage.clickGridButton();
		selectablePage.get.oneButton().should('have.class', 'active');
		selectablePage.get.twoButton().should('have.class', 'active');
		selectablePage.get.threeButton().should('have.class', 'active');
		selectablePage.get.fourButton().should('have.class', 'active');
		selectablePage.get.fiveButton().should('have.class', 'active');
		selectablePage.get.sixButton().should('have.class', 'active');
		selectablePage.get.sevenButton().should('have.class', 'active');
		selectablePage.get.eightButton().should('have.class', 'active');
		selectablePage.get.nineButton().should('have.class', 'active');
	});
	it('3920 | TC6: Validar que los elementos de "Grid" se puedan deseleccionar', () => {
		selectablePage.clickGridButton();
		selectablePage.clickGridButton();
		selectablePage.get.oneButton().should('not.have.class', 'active');
		selectablePage.get.twoButton().should('not.have.class', 'active');
		selectablePage.get.threeButton().should('not.have.class', 'active');
		selectablePage.get.fourButton().should('not.have.class', 'active');
		selectablePage.get.fiveButton().should('not.have.class', 'active');
		selectablePage.get.sixButton().should('not.have.class', 'active');
		selectablePage.get.sevenButton().should('not.have.class', 'active');
		selectablePage.get.eightButton().should('not.have.class', 'active');
		selectablePage.get.nineButton().should('not.have.class', 'active');
	});
});
