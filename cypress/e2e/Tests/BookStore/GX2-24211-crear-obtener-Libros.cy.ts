import { librosApiPage } from '@pages/GX2-24211-crear-obtener-Libros.Page';
import { faker } from '@faker-js/faker';

const userName = faker.person.firstName();
const password = faker.person.lastName().concat('2M.$');
const userNameNuevo = faker.person.firstName().concat('Z');
const passwordNuevo = faker.person.lastName().concat('2M.$');

const obtenerVar = (response: any, indexRandows: number, propiedad: string) => {
	const prop = response.body.books[indexRandows][propiedad];
	Cypress.env(propiedad, prop);
};

describe('BookStore | Grid | Crear y Obtener Libros de la Tienda (POST-GET)', () => {
	beforeEach('PRC1: Deberia esta logueado en BookStore', () => {
		librosApiPage.createUser(userNameNuevo, passwordNuevo, 201).then(userId => {
			Cypress.env('userId', userId);
			librosApiPage.loginUser(userNameNuevo, passwordNuevo, 200).then(() => {
				librosApiPage.authorizeUser(userNameNuevo, passwordNuevo);
			});
		});
	});

	it('24212|TC1: Validar que se puedan agregar un libro al prefil del usuario', () => {
		librosApiPage.getBooks().then(response => {
			cy.wrap(response.body.books)
				.its('length')
				.then(cant => {
					console.log(cant);
					const indexRandows = Cypress._.random(0, cant - 1);
					obtenerVar(response, indexRandows, 'isbn');
					librosApiPage.addListOfBooks(Cypress.env('userId'), Cypress.env('isbn'));
				});
		});
	});
});

context('BookStore | Grid | Crear y Obtener Libros de la Tienda (POST-GET)', () => {
	beforeEach('PRC2: Deberia esta logueado en BookStore', () => {
		librosApiPage.createUser(userName, password, 201).then(userId => {
			Cypress.env('userId', userId);
			librosApiPage.loginUser(userName, password, 200).then(() => {
				librosApiPage.authorizeUser(userName, password);
			});
		});
	});

	it('24212|TC2: validar que el perfil de usuario tenga un libro', () => {
		librosApiPage.getBooks().then(response => {
			cy.wrap(response.body.books)
				.its('length')
				.then(cant => {
					const indexRandows = Cypress._.random(0, cant - 1);
					obtenerVar(response, indexRandows, 'isbn');
					/* eslint-disable @typescript-eslint/no-unsafe-assignment */ obtenerVar(response, indexRandows, 'title');
					librosApiPage.addListOfBooks(Cypress.env('userId'), Cypress.env('isbn'));
				});
		});
		librosApiPage.getUser(Cypress.env('userId'), 200).then(response => {
			expect(response[0].body.books[0].isbn).to.equal(Cypress.env('isbn'));
			expect(response[0].body.books[0].title).to.equal(Cypress.env('title'));
		});
	});
});
