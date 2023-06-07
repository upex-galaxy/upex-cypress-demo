import { userName, password, userId1, isbn1, isbn2, isbn3 } from '../../../fixtures/data/bookStore.json';
class BookStore {
	get = {
		loginBtn: () => cy.get('#login'),
		pocketBook: () => cy.get('[id*="Pocket"]'),
		javascriptBook: () => cy.get('[id^="see-book-Speaking"]'),
		addToCollectionBtn: () => cy.contains('button', 'Add To Your Collection'),
		backToBookStoreBtn: () => cy.contains('button', 'Back To Book Store'),
		book2: () => cy.get('[id*="Pocket"]'),
	};

	clickLoginBtn() {
		this.get.loginBtn().click();
	}
	clickPocketBook() {
		this.get.pocketBook().click();
	}
	clickSpeakingBook() {
		this.get.javascriptBook().click();
	}
	clickAddBtn() {
		this.get.addToCollectionBtn().click();
	}
	clickBackBtn() {
		this.get.backToBookStoreBtn().click();
	}
	getAuth() {
		return cy.api({
			method: 'POST',
			url: 'https://demoqa.com/Account/v1/Authorized',
			failOnStatusCode: false,
			body: {
				userName: userName,
				password: password,
			},
		});
	}
	generateToken() {
		return cy.api({
			method: 'POST',
			url: 'https://demoqa.com/Account/v1/GenerateToken',
			failOnStatusCode: false,
			body: {
				userName: userName,
				password: password,
			},
		});
	}
	getBooks() {
		return cy.api({
			method: 'POST',
			url: 'https://demoqa.com/BookStore/v1/Books',
			auth: {
				username: userName,
				password: password,
			},
			body: {
				userId: '0cd83b3c-491c-4a95-806d-be31969abf07',
				collectionOfIsbns: [
					{
						isbn: isbn1,
					},
					{
						isbn: isbn2,
					},
				],
			},
		});
	}
	delete() {
		return cy.api({
			method: 'DELETE',
			url: 'https://bookstore.toolsqa.com/BookStore/v1/Book',
			auth: {
				username: userName,
				password: password,
			},
			body: {
				isbn: isbn1,
				userId: userId1,
			},
		});
	}
	deleteAllBooks() {
		return cy.api({
			method: 'DELETE',
			url: `https://bookstore.toolsqa.com/BookStore/v1/Books?UserId=${userId1}`,
			auth: {
				username: userName,
				password: password,
			},
		});
	}
	getCollectionBooks() {
		return cy.api({
			url: `https://demoqa.com/Account/v1/User/${userId1}`,
			auth: {
				username: userName,
				password: password,
			},
		});
	}
	replaceBook() {
		return cy.api({
			method: 'PUT',
			url: 'https://demoqa.com/BookStore/v1/Books/' + isbn1,
			auth: {
				username: userName,
				password: password,
			},
			body: {
				userId: userId1,
				isbn: isbn3,
			},
		});
	}
}

export const bookStore = new BookStore();
