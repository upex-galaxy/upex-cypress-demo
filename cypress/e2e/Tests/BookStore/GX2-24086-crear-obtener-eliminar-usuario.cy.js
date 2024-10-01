import { bookStoreApiUserPage } from '../../../support/pages/GX2-24086-crear-obtener-eliminar-usuario.Page';
import { faker } from '@faker-js/faker';
let user, passwd;
describe('BookStore | Account | Crear, Obtener y Eliminar Usuario (POST-GET-DELETE)', () => {
	beforeEach('PRC:', () => {
		const username = faker.person.firstName();
		const password = faker.person.lastName().concat('2M.$');
		user = username;
		passwd = password;
	});
	it('24087 | TC1: Validar el registro exitoso de un usuario.', () => {
		bookStoreApiUserPage.createUser(user, passwd, 201);
	});
	it('24087 | TC2: Validar que no se pueda registrar un usuario cuando el nombre es vacio', () => {
		bookStoreApiUserPage.createUser('', passwd, 400);
	});
	it('24087 | TC3: Validar que no se pueda registrar un usuario cuando el password es vacio', () => {
		bookStoreApiUserPage.createUser(user, '', 400);
	});
	it('24087 | TC4: Validar que no se pueda registrar un usuario cuando el passwd es datos invalidos', () => {
		bookStoreApiUserPage.createUser(user, 'dani', 400);
	});
	it('24087 | TC5: Validar un usuario registrado se pueda loguear en la pagina satisfactoriamente', () => {
		bookStoreApiUserPage.createUser(user, passwd, 201);
		bookStoreApiUserPage.loginUser(user, passwd, 200);
	});

	it.skip('24087 | TC6: Validar que un usuario registrado no pueda hacer login si el passwd es invalido', () => {
		bookStoreApiUserPage.createUser(user, passwd, 201).then(userId => {
			bookStoreApiUserPage.authorizeUser(user, passwd);
			bookStoreApiUserPage.loginUser(user, 'v', 400);
		});
	});

	it('24087 | TC7: Validar que un usuario logueado se pueda verificar la coleccion', () => {
		bookStoreApiUserPage.createUser(user, passwd, 201).then(userId => {
			bookStoreApiUserPage.loginUser(user, passwd, 200).then(() => {
				bookStoreApiUserPage.authorizeUser(user, passwd);
				bookStoreApiUserPage.getUser(userId, 200);
			});
		});
	});

	it('24087 | TC8: Validar que se pueda eliminar un usuario que este logueado', () => {
		bookStoreApiUserPage.createUser(user, passwd, 201).then(userId => {
			bookStoreApiUserPage.loginUser(user, passwd, 200).then(() => {
				bookStoreApiUserPage.authorizeUser(user, passwd);
				bookStoreApiUserPage.deleteUser(userId, 204);
			});
		});
	});
});
