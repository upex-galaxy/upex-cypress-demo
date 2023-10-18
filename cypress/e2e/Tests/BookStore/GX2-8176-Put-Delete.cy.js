//TC Cancelado debido a problemas del sitoWeb
//8177 | TC1: Validar remover producto utilizando el icono "TrashCan"
//8177 | TC2: Validar remover todos los productos utilizando el boton "Delete All Books".
import data from '../../../fixtures/data/GX2-8176-Bookstore-put-delete.json';
import { BookStorePage } from '@pages/BookStore/GX2-8176-Bookstore-put-delete';
const initialSetup = () => {
	BookStorePage.Precondition().then(([response1, response2, response3]) => {
		expect(response1.status).to.eq(200);
		expect(response2.status).to.eq(200);
		expect(response3.status).to.eq(201);
		expect(response2.body).to.eq(true);
		expect(response3.body.books[0].isbn).to.equal(Cypress.env('book1'));
		expect(response3.body.books[1].isbn).to.equal(Cypress.env('book2'));
	});
};

describe('BookStore | Grid | Actualizar y Eliminar Libros de la Tienda (PUT-DELETE)', () => {
	beforeEach('precondition', () => {
		initialSetup();
	});

	it('TC3: (DELETE) Validar remover un producto del profile', () => {});
});
