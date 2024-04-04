
class Selectable {
  get listItems() {
    return cy.get('#verticalListContainer li');
  }

  selectRandomListItem() {
    this.listItems.then($listItems => {
      const randomIndex = Math.floor(Math.random() * $listItems.length);
        cy.wrap($listItems[randomIndex]).click();
        cy.wrap($listItems[randomIndex]).should('have.class', 'active');
        cy.wrap($listItems[randomIndex]).should('have.css', 'background-color', 'rgb(0, 123, 255)'); 
        cy.wrap($listItems[randomIndex]).should('have.css', 'color', 'rgb(255, 255, 255)'); 
    });
  }

  get gridItems() {
        return cy.get('#gridContainer li');
    }

    selectRandomGridItem() {
        this.gridItems.then($gridItems => {
            const randomIndex = Math.floor(Math.random() * $gridItems.length);
            cy.wrap($gridItems[randomIndex]).click();
            cy.wrap($gridItems[randomIndex]).should('have.class', 'active');
            cy.wrap($gridItems[randomIndex]).should('have.css', 'background-color', 'rgb(0, 123, 255)');
            cy.wrap($gridItems[randomIndex]).should('have.css', 'color', 'rgb(255, 255, 255)'); 
        });
    } 
}

export const selectablePage = new Selectable();
