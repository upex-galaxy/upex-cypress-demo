class select {
    get = {
        endPoint: ()=> cy.visit('/selectable'),
        listPagination: () => cy.get('#demo-tab-list'),
        gridPagination: ()=> cy.get('#demo-tab-grid'),
        listPagination1: ()=> cy.get('.vertical-list-container > *').eq(0),
        listPagination2: ()=> cy.get('.vertical-list-container > *').eq(1),
        listPagination3: ()=> cy.get('.vertical-list-container > *').eq(2),
        listPagination4: ()=> cy.get('.vertical-list-container > *').eq(3),
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

    selectList() {
        this.get.listPagination().click()
    }
    selectGrid() {
        this.get.gridPagination().click()
    }
}