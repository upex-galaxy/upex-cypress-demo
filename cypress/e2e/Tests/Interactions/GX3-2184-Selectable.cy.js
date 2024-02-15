import { selectablePage } from '../../../support/pages/GX3-2184-Selectable.Page';

const baseUrl = 'https://demoqa.com/selectable';


describe('ToolsQA | Interactions | Selectable', () => {
	beforeEach(() => {
		cy.visit(baseUrl);
		cy.url().should('include', 'selectable');
	});
	it('2185 | TC1: Validar seleccionar los elementos de List', () => {
		selectablePage.get.buttongrid().should('not.have.class', 'active'); 
		selectablePage.getArrayElementsCount('list').then(valueArray => {
			for (let i = 0; i < valueArray; i++) {
				selectablePage.selectButton('list', i);
				selectablePage.get.arrayElements('list').eq(i).should('have.class', 'active');
			}
		});
	});
	it('2185 | TC2: Validar deseleccionar los elementos de List', () => {
		selectablePage.get.buttongrid().should('not.have.class', 'active');
		
		for (let repetition = 1; repetition <= 2; repetition++) {
			selectablePage.getArrayElementsCount('list').then(valueArray => {
				for (let i = 0; i < valueArray; i++) {
					selectablePage.selectButton('list', i);					
				}
			});
		}
	});
	it('2185 | TC3: Validar seleccionar los elementos de Grid.', () => {
		selectablePage.clickGrid();
		selectablePage.get.buttongrid().should('have.class', 'active'); 
		selectablePage.getArrayElementsCount('grid').then(valueArray => {
			for (let i = 0; i < valueArray; i++) {
				selectablePage.selectButton('grid', i);
				selectablePage.get.arrayElements('grid').eq(i).should('have.class', 'active');
			}
		});		
	});
	it('2185 | TC4: Validar deseleccionar los elementos de Grid.', () => {
		selectablePage.clickGrid();
		selectablePage.get.buttongrid().should('have.class', 'active');		
		for (let repetition = 1; repetition <= 2; repetition++) {
			selectablePage.getArrayElementsCount('grid').then(valueArray => {
				for (let i = 0; i < valueArray; i++) {
					selectablePage.selectButton('grid', i);					
				}
			});
		}
	});
});
