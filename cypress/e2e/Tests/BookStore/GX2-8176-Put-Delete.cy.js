//TC Cancelado debido a problemas del sitoWeb
//8177 | TC1: Validar remover producto utilizando el icono "TrashCan"
//8177 | TC2: Validar remover todos los productos utilizando el boton "Delete All Books".
import data from '../../../fixtures/data/GX2-8176-Bookstore-put-delete.json';
import { BookStorePage } from '@pages/BookStore/GX2-8176-Bookstore-put-delete';
const initialSetup = () => {
	BookStorePage.precondition().then(([response1, response2, response3]) => {
		expect(response1.status).to.eq(200);
		expect(response2.status).to.eq(200);
		expect(response3.status).to.eq(201);
		expect(response2.body).to.eq(true);
		expect(response3.body.books[0].isbn).to.equal(Cypress.env('book1'));
		expect(response3.body.books[1].isbn).to.equal(Cypress.env('book2'));
	});
};
const preconditionDeleteAllBooks = () => {
	BookStorePage.deleteAllBooks({ userId: data.userID });
};

describe('BookStore | Grid | Actualizar y Eliminar Libros de la Tienda (PUT-DELETE)', () => {
	beforeEach('precondition', () => {
		initialSetup();
	});

	it('8177 | TC3: (DELETE) Validar remover un producto del profile', () => {
		BookStorePage.deleteBook({ isbn: data.idBook1, userId: data.userID }).then(response => {
			expect(response.status).to.eq(204);
			expect(response.statusText).to.equal('No Content');
		});
	});

	it('8177 | TC4: (DELETE) Validar remover todos los producto del profile', () => {
		BookStorePage.deleteAllBooks({ userId: data.userID }).then(response => {
			expect(response.status).to.eq(204);
			expect(response.statusText).to.equal('No Content');
		});
	});
	it('8177 | TC5: (DELETE) Validar NO remover un producto del profile con “isbn” vacio', () => {
		BookStorePage.deleteBook({ isbn: '', userId: data.userID }).then(response => {
			expect(response.status).to.eq(400);
			expect(response.statusText).to.equal('Bad Request');
			expect(response.body.message).to.include(data.messageEmptyIsbnOrInexistent);
		});
	});
	it('8177 | TC6: (DELETE) Validar NO remover un producto del profile con “userId” vacio', () => {
		BookStorePage.deleteBook({ isbn: data.idBook1, userId: '' }).then(response => {
			expect(response.status).to.eq(401);
			expect(response.statusText).to.equal('Unauthorized');
			expect(response.body.message).to.contain(data.messageEmptyIdOrInexistent);
		});
	});
	it('8177 | TC7: (DELETE) Validar NO remover todos los producto del profile con “userId” vacio', () => {
		BookStorePage.deleteAllBooks({ userId: '' }).then(response => {
			expect(response.status).to.eq(401);
			expect(response.statusText).to.equal('Unauthorized');
			expect(response.body.message).to.contain(data.messageEmptyIdOrInexistent);
		});
	});

	it('8177 | TC8: (DELETE) Validar NO remover todos los producto del profile con “userId” inexistente', () => {
		BookStorePage.deleteAllBooks({ userId: data.UserIDInexistent }).then(response => {
			expect(response.status).to.eq(401);
			expect(response.statusText).to.equal('Unauthorized');
			expect(response.body.message).to.contain(data.messageEmptyIdOrInexistent);
		});
	});
	it('8177 | TC9: (PUT) Validar actualizar un libro/producto del profile', () => {
		preconditionDeleteAllBooks();
		initialSetup();
		BookStorePage.replaceBookISBN({ NewIsbn: data.idBook3, userId: data.userID, ToReplaceIsbn: data.idBook1 }).then(response => {
			expect(response.status).to.eq(200);
			expect(response.body.books[1].isbn).to.contain(data.idBook3);
		});
	});
	it('8177 | TC10: (PUT) Validar NO actualizar un libro/producto del profile con “isbn” vacio', () => {
		preconditionDeleteAllBooks();
		initialSetup();
		BookStorePage.replaceBookISBN({ NewIsbn: '', userId: data.userID, ToReplaceIsbn: data.idBook1 }).then(response => {
			expect(response.status).to.eq(400);
			expect(response.statusText).to.equal('Bad Request');
			expect(response.body.message).to.contain(data.messageEmptyIdOrIsbnPUTmethod);
		});
	});
	it('8177 | TC11: (PUT) Validar NO actualizar un libro/producto del profile con “isbn” inexistente', () => {
		preconditionDeleteAllBooks();
		initialSetup();
		BookStorePage.replaceBookISBN({ NewIsbn: data.isbnInexistent, userId: data.userID, ToReplaceIsbn: data.idBook1 }).then(response => {
			expect(response.status).to.eq(400);
			expect(response.statusText).to.equal('Bad Request');
			expect(response.body.message).to.contain(data.messageEmptyIsbnOrInexistent);
		});
	});
	it('8177 | TC12: (PUT) Validar NO actualizar un libro/producto del profile con “userId” inexistente', () => {
		preconditionDeleteAllBooks();
		initialSetup();
		BookStorePage.replaceBookISBN({ NewIsbn: data.idBook3, userId: data.UserIDInexistent, ToReplaceIsbn: data.idBook1 }).then(response => {
			expect(response.status).to.eq(401);
			expect(response.statusText).to.equal('Unauthorized');
			expect(response.body.message).to.contain(data.messageEmptyIdOrInexistent);
		});
	});
});
