class Dragabble {

    get = {
        tabSimple: () => cy.get("#draggableExample-tab-simple"),
        tabRestricted: () => cy.get("#draggableExample-tab-axisRestriction"),
        tabContainter: () => cy.get("#draggableExample-tab-containerRestriction"),
        tabCursor: () => cy.get("#draggableExample-tab-cursorStyle"),
        dragBox: () => cy.get("#dragBox"),
        restrictedX: () => cy.get("#restrictedX"),
        restrictedY: () => cy.get("#restrictedY"),
        containedBoxText: () => cy.get(".draggable.ui-widget-content.ui-draggable.ui-draggable-handle"),
        containmentBox: () => cy.get("#containmentWrapper"),
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
    clickTabRestricted() {
        this.get.tabRestricted().click()
    }
    clickTabContainer() {
        this.get.tabContainter().click()
    }
    clickCursor() {
        this.get.tabCursor().click()
    }
    dragSimple() {
        let randomX = Cypress._.random(-800, 400);
        let randomY = Cypress._.random(-700, 300);
        this.get.dragBox().drag("#dragBox", {
        source: { x: randomX, y: randomY }, 
        force: true,
        })
    }
 
    
    

}

export const dragabble = new Dragabble();
export const assert = new Dragabble();