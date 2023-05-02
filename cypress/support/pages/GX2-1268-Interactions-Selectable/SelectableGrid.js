class SelectOnGrid {
    get = {
        endPoint: () => cy.visit('/selectable'),
        gridPagination: () => cy.get('#demo-tab-grid'),
        gridPaginationPanel: () => cy.get('.tab-content'),
    }
    
    SelectGrid() {
        this.get.gridPagination().click()
    }

    li={
        GridLi:()=>cy.get('#demo-tabpane-grid li'),
    }

    GridClick() {
        let i = 8
        while (i != -1) {
            this.li.GridLi().eq(i).click({ forece: true })
        i--
        }
    }
}
export const selectongrid = new SelectOnGrid();