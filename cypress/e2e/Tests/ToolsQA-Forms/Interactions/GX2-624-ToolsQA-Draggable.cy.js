import { simplepage } from '@pages/GX2-624 ToolsQA-Draggable/SimplePage';
import { axisrestricted } from '@pages/GX2-624 ToolsQA-Draggable/AxisRestricted';
import { containerrestricted } from '@pages/GX2-624 ToolsQA-Draggable/ContainerRestricted';
import { cursorstyle } from '@pages/GX2-624 ToolsQA-Draggable/CursorStyle';

describe.skip('US GX2-624 | TS: ✅ToolsQA | Interactions | Dragabble', () => {
	beforeEach('Precondition', () => {
		cy.visit('https://demoqa.com/dragabble');
	});

	it('GX2-625 | TC1: Validate that the user can dragg the box “drag me” anywhere', () => {
		simplepage.CheckSimpletab().should('exist').and('have.text', 'Simple');

		cy.SimpleBox();

		cy.get('@coord').then((SimpleBox) => {
			const { xcoord, ycoord } = SimpleBox;
			simplepage.DragBox().should('have.css', 'left', `${xcoord}px`).and('have.css', 'top', `${ycoord}px`);
		});
	});
	it('GX2-625 | TC2:  Validate that the user can drag the box “only X” anywhere in an X coordinate in the “Axis restricted” tab', () => {
		axisrestricted.ARtab().should('exist').and('have.text', 'Axis Restricted').click();
		axisrestricted.Xbox().should('have.css', 'top', '0px');

		cy.OnlyX();

		cy.get('@coord2').then((OnlyX) => {
			const { xcoord } = OnlyX;
			axisrestricted.Xbox().should('have.css', 'left', `${xcoord}px`);
		});
	});

	it('GX2-625 | TC3: Validate that the user can drag the box “only Y” anywhere in an Y coordinate in the “Axis restricted” tab', () => {
		axisrestricted.ARtab().click();
		axisrestricted.Ybox().should('have.css', 'left', '0px');

		cy.OnlyY();

		cy.get('@coord3').then((OnlyY) => {
			const { ycoord } = OnlyY;
			axisrestricted.Ybox().should('have.css', 'top', `${ycoord}px`);
		});
	});

	it('GX2-625 | TC4: Validate that the the text “Im contained within the box” cant be dragged out of the delimited area of action in the “Container restricted tab”', () => {
		containerrestricted.CRtab().click();
		containerrestricted.CRtab().should('exist').and('have.text', 'Container Restricted');

		cy.WithinBox();

		cy.get('@coord4').then((WithinBox) => {
			const { ycoord } = WithinBox;
			containerrestricted.BoxWithin().should('have.css', 'top', '106px').and('not.have.css', 'top', `${ycoord}px`);
		});
	});

	it('GX2-625 | TC5: Validate that the the text “Im contained within the box” cant be dragged out of the delimited area of action in the “Container restricted tab”', () => {
		containerrestricted.CRtab().click();

		cy.WithinParent();

		cy.get('@coord5').then((WithinParent) => {
			const { xcoord } = WithinParent;
			containerrestricted.ParentWithin().should('not.have.css', 'left', `${xcoord}px`);
		});
	});

	it('GX2-625 | TC6: Validate that the the cursor sticks to the center of the box in the “I will always stick to the center” box.', () => {
		cursorstyle.CStab().click();
		cursorstyle.MiddleBox().should('have.text', 'I will always stick to the center').and('have.css', 'cursor', 'move');

		cy.SticktoCenter();

		cy.get('@variables').then((SticktoCenter) => {
			const { initialx, initialy, finalx, finaly } = SticktoCenter;
			expect(initialx).not.to.equal(finalx);
			expect(initialy).not.to.equal(finaly);
		});
	});
	it('GX2-625 | TC7: Validate that the the cursor stays in the upper left corner at the “my cursor is at the top left” box.', () => {
		cursorstyle.CStab().click();
		cursorstyle.TopleftBox().should('exist').and('have.text', 'My cursor is at top left');

		cy.StickTopLeft();

		cy.get('@variables2').then((StickTopLeft) => {
			const { initialx, initialy, finalx, finaly } = StickTopLeft;
			expect(initialx).not.to.equal(finalx);
			expect(initialy).not.to.equal(finaly);
		});
	});

	it('GX2-625 | TC8: Validate that the the cursor stays at the bottom of the “my cursor is at the top left” box.', () => {
		cursorstyle.CStab().click();
		cursorstyle.BottomBox().should('exist').and('have.text', 'My cursor is at bottom');

		cy.SticktoBottom();

		cy.get('@variables3').then((SticktoBottom) => {
			const { initialx, initialy, finalx, finaly } = SticktoBottom;
			expect(initialx).not.to.equal(finalx);
			expect(initialy).not.to.equal(finaly);
		});
	});
});

Cypress.on('uncaught:exception', () => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
});
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log;
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr' || (opts.displayName === 'fetch' && opts.url.startsWith('https://'))) {
		return;
	}
	return origLog(opts, ...other);
};
