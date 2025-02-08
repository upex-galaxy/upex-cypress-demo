describe('GX3-6057 | ToolsQA | Elements | Buttons', () => {
	beforeEach('Visit page', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('include', 'buttons');
	});
	it('6063 | TC1: Validar que al hacer “Double Click “ al botón debería desplegarse un mensaje que diga “You have done a double click”', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('[id="doubleClickMessage"]').should('contain.text','You have done a double click').and('be.visible')
	});

	it('6063 | TC2: Validar que al hacer “Right Click” al botón debería desplegarse un mensaje que diga “You have done a right click”', () => {
		cy.get('#rightClickBtn').rightclick();
		cy.get('[id="rightClickMessage"]').should('contain.text','You have done a right click').and('be.visible')

	})

	it('6063 | TC3: Validar que al hacer “Click” al botón debería desplegarse un mensaje que diga “You have done a dynamic click”', () =>{
		cy.get('[type="button"]').eq(3).click()
		cy.get('[id="dynamicClickMessage"]').should('contain.text','You have done a dynamic click').and('be.visible')
	})
});
