import { SpaceCheckoutPage } from "@pages/SpaceCheckout.Page"
import { SpaceLoginPage } from "@pages/SpaceLogin.Page"
import { SpaceDestinationPage } from "@pages/SpaceProduct.Page"
declare global {
    namespace Cypress {
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
            page(): Cypress.Chainable<{
                spaceLoginPage: SpaceLoginPage
                spaceProductPage: SpaceDestinationPage
                spaceCheckoutPage: SpaceCheckoutPage
            }>




            /**
             * @description
             * El método react() te permite utilizar y encadenar comandos Cypress a los elementos de ReactJS de tu aplicación bajo prueba.
             * @example 
             * cy.react('button', { hasText: 'Log in' }).click()
            */
            react(dataReactToolbox: string, options?: { hasText: string }): Cypress.Chainable<JQuery<HTMLElement>>
        }
        interface CardProps {
            title: string
            description: string
            price: string
            bookButton: JQuery<HTMLElement>
        }
    }
}