import data from '@data/GX-41928-IniciarSesión.page.json';
import { loginPage } from '@pages/BookStore/GX2-8176-loginPage';


Cypress.Commands.add("loginPage", ("USERNAME", "PASSWORD") =>
    {
    
    get = {
        userName: () => cy.get('#user-name'),
        password: () => cy.get('#password'),
        loguin: () => cy.get('#login-button'),
        logout: () => cy.get('#logout_sidebar_link')
        },
        
    putUser() {
        this.get.userName().type("UserName");
    }


    textList() {
        this.get.listContainer().each(($item, index) => {
            cy.wrap($item).invoke('text').should('eq', data.List[ index ]);
        });
    }
	defaultColorGrid() {
        this.get.gridContainer().each(el => {
            cy.wrap(el).should('have.css', 'background-color', 'rgb(255, 255, 255)');
        });
    }
	clickColorGrid() {
        this.get.gridContainer().each(el => {
            cy.wrap(el).click().should('have.css', 'background-color', 'rgb(0, 123, 255)');
        });
    }
	textGrid() {
        this.get.gridContainer().each(($item, index) => {
            cy.wrap($item).invoke('text').should('eq', data.Grid[ index ]);
        });
    }
	unClickColorGrid() {
        this.get.gridContainer().each(el => {
            cy.wrap(el).click().should('have.css', 'background-color', 'rgb(255, 255, 255)');
        });
    }
});

export const selectablePage = new ();
