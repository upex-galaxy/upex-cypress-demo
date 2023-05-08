class SelectOnList {
    get = {
        endPoint: ()=> cy.visit('/selectable'),
        listPagination: () => cy.get('#demo-tab-list'),
        listPaginationPanel: () => cy.get('#demo-tabpane-list'),
        verticalList: ()=> cy.get('#verticalListContainer'),
        buttonActivated: ()=> cy.get('.list-group-item.active'),
        buttonNoActivatedList: ()=> cy.get('.mt-2.list-group-item.list-group-item-action'),

    }

    SelectList() {
        this.get.listPagination().click()
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