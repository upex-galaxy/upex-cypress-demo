describe('GX3-3981|Automation SpaceBeyond | Booking | Book a Destination in Checkout', () => {
	beforeEach('El usuario debería estar situado la url de login', () => {
		cy.visit('https://demo.testim.io/login');
		cy.url().should('have.text','login');
	});

	it('TC01 usuario debería estar logeado', () => {
		cy.get('.Login__headline-1___qo4Tz').should('have.text','login');
	});
});
