class SignUp{

	get = {
		// {el Nombre del Objeto}+{Nombre del Componente}
		usernameInput: ()=> cy.contains('Username').next(),
		emailInput: ()=> cy.contains('Email address').next(),
		passwordInput: ()=> cy.contains('Password').next(),
		CreateAccountBtn: ()=> cy.get('button').contains('create account')
	};
	//Métodos: {Accion}{Objetivo}
	enterUsername(text){
		this.get.usernameInput().type(text).should('have.value', text);
	}
	enterEmail(text){
		this.get.emailInput().type(text).should('have.value', text);
	}
	enterPassword(text){
		this.get.passwordInput().type(text).should('have.value', text);
	}
	submitCreateAccount(){
		this.get.CreateAccountBtn().click();
	}

}

export const signup = new SignUp;