import * as json from '@data/credentialsSpaceBeyond.json';
import { loginPage } from '@pages/Login.Page';

describe('GX3-1664: SpaceBeyond | Account | Log-In and Log-Out', () => {
    beforeEach('visit/spaceBeyond', () => {
        cy.visit('https://demo.testim.io/');
    });

    it('TC1: Should login in the website', () => {

        const { loginButton, usernameInput, passwordInput, logIn, logoutButton } = loginPage;

        loginButton().click();
        usernameInput().type(json.validCredentials.Username);
        passwordInput().type(json.validCredentials.Password);
        
        logIn().click();

        //* Assertions
        logoutButton().invoke('text').should('contain', 'Hello');
    });

    it('TC2: Should not login in the website when username is empty', () => {

        const { loginButton, passwordInput, usernameEmpty, logIn } = loginPage;

        loginButton().click();
        passwordInput().type(json.validCredentials.Password);

        logIn().click();

        //* Assertions
        usernameEmpty().should('have.text', json.errorMessage.nameEmpty);
    });

    it('TC3: Should not login in the website when password is empty', () => {
        
        const { loginButton, usernameInput, passwordEmpty, logIn } = loginPage;

        loginButton().click()
        usernameInput().type(json.validCredentials.Username);

        logIn().click();

        //* Assertions
        passwordEmpty().should('have.text', json.errorMessage.pswEmpty);
    });

    it('TC4: Should logout the website', () => {

        const { loginButton, usernameInput, passwordInput, logIn, logoutButton, logOut } = loginPage;

        loginButton().click();
        usernameInput().type(json.validCredentials.Username);
        passwordInput().type(json.validCredentials.Password);
        logIn().click();
        logoutButton().click();
        logOut().click();
    });
});