export class LoginPage{
    constructor(){
        this.userinput= 'input[id="userName"]'
        this.passinput= 'input[id="password"]'
        this.loginbutton= 'button[id="login"]'    
    }
    UserInput(user){
        cy.get(this.userinput).type(user);
    }
    PassInput(pass){
        cy.get(this.passinput).type(pass);
    }
    Login(){
        cy.get(this.loginbutton).click();
    }
}