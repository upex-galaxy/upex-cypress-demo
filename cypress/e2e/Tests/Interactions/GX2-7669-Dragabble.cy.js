import { removeLogs } from '@helper/RemoveLogs';
import { dragPage } from '@pages/Interactions/GX2-7669-dragabble.page';

function randomCoordinate(val1, val2) {
	const random = Cypress._.random(val1, val2);
	return random;
}

describe('GX2-7669-tools-qa-interactions-dragabble', () => {
	beforeEach(() => {
		// cy.intercept({ resourceType: /^(xhr|fetch)$/ }, { statusCode: 200, body: { data: 'fake data' } });
		cy.visit('/dragabble');
		cy.url().should('contain', '/dragabble');
	});

	it('7670 | TC1: Validar mover el recuadro “Drag me” de la pestaña Simple.', () => {
		const xRandomCoordinate = randomCoordinate(0, 750);
		const yRandomCoordinate = randomCoordinate(0, 550);
		dragPage.drag({
			X: xRandomCoordinate,
			Y: yRandomCoordinate,
		});
		dragPage.get.simpleDrag().should('have.css', 'left', `${xRandomCoordinate}px`);
		dragPage.get.simpleDrag().should('have.css', 'top', `${yRandomCoordinate}px`);
	});
	it('7670 | TC2: Validar mover en el eje X el recuadro Only X de la pestaña Axis Restricted.', () => {
		const xRandomCoordinate = randomCoordinate(-200, 450);
		dragPage.axisDrag({
			X: xRandomCoordinate,
		});
		dragPage.get.xDrag().should('have.css', 'left', `${xRandomCoordinate}px`);
	});
	it('7670 | TC3: Validar mover en el eje Y el recuadro Only Y de la pestaña Axis Restricted.', () => {
		const yRandomCoordinate = randomCoordinate(0, 500);
		dragPage.axisDrag({
			Y: yRandomCoordinate,
		});
		dragPage.get.yDrag().should('have.css', 'top', `${yRandomCoordinate}px`);
	});
	it.only('7670 | TC4: Validar mover el recuadro “Im contained within the box” dentro de su container de la pestaña “Container Restricted”.', () => {
		const xRandomCoordinate = randomCoordinate(0, 75);

		const yRandomCoordinate = randomCoordinate(0, 106);
		dragPage.containerDrag({
			x: 90,
			Y: yRandomCoordinate,
		});
		// .then(data => {
		// 	const [xCoordinateCss, yCoordinateCss] = data;
		// 	const x = xRandomCoordinate - (xRandomCoordinate - xCoordinateCss);
		// 	const y = yRandomCoordinate - (yRandomCoordinate - yCoordinateCss);
		// 	console.log('cx page', xCoordinateCss);
		// 	console.log('cy page', yCoordinateCss);
		// 	expect(xCoordinateCss).to.equal(x);
		// 	expect(yCoordinateCss).to.equal(y);
		// });
	});

	it('7670 | TC5: Validar mover el texto “Im contained within my parent” dentro de su container de la pestaña “Container Restricted”.', () => {
		const xRandomCoordinate = randomCoordinate(9, 14);
		const yRandomCoordinate = randomCoordinate(-1, 86);
		dragPage.textDrag({
			x: xRandomCoordinate,
			Y: yRandomCoordinate,
		});
		dragPage.get.dragText().should('have.css', 'left', `${xRandomCoordinate}px`);
		dragPage.get.dragText().should('have.css', 'top', `${yRandomCoordinate}px`);
	});
	it('7670 | TC6: Validar mover el recuadro “I will always stick to the center” de la pestaña "Cursor Style".', () => {
		const xRandomCoordinate = randomCoordinate(700, 1800);
		cy.log(xRandomCoordinate);
		const yRandomCoordinate = randomCoordinate(350, 1000);
		cy.log('y', yRandomCoordinate);

		dragPage.dragFromCenter({ X: xRandomCoordinate, Y: yRandomCoordinate }).then(data => {
			const [xCoordinateCss, yCoordinateCss] = data;
			const x = xRandomCoordinate - (xRandomCoordinate - xCoordinateCss);
			const y = yRandomCoordinate - (yRandomCoordinate - yCoordinateCss);
			console.log('cx page', xCoordinateCss);
			console.log('cy page', yCoordinateCss);
			expect(xCoordinateCss).to.equal(x);
			expect(yCoordinateCss).to.equal(y);
		});
	});
	it('7670 | TC7: Validar mover el recuadro “My cursor is at top left” de la pestaña "Cursor Style".', () => {
		const xRandomCoordinate = randomCoordinate(650, 1700);
		const yRandomCoordinate = randomCoordinate(350, 900);
		dragPage.get.cursorTab().click();
		dragPage.dragFromTopLeft({ X: xRandomCoordinate, Y: yRandomCoordinate }).then(data => {
			const [xCoordinateCss, yCoordinateCss] = data;
			const x = xRandomCoordinate - (xRandomCoordinate - xCoordinateCss);
			const y = yRandomCoordinate - (yRandomCoordinate - yCoordinateCss);
			console.log('cx page', xCoordinateCss);
			console.log('cy page', yCoordinateCss);
			expect(xCoordinateCss).to.equal(x);
			expect(yCoordinateCss).to.equal(y);
		});
	});
	it('7670 | TC8: Validar mover el recuadro “My cursor is at bottom” de la pestaña "Cursor Style".', () => {
		const xRandomCoordinate = randomCoordinate(650, 1800);
		const yRandomCoordinate = randomCoordinate(400, 1050);
		dragPage
			.dragFromBottom({
				X: xRandomCoordinate,
				Y: yRandomCoordinate,
			})
			.then(data => {
				const [xCoordinateCss, yCoordinateCss] = data;
				const x = xRandomCoordinate - (xRandomCoordinate - xCoordinateCss);
				const y = yRandomCoordinate - (yRandomCoordinate - yCoordinateCss);
				console.log('cx page', xCoordinateCss);
				console.log('cy page', yCoordinateCss);
				expect(xCoordinateCss).to.equal(x);
				expect(yCoordinateCss).to.equal(y);
			});
	});
});

removeLogs();
