export class SelectablePage {
    constructor(){
        this.list="#demo-tab-list"
        this.grid="#demo-tab-grid"
    }
    

validarContenidoLista(){
   return cy.get(this.list)
}
validarContenidoGrid(){
    return cy.get(this.grid)
}

}