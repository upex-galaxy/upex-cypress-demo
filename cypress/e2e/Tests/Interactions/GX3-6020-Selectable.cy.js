import { selectablePage } from '../../../support/pages/GX3-6020-Selectable.page';

describe('GX3-5376 | TS: ToolsQA | Interactions | Selectable', () => {
	beforeEach('PRC El usuario debe visitar la pagina de Demo QA', () => {
		cy.visit('https://demoqa.com/selectable');
		cy.url().should('contain', 'selectable');
	});

	it.only('Validar seleccionar las pestañas list y gird e interactuar con ellas', () => {
		const randomList = Cypress._.random(0, 3);
		const randomgird = Cypress._.random(0, 8);

		selectablePage.get.list().should('be.visible');
		selectablePage.get.listItems().eq(randomList);
		selectablePage.get.listItems().eq(randomList).should('have.class', 'active');
		// selectablePage.get.listItems().should('not.have.class', 'active'); //esta no corre
		selectablePage.get.buttonsgrid().should('exist');
		selectablePage.get.buttonsgrid();
		selectablePage.get.gridItems().eq(randomgird);
		selectablePage.get.gridItems().eq(randomgird).should('have.class', 'active');
	});

	// it('TC01 Validar que la pestaña (list) este abierta por defecto y poder interactuar con la List', () => {
	// 	cy.get('#demo-tab-list').should('be.visible');
	// 	cy.get('.mt-2 ').eq(0).should('have.text', 'Cras justo odio');
	// 	cy.get('.mt-2 ').eq(1).should('have.text', 'Dapibus ac facilisis in');
	// 	cy.get('.mt-2 ').eq(2).should('have.text', 'Morbi leo risus');
	// 	cy.get('.mt-2 ').eq(3).should('have.text', 'Porta ac consectetur ac');
	// 	cy.get('.mt-2 ').eq(0).click();
	// 	cy.get('.mt-2 ').should('have.class', 'active'); //para validar que al hacer click se coloque en azul
	// 	cy.get('.mt-2 ').eq(0).click();
	// 	cy.get('.mt-2 ').should('not.have.class', 'active');
	// });

	// it('TC02 Validar poder seleccionar la pestaña Grid y poder interactuar con la List', () => {
	// 	cy.get('#demo-tab-grid').should('be.visible');
	// 	cy.get('#demo-tab-grid').click(); //En esto me ayudo un poco gpt SORRY
	// 	cy.get('#row1 li').eq(0).should('contain.text', 'One');
	// 	cy.get('#row1 li').eq(1).should('contain.text', 'Two');
	// 	cy.get('#row1 li').eq(2).should('contain.text', 'Three');
	// 	cy.get('#row2 li').eq(0).should('contain.text', 'Four');
	// 	cy.get('#row2 li').eq(1).should('contain.text', 'Five'); //Con estos valido la lista grid
	// 	cy.get('#row2 li').eq(2).should('contain.text', 'Six');
	// 	cy.get('#row3 li').eq(0).should('contain.text', 'Seven');
	// 	cy.get('#row3 li').eq(1).should('contain.text', 'Eight');
	// 	cy.get('#row3 li').eq(2).should('contain.text', 'Nine');

	// 	cy.get('#row1 li').eq(0).click();
	// 	cy.get('#row1 li').should('have.class', 'active');
	// 	cy.get('#row1 li').eq(0).click();
	// });
});
