describe('Testing with Interceptp', () => {
	it('Testing Intercept with Orange', () => {
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
		cy.get('[name="username"]').type('Admin');
		cy.get('[name="password"]').type('admin123');
		cy.intercept('POST', '/web/index.php/events/push').as('data');
		cy.get('[type="submit"]').click();
		cy.wait('@data').then(data => {
			expect(data.response.statusCode).to.equal(200);
		});
	});
});
