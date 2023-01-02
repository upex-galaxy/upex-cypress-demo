export class ProfilePage{
    constructor(){
        this.username= 'label[id="userName-value"]'
        this.logoutbutton= 'button[id="submit"]'
    }
    UserCheck(){
        return cy.get(this.username);
    }
    LogOut(){
        cy.get(this.logoutbutton).contains('Log out').click();
    }
}