export class RegisterPage{
    
    constructor(){
        this.nameInput= '[id="firstname"]',
        this.lastnameInput= '[id="lastname"]',
        this.userInput= '[id="userName"]',
        this.passInput= '[id="password"]',
        this.captcha= '[class="recaptcha-checkbox-border"]',
        this.registerButton= '[id="register"]'
    }

    Name(name){
        cy.get(this.nameInput).type(name)
    }
    LastName(lastname){
        cy.get(this.lastnameInput).type(lastname);
    }  
    User(user){
        cy.get(this.userInput).type(user);
    }
    Password(pass){
        cy.get(this.passInput).type(pass);
    }
    Captcha(){
        cy.get(this.captcha).check();
    }
    Register(){
        cy.get(this.registerButton).click();
    }
}