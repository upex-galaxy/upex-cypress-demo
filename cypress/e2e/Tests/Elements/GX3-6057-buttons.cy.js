describe('GX3-6057 | ToolsQA | Elements | Buttons', () => {
	beforeEach('Visit page', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('include', 'buttons');
	});
	it('6063 | TC1: Validar que al hacer “Double Click “ al botón debería desplegarse un mensaje que diga “You have done a double click”', () => {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('[id="doubleClickMessage"]').should('contains.text','You have done a double click').and('to.be.visible')
	});

	it('6063 | TC2: Validar que al hacer “Right Click” al botón debería desplegarse un mensaje que diga “You have done a right click”', () => {
		cy.get('id="rightClickBtn"').rightClickBtn();
		cy.get('[id="rightClickMessage"]').should('be.a.text').and('to.be.visible')

	})

	it('6063 | TC3: Validar que al hacer “Click” al botón debería desplegarse un mensaje que diga “You have done a dynamic click”', () =>{
		cy.get('type="button"').eq(3).click()
		cy.get('id="dynamicClickMessage"').should('be.a.text').and('to.be.visible')
	})
});
