import { removeLogs } from '@helper/RemoveLogs';
import { faker } from '@faker-js/faker';
import { login } from '@pages/BookStore/51110-PGD-Login';

describe('BookStore | Account | Crear, Obtener y Eliminar Usuario (POST-GET-DELETE)', () => {
	let pass = `${'Zeb'}${faker.internet.password()}${13553}${'!%$'}`;
	let user = faker.internet.userName();
	it('5111 | TC1: Validate that the user can sign up successfully', () => {
		cy.request({
			method: 'POST',
			url: '/Account/v1/user',
			body: {
				userName: user,
				password: pass,
			},
		}).then(response => {
			expect(response.status).to.equal(201);
			cy.wrap(response.body.userID).then(userID => {
				Cypress.env('userID', userID);
			});
			cy.request({
				method: 'POST',
				url: '/Account/v1/GenerateToken',
				body: {
					userName: user,
					password: pass,
				},
			}).then(response => {
				expect(response.body.result).to.equal('User authorized successfully.');
				expect(response.body.status).to.equal('Success');
				cy.wrap(response.body.token).then(token => {
					Cypress.env('token', token);
				});
			});
			/*.then(() => {
					cy.request({
						method: 'DELETE',
						url: `/Account/v1/User/${Cypress.env('userID')}`,
						headers: {
							Authorization: `Bearer ${Cypress.env('token')}`,
						},
					}).then(response => {
						expect(response.statusText).to.equal('No Content');
						expect(response.status).to.equal(204);
					});
				}); */
		});
	});
	it('5111 | TC2: Validate that the user can sign up successfully', () => {
		let pass = faker.internet.password();
		let user = faker.internet.userName();
		cy.request({
			method: 'POST',
			url: '/Account/v1/user',
			failOnStatusCode: false,
			body: {
				userName: user,
				password: pass,
			},
		}).then(response => {
			expect(response.status).to.equal(400);
			cy.wrap(response.body.message).should('include', 'Passwords must have at least one non alphanumeric character');
		});
	});
	it('5111 | TC3: Validate that the user logs in successfully', () => {
		cy.visit('/login');
		login.get.title().then(text => {
			expect(text.text()).to.equal('Welcome,Login in Book Store');
		});
		login.logIn(user, pass);
		login.clickLoginButton();
	});
	it('5111 | TC4: Validate that the user tries to log in with invalid credentials', () => {});
});
removeLogs();
