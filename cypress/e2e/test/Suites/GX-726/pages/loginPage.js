class loginPage {

    elements = { 

        "loginHeading": () => cy.get(".main-header")

    }

}


module.exports = new loginPage();