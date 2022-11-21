export class SelectablePage {
    constructor(){
        this.list="#demo-tab-list"
        this.grid="#demo-tab-grid"
        this.itemList=".vertical-list-container>.list-group-item"
    }
    

validarContenidoLista(){
   return cy.get(this.list)
}
validarContenidoGrid(){
    return cy.get(this.grid)
}

validarItemsLista(){
    return cy.get(this.itemList)
}
}