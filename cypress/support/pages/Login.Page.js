class LoginPage {
    constructor() {
        this.loginButton = () => cy.get('.flexboxgrid__row___1y_mg button').eq(0);
        this.usernameInput = () => cy.get('#login input[type=text]');
        this.passwordInput = () => cy.get('#login input[type=password]');
        this.usernameEmpty = () => cy.get('#login span').filter(':contains("Name is")');
        this.passwordEmpty = () => cy.contains('#login span', 'Password is');
        this.logIn = () => cy.get('button[type="Submit"]');
        this.logoutButton = () => cy.get('[type="button"]').filter(':contains("Hello")');
        this.logOut = () => cy.get('.mui-dropdown ul');
    }
}

export const loginPage = new LoginPage();