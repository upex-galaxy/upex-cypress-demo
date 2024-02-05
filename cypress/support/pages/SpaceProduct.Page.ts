export class SpaceDestinationPage {
	destinationCards: () => Cypress.Chainable<JQuery<HTMLElement>>;
	cardTitle: () => Cypress.Chainable<JQuery<HTMLHeadingElement>>;
	cardDesc: () => Cypress.Chainable<JQuery<HTMLParagraphElement>>;
	cardPrice: () => Cypress.Chainable<JQuery<HTMLElement>>;
	cardBookBtn: () => Cypress.Chainable<JQuery<HTMLElement>>;

	constructor() {
		this.destinationCards = () => cy.react('card');
		//* Combined with within Card:
		this.cardTitle = () => cy.get('h5');
		this.cardDesc = () => cy.get('p');
		this.cardPrice = () => cy.get('span:contains("$")');
		this.cardBookBtn = () => cy.get('button:contains("Book")');
	}

	getCardByTitle(title: string) {
		return this.destinationCards().filter(`:has(h5:contains("${title}"))`);
	}
	getCardByIndex(index: number) {
		return this.destinationCards().eq(index);
	}
	getAnyCard() {
		return this.destinationCards()
			.its('length')
			.then(cardCount => {
				const randomCard = Math.floor(Math.random() * cardCount);
				return this.destinationCards().eq(randomCard);
			});
	}

	getCardData(givenDesCard: JQuery<HTMLElement>) {
		const cardData = {} as Cypress.CardProps;
		cy.wrap(givenDesCard).within(() => {
			this.cardTitle()
				.invoke('text')
				.then(val => (cardData.title = val));
			this.cardDesc()
				.invoke('text')
				.then(val => (cardData.description = val));
			this.cardPrice()
				.invoke('text')
				.then(val => (cardData.price = val));
			this.cardBookBtn().then(val => (cardData.bookButton = val));
		});
		return cy.wrap(cardData);
	}
}
