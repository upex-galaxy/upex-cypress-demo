import { bookStoreApiUserPage } from '../../../support/pages/GX2-24086-crear-obtener-eliminar-usuario.Page';
import { faker } from '@faker-js/faker';
const username = faker.person.firstName();
const password = faker.person.lastName().concat('2M.$');

describe('', () => {
	it('TC1', () => {
		bookStoreApiUserPage.createUser(username, password);
	});
	//it('TC2', () => {});
	it.only('TC3', () => {
		bookStoreApiUserPage.createUser(username, password);
		bookStoreApiUserPage.loginUser(username, password);
	});
});
