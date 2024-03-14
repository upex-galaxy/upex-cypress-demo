import { droppablePage } from '../../../support/pages/GX3-2608-droppable.page';
import data from 'cypress/fixtures/data/Interactions/GX3-2608-droppable.json';

function drop(dragabble, droppable, index, path, tab) {
	droppablePage.drop(dragabble, droppable, index, tab);
	cy.get('@droppable').then(droppableElement => {
		if(path === data.path.inner) {
			cy.wrap(droppableElement).should('contain', data.text.Dropped);
			cy.wrap(droppableElement).should('have.class', data.class.Dropped);
		}else{
			cy.wrap(droppableElement).should('contain', data.text.DropHere);
			cy.wrap(droppableElement).should('not.have.class', data.class.Dropped);
		}
	});
}

function validateNotGreedyDropBox(path) {
	cy.get('@notGreedyDropBox').then(droppableElement => {
		if (path === 'happy') {
			cy.wrap(droppableElement).should('contain', data.text.Dropped);
			cy.wrap(droppableElement).should('have.class', data.class.Dropped);
		}else{
			cy.wrap(droppableElement).should('contain', data.text.notGreedyDropBox);
			cy.wrap(droppableElement).should('not.have.class', data.class.Dropped);
		}
	});
}

function validateNotGreedyInner(path) {
	cy.get('@notGreedyInnerDropBox').then(droppableElement => {
		if (path === 'happy') {
			cy.wrap(droppableElement).should('contain', data.text.Dropped);
			cy.wrap(droppableElement).should('have.class', data.class.Dropped);
		}else{
			cy.wrap(droppableElement).should('contain', data.text.notGreedyInnerDropBox);
			cy.wrap(droppableElement).should('not.have.class', data.class.Dropped);
		}
	});
}

function validateGreedyDropBox(path) {
	cy.get('@greedyDropBox').then(droppableElement => {
		if (path === 'happy') {
			cy.wrap(droppableElement).should('contain', data.text.Dropped);
			cy.wrap(droppableElement).should('have.class', data.class.Dropped);
		}else{
			cy.wrap(droppableElement).should('contain', data.text.greedyDropBox);
			cy.wrap(droppableElement).should('not.have.class', data.class.Dropped);
		}
	});
}

function validateGreedyDropBoxInner(path) {
	cy.get('@greedyDropBoxInner').then(droppableElement => {
		if (path === 'happy') {
			cy.wrap(droppableElement).should('contain', data.text.Dropped);
			cy.wrap(droppableElement).should('have.class', data.class.Dropped);
		}else{
			cy.wrap(droppableElement).should('contain', data.text.greedyDropBoxInner);
			cy.wrap(droppableElement).should('not.have.class', data.class.Dropped);
		}
	});
}

function dropPrevent(tab, path) {
	droppablePage.dropPrevent(tab, data.element.DragMePrevent, data.element.notGreedyDropBox, data.element.notGreedyInnerDropBox, data.element.greedyDropBox, data.element.greedyDropBoxInner, data.element.out, path);
	if(path === data.path.notGreedyDropBox) {
		validateNotGreedyDropBox(data.path.happy);
		validateNotGreedyInner();
		validateGreedyDropBox();
		validateGreedyDropBoxInner();
	}
	if(path === data.path.notGreedyInnerDropBox) {
		validateNotGreedyDropBox(data.path.happy);
		validateNotGreedyInner(data.path.happy);
		validateGreedyDropBox();
		validateGreedyDropBoxInner();
	}
	if(path === data.path.greedyDropBox) {
		validateNotGreedyDropBox();
		validateNotGreedyInner();
		validateGreedyDropBox(data.path.happy);
		validateGreedyDropBoxInner();
	}
	if(path === data.path.greedyDropBoxInner) {
		validateNotGreedyDropBox();
		validateNotGreedyInner();
		validateGreedyDropBox();
		validateGreedyDropBoxInner(data.path.happy);
	}
	if(path === data.path.out) {
		validateNotGreedyDropBox();
		validateNotGreedyInner();
		validateGreedyDropBox();
		validateGreedyDropBoxInner();
	}
}

describe('ToolsQA | Interactions | Droppable', () => {
	beforeEach('Precondition: be located in the page dragabble', () => {
		cy.visit('https://demoqa.com/droppable');
	});
	it('2609 | TC01 Validar poder desplazar "Drag me" dentro de "Drop here" here exitosamente.', () => {
		drop(data.element.DragMe, data.element.DropHere, data.index.i0, data.path.inner);
	});
	it('2609 | TC02 Validar poder desplazar "Drag me" fuera de "Drop here" here exitosamente.', () => {
		drop(data.element.DragMe, data.element.out, data.index.i0, data.path.out);
	});
	it('2609 | TC03 Validar poder desplazar "Acceptable" dentro de "Drop here" exitosamente.', () => {
		drop(data.element.acceptable, data.element.DropHere, data.index.i1, data.path.inner, data.tab.accept);
	});
	it('2609 | TC04 Validar poder desplazar "Acceptable" fuera de "Drop here" exitosamente.', () => {
		drop(data.element.acceptable, data.element.out, data.index.i1, data.path.out, data.tab.accept);
	});
	it('2609 | TC05 Validar poder desplazar "Not Acceptable" dentro de "Drop here" exitosamente.', () => {
		drop(data.element.notAcceptable, data.element.DropHere, data.index.i1, data.path.out, data.tab.accept);
	});
	it('2609 | TC06 Validar poder desplazar "Not Acceptable" fuera de "Drop here" exitosamente.', () => {
		drop(data.element.notAcceptable, data.element.out, data.index.i1, data.path.out, data.tab.accept);
	});
	it('2609 | TC07 Validar poder desplazar "Drag me" dentro de "Outer droppable" exitosamente.', () => {
		dropPrevent(data.tab.preventPropogation, data.path.notGreedyDropBox);
	});
	it('2609 | TC08 Validar poder desplazar "Drag me" dentro de "Inner droppable (not greedy)" exitosamente.', () => {
		dropPrevent(data.tab.preventPropogation, data.path.notGreedyInnerDropBox);
	});
	it('2609 | TC09 Validar poder desplazar "Drag me" dentro de "Outer droppable" exitosamente.', () => {
		dropPrevent(data.tab.preventPropogation, data.path.greedyDropBox);
	});
	it('2609 | TC10 Validar poder desplazar "Drag me" dentro de "Inner droppable (greedy)" exitosamente.', () => {
		dropPrevent(data.tab.preventPropogation, data.path.greedyDropBoxInner);
	});
	it('2609 | TC11 Validar poder desplazar "Drag me" dentro de "fuera de los dropables" exitosamente.', () => {
		dropPrevent(data.tab.preventPropogation, data.path.out);
	});
});