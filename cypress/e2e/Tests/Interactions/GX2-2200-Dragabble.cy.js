import { removeLogs } from '@helper/RemoveLogs';
import { dragabble } from '@pages/Dragabble.Page';

describe('✅ToolsQA | Interactions | Dragabble', () => {
	/* beforeEach('Precondition: be located in the page', () => {
		//cy.visit('/dragabble');
		cy.viewport(1920, 1080);
		cy.visit('/dragabble');
		cy.url().should('contain', 'dragabble');
	});

	it('2201 | TC1: Validate box area  can be dragged as desired in any direction on the Simple tab', () => {
		dragabble.elements.draggableBoxSelect()
			.should('exist')
			.should('have.css', 'cursor', 'move');
		dragabble.dragBoxInRandomDirection();
	});
	
	it('2201 | TC2: Validate boxes area move only on the axi X on the Axis Restricted tab', () => {
		dragabble.selectAxisRestrictedTab();
		dragabble.elements.restrictedXBox().should('have.css', 'top', '0px');
		dragabble.draggableBoxRestrictedToXAxi();
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
			.and('contain', 'contained within the box');
		dragabble.elements.moveContainedBox()
			.should('exist')
			.should('be.visible');
		dragabble.containerBoxRestricted();
			
	});
	
	it('2201 | TC5: Validate text of box can not be dragged out of the delimited area of action on the Container Restricted tab', () => {
		dragabble.selectContainerRestrictedTab();
		dragabble.elements.moveContainedText()
			.should('exist')
			.and('have.css', 'border', '0px none rgb(51, 51, 51)');
		dragabble.containerTextRestricted();
	});

	it('2201 | TC6: Validate cursor must stick to the center of the box if “I will always stick to the center” box is dragged on the Cursor Style tab', () => {
		dragabble.elements.cursorStyleTabClick().click();
		//valido que cambie el cursor
		dragabble.elements.cursorCenterSelect()
			.trigger('mousedown', { which: 1 })
			.should('have.css', 'cursor', 'move');
		dragabble.centerCursorStyle();
	});

	it('2201 | TC7: Validate the cursor will stick to the bottom center of the box and the cursor hovering icon changes back to the default cursor ico if "My cursor is at bottom" box is dragged on the "Cursor Style" tab', () => {
		dragabble.elements.cursorStyleTabClick().click();
		dragabble.elements.cursorBottomSelect()
			.trigger('mousedown', { which: 1 },{ force:true })
			.trigger('mousemove',{ force:true });
		cy.get('body').invoke('css', 'cursor').should('equal', 'auto');
		dragabble.bottomCursorStyle();
	});	 */
	//! Salteamos el test ya que Daniel pidió esto, no se puede hacer la aserción del puntero del mouse.
	// it.only('2201 | TC8: Validate the cursor will stick to the top left outside of the box and the cursor icon changes to a "+" if dashed box "My cursor is at top left" is displayed on the "Cursor Style" tab', () => {
	// 	dragabble.elements.cursorStyleTabClick().click();
	// 	dragabble.topLeftCursorStyle();
	// 	dragabble.elements.cursorTopLeftSelect().trigger('mousemove')
	// 		.should(($button) => {
	// 			const rect = $button[0].getBoundingClientRect(); //saco la ubicación del mouse
	// 			expect(rect.top).to.equal(0);
	// 			expect(rect.left).to.equal(0);
	// 		});
	// 		.should('have.css', 'cursor', 'crosshair');
	// });
});

removeLogs();
