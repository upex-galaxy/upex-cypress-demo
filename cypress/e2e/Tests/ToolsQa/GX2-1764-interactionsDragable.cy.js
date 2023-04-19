import { removeLogs } from '@helper/RemoveLogs';
import { simple } from '@pages/Dragabble.Page';
import { axis } from '@pages/Dragabble.Page';

describe('GX2-1764 |ToolsQA | Interactions | Dragabble', () => {
	beforeEach('', () => {
		cy.visit('https://demoqa.com/dragabble');
		cy.url().should('contain', 'dragabble');
	});

	it('1765| TC01 access tab simple,and validate movements boxs “Drag me” in any directions', () => {
		simple.get.simpleTab().should('exist').and('have.text', 'Simple');
		const deltaX = Cypress._.random(-50, 490);
		const deltaY = Cypress._.random(-20, 130);

		simple.MoveDragMe(deltaX, deltaY);

		simple.get.dragMe().should('have.css', 'left', `${deltaX}px`);
		simple.get.dragMe().should('have.css', 'top', `${deltaY}px`);
	});

	it.only('1765| TC02 Access to Axis Restricted and validate movements boxs Only x and Only Y', () => {
		axis.SelectAxisTab();
		const onlyX = Cypress._.random(-200, 500);
		const onlyY = 0;

		cy.log(onlyX);
		axis.MoveOnlyX(onlyX, onlyY);
		cy.log(onlyX);

		axis.get.OnlyX().should('have.css', 'left', `${onlyX}px`);
	});
	it('1765| TC03 Access to Container Restricted tab and validate box "I m contained within the box"', () => {});
	it('1765| TC04 Access to Cursor Style tab and validate cursor when you move box "I will always stick to the center"', () => {});
	it('1765| TC05 Access to Cursor Style tab and validate cursor when you move box "My cursor is at top left" and the icon change to a "+"', () => {});
	it('1765| TC05 Access to Cursor Style tab and validate cursor when you move box "My cursor is at bottom"', () => {});
});

removeLogs();
