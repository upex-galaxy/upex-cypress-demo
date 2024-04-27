
import { pageDragabble } from '@pages/GX3-3225-dragabble.Page';
describe('ToolsQA | Interactions | Dragabble (Drag and Drop)', () => {
	beforeEach("Precondition: The user is located on the page dragabble" , ()=> {
			cy.visit('/dragabble');
			cy.url().should('contain', 'dragabble');
		});

		it('GX3-3226 | TC1: Validate dragging the "Drag me" box in any direction. ', () => {
			cy.get(pageDragabble.dragSimple).click();
			let initialPosition;
			pageDragabble.getInitialPosition().then(position => {
				initialPosition = position;
			});

			pageDragabble.dragElement();

			cy.get(pageDragabble.dragBoxSelector).then($dragBox => {
				const finalPosition = $dragBox.offset();
				expect(finalPosition.left).not.to.equal(initialPosition.x, "Validar que la posición final en el eje de las x sea diferente a la inicial");
				expect(finalPosition.top).not.to.equal(initialPosition.y, "Validar que la posición final en el eje de las y sea diferente a la inicial");
			});
		});

		it('GX3-3226 | TC2: Validate drag "Only X" Only on the x axis . ', () => {
			cy.get(pageDragabble.dragAxis).click();
			let initialPosition;
			pageDragabble.getInitialPositionAxis().then(position => {
				initialPosition = position;
			});

			pageDragabble.dragElementAxisX();

			cy.get(pageDragabble.dragOnlyX).then($dragBox => {
				const finalPosition = $dragBox.offset();
				expect(finalPosition.left).not.to.equal(initialPosition.x, "Validar que la posición final en el eje de las x sea diferente a la inicial");
				expect(finalPosition.top).to.equal(initialPosition.y, "Validar que la posición final en el eje de las y sea igual a la inicial");
			});
			
		});

		it.only('GX3-3226 | TC3: Validate drag "Only Y" Only on the y axis . ', () => {
			cy.get(pageDragabble.dragAxis).click();
			let initialPosition;
			pageDragabble.getInitialPositionAxisY().then(position => {
				initialPosition = position;
			});

			pageDragabble.dragElementAxisY();

			cy.get(pageDragabble.dragOnlyY).then($dragBox => {
				const finalPosition = $dragBox.offset();
				expect(finalPosition.left).to.equal(initialPosition.x, "Validar que la posición final en el eje de las x sea igual a la inicial");
				expect(finalPosition.top).not.to.equal(initialPosition.y, "Validar que la posición final en el eje de las y sea diferente a la inicial");
			});
			
		});


	}	
);

 
