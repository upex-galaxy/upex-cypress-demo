import { gridpage } from "@pages/GX2-736 ToolsQA-Sortable/GridPage";
import { listpage } from "@pages/GX2-736 ToolsQA-Sortable/ListPage";

//! No se ha utilizado correctamente el Commands creando multiples variables en un archivo que no debería contenerlo.
describe.skip('GX2-736|✅ToolsQA | Interactions | Sortable',()=>{
    let array1=['One', 'Two', 'Three', 'Four', 'Five','Six']
    let array2=['One','Two,', 'Three', 'Four','Five', 'Six', 'Seven', 'Eight', 'Nine']

    beforeEach('Precondition',()=>{
        cy.visit('https://demoqa.com/sortable')
    })

    it('GX2-737 | TC1:  Validate that the user can drag one number of the list to re-arrange the list',()=>{

        listpage.ListTab().click()
        listpage.ListTab().should('exist').and('have.text', 'List')
        cy.SortingVertical()
        cy.get('@info').then((SortingVertical)=>{
            const {number, rn1}= SortingVertical;
            expect(array1[rn1]).not.to.equal(number)
            cy.log(`**${array1[rn1]} was replaced by ${number}**`)
        })
    })
    it('GX2-737 | TC2:  Validate that the user cant drag one number out of the list in the "List" tab"',()=>{
            cy.VerticalDragOutside()
            cy.get('@text').then((VerticalDragOutside)=>{
                const {number, rn1}= VerticalDragOutside;
                expect(array1[rn1]).to.contain(number)
                cy.log(`**${number} went back to its place in the list**`)
            })
    })

    it('GX2-737 | TC3: Validate that the user can drag one number of the grid to re arrange the numbers',()=>{

        gridpage.Gridtab().click()
        gridpage.Gridtab().should('exist').and('have.text', "Grid")
        
        cy.SortingGrid()
        cy.get('@values').then((SortingGrid)=>{
            const {rn2, text}= SortingGrid;     
            expect(array2[rn2]).to.not.equal(text)
            cy.log(`**${array2[rn2]} was replaced by ${text}**`)
        })
    })
    it('GX2-737 | TC4:  Validate that the user can drag one number out of the grid in the “Grid” tab.',()=>{
        
        gridpage.Gridtab().click()
        cy.GridDragOutside()
        cy.get('@text').then((GridDragOutside)=>{
            const {number}= GridDragOutside;
            expect(array2[8]).not.to.contain(number)
            cy.log(`**${array2[8]} was replaced by ${number} - 
            When the number is dragged below the grid, it always occupies the ninth
            position**`)
        })
    })
}) 



Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    })
    const origLog = Cypress.log
    Cypress.log = function (opts, ...other) {
    if (opts.displayName === 'xhr' || opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
        return
    }
    return origLog(opts, ...other)
    }