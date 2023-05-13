import { dragabble } from '@pages/Dragabble';

describe('GX2-2131-ToolsQA-Interactions-Dragabble', () => {
	let the;
	beforeEach('PRC User must be in the /dragabble page', () => {
		cy.visit('/dragabble');
		cy.fixture('/DOM/fixtureDragabble').then(fixt => {
			the = fixt;
		});
	});

	it('TC1: Validate four tabs are shown but only the “Simple” is displayed when open the URL', () => {
		dragabble.get.tabSimple;
		dragabble.get.tabAxis;
		dragabble.get.tabContainter;
		dragabble.get.tabCursor;

		dragabble.get.tabSimple().should('be.visible').invoke('attr', 'aria-selected').should('eq', 'true');
		dragabble.get.tabAxis().should('be.visible').invoke('attr', 'aria-selected').should('eq', 'false');
		dragabble.get.tabContainter().should('be.visible').invoke('attr', 'aria-selected').should('eq', 'false');
		dragabble.get.tabCursor().should('be.visible').invoke('attr', 'aria-selected').should('eq', 'false');
	});

	it('TC2: Validate only one tab is displayed at the same time', () => {
		//selects the cursor style tab
		dragabble.clickTabCursor();
		dragabble.get.tabCursor().invoke('attr', 'aria-selected').should('eq', 'true');

		//selects the Simple tab and checks it is selected and the others not
		dragabble.clickTabSimple();
		dragabble.get.tabSimple().should('be.visible').invoke('attr', 'aria-selected').should('eq', 'true');
		dragabble.get.tabAxis().should('be.visible').invoke('attr', 'aria-selected').should('eq', 'false');
		dragabble.get.tabContainter().should('be.visible').invoke('attr', 'aria-selected').should('eq', 'false');
		dragabble.get.tabCursor().should('be.visible').invoke('attr', 'aria-selected').should('eq', 'false');
	});

	it('TC3: Validate “Drag me” area can be dragged as desired in any direction in the “Simple” tab', () => {
		let position;
		let position2;
		//calculates actual position
		dragabble.get.dragBox().then($el => {
			positionInit = $el.position();
		});
		//drags
		dragabble.clickTabSimple();
		dragabble.dragSimple();
		//calculates final position and compares to init position
		dragabble.get.dragBox().then($el => {
			positionFinal = $el.position();
			expect(positionInit).not.equal(positionFinal);
		});
	});

	it('TC4: Validate “Only X” area only can be dragged on the X axis “Axis Restricted” tab', () => {
		// calculates init position
		let positionInitX;
		let positionInitY;
		let positionFinalX;
		let positionFinalY;

		dragabble.clickTabAxis();
		dragabble.get.restrictedX().then($x => {
			positionInitX = Math.round($x.position().left);
			positionInitY = Math.round($x.position().top);
			cy.log(positionInitX, positionInitY);
		});
		//drag onlyX
		dragabble.clickTabAxis();
		dragabble.dragOnlyX();
		// calculates final position and compares with init
		dragabble.get.restrictedX().then($x => {
			positionFinalX = Math.round($x.position().left);
			positionFinalY = Math.round($x.position().top);
			expect(positionFinalX, the.assertTC4a).not.deep.equal(positionInitX);
		});
	});

	it('TC5: Validate “Only Y” area only can be dragged on the Y axis in the “Axis Restricted” tab', () => {
		// calculates init position
		let positionInitX;
		let positionInitY;
		let positionFinalX;
		let positionFinalY;

		dragabble.clickTabAxis();
		dragabble.get.restrictedY().then($y => {
			positionInitX = Math.round($y.position().left);
			positionInitY = Math.round($y.position().top);
			cy.log(positionInitX, positionInitY);
		});

		//drag onlyY
		dragabble.clickTabAxis();
		dragabble.dragOnlyY();

		// calculates final position and compares with init
		dragabble.get.restrictedY().then($y => {
			positionFinalX = Math.round($y.position().left);
			positionFinalY = Math.round($y.position().top);
			cy.log(positionFinalX);
			cy.log(positionFinalY);
			expect(positionFinalY, the.assertTC5a).not.deep.equal(positionInitY);
		});
	});

	it("TC6: Validate 'I'm contained within the box' box can't be dragged out of the delimited area of action in the 'Container Restricted' tab", () => {
		dragabble.clickTabContainer();
		dragabble.dragContainedBoxText();
		dragabble.get.containmentBox().should('have.class', the.boxText);
	});

	it("TC7: Validate “I'm contained within my parent” text can't be dragged out of the delimited area of action “Container Restricted” tab.", () => {
		dragabble.clickTabContainer();
		dragabble.dragContainedParentText();
	});

	it('TC8: Validate moving “I will always stick to the center” box in any direction. ', () => {
		randomX = Cypress._.random(0, 900);
		randomY = Cypress._.random(0, 900);
		//get init position -
		dragabble.clickTabCursor();
		dragabble.get
			.cursorCenter()
			.trigger('mousedown', { which: 1 })
			.then($pos => {
				topInit = $pos.offset().top;
				leftInit = $pos.offset().left;
			})
			//drag
			.trigger('mousemove', { which: 1, pageX: randomX, pageY: randomY })
			.then($pos => {
				topFin = $pos.offset().top;
				leftFin = $pos.offset().left;
				expect(topInit).not.equal(topFin);
				expect(leftInit).not.equal(leftFin);
			})
			.trigger('mouseup');
	});

	it('TC9: Validate moving “I will always stick to the center” box in any direction', () => {
		// calculate initial position
		let topInit;
		let leftInit;
		dragabble.clickTabCursor();
		dragabble.get
			.cursorTopLeft()
			.trigger('mousedown', { which: 1 })
			.then($pos => {
				topInit = $pos.offset().top;
				leftInit = $pos.offset().left;
			})
			.trigger('mouseup');

		// move box
		dragabble.get.cursorTopLeft();
		dragabble.dragCursorTopLeft();

		// get final position and compare
		dragabble.get.cursorTopLeft().then($pos => {
			topFinal = $pos.offset().top;
			leftFinal = $pos.offset().left;

			expect(topInit).not.equal(topFinal);
			expect(leftInit).not.equal(leftFinal);
		});
	});

	it.skip("TC10: Validate moving 'My cursor is at bottom' box in any direction", () => {
		// calculate initial position
		let topInit;
		let leftInit;
		dragabble.clickTabCursor();
		dragabble.get
			.cursorBottom()
			.trigger('mousedown', { which: 1 })
			.then($pos => {
				topInit = $pos.offset().top;
				leftInit = $pos.offset().left;
			})
			.trigger('mouseup');

		// move box
		dragabble.get.cursorBottom();
		dragabble.dragCursorBottom();

		// get final position
		dragabble.get.cursorBottom().then($pos => {
			topFinal = $pos.offset().top;
			leftFinal = $pos.offset().left;
			//compare positions
			expect(topInit).not.equal(topFinal);
			expect(leftInit).not.equal(leftFinal);
		});
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
