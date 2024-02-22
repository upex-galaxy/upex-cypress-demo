import { dragabble } from '../../../support/page/GX3-2403-DragabblePage';

describe('ToolsQA | Interactions | Dragabble', () => {
	beforeEach('Precondition: be located in the page dragabble', () => {
		cy.visit('/dragabble');
		cy.url().should('contain', 'dragabble');
		cy.viewport(1920, 1080);
	});

	it('2404 | TC1: Validate drag box can be dragged in any direction on the Simple tab', () => {
		dragabble.selectSimpleTab()
			.should('exist');
		dragabble.elements.dragmeBoxClick()
			.should('exist')
			.should('have.css', 'cursor', 'move');
		dragabble.dragBoxInRandomDirection();
	});
	it('2404 | TC2: Validate drag box can be moved only on the axi X on the Restricted tab', () => {
		dragabble.selectAxisRestrictedTab()
			.should('exist');
		dragabble.elements.restrictedXBox()
			.should('have.css', 'top', '0px');
		dragabble.draggableBoxRestrictedToXAxi();
	});
	it ('2404 | TC3: Validate drag box can be moved only on the axi Y on the Restricted tab',() => {
		dragabble.selectAxisRestrictedTab()
			.should('exist');
		dragabble.elements.restrictedYBox()
			.should('have.css', 'left', '0px');
		dragabble.draggableBoxRestrictedToYAxi();
	});
	it('2404 | TC4: Validate drag box can be moved only inside on containmentWrapper', () => {
		dragabble.selectContainerRestrictedTab()
			.should('exist');
		dragabble.elements.containmentBox()
			.should('exist')
			.and('contain', 'contained within the box');
		dragabble.elements.dragContainedBox()
			.should('exist')
			.should('be.visible');
		dragabble.containerBoxRestricted();
	});
	it('2404 | TC5: Validate the text -Iam contained within my parent- only can be move inside on his box', () => {
		dragabble.selectContainerRestrictedTab()
			.should('exist');
		dragabble.elements.textContainedBox()
			.should('exist')
			.and('have.css', 'border', '0px none rgb(51, 51, 51)');
		dragabble.containerTextRestricted();
	});
	it('2404 | TC6: Validate than cursor style is bottom', () => {
		dragabble.elements.cursorStyleTabClick().click()
			.should('exist');
		//valido que cambie el cursor
		dragabble.elements.cursorCenterSelect()
			.trigger('mousedown', { which: 1 })
			.should('have.css', 'cursor', 'move');
		dragabble.centerCursorStyle();
	});
	it('2404 | TC7: Validate than cursor position is stick to the center', () => {
		dragabble.elements.cursorStyleTabClick().click()
			.should('exist');
		dragabble.elements.cursorBottomSelect()
			.trigger('mousedown', { which: 1 },{ force:true })
			.trigger('mousemove',{ force:true });
		cy.get('body').invoke('css', 'cursor').should('equal', 'auto');
		dragabble.bottomCursorStyle();
	});

});
