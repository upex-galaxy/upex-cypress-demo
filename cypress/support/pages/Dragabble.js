class Dragabble {

    get = {
        tabSimple: () => cy.get("#draggableExample-tab-simple"),
        tabAxis: () => cy.get("#draggableExample-tab-axisRestriction"),
        tabContainter: () => cy.get("#draggableExample-tab-containerRestriction"),
        tabCursor: () => cy.get("#draggableExample-tab-cursorStyle"),
        dragBox: () => cy.get("#dragBox"),
        restrictedX: () => cy.get("#restrictedX"),
        restrictedY: () => cy.get("#restrictedY"),
        containedBoxText: () => cy.get(".draggable.ui-widget-content.ui-draggable.ui-draggable-handle"),
        containmentBox: () => cy.get("#containmentWrapper .draggable"),
        containedParentText: () => cy.get(".ui-widget-header.ui-draggable.ui-draggable-handle"),
        containmentParent: () => cy.get(".draggable.ui-widget-content.m-3"),
        cursorCenter: () => cy.get("#cursorCenter"),
        cursorTopLeft: () => cy.get("#cursorTopLeft"),
        cursorBottom: () => cy.get("#cursorBottom"),
        containment: () => cy.get("#containmentWrapper"),              
    }

   
    clickTabSimple() {
        this.get.tabSimple().click()
    }
    clickTabAxis() {
        this.get.tabAxis().click()
    }
    clickTabCursor() {
      this.get.tabCursor().click()
    }
    clickTabContainer() {
        this.get.tabContainter().click()
    }
    clickCursor() {
        this.get.tabCursor().click()
    }
    dragSimple() {
        let randomX = Cypress._.random(400, -800)
        let randomY = Cypress._.random(300, -700)
        this.get.dragBox().drag("#dragBox", {
        source: { x: randomX, y: randomY }, 
        force: true,
        })
    }
 
    dragOnlyX() {
        let randomX = Cypress._.random(150, -450)
        let randomY = Cypress._.random(500, -700)
        this.get.restrictedX().move({ deltaX: randomX, deltaY: randomY })
    }

    dragOnlyY() {
        let randomX = Cypress._.random(150, -450)
        let randomY = Cypress._.random(700, -300)
        this.get.restrictedY().move({ deltaX: randomX, deltaY: randomY })
    }

    dragContainedBoxText() {
        let randomX = Cypress._.random(500, -500)
        let randomY = Cypress._.random(500, -500)
         this.get.containedBoxText().move({ deltaX: randomX, deltaY: randomY })
    }

    dragContainedParentText() {
        let randomX = Cypress._.random(500, -500)
        let randomY = Cypress._.random(500, -500)
         this.get.containedParentText().move({ deltaX: randomX, deltaY: randomY })
    }  

    

}

export const dragabble = new Dragabble();
export const assert = new Dragabble();