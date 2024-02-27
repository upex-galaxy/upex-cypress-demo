import { dragabble } from '@pages/GX3-2403-DragabblePage';

describe('ToolsQA | Interactions | Dragabble', () => {
	beforeEach('Precondition: be located in the page dragabble', () => {
		cy.visit('/dragabble');
		cy.url().should('contain', 'dragabble');
	});
	const tabList= ['simple','axisRestriction','containerRestriction','cursorStyle'];

	it('2404 | TC1: Validate drag box can be dragged in any direction on the Simple tab', () => {
		dragabble.selectTab(tabList[0]);
		dragabble.elements.tabNameSelect(tabList[0]).should('have.class','active');
		dragabble.dragBoxInRandomDirection('dragmeBoxClick');
		dragabble.elements.dragmeBoxClick()
			.should('exist')
			.should('have.css', 'cursor', 'move');
		// dragabble.dragBoxInRandomDirection().then(({ initialCoords, endCoords }) => {
		// 	expect(initialCoords).not.equal(endCoords);
		// });
	});
	it('2404 | TC2: Validate drag box only in restricted axis', () => {
		dragabble.selectTab(tabList[1]);
		dragabble.elements.tabNameSelect(tabList[1]).should('have.class','active');
		dragabble.dragabbleBoxRestrictedToAxis('restrictedYBox', 'Y');
		dragabble.elements.restrictedYBox().should('have.css', 'left', '0px');
		dragabble.dragabbleBoxRestrictedToAxis('restrictedXBox', 'X');
		dragabble.elements.restrictedXBox().should('have.css', 'top', '0px');
	});
	it('2404 | TC3: Validate drag element inside of Contained Restricted ', () => {
		dragabble.selectTab(tabList[2]);
		dragabble.elements.tabNameSelect(tabList[2]).should('have.class','active');
		dragabble.dragElementRestricted('containmentBox');
		dragabble.elements.containmentBox().should('contain','contained within the box');
		dragabble.dragElementRestricted('textContainedBox');
		dragabble.elements.textContainedBox().should('have.css', 'border', '0.888889px solid rgb(221, 221, 221)');
	});

	it('2404 | TC4: Validate than cursor style is bottom', () => {
		dragabble.selectTab(tabList[3]);
		dragabble.elements.tabNameSelect(tabList[3]).should('have.class','active');
		//valido que cambie el cursor
		dragabble.elements.cursorCenterSelect()
			.trigger('mousedown', { which: 1 })
			.should('have.css', 'cursor', 'move');
		dragabble.centerCursorStyle();
	});
	it('2404 | TC5: Validate than cursor position is stick to the center', () => {
		dragabble.selectTab(tabList[3]);
		dragabble.elements.tabNameSelect(tabList[3]).should('have.class','active');
		dragabble.dragBoxInRandomDirection('cursorBottomSelect');
		dragabble.elements.cursorBottomSelect()
			.trigger('mousedown', { which: 1 },{ force:true })
			.trigger('mousemove',{ force:true });
		cy.get('body').invoke('css', 'cursor').should('equal', 'auto');
	});

});
