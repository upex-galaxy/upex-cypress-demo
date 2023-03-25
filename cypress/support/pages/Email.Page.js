
class Email {

	get = {
		emailType: ()=> cy.get('#userEmail')
	};
    
	typeEmail(emailc){
		this.get.emailType().type(emailc);
	}

}

export const email = new Email;