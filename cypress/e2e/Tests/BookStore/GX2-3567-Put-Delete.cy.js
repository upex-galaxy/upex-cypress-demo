import { login } from '@pages/BookStore/loginPage';
import { removeLogs } from '@helper/RemoveLogs';
import { bookStore } from '@pages/BookStore/bookStorePage';
import { profile } from '@pages/BookStore/profilePage';
import { userName, password, isbn1 } from '../../../fixtures/data/bookStore.json';
removeLogs();
let token;

describe.skip('GX2-3567 | BookStore | Grid | Actualizar y Eliminar Libros de la Tienda (PUT-DELETE)', () => {
	beforeEach('User must be logged in and have added 1 or more products to the collection', () => {
		bookStore.getAuth().then(response => {
			expect(response.status).to.eq(200);
			expect(response.body).to.be.eq(true);
		});
		bookStore.generateToken().then(response => {
			expect(response.status).to.eq(200);
			expect(response.body.status).to.be.equal('Success');
			expect(response.body.result).to.be.equal('User authorized successfully.');
			token = response.body.token;
		});
		cy.visit('/books');
		bookStore.clickLoginBtn();
		login.get.username().type(userName);
		login.get.password().type(password);
		bookStore.clickLoginBtn();
		bookStore.getBooks().then(response => {
			expect(response.status).to.eq(201);
		});
	});
	it('3568 | TC1:Validate remove a product from "Profile"', () => {
		profile.clickProfile();
		cy.url().should('include', '/profile');
		bookStore.delete().then(response => {
			expect(response.status).to.eq(204);
			bookStore.getCollectionBooks().then(resp => {
				expect(resp.body.books).not.contain(isbn1);
			});
		});
	});
	it('3568 | TC2:Validate remove all the products using "Delete All Books" button', () => {
		profile.clickProfile();
		cy.url().should('include', '/profile');
		bookStore.deleteAllBooks().then(response => {
			expect(response.status).to.eq(204);
			bookStore.getCollectionBooks().then(resp => {
				expect(resp.body.books).to.be.empty;
			});
		});
	});
	it('3568 | TC3:Validate replace a book from the "Profile" for one from the bookstore', () => {
		profile.clickProfile();
		cy.url().should('include', '/profile');
		bookStore.replaceBook().then(response => {
			expect(response.status).to.eq(200);
			bookStore.getCollectionBooks().then(resp => {
				expect(resp.body.books).not.contain(isbn1);
			});
		});
	});
});
