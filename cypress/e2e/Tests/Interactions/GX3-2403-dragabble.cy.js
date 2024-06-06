import { dragabble } from '@pages/GX3-2403-DragabblePage';

describe.skip('ToolsQA | Interactions | Dragabble', () => {
	beforeEach('Precondition: be located in the page dragabble', () => {
		cy.visit('/dragabble');
		cy.url().should('contain', 'dragabble');
	});
	const tabList= ['simple','axisRestriction','containerRestriction','cursorStyle'];

	it('2404 | TC1: Validate drag box can be dragged in any direction on the Simple tab', () => {
		dragabble.selectTab(tabList[0]);
		dragabble.elements.dragmeBoxClick()
			.should('exist')
			.should('have.css', 'cursor', 'move');
		dragabble.elements.tabNameSelect(tabList[0]).should('have.class','active');
		dragabble.dragBoxInRandomDirection('dragmeBoxClick').then(({ initialCoords, finalCoords } ) => {
			expect(finalCoords.left).not.to.be.equal(initialCoords.left);
			expect(finalCoords.top).not.to.be.equal(initialCoords.top);
		});
	});
	it('2404 | TC2: Validate drag box only in restricted axis', () => {
		dragabble.selectTab(tabList[1]);
		dragabble.elements.tabNameSelect(tabList[1]).should('have.class','active');
		dragabble.dragabbleBoxRestrictedToAxis('restrictedYBox', 'Y').then(({ initialCoords, finalCoords }) => {
			dragabble.elements.restrictedYBox().should('have.css', 'left', '0px');
			expect(finalCoords.top).not.to.be.equal(initialCoords.top);
		});
		dragabble.dragabbleBoxRestrictedToAxis('restrictedXBox', 'X').then(({ initialCoords, finalCoords }) => {
			dragabble.elements.restrictedXBox().should('have.css', 'top', '0px');
			expect(finalCoords.left).not.to.be.equal(initialCoords.left);
		});
	});
	it('2404 | TC3: Validate drag element inside of Contained Restricted ', () => {
		dragabble.selectTab(tabList[2]);
		dragabble.elements.tabNameSelect(tabList[2]).should('have.class','active');
		dragabble.dragElementRestricted('containmentBox','dragContainedBox').then(({ initialCoords, finalCoords }) => {
			dragabble.elements.containmentBox({ force: true }).should('contain','contained within the box');
			expect(finalCoords.left).not.to.be.equal(initialCoords.left);
		});
		dragabble.dragElementRestricted('textContainedBox','dragContainedParent').then(({ initialCoords, finalCoords }) => {
			dragabble.elements.textContainedBox({ force: true }).should('contain','contained within my parent');
			expect(finalCoords.left).not.to.be.equal(initialCoords.left);
		});
	});
	it('2404 | TC4: Validate than cursor position is stick to the center', () => {
		dragabble.selectTab(tabList[3]);
		dragabble.elements.tabNameSelect(tabList[3]).should('have.class','active');
		dragabble.validateCursorPositionWhileMoving('cursorCenterSelect', 'center').then(({ cursorX, cursorY, expectedX, expectedY }) => {
			expect(cursorX).to.be.closeTo(expectedX, 60); // Tolerancia de 60 píxel
			expect(cursorY).to.be.closeTo(expectedY, 60);
		});
	});
	it('2404 | TC5: Validate than cursor style is bottom', () => {
		dragabble.selectTab(tabList[3]);
		dragabble.elements.tabNameSelect(tabList[3]).should('have.class','active');
		dragabble.validateCursorPositionWhileMoving('cursorBottomSelect', 'bottom').then(({ cursorX, cursorY, expectedX, expectedY }) => {
			expect(cursorX).to.be.closeTo(expectedX, 60); // Tolerancia de 60 píxel
			expect(cursorY).not.to.be.equal(expectedY);
			dragabble.elements.cursorBottomSelect({ force: true }).should('contain','bottom');
		});
	});
	it('2404 | TC6: Validate than cursor stick is on the top left', () => {
		dragabble.selectTab(tabList[3]);
		dragabble.elements.tabNameSelect(tabList[3]).should('have.class','active');
		dragabble.validateCursorPositionWhileMoving('cursorTopLeftSelect', 'topLeft').then(({ cursorX, cursorY, expectedX, expectedY }) => {
			expect(cursorX).to.be.closeTo(expectedX);
			expect(cursorY).to.be.closeTo(expectedY);
			dragabble.elements.cursorTopLeftSelect({ force: true }).should('contain','top left');
		});
	});
});