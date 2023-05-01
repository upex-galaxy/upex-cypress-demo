class SelectOnGrid {
    get = {
        endPoint: () => cy.visit('/selectable'),
        gridPagination: () => cy.get('#demo-tab-grid'),
        gridPaginationPanel: () => cy.get('.tab-content'),
    }

    grid = {
        gridPaginationOne: () => cy.get('#row1 > *').eq(0),
        gridPaginationTwo: () => cy.get('#row1 > *').eq(1),
        gridPaginationThree: () => cy.get('#row1 > *').eq(2),
        gridPaginationFour: () => cy.get('#row2 > *').eq(0),
        gridPaginationFive: () => cy.get('#row2 > *').eq(1),
        gridPaginationSix: () => cy.get('#row2 > *').eq(2),
        gridPaginationSeven: () => cy.get('#row3 > *').eq(0),
        gridPaginationEight: () => cy.get('#row3 > *').eq(1),
        gridPaginationNine: () => cy.get('#row3 > *').eq(2)
    }
    /* Assertions are not recommended to be in the page class.
    assertions = {
        bluecolor: () => cy.get('.list-group-item.active').should('have.css', 'background-color', 'rgb(0, 123, 255)'),
        nobluecolor: () => cy.get('.list-group-item.active').should('not.exist'),

    }*/
    SelectGrid() {
        this.get.gridPagination().click()
    }

    ClickOnGridElement() {
        selectongrid.grid.gridPaginationOne().click()
        selectongrid.grid.gridPaginationTwo().click()
        selectongrid.grid.gridPaginationThree().click()
        selectongrid.grid.gridPaginationFour().click()
        selectongrid.grid.gridPaginationFive().click()
        selectongrid.grid.gridPaginationSix().click()
        selectongrid.grid.gridPaginationSeven().click()
        selectongrid.grid.gridPaginationEight().click()
    }

   /* SelectableFunction() { //i could not get it to work !!!!!!!
        debugger;  let val = Object.values(selectongrid.grid) // get keys's element
        for (let i = 1; i < val.length; i++) {
            debugger;  return val[1]  
           
        }
    }*/
}
export const selectongrid = new SelectOnGrid();