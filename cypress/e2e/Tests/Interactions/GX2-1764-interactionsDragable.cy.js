import { removeLogs } from '@helper/RemoveLogs';
import { draggabble } from '@pages/Draggabble.Page';
//import { axis } from '@pages/Draggabble.Page';
//import { container } from '@pages/Draggabble.Page';
//import { cursor } from '@pages/Draggabble.Page';

describe('GX2-1764 |ToolsQA | Interactions | Dragabble', () => {
	beforeEach('', () => {
		cy.visit('https://demoqa.com/dragabble');
		cy.url().should('contain', 'dragabble');
	});

	it('1765| TC01 access tab simple,and validate movements boxs “Drag me” in any directions', () => {
		draggabble.get.simpleTab().should('exist').and('have.text', 'Simple');
		const deltaX = Cypress._.random(-50, 490);
		const deltaY = Cypress._.random(-20, 130);

		draggabble.moveDragMe(deltaX, deltaY);

		draggabble.get.dragMe().should('have.css', 'left', `${deltaX}px`);
		draggabble.get.dragMe().should('have.css', 'top', `${deltaY}px`);
	});

	it('1765| TC02 Access to Axis Restricted and validate movements box Only x', () => {
		draggabble.goToAxisTab();
		const deltaX = Cypress._.random(-200, 500);
		const deltaY = 0;

		draggabble.moveOnlyX(deltaX, 0);

		draggabble.get.OnlyX().should('have.css', 'left', `${deltaX}px`);
		draggabble.get.OnlyX().should('have.css', 'top', `${deltaY}px`);
	});

	it('1765| TC03 Access to Axis Restricted and validate movements box Only Y', () => {
		draggabble.goToAxisTab();
		const deltaX = 0;
		const deltaY = Cypress._.random(-50, 50);

		draggabble.moveOnlyY(0, deltaY);
		draggabble.get.OnlyY().should('have.css', 'left', `${deltaX}px`);
		draggabble.get.OnlyY().should('have.css', 'top', `${deltaY}px`);
	});

	it('1765| TC04 Access to Container Restricted tab and validate box "I m contained within the box"', () => {
		draggabble.goToContainTab();
		const deltaX = Cypress._.random(-7, 377);
		const deltaY = Cypress._.random(0, 106);
		draggabble.moveContainedBox(deltaX, deltaY);
		draggabble.get.containerBox().should('have.css', 'left', `${deltaX}px`);
		draggabble.get.containerBox().should('have.css', 'top', `${deltaY}px`);
	});
	it('1765| TC04 Access to Container Restricted tab and validate box "I m contained within the box"', () => {
		draggabble.goToContainTab();
		draggabble.get.containerText().should('exist').and('contain.text', "I'm contained within my parent");
		const deltaX = Cypress._.random(-1, 14);
		const deltaY = Cypress._.random(-2, 87);
		draggabble.moveContainerTex(deltaX, deltaY);
		draggabble.get.containerText().should('have.css', 'left', `${deltaX}px`);
		draggabble.get.containerText().should('have.css', 'top', `${deltaY}px`);
	});

	it.only('1765| TC05 Access to Cursor Style tab and validate cursor when you move box "I will always stick to the center"', () => {
		draggabble.goToCursorStyle();
		draggabble.get.cursorStyleTab().should('exist').and('contain.text', 'Cursor Style');
		draggabble.get.center().should('contain.text', 'I will always stick to the center');

		//move el box center
		draggabble.moveCenterBox();
	});
	it('1765| TC06 Access to Cursor Style tab and validate cursor when you move box "My cursor is at top left" and the icon change to a "+"', () => {
		draggabble.goToCursorStyle();
		draggabble.get.cursorStyleTab().should('exist').and('contain.text', 'Cursor Style');
		draggabble.get.left().should('contain.text', 'My cursor is at top left');

		//muevo el box
		draggabble.moveLeftBox();
	});
	it('1765| TC07 Access to Cursor Style tab and validate cursor when you move box "My cursor is at bottom"', () => {
		draggabble.SelectCursorStyle();
		draggabble.get.cursorStyleTab().should('exist').and('contain.text', 'Cursor Style');
		draggabble.get.bottom().should('exist').and('contain.text', 'My cursor is at bottom');
		draggabble.moveBottomBox();
	});
});

removeLogs();
