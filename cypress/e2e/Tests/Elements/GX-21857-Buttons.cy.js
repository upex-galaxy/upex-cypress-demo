describe('21857 | TS: ✅ToolsQA | Elements | Buttons', () => {
	beforeEach('visitar pagina de Demo QA', () =>
	{
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contain', 'buttons');
	});
	it('21858 | TC1: Validar que al hacer doble click izquierdo en el botón “double click me” se dispare el mensaje “You have done a double click”', () => {
		cy.get('#doubleClickBtn')
			.dblclick()
		cy.get('#doubleClickMessage').should("have.text","You have done a double click")
	});
	it('21858 | TC2: Validar que al hacer Click derecho en el botón “double click me” no se dispare el mensaje “You have done a double click”', () =>
	{
		cy.get('#doubleClickBtn')
			.rightclick()
		cy.get('#doubleClickMessage').should('not.exist')
	})
	it('21858 | TC3: Validar que al hacer un Click izquierdo una vez en el botón “double click me “ no se dispare el mensaje “You have done a double click”', () =>
	{
		cy.get('#doubleClickBtn')
			.click()
		cy.get('#doubleClickMessage').should('not.exist')
		
	})
	it('21858 | TC4: Validar que al hacerle Click derecho en el botón “Right click me” se dispare el mensaje “You have done a right click”', () =>
	{
		cy.get('#rightClickBtn')
			.rightclick()
		cy.get('#rightClickMessage').should('contain', 'You have done a right click')
	})
	it('21858 | TC5: Validar que al hacerle CLick izquierdo al botón “Right click me “ no se dispare el mensaje “You have done a right click”', () =>
	{
		cy.get('#rightClickBtn')
			.click()
		cy.get('#rightClickMessage').should('not.exist')
	})
	it('21858 | TC6: Validar que al hacerle Click izquierdo al botón “Click me” se dispare el mensaje “You have done a dynamic click”', () =>
	{
		cy.get('.btn-primary').eq(2)
			.click()
		cy.get('#dynamicClickMessage').should('contain', 'You have done a dynamic click')
		
	})
	it('21858 | TC7: Validar que al hacerle Click derecho al botón “Click me” no se dispare el mensaje “You have done a dynamic click”', () =>
	{
		cy.get('.btn-primary').eq(2)
			.rightclick()
		cy.get('#dynamicClickMessage').should('not.exist')

	})
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
