/* eslint-disable no-unused-vars */
import type { OrangeBuzzPage } from '@pages/OrangeBuzz.Page';
import type { OrangeLoginPage } from '@pages/OrangeLogin.Page';
import { defineConfig } from 'cypress';
declare global {
	namespace Cypress {
		// eslint-disable-next-line no-unused-vars
		interface Chainable {
			/**
			 * @description
			 * El método page() te permite utilizar y encadenar comandos Cypress a los Page Object Models de tu proyecto, lo que facilita la interacción con las páginas de tu aplicación bajo prueba.
			 * @example
			 * cy.page().then(({ spaceLoginPage }) => {
			 *    spaceLoginPage.enterUsername('Admin')
			 *    spaceLoginPage.enterPassword('admin123')
			 *    spaceLoginPage.submitLogin()
			 *})
			 */
			page(): Cypress.Chainable<{ loginPage: OrangeLoginPage; buzzPage: OrangeBuzzPage }>;
		}
	}
}
