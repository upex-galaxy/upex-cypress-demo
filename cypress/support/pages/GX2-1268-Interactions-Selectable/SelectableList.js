class SelectOnList {
    get = {
        endPoint: ()=> cy.visit('/selectable'),
        listPagination: () => cy.get('#demo-tab-list'),
        listPaginationPanel: () => cy.get('#demo-tabpane-list'),

    }

    list = {
        listPagination1: ()=> cy.get('.vertical-list-container > *').eq(0),
        listPagination2: ()=> cy.get('.vertical-list-container > *').eq(1),
        listPagination3: ()=> cy.get('.vertical-list-container > *').eq(2),
        listPagination4: ()=> cy.get('.vertical-list-container > *').eq(3),
    }

    SelectList() {
        this.get.listPagination().click()
    }

    ClickOnElementsList() {
        selectonlist.list.listPagination1().click()
        selectonlist.list.listPagination2().click()
        selectonlist.list.listPagination3().click()
        selectonlist.list.listPagination4().click()
    }

    li={
        listLi:()=>cy.get('#verticalListContainer li'),
    }

    ListClick() {
        let i = 3
        while (i != -1) {
        this.li.listLi().eq(i).click()
        i--
    }
}
}


export const selectonlist = new SelectOnList();