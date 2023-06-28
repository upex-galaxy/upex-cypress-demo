import { droppable } from '@pages/Interactions/GX2-4365-Droppable.page';

describe('This is your test project title', () => {
	beforeEach(() => {
		droppable.visit();
	});

	it('4366 | Validate Tabs “Simple  must be shown', () => {
		droppable.SeleccionarSimple();
	});
	it('4366 |  Validate tab “Accept”  must be shown', () => {
		droppable.SeleccionarAccept();
	});

	it('4366 | Validate Tabs “Prevent Propagation” must be shown', () => {});
	it('4366 | Validate Tabs “Revert Draggable”  must be shown', () => {});

	it('4366 |  Validate tab "Simple” is displayed by default', () => {});
	it('4366 |  Validate one tab is displayed at once', () => {});

	it('4366 |  Validate on tab simple “Drag me” dashed area must be displayed.', () => {});
	it('4366 |  Validate on tab simple “Drop here” bordered area must be displayed.', () => {});

	it('4366 |  Validate on tab simple when “Drag me” area is dropped on the “Drop here” area the “Drop here” area changes the background color to blue and text “Dropped!” is displayed.', () => {});
	it('4366 |   Validate “Acceptable” dashed area must be displayed.', () => {});
	it('4366 |   Validate “Not Acceptable” dashed area must be displayed.', () => {});
	it('4366 |   Validate “Drop here” bordered area must be displayed.', () => {});
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
