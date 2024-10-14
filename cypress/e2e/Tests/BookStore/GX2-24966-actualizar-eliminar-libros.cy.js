import { bookStoreDeleteUpdatePage } from '../../../support/pages/GX2-24966-actualizar-eliminar-libros.Page';

import { faker } from '@faker-js/faker';
//va
describe('BookStore | Grid | Actualizar y Eliminar Libros de la Tienda', () => {
	beforeEach('PRC: El usuario deberia estar logueado y tener mas de un libro en la coleccion', () => {
		const userName = faker.person.firstName();
		Cypress.env('userName', userName);
		const password = faker.person.lastName().concat('2M.$');
		Cypress.env('password', password);
		bookStoreDeleteUpdatePage.createUser(userName, password, 201).then(userID => {
			Cypress.env('userID', userID);
			bookStoreDeleteUpdatePage.token(userName, password, 200);
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
	it('24967 | TC01: Validar que se pueda eliminar un libro de la coleccion', () => {
		bookStoreDeleteUpdatePage.getUser(Cypress.env('userID'), 200).then(() => {
			bookStoreDeleteUpdatePage.authorizeUser(Cypress.env('userName'), Cypress.env('password'));
			bookStoreDeleteUpdatePage.deleteBook(Cypress.env('isbn'), Cypress.env('userID'), 204);
		});
	});

	it('24967 | TC02: Validar que no se pueda eliminar un libro de la colección, cuando el campo userID esta vacío', () => {
		bookStoreDeleteUpdatePage.getUser(Cypress.env('userID'), 200).then(() => {
			bookStoreDeleteUpdatePage.authorizeUser(Cypress.env('userName'), Cypress.env('password'));
			bookStoreDeleteUpdatePage.deleteBook(Cypress.env('isbn'), '', 401);
		});
	});

	it('24967 | TC03: Validar que no se pueda eliminar un libro de la colección, cuando el campo isbn esta vacio', () => {
		bookStoreDeleteUpdatePage.getUser(Cypress.env('userID'), 200).then(() => {
			bookStoreDeleteUpdatePage.authorizeUser(Cypress.env('userName'), Cypress.env('password'));
			bookStoreDeleteUpdatePage.deleteBook('', Cypress.env('userID'), 400);
		});
	});

	it('24967 | TC04: Validar que se pueda actualizar un libro de la coleccion', () => {
		bookStoreDeleteUpdatePage.getUser(Cypress.env('userID'), 200).then(userId => {
			bookStoreDeleteUpdatePage.getBooks().then(response => {
				cy.wrap(response.body.books)
					.its('length')
					.then(cant => {
						const randomsIndex = Cypress._.random(0, cant - 1);
						const isbnLibroAct = response.body.books[randomsIndex].isbn;
						bookStoreDeleteUpdatePage.updateBook(userId, Cypress.env('isbn'), isbnLibroAct, 200);
					});
			});
		});
	});
	it('24967 | TC05: Validar que no se pueda actualizar un libro de la coleccion, cuando el campo userID esta vacio', () => {
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
	it('24967 | TC06: Validar que no se pueda actualizar un libro de la coleccion, cuando el campo isbn esta vacio', () => {
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
