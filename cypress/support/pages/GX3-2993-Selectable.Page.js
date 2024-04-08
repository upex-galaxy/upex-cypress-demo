
class Selectable {

  //OBTENER ELEMENTOS DE LA LISTA
  get listItems() {
    return cy.get('#verticalListContainer li');
  }

  //OBTIENE LA CANTIDAD DE ELEMENTOS DE LA LISTA
  getListItemCount() {
    return this.listItems.then($listItems => $listItems.length);
  }

  //SELECCIONA UN ELEMENTO DE LA LISTA POR SU INDICE Y DA CLICK
  selectListItemByIndex(index) {
    this.listItems.eq(index).click();
  }

  //OBTIENE UN ELEMENTO DE LA LISTA POR SU INDICE Y LO RETORNA
  getListItemByIndex(index) {
    return this.listItems.eq(index);
  }

  //DESELECCIONA EL ELEMENTO DE LA LISTA SELECCIONADO
  deselectListItem() {
    this.listItems.filter('.active').click(); 
  }

  //OBTENER ELEMENTOS DE LA TABLA
  get gridItems() {
    return cy.get('#gridContainer li');
  }

  //OBTIENE LA CANTIDAD DE ELEMENTOS DE LA TABLA
  getGridItemCount() {
    return this.gridItems.then($gridItems => $gridItems.length);
  }

  //SELECCIONA UN ELEMENTO DE LA TABLA POR SU INDICE
  selectGridItemByIndex(index) {
    this.gridItems.eq(index).click();
  }
  
  //OBTIENE UN ELEMENTO DE LA LISTA POR SU INDICE Y LO RETORNA
  getGridItemByIndex(index) {
    return this.gridItems.eq(index);
  }

  //DESELECCIONA EL ELEMENTO DE LA LISTA SELECCIONADO
  deselectGridItem() {
    this.gridItems.filter('.active').click(); 
  }
}

export const selectablePage = new Selectable();
