import { removeLogs } from '@helper/RemoveLogs';

describe('✅ToolsQA | Interactions | Dragabble', () => {
	beforeEach('Precondition: be located in the page', () => {
		cy.visit('/dragabble');
		cy.url().should('contain', 'dragabble');
	});

	it('2201 | TC1: Validate box area  can be dragged as desired in any direction on the Simple tab', () => {

	});
	
	it('2201 | TC2: Validate boxes area move only on the axis indicated on the Axis Restricted tab', () => {

	});
	
	it('2201 | TC3: Validate box can not be dragged out of the delimited area of action on the Container Restricted tab', () => {

	});
	
	it('2201 | TC4: Validate text of box can not be dragged out of the delimited area of action on the Container Restricted tab', () => {

	});

	it('2201 | TC5: Validate cursor must stick to the center of the box if “I will always stick to the center” box is dragged on the Cursor Style tab', () => {

	});

	it('2201 | TC6: Validate the cursor will stick to the top left outside of the box and the cursor icon changes to a "+" if dashed box "My cursor is at top left" is displayed on the "Cursor Style" tab', () => {

	});
	it('2201 | TC7: Validate the cursor will stick to the bottom center of the box and the cursor hovering icon changes back to the default cursor ico if "My cursor is at bottom" box is dragged on the "Cursor Style" tab', () => {

	});



});



















removeLogs();