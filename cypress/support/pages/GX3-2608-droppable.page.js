/* eslint-disable @typescript-eslint/no-unsafe-argument */
class DroppablePage {
	get = {
		dragabble: element => cy.get(element),
		droppable: (element, index) => cy.get(element).eq(index).as('droppable'),
		dropBox: element => cy.get(element).as(element.replace(/#/g, '')),
		outDroppable: (element) => cy.get(element).as('droppable'),
		tab: element => cy.get(`#droppableExample-tab-${element}`)
	};

	selectTab(tab) {
		if(tab) {
			this.get.tab(tab).click();
		}
	}

	drop(dragabble, droppable, index, tab) {
		this.selectTab(tab);
		if(droppable === '#droppable.drop-box.ui-droppable') {
			this.get.droppable(droppable, index);
			this.get.dragabble(dragabble).drag('@droppable', { force: true });
		}else{
			this.get.outDroppable(droppable);
			this.get.dragabble(dragabble).drag('@droppable', { force: true });
		}
	}

	dropPrevent(tab, dragabble, notGreedyDropBox, notGreedyInnerDropBox, greedyDropBox, greedyDropBoxInner, out, path) {
		this.selectTab(tab);
		this.get.dropBox(notGreedyDropBox);
		this.get.dropBox(notGreedyInnerDropBox);
		this.get.dropBox(greedyDropBox);
		this.get.dropBox(greedyDropBoxInner);
		if(path === 'notGreedyDropBox') {
			this.get.dragabble(dragabble).drag('@notGreedyDropBox', { force: true, position: 'top' });
		}
		if(path === 'notGreedyInnerDropBox') {
			this.get.dragabble(dragabble).drag('@notGreedyInnerDropBox', { force: true });
		}
		if(path === 'greedyDropBox') {
			this.get.dragabble(dragabble).drag('@greedyDropBox', { force: true, position: 'top' });
		}
		if(path === 'greedyDropBoxInner') {
			this.get.dragabble(dragabble).drag('@greedyDropBoxInner', { force: true });
		}
		if(path === 'out') {
			this.get.outDroppable(out);
			this.get.dragabble(dragabble).drag('@droppable', { force: true , position: 'left' });
		}
	}
}

export const droppablePage = new DroppablePage;