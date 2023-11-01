import data from '@data/GX-41928-IniciarSesión.page.json';
import { loginPage } from '@pages/BookStore/GX2-8176-loginPage';

Cypress.Commands.add('loginPage', ('USERNAME', 'PASSWORD'), () => {
	(get = {
		userName: () => cy.get('#user-name'),
		password: () => cy.get('#password'),
		loguin: () => cy.get('#login-button'),
		logout: () => cy.get('#logout_sidebar_link'),
	}),
		(putUser = {
			// this.get.userName().type("UserName"):
		});
});

//export const selectablePage = new
