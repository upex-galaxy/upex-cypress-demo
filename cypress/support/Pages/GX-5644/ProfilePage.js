export class ProfilePage{
    constructor(){
        this.username= 'label[id="userName-value"]'
        this.logoutbutton= 'button[id="submit"]'
        this.header='div[class="main-header"]'
    }
    UserCheck(){
        return cy.get(this.username);
    }
    LogOut(){
        cy.get(this.logoutbutton).contains('Log out').click();
    }
    CheckHeader(){
        return cy.get(this.header).contains('Profile');
    }
}