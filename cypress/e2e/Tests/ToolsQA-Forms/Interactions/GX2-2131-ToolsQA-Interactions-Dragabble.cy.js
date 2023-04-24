import { dragabble, assert } from "@pages/Dragabble";
//const dragabblePage = Cypress.env('endpoint').dragabble;

describe("GX2-2131-ToolsQA-Interactions-Dragabble", () => {

    beforeEach("PRC User must be in the /dragabble page", () => {
        cy.visit("/dragabble")
    });

    it("TC3: Validate “Drag me” area can be dragged as desired in any direction in the “Simple” tab. ", () => {
        let position 
        let position2
        //calculates actual position
        dragabble.get.dragBox().then(($el) => {
        positionInit = $el.position(); 
        });
        //drags
        dragabble.clickTabSimple();
        dragabble.dragSimple();
        //calculates final position and compares to init position
        dragabble.get.dragBox().then(($el) => {
            positionFinal = $el.position();
            cy.log(positionFinal)
        expect(positionInit).not.deep.equal(positionFinal);
        });
    })



});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();