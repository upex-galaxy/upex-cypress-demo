/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { dragablePage } from '../../../support/pages/GX3-2380-dragable.page';
import data from '../../../fixtures/data/Interactions/GX3-2380-dragable.json';

const moveElementRestricted = (container, negativePath) => {
	const response = dragablePage.moveDragInWrapper(container, negativePath);
	response.then(({ draggableElement, containmentRect }) => {
		cy.get(draggableElement).then(($draggable) => {
			const newDraggableRect = $draggable[0].getBoundingClientRect();
			expect(newDraggableRect.left).to.be.at.least(containmentRect.left);
			expect(newDraggableRect.top).to.be.at.least(containmentRect.top);
			expect(newDraggableRect.right).to.be.at.most(containmentRect.right);
			expect(newDraggableRect.bottom).to.be.at.most(containmentRect.bottom);
		});
	});
};

const moveElement = (selector, direction, tab, negativePath) => {

	const initialPosition = dragablePage.moveDragMe(selector, direction, tab);

	initialPosition.then(initialPosition => {
		dragablePage.get.dragable(selector).then($dragBoxAfterMove => {
			const finalPosition = $dragBoxAfterMove.position();
			if (negativePath === 1) {
				expect(finalPosition.top).to.equal(initialPosition.top);
				expect(finalPosition.left).to.equal(initialPosition.left);
			} else if ((direction === 'horizontal') && (tab !== 'cursorStyle')) {
				expect(finalPosition.left).to.not.equal(initialPosition.left);
				expect(finalPosition.top).to.equal(initialPosition.top);
			} else if ((direction === 'vertical') && (tab !== 'cursorStyle' || selector === '#cursorBottom')) {
				expect(finalPosition.top).to.not.equal(initialPosition.top);
				expect(finalPosition.left).to.equal(initialPosition.left);
			} else if (direction === 'horizontal') {
				expect(finalPosition.left).to.not.equal(initialPosition.left);
				expect(finalPosition.top).to.not.equal(initialPosition.top);
			} else if (direction === 'vertical') {
				expect(finalPosition.top).to.not.equal(initialPosition.top);
				expect(finalPosition.left).to.not.equal(initialPosition.left);
			}
		});
	});
};

describe.skip('ToolsQA | Interactions | Dragabble', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/dragabble');
		cy.url().should('include', 'dragabble');
	});
	it('2380 | TC01 validar poder desplazar horizontalmente el div "Drag me" exitosamente', () => {
		moveElement(data.element.dragBox, data.orientation.horizontal);
	});
	it('2380 | TC02 validar poder desplazar verticalmente el div "Drag me" exitosamente', () => {
		moveElement(data.element.dragBox, data.orientation.vertical);
	});
	it('2380 | TC03 validar poder desplazar horizontalmente el div "Only X" exitosamente', () => {
		moveElement(data.element.restrictedX, data.orientation.horizontal, data.tab.axisRestriction);
	});
	it('2380 | TC04 validar no poder desplazar verticalmente el div "Only X"', () => {
		moveElement(data.element.restrictedX, data.orientation.vertical, data.tab.axisRestriction, data.path.negative);
	});
	it('2380 | TC05 validar no poder desplazar horizontalmente el div "Only Y"', () => {
		moveElement(data.element.restrictedY, data.orientation.horizontal, data.tab.axisRestriction, data.path.negative);
	});
	it('2380 | TC06 validar poder desplazar verticalmente el div "Only Y" exitosamente', () => {
		moveElement(data.element.restrictedY, data.orientation.vertical, data.tab.axisRestriction);
	});
	it('2380 | TC07 validar poder desplazar el div "I´m contained within the box" dentro del área delimitada exitosamente', () => {
		moveElementRestricted(data.element.containmentWrapper, data.path.happy);
	});
	it('2380 | TC08 validar no poder desplazar el div "I´m contained within the box" fuera del área delimitada', () => {
		moveElementRestricted(data.element.containmentWrapper, data.path.negative);
	});
	it('2380 | TC09 validar poder desplazar el texto "I´m contained within my parent" dentro del área delimitada exitosamente', () => {
		moveElementRestricted(data.element.containerText, data.path.happy);
	});
	it('2380 | TC10 validar no poder desplazar el texto "I´m contained within my parent" fuera del área delimitada', () => {
		moveElementRestricted(data.element.containerText, data.path.negative);
	});
	it('2380 | TC11 validar poder desplazar horizontalmente el div "I will always stick to the center" exitosamente', () => {
		moveElement(data.element.cursorCenter, data.orientation.horizontal, data.tab.cursorStyle);
	});
	it('2380 | TC12 validar poder desplazar verticalmente el div "I will always stick to the center" exitosamente', () => {
		moveElement(data.element.cursorCenter, data.orientation.vertical, data.tab.cursorStyle);
	});
	it('2380 | TC13 validar poder desplazar horizontalmente el div "My cursor is at top left" exitosamente', () => {
		moveElement(data.element.cursorTopLeft, data.orientation.horizontal, data.tab.cursorStyle);
	});
	it('2380 | TC14 validar poder desplazar verticalmente el div "My cursor is at top left" exitosamente', () => {
		moveElement(data.element.cursorTopLeft, data.orientation.vertical, data.tab.cursorStyle);
	});
	it('2380 | TC15 validar poder desplazar horizontalmente el div "My cursor is at bottom" exitosamente', () => {
		moveElement(data.element.cursorBottom, data.orientation.horizontal, data.tab.cursorStyle);
	});
	it('2380 | TC16 validar poder desplazar verticalmente el div "My cursor is at bottom" exitosamente', () => {
		moveElement(data.element.cursorBottom, data.orientation.vertical, data.tab.cursorStyle);
	});
});
