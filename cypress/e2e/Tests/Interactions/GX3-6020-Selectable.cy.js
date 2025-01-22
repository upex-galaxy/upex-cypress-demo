import { selectablePage } from '../../../support/pages/GX3-6020-Selectable.page';

describe('GX3-5376 | TS: ToolsQA | Interactions | Selectable', () => {
	beforeEach('PRC El usuario debe visitar la pagina de Demo QA', () => {
		cy.visit('https://demoqa.com/selectable');
		cy.url().should('contain', 'selectable');
	});

	it('Validar seleccionar las pestañas list', () => {
		const randomList = Cypress._.random(0, 3);

		selectablePage.element.list().should('be.visible');
		selectablePage.clickListItems(randomList);
		selectablePage.element.listItems(randomList).should('have.class', 'active');
	});

	it('Validar seleccionar la pestaña gird', () => {
		const randomgird = Cypress._.random(0, 8);

		selectablePage.element.buttonsgrid().should('not.have.class', 'active');
		selectablePage.clickbuttonsgrid();
		selectablePage.element.buttonsgrid().should('have.class', 'active');
		selectablePage.clickgridItems(randomgird);
		selectablePage.element.gridItems().eq(randomgird).should('have.class', 'active');
	});

	it('Interactuar con array de listItems', () => {
		selectablePage.element.listItems().each(lista => {
			cy.wrap(lista).click();
			cy.wrap(lista).should('have.class', 'active');
		});
	});

	it('Interactuar con array de gridItems', () => {
		selectablePage.clickbuttonsgrid();
		selectablePage.element.buttonsgrid().should('have.class', 'active');
		selectablePage.element.gridItems().each(lista => {
			cy.wrap(lista).click();
			cy.wrap(lista).should('have.class', 'active');
		});
	});
});

// it('TC01 Validar que la pestaña (list) este abierta por defecto y poder interactuar con la List', () => {
// 	cy.element('#demo-tab-list').should('be.visible');
// 	cy.element('.mt-2 ').eq(0).should('have.text', 'Cras justo odio');
// 	cy.element('.mt-2 ').eq(1).should('have.text', 'Dapibus ac facilisis in');
// 	cy.element('.mt-2 ').eq(2).should('have.text', 'Morbi leo risus');
// 	cy.element('.mt-2 ').eq(3).should('have.text', 'Porta ac consectetur ac');
// 	cy.element('.mt-2 ').eq(0).click();
// 	cy.element('.mt-2 ').should('have.class', 'active'); //para validar que al hacer click se coloque en azul
// 	cy.element('.mt-2 ').eq(0).click();
// 	cy.element('.mt-2 ').should('not.have.class', 'active');
// });

// it('TC02 Validar poder seleccionar la pestaña Grid y poder interactuar con la List', () => {
// 	cy.element('#demo-tab-grid').should('be.visible');
// 	cy.element('#demo-tab-grid').click(); //En esto me ayudo un poco gpt SORRY
// 	cy.element('#row1 li').eq(0).should('contain.text', 'One');
// 	cy.element('#row1 li').eq(1).should('contain.text', 'Two');
// 	cy.element('#row1 li').eq(2).should('contain.text', 'Three');
// 	cy.element('#row2 li').eq(0).should('contain.text', 'Four');
// 	cy.element('#row2 li').eq(1).should('contain.text', 'Five'); //Con estos valido la lista grid
// 	cy.element('#row2 li').eq(2).should('contain.text', 'Six');
// 	cy.element('#row3 li').eq(0).should('contain.text', 'Seven');
// 	cy.element('#row3 li').eq(1).should('contain.text', 'Eight');
// 	cy.element('#row3 li').eq(2).should('contain.text', 'Nine');

// 	cy.element('#row1 li').eq(0).click();
// 	cy.element('#row1 li').should('have.class', 'active');
// 	cy.element('#row1 li').eq(0).click();
// });
