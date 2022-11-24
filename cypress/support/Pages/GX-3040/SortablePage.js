export class SortablePage {
    constructor(){
        this.list="#demo-tab-list"
        this.grid="#demo-tab-grid"
      //  this.gridList=".create-grid"
        this.itemList1=".vertical-list-container > :nth-child(1)"
        this.itemList2=".vertical-list-container > :nth-child(2)"
        this.itemList3=".vertical-list-container > :nth-child(3)"
        this.itemList4=".vertical-list-container > :nth-child(4)"
        this.itemList5=".vertical-list-container > :nth-child(5)"
        this.itemList6=".vertical-list-container > :nth-child(6)"
        this.items=".vertical-list-container>.list-group-item"

        this.itemGri1=".create-grid>:nth-child(1)"
        this.itemGri2=".create-grid>:nth-child(2)"
        this.itemGri3=".create-grid>:nth-child(3)"
        this.itemGri4=".create-grid>:nth-child(4)"
        this.itemGri5=".create-grid>:nth-child(5)"
        this.itemGri6=".create-grid>:nth-child(6)"
        this.itemGri7=".create-grid>:nth-child(7)"
        this.itemGri8=".create-grid>:nth-child(8)"
        this.itemGri9=".create-grid>:nth-child(9)"

    }
    

validarContenidoLista(){
   return cy.get(this.list)
}
validarContenidoGrid(){
    return cy.get(this.grid)
}

validarItemsLista1(){
    return cy.get(this.itemList1).contains("One")
}
validarItemsLista2(){
    return cy.get(this.itemList2).contains("Two")
}
validarItemsLista3(){
    return cy.get(this.itemList3).contains("Three")
}

validarItemsLista4(){
    return cy.get(this.itemList4).contains("Four")
}

validarItemsLista5(){
    return cy.get(this.itemList5).contains("Five")
}

validarItemsLista6(){
    return cy.get(this.itemList6).contains("Six")
}

validarItems(){
    return cy.get(this.items)
}

validarListGrid(){
   return cy.get(this.gridList)
}
moverItems() {
    cy.get(this.itemList1)
    .trigger('mousedown',  { button: 0 }, { force: true })
 cy.get(this.itemList1).next().click()
    .trigger("mouseup", { force: true });

     cy.get(this.itemList2)
     .trigger('mousedown',  { button: 0 }, { force: true })
     cy.get(this.itemList2).next().click()
     .trigger("mouseup", { force: true });  

     cy.get(this.itemList3)
     .trigger('mousedown',  { button: 0 }, { force: true })
     cy.get(this.itemList3).next().click()
     .trigger("mouseup", { force: true });  

     cy.get(this.itemList4)
     .trigger('mousedown',  { button: 0 }, { force: true })
     cy.get(this.itemList1).next().click()
     .trigger("mouseup", { force: true });  

     cy.get(this.itemList5)
     .trigger('mousedown',  { button: 0 }, { force: true })
     cy.get(this.itemList2).next().click()
     .trigger("mouseup", { force: true });  

     cy.get(this.itemList6)
     .trigger('mousedown',  { button: 0 }, { force: true })
     cy.get(this.itemList3).next().click()
     .trigger("mouseup", { force: true });  

    };

moverGrid(){
    
	cy.get(this.itemGri1)
    .trigger('mousedown',  { button: 0 }, { force: true })
     cy.get(this.itemGri2).next().click()
      .trigger("mouseup", { force: true });
 
     cy.get(this.itemGri2)
     .trigger('mousedown',  { button: 0 }, { force: true })
  cy.get(this.itemGri3).next().click()
     .trigger("mouseup", { force: true });
 
     cy.get(this.itemGri3)
     .trigger('mousedown',  { button: 0 }, { force: true })
  cy.get(this.itemGri4).next().click()
     .trigger("mouseup", { force: true });
 
     cy.get(this.itemGri4)
     .trigger('mousedown',  { button: 0 }, { force: true })
  cy.get(this.itemGri5).next().click()
     .trigger("mouseup", { force: true });
 
     cy.get(this.itemGri5)
     .trigger('mousedown',  { button: 0 }, { force: true })
  cy.get(this.itemGri6).next().click()
     .trigger("mouseup", { force: true });
 
     cy.get(this.itemGri6)
     .trigger('mousedown',  { button: 0 }, { force: true })
  cy.get(this.itemGri7).next().click()
     .trigger("mouseup", { force: true });
 
     cy.get(this.itemGri7)
     .trigger('mousedown',  { button: 0 }, { force: true })
  cy.get(this.itemGri8).next().click()
     .trigger("mouseup", { force: true });
 
     cy.get(this.itemGri8)
     .trigger('mousedown',  { button: 0 }, { force: true })
  cy.get(this.itemGri1).next().click()
     .trigger("mouseup", { force: true });
 
     cy.get(this.itemGri9)
     .trigger('mousedown',  { button: 0 }, { force: true })
  cy.get(this.itemGri2).click()
   .trigger("mouseup", { force: true });
 
 
}

};