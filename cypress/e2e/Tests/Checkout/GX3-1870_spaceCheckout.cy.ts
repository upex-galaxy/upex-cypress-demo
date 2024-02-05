import { parseCurrencyNum } from '@helper/testUtilities';

describe('GX3-1870: SpaceBeyond | Booking | Book a Destination in Checkout', () => {
	beforeEach(() => {
		//todo: hacer Login
		cy.visit('https://demo.testim.io');
		cy.contains('Log in').click();

		cy.page().then(({ spaceLoginPage }) => {
			spaceLoginPage.enterUsername('Admin');
			spaceLoginPage.enterPassword('admin123');
			spaceLoginPage.submitLogin();
		});
	});

	it('GX3-1870 | TC1: Should book a destination when checkout form is filled', function () {
		cy.page().then(({ spaceProductPage, spaceCheckoutPage }) => {
			//* ESTRATEGIAS DE LOCALIZADOR por "GIVEN DATA" hay 2 opciones:

			//* Option 1: Estrategia "DATA GENERADA"
			// Cuando la data es generada por nuestras consecuencias (ejemplo: crear un producto con nombre 'Madan')
			spaceProductPage.getCardByTitle('Madan');
			// También puede ser por índice:
			spaceProductPage.getCardByIndex(0);

			//* Option 2: Estrategia "DATA MUESTRA" o (DATA RANDOM)
			// Cuando la data no es generada por nuestras consecuencias sino está ahí (y tiene propencia al cambio)
			// Seleccionando todas las opciones y eligiendo una al azar:
			spaceProductPage.getAnyCard().then(givenCard => {
				//todo: Obtener las propiedades del item seleccionado e interactuar con él:
				spaceProductPage.getCardData(givenCard).then(cardData => {
					cy.wrap(cardData.title).as('cardTitle');
					cy.wrap(cardData.description).as('cardDesc');
					cy.wrap(cardData.price).as('cardPrice');
					cy.wrap(cardData.bookButton).click();
				});
			});
			cy.url().should('include', '/checkout');

			spaceCheckoutPage
				.checkoutPrice()
				.invoke('text')
				.then(checkoutPice => {
					cy.log(this.cardTitle);
					cy.log(this.cardDesc);
					const expectedCardPrice = parseCurrencyNum(this.cardPrice);
					const checkoutPiceValue = parseCurrencyNum(checkoutPice);

					expect(checkoutPiceValue).equal(expectedCardPrice);
				});
		});
	});
});
