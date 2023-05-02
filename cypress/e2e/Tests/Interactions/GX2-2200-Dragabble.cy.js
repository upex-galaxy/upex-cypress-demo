import { removeLogs } from '@helper/RemoveLogs';
import { dragabble } from '@pages/Dragabble.Page';


describe('✅ToolsQA | Interactions | Dragabble', () => {
	beforeEach('Precondition: be located in the page', () => {
		//cy.visit('/dragabble');
		cy.visit('/dragabble');
		cy.url().should('contain', 'dragabble');
	});

	it('2201 | TC1: Validate box area  can be dragged as desired in any direction on the Simple tab', () => {
		dragabble.elements.draggableBoxSelect().should('exist');
		dragabble.dragBoxInRandomDirection();

	});
	
	it('2201 | TC2: Validate boxes area move only on the axi X on the Axis Restricted tab', () => {
		dragabble.selectAxisRestrictedTab();
		dragabble.elements.restrictedXBox().should('have.css', 'top', '0px');
		dragabble.draggableBoxRestrictedToXAxi();

		// cy.get('@coord2').then((onlyX) => {
		// 	const { xcoord } = onlyX;
		// 	dragabble.elements.onlyXSelect().should('have.css', 'left', `${xcoord}px`);
		// });

	});
	it('2201 | TC3: Validate boxes area move only on the axi Y on the Axis Restricted tab', () => {
		dragabble.selectAxisRestrictedTab();
		dragabble.elements.restrictedYBox().should('have.css', 'left', '0px');
		dragabble.draggableBoxRestrictedToYAxi();

		

	});
	
	it('2201 | TC4: Validate box can not be dragged out of the delimited area of action on the Container Restricted tab', () => {
		dragabble.selectContainerRestrictedTab();
		dragabble.elements.containmentWrapper()
			.should('exist')
			.and('have.css', 'border', '1.6px solid rgb(204, 204, 204)');
		dragabble.elements.moveContainedBox()
			.should('exist')
			.should('be.visible');
		dragabble.containerBoxRestricted();

	});
	
	it.only('2201 | TC5: Validate text of box can not be dragged out of the delimited area of action on the Container Restricted tab', () => {
		dragabble.selectContainerRestrictedTab();
		dragabble.elements.moveContainedText()
			.should('exist')
			.and('have.css', 'border', '0px none rgb(51, 51, 51)');
		dragabble.containerTextRestricted();
	});

	it('2201 | TC6: Validate cursor must stick to the center of the box if “I will always stick to the center” box is dragged on the Cursor Style tab', () => {
		dragabble.elements.cursorStyleTabClick().click();
		dragabble.centerCursorStyle();
	});

	// it('2201 | TC7: Validate the cursor will stick to the top left outside of the box and the cursor icon changes to a "+" if dashed box "My cursor is at top left" is displayed on the "Cursor Style" tab', () => {

	// });
	// it('2201 | TC8: Validate the cursor will stick to the bottom center of the box and the cursor hovering icon changes back to the default cursor ico if "My cursor is at bottom" box is dragged on the "Cursor Style" tab', () => {

	// });



});

removeLogs();