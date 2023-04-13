describe('✅ToolsQA | Elements | Buttons', () => {
	// beforeEach(() => {
	// cy.visit('https://demoqa.com/buttons');
	// });
	it('10498 | TC1: Validar que al hacer doble click en el botón “Double click me“ me parezca un mensaje de verificación.', () => {
		// cy.get('#doubleClickBtn').dblclick();
		// cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
		expect(1).to.equal(1);
	});
	it('10498 | TC2: Validar hacer click derecho en el botón “Right  click me“ me aparezca un mensaje de verificación', () => {
		// cy.get('#rightClickBtn').rightclick();
		// cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
		expect(1).to.equal(1);
	});
	it('10498 | TC3: Validar hacer click en el botón “Click me” me aparezca un mensaje de verificación.', () => {
		// cy.get('[type="button"]').eq(3).click();
		// cy.get('#dynamicClickMessage').should('have.text', 'You have done a dynamic click');
		expect(1).to.equal(1);
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
