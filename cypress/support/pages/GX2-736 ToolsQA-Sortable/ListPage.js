class ListPage {
    elements={
            
            listTab:()=> cy.get('[id="demo-tab-list"]'),
            verticalnumber:()=> cy.get('[class="vertical-list-container mt-4"]').children()
    }

    VerticalNumber(){
        return this.elements.verticalnumber()
    }
    ListTab(){
        return this.elements.listTab()
    }
}
export const listpage= new ListPage()