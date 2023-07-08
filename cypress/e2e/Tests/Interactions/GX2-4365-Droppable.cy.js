import { droppable } from '@pages/Interactions/GX2-4365-Droppable.page';
import { removeLogs } from '@helper/RemoveLogs';
import data from '../../../fixtures/data/GX2-4365-Droppable.Page.json';

describe('This is your test project title', () => {
	beforeEach(() => {
		droppable.visit();
		droppable.tabSimple().should('have.attr', 'aria-selected', 'true');
	});

	it('4366 | TC 1: Validate Tabs “Simple  must be shown', () => {
		droppable.SeleccionarSimple();
		droppable.tabSimple().should('have.attr', 'aria-selected', 'true');
		droppable.tabAccept().should('have.attr', 'aria-selected', 'false');
		droppable.tabPropogation().should('have.attr', 'aria-selected', 'false');
		droppable.tabRevert().should('have.attr', 'aria-selected', 'false');
	});

	it('4366 | TC 2: Validate tab “Accept” must be shown', () => {
		droppable.SeleccionarAccept();
		droppable.tabAccept().should('have.attr', 'aria-selected', 'true');
		droppable.tabPropogation().should('have.attr', 'aria-selected', 'false');
		droppable.tabRevert().should('have.attr', 'aria-selected', 'false');
		droppable.tabSimple().should('have.attr', 'aria-selected', 'false');
	});

	it('4366 | TC 3: Validate Tabs “Prevent Propagation” must be shown', () => {
		droppable.SeleccionarPropogation();
		droppable.tabPropogation().should('have.attr', 'aria-selected', 'true');
		droppable.tabRevert().should('have.attr', 'aria-selected', 'false');
		droppable.tabSimple().should('have.attr', 'aria-selected', 'false');
		droppable.tabAccept().should('have.attr', 'aria-selected', 'false');
	});

	it('4366 | TC 4: Validate Tabs “Revert Draggable”  must be shown', () => {
		droppable.SeleccionarRevert();
		droppable.tabRevert().should('have.attr', 'aria-selected', 'true');
		droppable.tabSimple().should('have.attr', 'aria-selected', 'false');
		droppable.tabAccept().should('have.attr', 'aria-selected', 'false');
		droppable.tabPropogation().should('have.attr', 'aria-selected', 'false');
	});

	it('4366 | TC 5: Validate tab "Simple” is displayed by default', () => {
		droppable.visit();
		droppable.tabSimple().should('have.attr', 'aria-selected', 'true');
	});

	it('4366 | TC 6: Validate on tab simple “Drag me” dashed area must be displayed.', () => {
		droppable.SeleccionarSimple();
		droppable.draggable().should('exist');
	});

	it('4366 | TC 7: Validate on tab simple “Drop here” bordered area must be displayed.', () => {
		droppable.SeleccionarSimple();
		droppable.droppable().should('exist').should('have.text', data.drophere);
	});

	it('4366 | TC 8: Validate on tab simple when “Drag me” area is dropped on the “Drop here” area the “Drop here” area changes the background color to blue.', () => {
		droppable.SeleccionarSimple();
		droppable.draggable().drag(data.Droppable, {
			force: true,
		});
		droppable.droppable().should('have.css', 'background-color', data.azul);
	});

	it('4366 | TC 9: Validate when “Drag me” area is dropped on the “Drop here” area, text “Dropped!” is displayed', () => {
		droppable.SeleccionarSimple();
		cy.contains('p', 'Drop here');
		droppable.draggable().drag(data.Droppable, {
			force: true,
		});
		droppable.droppable().find('p').should('contain', data.dropped);
	});

	it('4366 | TC 10:  Validate “Acceptable” dashed area must be displayed.', () => {
		droppable.SeleccionarAccept();
		droppable.acceptable().should('exist').should('have.text', data.Acceptable);
	});

	it('4366 | TC 11:  Validate “Not Acceptable” dashed area must be displayed.', () => {
		droppable.SeleccionarAccept();
		droppable.notAcceptable().should('exist').should('have.text', data.NotAcceptable);
	});

	it('4366 | TC 12: Validate “Drop here” bordered area must be displayed.', () => {
		droppable.SeleccionarAccept();
		droppable.droppable().should('exist').should('have.text', data.drophere);
	});

	it('4366 | TC 13: Validate if “Acceptable” area is dragged then“Drop here” area changes the background color to Green.', () => {
		droppable.SeleccionarAccept();
		droppable.acceptable().trigger('mousedown', { which: 1 });
		droppable.accept().trigger('mousemove');
		droppable.accept().should('have.css', 'background-color', data.verdeclaro);
	});

	it('4366 | TC 14: Validate if “Acceptable” area is dropped in the “Drop here” area then “Drop here” area changes the background color to Blue and text “Dropped!” is displayed.', () => {
		droppable.SeleccionarAccept();
		droppable.acceptable().drag(data.DatoAccept, { force: true });
		droppable.accept().should('have.css', 'background-color', data.azul).should('contain', 'Dropped!');
	});

	it('4366 | TC 15: Validate “Drag me” dashed area must be displayed..', () => {
		droppable.SeleccionarAccept();
		droppable.droppable().should('exist').should('have.text', data.drophere);
	});

	it('4366 | TC 16: Validate “Outer Droppable” bordered area must be displayed and contains “Inner droppable (not greedy)” area inside.', () => {
		droppable.SeleccionarPropogation();
		droppable.notGreedyInnerDropBox().should('exist').should('have.text', data.TextInnerDroppable);
		droppable.notGreedyDropBox().should('include.text', data.Outerdroppable);
	});

	it('4366 | TC 17: Validate “Outer Droppable” bordered area must be displayed and contains “Inner droppable (greedy)” area inside.', () => {
		droppable.SeleccionarPropogation();
		droppable.greedyDropBoxInner().should('exist').should('have.text', data.Innerdroppablegreedy);
		droppable.greedyDropBox().should('include.text', data.Outerdroppable);
	});

	it('4366 | TC 18: Validate on the first “Outer Droppable” area, if “Drag me” area is dragged then “Outer Droppable” area changes the background color to Green and Inner droppable (not greedy) area changes the background color to light Green.', () => {
		droppable.SeleccionarPropogation();
		droppable.draggable().trigger('mousedown', { which: 1, force: true });
		droppable.notGreedyInnerDropBox().trigger('mousemove');
		droppable.notGreedyInnerDropBox().should('have.css', 'background-color', data.verde);
		droppable.notGreedyDropBox().trigger('mousemove', { which: 1, force: true });
		droppable.notGreedyDropBox().should('have.css', 'background-color', data.verde);
	});

	it('4366 | TC 19: Validate on the second "Outer Droppable" área if “Drag me” area is dragged to “Inner droppable (greedy)” area then the “Inner droppable (greedy)” area changes the background color to Light Green and "Outer Droppable" area changes the background color to green', () => {
		droppable.SeleccionarPropogation();
		droppable.draggable().trigger('mousedown', { which: 1, force: true });
		droppable.greedyDropBoxInner().trigger('mousemove', { which: 1, force: true });
		droppable.greedyDropBoxInner().should('have.css', 'background-color', data.verde);
		droppable.greedyDropBox().trigger('mousemove', { which: 1, force: true });
		droppable.greedyDropBox().should('have.css', 'background-color', data.verdeclaro);
	});

	it('4366 | TC 20: Validate on “Revert Draggable” tab,“Will Revert” dashed area must be displayed.', () => {
		droppable.SeleccionarRevert();
		droppable.revert().should('exist').should('have.text', data.WillRevert);
	});

	it('4366 | TC 21: Validate on “Revert Draggable” tab,“Not Revert” dashed area must be displayed.', () => {
		droppable.SeleccionarRevert();
		droppable.notRevert().should('exist').should('have.text', data.NotRevert);
	});

	it('4366 | TC 22: Validate on “Revert Draggable” tab,“Drop here” bordered area must be displayed.', () => {
		droppable.SeleccionarRevert();
		droppable.droppable().should('exist').should('have.text', data.drophere);
	});

	it('4366 | TC 23: Validate on “Drop here” if “Will Revert” area is dragged then “Drop here” area changes the background color to Green.', () => {
		droppable.SeleccionarRevert();
		droppable.revert().trigger('mousedown', { which: 1 });
		droppable.revertDrop().trigger('mousemove');
		droppable.revertDrop().should('have.css', 'background-color', data.verde);
	});

	it('4366 | TC 24: Validate on “Drop here” if “Not Revert” area is dragged then “Drop here” area changes the background color to Green.', () => {
		droppable.SeleccionarRevert();
		droppable.notRevert().trigger('mousedown', { which: 1 });
		droppable.revertDrop().trigger('mousemove');
		droppable.revertDrop().should('have.css', 'background-color', data.verde);
	});

	it('4366 | TC 25: Validate if “Will Revert” area is dropped on the “Drop here” area then “Will Revert” area goes back to the initial position and “Drop here” area changes the background color to Blue and text “Dropped” is displayed.', () => {
		droppable.SeleccionarRevert();
		droppable.revert().drag(data.DatoRevert, { force: true });
		droppable.revertDrop().should('have.css', 'background-color', data.azul).should('contain', data.dropped);
		droppable.revert().should('have.css', 'position', 'relative').and('have.css', 'left', '0px').and('have.css', 'top', '0px');
	});

	it('4366 | TC 26: Validate on “Drop here” if “Not Revert” area is dropped on the “Drop here” area then “Not Revert” area cant be removed from the “Drop here” area and “Drop here” area changes the background color to Blue and text “Dropped” is displayed', () => {
		droppable.SeleccionarRevert();
		droppable.notRevert().drag(data.DatoRevert, { force: true });
		droppable.revertDrop().should('have.css', 'background-color', data.azul).should('contain', data.dropped);
		droppable.notRevert().should('have.css', 'position', 'relative').and('have.css', 'left', '353px');
	});
});

removeLogs();
