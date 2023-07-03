import { droppable } from '@pages/Interactions/GX2-4365-Droppable.page';
import { removeLogs } from '@helper/RemoveLogs';

describe('This is your test project title', () => {
	beforeEach(() => {
		droppable.visit();
		droppable.tabSimple().should('have.attr', 'aria-selected', 'true');
	});

	it('4366 | Validate Tabs “Simple  must be shown', () => {
		droppable.SeleccionarSimple();
		droppable.tabSimple().should('have.attr', 'aria-selected', 'true');
		droppable.tabAccept().should('have.attr', 'aria-selected', 'false');
		droppable.tabPropogation().should('have.attr', 'aria-selected', 'false');
		droppable.tabRevert().should('have.attr', 'aria-selected', 'false');
	});
	it('4366 |  Validate tab “Accept” must be shown', () => {
		droppable.SeleccionarAccept();
		droppable.tabAccept().should('have.attr', 'aria-selected', 'true');
		droppable.tabPropogation().should('have.attr', 'aria-selected', 'false');
		droppable.tabRevert().should('have.attr', 'aria-selected', 'false');
		droppable.tabSimple().should('have.attr', 'aria-selected', 'false');
	});

	it('4366 | Validate Tabs “Prevent Propagation” must be shown', () => {
		droppable.SeleccionarPropogation();
		droppable.tabPropogation().should('have.attr', 'aria-selected', 'true');
		droppable.tabRevert().should('have.attr', 'aria-selected', 'false');
		droppable.tabSimple().should('have.attr', 'aria-selected', 'false');
		droppable.tabAccept().should('have.attr', 'aria-selected', 'false');
	});
	it('4366 | Validate Tabs “Revert Draggable”  must be shown', () => {
		droppable.SeleccionarRevert();
		droppable.tabRevert().should('have.attr', 'aria-selected', 'true');
		droppable.tabSimple().should('have.attr', 'aria-selected', 'false');
		droppable.tabAccept().should('have.attr', 'aria-selected', 'false');
		droppable.tabPropogation().should('have.attr', 'aria-selected', 'false');
	});

	it('4366 |  Validate tab "Simple” is displayed by default', () => {
		droppable.visit();
		droppable.tabSimple().should('have.attr', 'aria-selected', 'true');
	});

	it('4366 |  Validate on tab simple “Drag me” dashed area must be displayed.', () => {
		droppable.SeleccionarSimple();
		droppable.draggable().should('exist');
	});
	it('4366 |  Validate on tab simple “Drop here” bordered area must be displayed.', () => {
		droppable.SeleccionarSimple();
		//droppable.droppable1().should('exist').should('have.text', 'Drop here');
	});

	it.only('4366 |  Validate on tab simple when “Drag me” area is dropped on the “Drop here” area the “Drop here” area changes the background color to blue.', () => {
		droppable.SeleccionarSimple();
		//cy.contains('p', 'Drop here');
		cy.get('#draggable').drag('#droppable',target:'top');
	});

	it('4366 |   Validate when “Drag me” area is dropped on the “Drop here” area, text “Dropped!” is displayed', () => {});
	it('4366 |   Validate “Acceptable” dashed area must be displayed.', () => {
		droppable.SeleccionarAccept();
		//droppable.acceptable().should('exist').should('have.text', 'Acceptable');
	});
	it('4366 |   Validate “Not Acceptable” dashed area must be displayed.', () => {
		droppable.SeleccionarAccept();
		//droppable.notAcceptable().should('exist').should('have.text', 'Not  Acceptable');
	});
	it('4366 |   Validate “Drop here” bordered area must be displayed.', () => {
		droppable.SeleccionarAccept();
		//droppable.droppable().should('exist').should('have.text', 'Drop here');
	});
	it('4366 |   Validate if “Acceptable” area is dragged then“Drop here” area changes the background color to Green.', () => {});
	it('4366 |   Validate if “Acceptable” area is dropped in the “Drop here” area then “Drop here” area changes the background color to Blue and text “Dropped!” is displayed.', () => {});
	it('4366 |   Validate “Drag me” dashed area must be displayed..', () => {});
	it('4366 |    Validate “Outer Droppable” bordered area must be displayed and contains “Inner droppable (not greedy)” area inside.', () => {});
	it('4366 |    Validate “Outer Droppable” bordered area must be displayed and contains “Inner droppable (greedy)” area inside.', () => {});

	it('4366 |   Validate on the first “Outer Droppable” area, if  “Drag me” area is dragged then “Outer Droppable” area changes the background color to Green.', () => {});
	it('4366 | Validate on the second "Outer Droppable" área if “Drag me” area is dragged to “Inner droppable (greedy)” area then the “Inner droppable (greedy)” area changes the background color to Light Green', () => {});
	it('4366 | Validate on “Revert Draggable” tab,“Will Revert” dashed area must be displayed.', () => {});
	it('4366 | Validate on “Revert Draggable” tab,“Not Revert” dashed area must be displayed.', () => {});
	it('4366 | Validate on “Revert Draggable” tab,“Drop here” bordered area must be displayed.', () => {});
	it('4366 | Validate on “Drop here” if “Will Revert” area or “Not Revert” area is dragged then “Drop here” area changes the background color to Green.', () => {});
	it('4366 | Validate on “Drop here” if “Will Revert” area is dropped on the “Drop here” area then “Will Revert” area goes back to the initial position and “Drop here” area changes the background color to Blue and text “Dropped” is displayed.', () => {});
	it('4366 | Validate on “Drop here” if “Not Revert” area is dropped on the “Drop here” area then “Not Revert” area can’t be removed from the “Drop here” area and “Drop here” area changes the background color to Blue and text “Dropped” is displayed', () => {});
});
removeLogs();
