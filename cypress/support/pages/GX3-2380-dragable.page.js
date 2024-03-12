/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
class DragablePage {
	get = {
		container: () => cy.get('div.col-12.mt-4.col-md-6', { timeout: 3000 }),
		containerWrapper: (container) => cy.get(container),
		dragable: selector => cy.get(selector),
		selectTab: (tab) => cy.get(`#draggableExample-tab-${tab}`, { timeout:3000 }),
		findWrapper: ($wrapper) => $wrapper.find('.draggable')[0],
		findText: ($wrapper) => $wrapper.find('.ui-widget-header.ui-draggable.ui-draggable-handle')[0]
	};

	clickOnTabSelected(tab) {
		if (tab !== undefined) {
			this.get.selectTab(tab).click();
		}
	}

	moveDragMe(selector, direction, tab) {
		this.clickOnTabSelected(tab);

		return this.get.container().then($container => {
			const containerWidth = $container.width();
			const containerHeight = $container.height();
			return this.get.dragable(selector).then($dragBox => {
				const initialPosition = $dragBox.position();
				let randomMove;

				if (direction === 'horizontal') {
					randomMove = Cypress._.random(-initialPosition.left, containerWidth - initialPosition.left - $dragBox.width());
					if (randomMove === 0) { randomMove = 1; }
					this.get
						.dragable(selector)
						.move({ deltaX: randomMove, deltaY: 0, force: true });
				} else if (direction === 'vertical') {
					randomMove = Cypress._.random(-initialPosition.top, containerHeight - initialPosition.top - $dragBox.height());
					if (randomMove === 0) { randomMove = 1; }
					this.get
						.dragable(selector)
						.move({ deltaX: 0, deltaY: randomMove, force: true });
				}

				return new Cypress.Promise(resolve => {
					resolve(initialPosition);
				});
			});
		});
	}

	moveDragInWrapper(container, negativePath) {
		this.clickOnTabSelected('containerRestriction');

		return this.get.containerWrapper(container).then(($wrapper) => {
			let draggableElement;
			const containmentWrapper = $wrapper[0];
			if(container === '#containmentWrapper') {
				draggableElement = this.get.findWrapper($wrapper);
			}else{
				draggableElement = this.get.findText($wrapper);
			}
			const containmentRect = containmentWrapper.getBoundingClientRect();
			const draggableRect = draggableElement.getBoundingClientRect();
			let maxX, maxY;

			if (negativePath === 0) {
				maxX = Math.floor(Math.random() * (containmentRect.width - draggableRect.width)) + 1;
				maxY = Math.floor(Math.random() * (containmentRect.height - draggableRect.height)) + 1;
			} else {
				maxX = containmentRect.width - draggableRect.width + 200;
				maxY = containmentRect.height - draggableRect.height + 200;
			}

			cy.wrap(draggableElement)
				.move({ deltaX: maxX, deltaY: maxY, force: true });

			return new Cypress.Promise(resolve => {
				resolve({ draggableElement, containmentRect });
			});
		});
	}
}
export const dragablePage = new DragablePage();