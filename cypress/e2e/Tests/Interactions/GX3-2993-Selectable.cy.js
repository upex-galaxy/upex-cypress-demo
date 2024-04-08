import { selectablePage } from '../../../support/pages/GX3-2993-Selectable.Page'; 

describe('GX3-2994 | TS: ToolsQA | Interactions | Selectable', () => {
		beforeEach('Precondición:', () =>{
		cy.visit('https://demoqa.com/selectable')
		cy.url().should("include", "selectable")
	})

	 it('GX3-2993 | TC1: Validar que se seleccione un elemento de la lista aleatoriamente', () => {
    	selectablePage.getListItemCount().then(count => {
      	const randomIndex = Math.floor(Math.random() * count);
      	selectablePage.selectListItemByIndex(randomIndex);
      	selectablePage.getListItemByIndex(randomIndex).should('have.css', 'background-color', 'rgb(0, 123, 255)');
      	selectablePage.getListItemByIndex(randomIndex).should('have.css', 'color', 'rgb(255, 255, 255)');
    	});
  	});

	it('GX3-2993 | TC2: Validar deseleccionar un elemento que esté seleccionado en la lista', () => {
    	selectablePage.getListItemCount().then(count => {
      	const randomIndex = Math.floor(Math.random() * count);
      	selectablePage.selectListItemByIndex(randomIndex);
		});
		
		selectablePage.deselectListItem();
    	selectablePage.getListItemCount().then(count => {
			for (let i = 0; i < count; i++) {
				selectablePage.getListItemByIndex(i).should('not.have.class', 'active');
				selectablePage.getListItemByIndex(i).should('have.css', 'background-color', 'rgb(255, 255, 255)');
				selectablePage.getListItemByIndex(i).should('have.css', 'color', 'rgb(73, 80, 87)');
			}
    	});
	});

	it('GX3-2993 | TC3: Validar que se seleccione un elemento de la tabla aleatoriamente', () => {
    	cy.get('#demo-tab-grid').click();
		selectablePage.getGridItemCount().then(count => {
      	const randomIndex = Math.floor(Math.random() * count);
      	selectablePage.selectGridItemByIndex(randomIndex);
      	selectablePage.getGridItemByIndex(randomIndex).should('have.css', 'background-color', 'rgb(0, 123, 255)');
      	selectablePage.getGridItemByIndex(randomIndex).should('have.css', 'color', 'rgb(255, 255, 255)');
    	});
  	});

	it('GX3-2993 | TC4: Validar deseleccionar un elemento que esté seleccionado en la tabla', () => {
    	cy.get('#demo-tab-grid').click();
		selectablePage.getGridItemCount().then(count => {
      	const randomIndex = Math.floor(Math.random() * count);
      	selectablePage.selectGridItemByIndex(randomIndex);
		});		
		
		selectablePage.deselectGridItem();
    	selectablePage.getGridItemCount().then(count => {
			for (let i = 0; i < count; i++) {
				selectablePage.getGridItemByIndex(i).should('not.have.class', 'active');
				selectablePage.getGridItemByIndex(i).should('have.css', 'background-color', 'rgb(255, 255, 255)');
				selectablePage.getGridItemByIndex(i).should('have.css', 'color', 'rgb(73, 80, 87)');
			}
    	});
	});
});

