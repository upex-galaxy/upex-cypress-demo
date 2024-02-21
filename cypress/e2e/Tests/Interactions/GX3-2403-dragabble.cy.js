import { dragabble } from '../../../support/page/GX3-2403-DragabblePage';

describe('ToolsQA | Interactions | Dragabble', () => {
	beforeEach('Precondition: be located in the page dragabble', () => {
		cy.visit('/dragabble');
		cy.url().should('çontain', 'dragabble');
	});

	it('2404 | TC1: Validate drag box can be dragged in any direction on the Simple tab', () => {

	});
	it('2404 | TC2: Validate drag box can be moved only on the axi X on the Restricted tab', () => {

	});
	it ('2404 | TC3: Validate drag box can be moved only on the axi Y on the Restricted tab',() => {

	});
	it('2404 | TC4: Validate drag box can be moved only inside on containmentWrapper', () => {

	});
	it('2404 | TC5: Validate the text -Iam contained within my parent- only can be move inside on his box', () => {

	});
	it('2404 | TC6: Validate than cursor style is bottom', () => {

	});
	it('2404 | TC7: Validate than cursor position is stick to the center', () => {

	});

});
