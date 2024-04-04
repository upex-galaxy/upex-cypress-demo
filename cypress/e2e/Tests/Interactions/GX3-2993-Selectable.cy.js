import { selectablePage } from '../../../support/pages/GX3-2993-Selectable.Page'; 

describe('GX3-2994 | TS: ToolsQA | Interactions | Selectable', () => {
		beforeEach('Precondición:', () =>{
		cy.visit('https://demoqa.com/selectable')
		cy.url().should("include", "selectable")
	})

    it('GX3-2993 | TC1: Validar que se seleccione un elemento de la lista aleatoriamente', () => {        
    	selectablePage.selectRandomListItem();		
    });

	it('GX3-2993 | TC2: Validar que se seleccione un elemento de la tabla aleatoriamente', () => {        
    	cy.get('#demo-tab-grid').click();
		selectablePage.selectRandomGridItem();		
    });
   
});

