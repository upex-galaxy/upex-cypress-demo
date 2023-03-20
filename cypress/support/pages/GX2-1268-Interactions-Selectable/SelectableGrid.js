class SelectOnGrid {
    get = {
        endPoint: ()=> cy.visit('/selectable'),
        gridPagination: ()=> cy.get('#demo-tab-grid'),
        gridPaginationOne: ()=> cy.get('#raw1 > *').eq(0),
        gridPaginationTwo: ()=> cy.get('#raw1 > *').eq(1),
        gridPaginationThree: ()=> cy.get('#raw1 > *').eq(2),
        gridPaginationFour: ()=> cy.get('#raw2 > *').eq(0),
        gridPaginationFive: ()=> cy.get('#raw2 > *').eq(1),
        gridPaginationSix: ()=> cy.get('#raw2 > *').eq(2),
        gridPaginationSeven: ()=> cy.get('#raw3 > *').eq(0),
        gridPaginationEight: ()=> cy.get('#raw3 > *').eq(1),
        gridPaginationNine: ()=> cy.get('#raw3 > *').eq(2)
    }
    SelectGrid() {
        this.get.gridPagination().click()
    }
}

export const selectgrid = new SelectOnGrid();