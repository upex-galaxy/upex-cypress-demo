import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { selectongrid } from '@pages/GX2-1268-Interactions-Selectable/SelectableGrid';
import { selectonlist } from '@pages/GX2-1268-Interactions-Selectable/SelectableList';




const selectablePage = Cypress.env('endpoint').selectable;

context('US GX2-1268 | TX: ✅ToolsQA | Interactions | Selectable', () => {
    Given('user is in the website', () => {
        cy.visit(selectablePage);
        cy.url().should('contain', selectablePage);
        });

    describe('GX2-1268 | TC1: Verify user can select List pagination', () => {
        When('clicks on List pagination', () => {
            selectongrid.SelectGrid();
            selectonlist.SelectList();            
        });

        Then('should see the List elements', () => {
            cy.get('#verticalListContainer').should('be.visible');  
            cy.get('#demo-tabpane-grid').should('be.not.visible');
        });
    });
    
    describe('GX2-1268 | TC2: Verify user can select elements in List', () => {
        Given('user is in List Pagination page tc2', ()=> {
            cy.get('#verticalListContainer').should('be.visible') 
            
        });                       
        
        When('clicks on each elements of the List tc2', () => {
            selectonlist.list.listPagination1().click()             
            selectonlist.list.listPagination2().click()             
            selectonlist.list.listPagination3().click()            
            selectonlist.list.listPagination4().click()
            cy.get(".mt-2.list-group-item.list-group-item-action").should('have.length', 4)  // assertion poderosa!!
            
        });
        Then('should see all elements selected tc2', () => {
            cy.get('.list-group-item.active').should('have.css', 'background-color', 'rgb(0, 123, 255)')
        });
    });

    describe('GX2-1268 | TC3: Verify user can unselect elements in List', () => {
        Given('user is in List Pagination page tc3', ()=> {
            cy.get('#verticalListContainer').should('be.visible');  
        });                       
        
        When('clicks on each elements of the list tc3', () => {
            selectonlist.list.listPagination1().click()             
            selectonlist.list.listPagination2().click()             
            selectonlist.list.listPagination3().click()             
            selectonlist.list.listPagination4().click() 
            cy.get('.list-group-item.active').should('have.css', 'background-color', 'rgb(0, 123, 255)')
        });
        When('clicks again on each elements of the list tc3', () => {                     
            selectonlist.ClickOnElementsList()
            
        });
        Then('should see all element unselected tc3', () => {
            cy.get('.list-group-item.active').should('not.exist')    
        });
    });
    
        describe('GX2-1268 | TC4: Verify user can select Grid pagination', () => {
        When('clicks on Grid pagination', () => {
            selectongrid.SelectGrid();                    
        });
        Then('should see the Grid elements', () => {
            cy.get('#verticalListContainer').should('be.not.visible');  
            cy.get('#demo-tabpane-grid').should('be.visible');        
        });
        });
    
        describe('GX2-1268 | TC5: Verify user can select elements in Grid', () => {
            Given('user is in Grid Pagination page tc5', () => {
            selectongrid.SelectGrid();
            cy.get('#demo-tabpane-grid').should('be.visible');
        });                       
        
        When('clicks on each elements of the Grid tc5', () => {
            selectongrid.ClickOnGridElement()                
        });
        Then('should see all elements selected tc5', () => {
            cy.get('.list-group-item.active').should('have.css', 'background-color', 'rgb(0, 123, 255)')
        });
    });

    describe('GX2-1268 | TC6: Verify user can unselect elements in List', () => {
        Given('user is in Grid Pagination page tc6', () => {
            selectongrid.SelectGrid();
            cy.get('#demo-tabpane-grid').should('be.visible');
        });
        
        When('clicks on each elements of the Grid tc6', () => {
            selectongrid.ClickOnGridElement()
            cy.get('.list-group-item.active').should('have.css', 'background-color', 'rgb(0, 123, 255)')
        });
        When('clicks again on each elements of the Grid tc6', () => {
            
        cy.wrap(selectongrid.SelectableFunction() )
    
        });
        Then('should see all element unselected tc6', () => {
            selectongrid.ClickOnGridElement()
            cy.get('.list-group-item.active').should('not.exist')    
        });
    });
    });

// para automatizar la selecion de elementos
/*export function fixBirdCountLog(birdsPerDay) {
  for (let day = 0; day < birdsPerDay.length; day += 2) {
    birdsPerDay[day]++;
  }
  return birdsPerDay;
}*/








//________________________________________________________________________
// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', () => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
});
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log;
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr' || (opts.displayName === 'fetch' && opts.url.startsWith('https://'))) {
		return;
	}
	return origLog(opts, ...other);
};
