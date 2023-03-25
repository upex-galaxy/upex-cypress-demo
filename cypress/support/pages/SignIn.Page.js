class SignIn{

	get = {
		usernameInput: ()=> cy.contains('Username / Email').next(),
		passwordInput: ()=> cy.contains('Password').next(),
		LoginBtn: ()=> cy.get('button').contains('login'),
		LoginTab: ()=> cy.get('div').contains('LOGIN')
	};

	goToLoginTab(){
		this.get.LoginTab().click().then(()=>{
			this.get.usernameInput().should('be.visible');
			this.get.passwordInput().should('be.visible');
		});
	}
	enterUsername(text){
		this.get.usernameInput().type(text).should('have.value', text);
	}
	enterPassword(text){
		this.get.passwordInput().type(text).should('have.value', text);
	}
	submitLogin(){
		this.get.LoginBtn().click();
	}
}

export const signin = new SignIn;