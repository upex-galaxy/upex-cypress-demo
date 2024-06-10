/* eslint-disable @typescript-eslint/no-unsafe-argument */
import the from '../../../fixtures/data/Elements/GX3-3090-TextBox.json/';

describe('Text Box ',() =>
{
	beforeEach('Visitar la página de registro', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.contains('Text Box').should('be.visible');
	});

	it('TC01: Validar Registrarse exitosamente con campos válidos',() =>
	{
		cy.fixture('data/Elements/GX3-3090-TextBox').then((the) =>
		{
			cy.get(the.input.fullName)
				.type(the.data.fullNamevalid);
			cy.get(the.input.fullName).should('have.value',the.data.fullNamevalid);
			cy.get(the.input.email)
				.type(the.data.emailvalid);
			cy.get(the.input.email).should('have.value',the.data.emailvalid);
			cy.get(the.input.currentAddress)
				.type(the.data.caddressvalid);
			cy.get(the.input.currentAddress).should('have.value',the.data.caddressvalid);
			cy.get(the.input.permanentAddress)
				.type(the.data.peraddressvalid);
			cy.get(the.input.permanentAddress).should('have.value',the.data.peraddressvalid);
			cy.get(the.SubmitButton).click();
			cy.get('#email').should('contain',the.data.emailvalid);
			cy.get('#currentAddress.mb-1').should('contain',the.data.caddressvalid);
			cy.get(the.PermanentAddressFinalBox).should('contain',the.data.peraddressvalid);
		});

	});
	it('TC02.Validar No registrarse con email inválido. sin caracter delante @',() =>
	{
		cy.fixture('data/Elements/GX3-3090-TextBox').then((the) =>
		{
			cy.get(the.input.fullName)
				.type(the.data.fullNamevalid);
			cy.get(the.input.email)
				.type(the.data.emailinvalidtc02);
			cy.get(the.input.currentAddress)
				.type(the.data.caddressvalid);
			cy.get(the.input.permanentAddress)
				.type(the.data.peraddressvalid);
			cy.get(the.SubmitButton).click();

			cy.get(the.Redborderbox).should('be.visible');
			cy.get(the.Redborderbox).should('have.css','border-color','rgb(255, 0, 0)');
			cy.get('#name').should('not.exist');
			cy.get('#email').should('not.exist');
			cy.get('#currentAddress.mb-1').should('not.exist');
			cy.get(the.PermanentAddressFinalBox).should('not.exist');
		});
	});

	it('TC03.Validar No registrarse con email inválido. sin caracter detrás @',() =>
	{
		cy.fixture('data/Elements/GX3-3090-TextBox').then((the) =>
		{
			cy.get(the.input.fullName).type(the.data.fullNamevalid);
			cy.get(the.input.email).type(the.data.emailinvalidtc03);
			cy.get(the.input.currentAddress).type(the.data.caddressvalid);
			cy.get(the.input.permanentAddress).type(the.data.peraddressvalid);
			cy.get(the.SubmitButton).click();

			cy.get(the.Redborderbox).should('be.visible');
			cy.get(the.Redborderbox).should('have.css','border-color','rgb(255, 0, 0)');
			cy.get('#name').should('not.exist');
			cy.get('#email').should('not.exist');
			cy.get('#currentAddress.mb-1').should('not.exist');
			cy.get(the.PermanentAddressFinalBox).should('not.exist');
		});
	});

	it('TC04.Validar No registrarse con email inválido. sin @',() =>
	{
		cy.fixture('data/Elements/GX3-3090-TextBox').then((the) =>
		{
			cy.get(the.input.fullName).type(the.data.fullNamevalid);
			cy.get(the.input.email).type(the.data.emailinvalidtc04);
			cy.get(the.input.currentAddress).type(the.data.caddressvalid);
			cy.get(the.input.permanentAddress).type(the.data.peraddressvalid);
			cy.get(the.SubmitButton).click();

			cy.get(the.Redborderbox).should('be.visible');
			cy.get(the.Redborderbox).should('have.css','border-color','rgb(255, 0, 0)');

			cy.get('#name').should('not.exist');
			cy.get('#email').should('not.exist');
			cy.get('#currentAddress.mb-1').should('not.exist');
			cy.get(the.PermanentAddressFinalBox).should('not.exist');
		});
	});

	it('TC05.Validar No registrarse con email inválido. sin punto detras @',() =>
	{
		cy.fixture('data/Elements/GX3-3090-TextBox').then((the) =>
		{
			cy.get(the.input.fullName).type(the.data.fullNamevalid);
			cy.get(the.input.email).type(the.data.emailinvalidtc05);
			cy.get(the.input.currentAddress).type(the.data.caddressvalid);
			cy.get(the.input.permanentAddress).type(the.data.peraddressvalid);
			cy.get(the.SubmitButton).click();

			cy.get(the.Redborderbox).should('be.visible');
			cy.get(the.Redborderbox).should('have.css','border-color','rgb(255, 0, 0)');

			cy.get('#name').should('not.exist');
			cy.get('#email').should('not.exist');
			cy.get('#currentAddress.mb-1').should('not.exist');
			cy.get(the.PermanentAddressFinalBox).should('not.exist');
		});
	});

	it('TC06.Validar No registrarse con email inválido. sin caracter detrás del punto',() =>
	{
		cy.fixture('data/Elements/GX3-3090-TextBox').then((the) =>
		{
			cy.get(the.input.fullName).type(the.data.fullNamevalid);
			cy.get(the.input.email).type(the.data.emailinvalidtc06);
			cy.get(the.input.currentAddress).type(the.data.caddressvalid);
			cy.get(the.input.permanentAddress).type(the.data.peraddressvalid);
			cy.get(the.SubmitButton).click();

			cy.get(the.Redborderbox).should('be.visible');
			cy.get(the.Redborderbox).should('have.css','border-color','rgb(255, 0, 0)');

			cy.get('#name').should('not.exist');
			cy.get('#email').should('not.exist');
			cy.get('#currentAddress.mb-1').should('not.exist');
			cy.get(the.PermanentAddressFinalBox).should('not.exist');
		}
		);
	});

	it('TC07. Validar poder Registrarse con email vacío',() =>
	{
		cy.fixture('data/Elements/GX3-3090-TextBox').then((the) =>
		{
			cy.get(the.input.fullName).type(the.data.fullNamevalid);
			cy.get(the.input.currentAddress).type(the.data.caddressvalid);
			cy.get(the.input.permanentAddress).type(the.data.peraddressvalid);
			cy.get(the.SubmitButton).click();
			cy.get('#name').should('contain',the.data.fullNamevalid);
			cy.get('#email').should('not.exist');
			cy.get('#currentAddress.mb-1').should('contain',the.data.caddressvalid);
			cy.get(the.PermanentAddressFinalBox).should('contain',the.data.peraddressvalid);
		}
		);
	});
	it('TC08. Validar poder Registrarse con el Name vacío',() =>
	{
		cy.fixture('data/Elements/GX3-3090-TextBox').then((the) =>
		{
			cy.get(the.input.email).type(the.data.emailvalid);
			cy.get(the.input.currentAddress).type(the.data.caddressvalid);
			cy.get(the.input.permanentAddress).type(the.data.peraddressvalid);
			cy.get(the.SubmitButton).click();

			cy.get('#name').should('not.exist');
			cy.get('#email').should('contain',the.data.emailvalid);
			cy.get('#currentAddress.mb-1').should('contain',the.data.caddressvalid);
			cy.get(the.PermanentAddressFinalBox).should('contain',the.data.peraddressvalid);
		}
		);
	});
	it('TC09. Validar poder Registrarse con el Current Address vacío',() =>
	{
		cy.fixture('data/Elements/GX3-3090-TextBox').then((the) =>
		{
			cy.get(the.input.email).type(the.data.emailvalid);
			cy.get(the.input.fullName).type(the.data.fullNamevalid);
			cy.get(the.input.permanentAddress).type(the.data.peraddressvalid);
			cy.get(the.SubmitButton).click();

			cy.get('#name').should('contain',the.data.fullNamevalid);
			cy.get('#email').should('contain',the.data.emailvalid);
			cy.get('#currentAddress.mb-1').should('not.exist');
			cy.get(the.PermanentAddressFinalBox).should('contain',the.data.peraddressvalid);
		}
		);
	});
	it('TC10. Validar poder Registrarse con el Permanent Address vacío',() =>
	{
		cy.fixture('data/Elements/GX3-3090-TextBox').then((the) =>
		{
			cy.get(the.input.email).type(the.data.emailvalid);
			cy.get(the.input.fullName).type(the.data.fullNamevalid);
			cy.get(the.input.currentAddress).type(the.data.caddressvalid);
			cy.get(the.SubmitButton).click();

			cy.get('#name').should('contain',the.data.fullNamevalid);
			cy.get('#email').should('contain',the.data.emailvalid);
			cy.get('#currentAddress.mb-1').should('contain',the.data.caddressvalid);
			cy.get(the.PermanentAddressFinalBox).should('not.exist');
		}
		);
	});
	it('TC11. Validar poder Registrarse con un sólo campo relleno',() =>
	{
		cy.fixture('data/Elements/GX3-3090-TextBox').then((the) =>
		{
			const randomNumber = Math.floor(Math.random() * 4);
			const randomInput = the.inputrandom[randomNumber];
			const randomValue = the.datarandom[randomNumber];
			const randomLabel = the.registerrandom[randomNumber];

			cy.get(randomInput).type(randomValue);
			cy.get('#submit').click();

			cy.get(randomLabel).should('contain.text', randomValue);
		}
		);
	});

});