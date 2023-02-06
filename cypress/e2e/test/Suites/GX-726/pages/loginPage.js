class LoginPage {

    elements = { 

        "loginHeading": () => cy.get(".main-header")

    }

}


export const loginPage = new LoginPage();