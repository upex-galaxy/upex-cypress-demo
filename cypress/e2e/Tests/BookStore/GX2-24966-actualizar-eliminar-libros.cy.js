import { bookStoreDeleteUpdatePage } from '../../../support/pages/GX2-24966-actualizar-eliminar-libros.Page';

import { faker } from '@faker-js/faker';
const userName = faker.person.firstName();
const password = faker.person.lastName().concat('2M.$');

describe('BookStore | Grid | Actualizar y Eliminar Libros de la Tienda', () => {
	beforeEach('PRC: El usuario deberia estar logueado y tener mas de un libro en la coleccion', () => {
		bookStoreDeleteUpdatePage.createUser(userName, password, 201).then(userID => {
			Cypress.env('userID', userID);
			bookStoreDeleteUpdatePage.loginUser(userName, password, 200).then(() => {
				bookStoreDeleteUpdatePage.authorizeUser(userName, password);
				bookStoreDeleteUpdatePage.getBooks().then(response => {
					cy.wrap(response.body.books)
						.its('length')
						.then(cant => {
							const randomsIndex = Cypress._.random(0, cant - 1);
							const isbnLibro = response.body.books[randomsIndex].isbn;
							Cypress.env('isbn', isbnLibro);
							bookStoreDeleteUpdatePage.addBookList(Cypress.env('userID'), isbnLibro);
						});
				});
			});
		});
	});
	//test
	it.only('24967 | TC01: Validar que se pueda eliminar un libro de la coleccion', () => {
		bookStoreDeleteUpdatePage.getUser(Cypress.env('userID'), 200).then(userId => {
			bookStoreDeleteUpdatePage.authorizeUser(userName, password);
			bookStoreDeleteUpdatePage.deleteBook(Cypress.env('isbn'), userId);
		});
	});

	it('24967 | TC07: Validar que se pueda actualizar un libro de la coleccion', () => {
		bookStoreDeleteUpdatePage.getUser(Cypress.env('userID'), 200).then(userId => {
			bookStoreDeleteUpdatePage.getBooks().then(response => {
				cy.wrap(response.body.books)
					.its('length')
					.then(cant => {
						const randomsIndex = Cypress._.random(0, cant - 1);
						const isbnLibroAct = response.body.books[randomsIndex].isbn;
						bookStoreDeleteUpdatePage.updateBook(userId, Cypress.env('isbn'), isbnLibroAct, 204);
					});
			});
		});
	});
	it('24967 | TC08: Validar que no se pueda actualizar un libro de la coleccion, cuando el campo userID esta vacio', () => {
		bookStoreDeleteUpdatePage.getUser(Cypress.env('userID'), 200).then(userId => {
			bookStoreDeleteUpdatePage.getBooks().then(response => {
				cy.wrap(response.body.books)
					.its('length')
					.then(cant => {
						const randomsIndex = Cypress._.random(0, cant - 1);
						const isbnLibroAct = response.body.books[randomsIndex].isbn;
						bookStoreDeleteUpdatePage.updateBook('', Cypress.env('isbn'), isbnLibroAct, 400);
					});
			});
		});
	});
	it('24967 | TC09: Validar que no se pueda actualizar un libro de la coleccion, cuando el campo isbn esta vacio', () => {
		bookStoreDeleteUpdatePage.getUser(Cypress.env('userID'), 200).then(userId => {
			bookStoreDeleteUpdatePage.getBooks().then(response => {
				cy.wrap(response.body.books)
					.its('length')
					.then(cant => {
						const randomsIndex = Cypress._.random(0, cant - 1);
						const isbnLibroAct = response.body.books[randomsIndex].isbn;
						bookStoreDeleteUpdatePage.updateBook(userId, '', isbnLibroAct, 404);
					});
			});
		});
	});
});
