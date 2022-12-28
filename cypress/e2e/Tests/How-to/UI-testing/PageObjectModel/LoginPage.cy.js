import { User } from '@pages/example.Page.js';

describe('US Example | Test Page Object Model', () => {
    beforeEach(() => {
        cy.visit("https://demo.testim.io/")
        cy.contains("Log in").click()
        cy.url().should("contain","login")
    });
    it('test the login page', () => {
        User.enterUsername("UPEX")
        User.enterPassword("123456")
        User.submit()
    });
});