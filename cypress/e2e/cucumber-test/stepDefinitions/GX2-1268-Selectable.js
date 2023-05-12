import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { selectongrid } from '@pages/GX2-1268-Interactions-Selectable/SelectableGrid';
import { selectonlist } from '@pages/GX2-1268-Interactions-Selectable/SelectableList';
import { removeLogs } from '@helper/RemoveLogs';




const selectablePage = Cypress.env('endpoint').selectable;

context('1268 | TX: ✅ToolsQA | Interactions | Selectable', () => {
    Given('user is in the website', () => {
        cy.visit(selectablePage);
        cy.url().should('contain', selectablePage);
        });

    describe('1268 | TC1: Verify user can select List pagination', () => {
        When('clicks on List pagination', () => {
            selectongrid.SelectGrid();
            selectonlist.SelectList();            
        });

        Then('should see the List elements', () => {
            selectonlist.get.verticalList().should('be.visible');  
            selectonlist.get.listPaginationPanel().should('have.attr', 'aria-hidden', 'false'),            
            selectongrid.get.gridPaginationPanel().should('have.attr', 'aria-hidden', 'true')
        });
    });
    
    describe('1268 | TC2: Verify user can select elements in List', () => {
        Given('user is in List Pagination page tc2', ()=> {
            selectonlist.get.verticalList().should('be.visible')
            selectonlist.get.listPaginationPanel().should('have.attr', 'aria-hidden', 'false')            
            
        });                       
        
        When('clicks on each elements of the List tc2', () => {
            selectonlist.ListClick();
            selectonlist.get.buttonNoActivatedList().should('have.length', 4)  // assertion poderosa!!
            
        });
        Then('should see all elements selected tc2', () => {
            selectonlist.get.buttonActivated().should('have.css', 'background-color', 'rgb(0, 123, 255)')
            selectonlist.get.buttonActivated().should('have.length', 4)
        });
    });

    describe('1268 | TC3: Verify user can unselect elements in List', () => {
        Given('user is in List Pagination page tc3', ()=> {
            selectonlist.get.verticalList().should('be.visible');  
            selectonlist.get.listPaginationPanel().should('have.attr', 'aria-hidden', 'false')   
        });                       
        
        When('clicks on each elements of the list tc3', () => {
            selectonlist.ListClick();
            selectonlist.get.buttonActivated().should('have.css', 'background-color', 'rgb(0, 123, 255)')
        });
        When('clicks again on each elements of the list tc3', () => {                     
            selectonlist.ListClick();
            selectonlist.get.buttonNoActivatedList().should('have.length', 4)

            
        });
        Then('should see all element unselected tc3', () => {
            selectonlist.get.buttonActivated().should('not.exist')    
        });
    });
    
        describe('1268 | TC4: Verify user can select Grid pagination', () => {
        When('clicks on Grid pagination', () => {
            selectongrid.SelectGrid();                    
        });
        Then('should see the Grid elements', () => {
            selectonlist.get.verticalList().should('be.not.visible');  
            selectongrid.get.gridPaginationPanel().should('have.attr', 'aria-hidden', 'false')  
        });
        });
    
        describe('1268 | TC5: Verify user can select elements in Grid', () => {
            Given('user is in Grid Pagination page tc5', () => {
            selectongrid.SelectGrid();
            selectongrid.get.gridPaginationPanel().should('have.attr', 'aria-hidden', 'false') 
        });                       
        
        When('clicks on each elements of the Grid tc5', () => {
            selectongrid.GridClick();              
        });
        Then('should see all elements selected tc5', () => {
            selectonlist.get.buttonActivated().should('have.css', 'background-color', 'rgb(0, 123, 255)')
            selectongrid.get.buttonNoActivatedGrid().should('have.length', 9)
        });
    });

    describe('1268 | TC6: Verify user can unselect elements in List', () => {
        Given('user is in Grid Pagination page tc6', () => {
            selectongrid.SelectGrid();
            selectongrid.get.gridPaginationPanel().should('have.attr', 'aria-hidden', 'false') 
        });
        
        When('clicks on each elements of the Grid tc6', () => {
            selectongrid.GridClick(); 
            selectonlist.get.buttonActivated().should('have.css', 'background-color', 'rgb(0, 123, 255)')
        });
        When('clicks again on each elements of the Grid tc6', () => {
            
        selectongrid.GridClick();  
    
        });
        Then('should see all element unselected tc6', () => {
            selectongrid.get.buttonNoActivatedGrid().should('have.length', 0)
            selectonlist.get.buttonActivated().should('not.exist')    
        });
    });
    });

removeLogs()



