describe('Account TextBox', () =>
{
	beforeEach('Visitar la página de registro',() =>
	{
		cy.visit('https://demoqa.com/text-box');
		cy.contains('Test Box').should('be.visible');
		cy.url().should('contain','text-box');
	}
	)
}
/*it('TCPrueba sin la fixture a ver si agarra',() =>
	{
	cy.get(#userName)
		.type(Diana)
	cy.get(#userEmail)
		.type(camila@hotmail.com)
	cy.get(#currentAddress)
		.type('Via Laietana.Barcelona')
	cy.get(the.input.permanentAddress)
		.type(the.data.peraddressvalid)
	cy.get("[type='button']").click()
	}
	);
});/*



it('TC01: Registrarse exitosamente',() =>
{
	cy.fixture('data/Elements/GX3-3090-TextBox').then((the) =>
	{
		cy.get(the.input.fullName)
			.type(the.data.fullNamevalid);
		cy.get(the.input.email)
			.type(the.data.emailvalid);
		cy.get(the.input.currentAddress)
			.type(the.data.caddressvalid);
		cy.get(the.input.permanentAddress)
			.type(the.data.peraddressvalid);
		cy.get(the.SubmitButton).click();
	});
}); 
it('TC02.No registrarse con email inválido. sin caracter delante @',() =>
{
	cy.fixture('data/Elements/GX3-3090-TextBox'),() =>
	{
		cy.get(the.input.fullName)
			.type(the.data.fullNamevalid);
		cy.get(the.input.email)
			.type(the.data.emailvalid);
		cy.get(the.input.currentAddress)
			.type(the.data.caddressvalid);
		cy.get(the.input.permanentAddress)
			.type(the.data.peraddressvalid);
		cy.get(the.SubmitButton).click();
	};
}
);
it('TC03.No registrarse con email inválido. sin caracter detrás @');
it('TC04.No registrarse con email inválido. sin @');
it('TC05.No registrarse con email inválido. sin punto detras @');
it('TC06.No registrarse con email inválido. sin caracter detrás del punto');
it('TC07.Registrarse con email vacío');
it('TC08.Registrarse con Full Name vacío');
it('TC09.Registrarse con Current Address vacío');
it('TC10.Registrarse con Permanent Address vacío');
