describe('GX2-2227 | BookStore | Account | Crear, Obtener y Eliminar Usuario (POST-GET-DELETE)', () => {
	let IdUser, Token, validUserName, statusResponseRegisterUser, userNameResponse;

	beforeEach('Create User, authorized and Token', () => {
		validUserName = faker.internet.userName();
		const registerUserResponse = BookStore.registerUserByAPI({ username: validUserName, Password: 'Bad*12345' });
		cy.get('*').then(() => {
			statusResponseRegisterUser = registerUserResponse[0];
			IdUser = registerUserResponse[1];
			userNameResponse = registerUserResponse[2];
			// generate token
			const TokenUser = BookStore.GenerateTokenByAPI({ username: validUserName });
			cy.get('*').then(() => {
				Token = TokenUser[1];
				//authorized user
				const authorizedResponse = BookStore.authorizedUserByAPI({ username: validUserName, token: Token });
				cy.get('*').then(() => {
					expect(authorizedResponse.toString()).to.equal('200');
				});
			});
		});
	});
	it('2228 | TC1: Validate successfully register user By API request', () => {
		//validate response of request create new user API
		//se realiza validacion en backend porque el registro en frontend necesita resolver reCaptcha
		expect(statusResponseRegisterUser.toString()).to.equal('201');
		expect(userNameResponse.toString()).to.equal(validUserName);
	});
	it('2228 | TC2: Validate login in Frontend and backend user create by API request', () => {
		// generate token, because need login, validate login backend!!
		const TokenUser = BookStore.GenerateTokenByAPI({ username: validUserName });
		cy.get('*').then(() => {
			Token = TokenUser[1];
			const statusResponse = TokenUser[0];
			expect(statusResponse).to.equal(200);
			//validate login in frontend
			cy.visit('https://demoqa.com/login');
			BookStore.userLoginFrontEnd({ username: validUserName });
			BookStore.get.logoutButton().should('be.visible');
			BookStore.get.userNameValueAfterLogin().should('contain', validUserName);
		});
	});
	it('2228 | TC3: validate the content of the user collection in frontend is equal to backend', () => {
		// get books of user
		const responseGetUser = BookStore.getUserByAPI({ userID: IdUser, token: Token });
		cy.get('*').then(() => {
			//validate status response of getUser
			const statusGetUser = responseGetUser[0];
			expect(statusGetUser).to.equal(200);
			//validate response book is empty because dont have books in the account
			const books = responseGetUser[2];
			const empty = '';
			cy.get('*').then(() => {
				expect(books.toString()).to.equal(empty);
			});
		});
		//Validate Frontend
		cy.visit('https://demoqa.com/login');
		BookStore.userLoginFrontEnd({ username: validUserName });
		//no book should be found, equal to backend empty
		BookStore.get.foundRowsInUserPage().should('be.visible').should('contain', 'No rows found');
	});

	it('2228 | TC4: Validate delete account in frontend by API request', () => {
		//delete user in backend by request API
		const responseDeleteUser = BookStore.DeleteUserByAPI({ userID: IdUser, token: Token });
		cy.get('*').then(() => {
			expect(responseDeleteUser.toString()).to.equal('204');
		});
		//Validate delete in frontend
		cy.visit('https://demoqa.com/login');
		BookStore.userLoginFrontEnd({ username: validUserName });
		BookStore.get.errorMsgLogin().should('contain', 'Invalid username or password!');
	});
});
context('GX2-2227 | BookStore | Account | Crear, Obtener y Eliminar Usuario (POST-GET-DELETE)', () => {
	it('2228 | TC5: Validate no register by API request (Invalid Date)', () => {
		const responseGetUser = BookStore.registerUserByAPI({ username: '!@#$!@!@', Password: 'B1234' });
		cy.get('*').then(() => {
			const statusResponse = responseGetUser[0];
			expect(statusResponse).to.equal(400);
			const messageResponse = responseGetUser[3];
			expect(messageResponse).to.contain('Passwords must have at least one non alphanumeric character');
		});
	});
	it('2228 | TC6: no login by API request (invalid credentials) ', () => {
		//this API need valid credentials
		const responseGenerateToken = BookStore.GenerateTokenByAPI({ username: 'InvalidUserName' });
		cy.get('*').then(() => {
			const status = responseGenerateToken[2];
			expect(status).to.equal('Failed');
			const result = responseGenerateToken[3];
			expect(result).to.equal('User authorization failed.');
		});
	});
});

import { BookStore } from '@pages/accountBookStore.Page';
import { faker } from '@faker-js/faker';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
