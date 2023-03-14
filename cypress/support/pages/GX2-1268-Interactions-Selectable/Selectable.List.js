class select {
    get = {
        endPoint: ()=> cy.visit('/selectable'),
        listPagination: () => cy.get('#demo-tab-list'),
        listPagination1: ()=> cy.get('.vertical-list-container > *').eq(0),
        listPagination2: ()=> cy.get('.vertical-list-container > *').eq(1),
        listPagination3: ()=> cy.get('.vertical-list-container > *').eq(2),
        listPagination4: ()=> cy.get('.vertical-list-container > *').eq(3),
    }
    selectList() {
        this.get.listPagination().click()
    }

}