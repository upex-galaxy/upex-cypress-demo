import { requests } from '@pages/BookStore/GX2-5299-Requests';
import { removeLogs } from '@helper/RemoveLogs';
import { faker } from '@faker-js/faker';
import { login } from '@pages/BookStore/GX2-5299-Login';
import { profile } from '@pages/BookStore/GX2-5299-Profile';

let staticData;
const pass = `Zeb${faker.internet.password()}1242%&%$`;
describe('GX2-5299 |✅BookStore | Account | Crear, Obtener y Eliminar Usuario (POST-GET-DELETE)', () => {
	before('Load Fixture', () => {
		cy.fixture('data/GX2-5299-Post-Get-Delete').then(info => {
			staticData = info;
		});
	});
	context('GX2-5299 | Block One', () => {
		const user = faker.internet.userName();
		after('Postcondition (user deletion)', () => {
			cy.log(user, pass);
			requests.generateToken(user, pass).then(response => {
				requests.deleteAccount(response.body.token, Cypress.env('userID'));
			});
		});
		it('GX2-5299 | TC1: Validate that the user register a new user successfully', () => {
			cy.log(user, pass);
			requests.SignUp(user, pass).then(response => {
				expect(response.status).to.equal(201);
				expect(response.statusText).to.equal('Created');
				Cypress.env('userID', response.body.userID);
			});
		});
		it('GX2-5299 | TC2: Validate that the use tries to register a new user by inserting invalid or null data in any of the fields.', () => {
			const wrongPass = 'wrongpass';
			requests.SignUp(user, wrongPass).then(response => {
				expect(response.body.message).to.equal(staticData.invalidPasswordMessage);
				expect(response.status).to.equal(staticData.wrongPassStatus);
			});
		});
		it('GX2-5299 | TC3: Validate that the user checks the content of the collection', () => {
			requests.generateToken(user, pass).then(response => {
				expect(response.body.status).to.equal(staticData.status);
				expect(response.body.result).to.equal(staticData.result);
				requests.checkUserContent(response.body.token, Cypress.env('userID')).then(response => {
					expect(response.status).to.equal(staticData.statusCode);
					expect(response.statusText).to.equal(staticData.statusText);
					expect(response.body.books).to.exist;
				});
			});
		});
	});
	context('GX2-5299 | Block Two', () => {
		const user = faker.internet.userName();
		before('Precondition (user creation)', () => {
			requests.SignUp(user, pass).then(response => {
				Cypress.env('userID', response.body.userID);
			});
		});
		beforeEach('Preconditions', () => {
			cy.visit('/login');
		});
		after('Postcondition (user deletion)', () => {
			cy.log(user, pass);
			requests.generateToken(user, pass).then(response => {
				requests.deleteAccount(response.body.token, Cypress.env('userID'));
			});
		});
		it('GX2-5299 | TC4: Validate that the user tries to log in with invalid credentials', () => {
			const wrongPass = 'wrongpass';
			login.get.fullLoginWrapper().within(() => {
				login.get.title().should('have.text', staticData.login.loginText);
			});
			login.logIn(user, wrongPass);
			login.get.loginButton().should('exist').and('have.text', 'Login');
			login.clickLoginButton();
			login.get.output().should('have.text', staticData.login.wrongUserPass);
		});

		it('GX2-5299 | TC5: Validate that the user logs in successfully', () => {
			cy.intercept('GET', `/Account/v1/User/${Cypress.env('userID')}`).as('request');
			login.get.fullLoginWrapper().within(() => {
				login.get.title().should('have.text', staticData.login.loginText);
			});
			login.logIn(user, pass);
			login.get.loginButton().should('exist').and('have.text', 'Login');
			login.clickLoginButton();
			cy.wait(1000);
			cy.wait('@request').then(response => {
				cy.log(response);
			});
			cy.wait(500);
			profile.get.profileWrapper().within(() => {
				profile.get.profileHeader().should('have.text', staticData.profile.profileHeader);
			});
			profile.get.userNameLogged().should('have.text', user);
		});
		it('GX2-5299 | TC6: Validate that the user logs out', () => {
			login.logIn(user, pass);
			login.clickLoginButton();
			cy.wait(1000);
			profile.get.logOutButton().should('exist').and('have.text', 'Log out');
			profile.clickOnLogOut();
			cy.wait(500);
			login.get.fullLoginWrapper().within(() => {
				login.get.title().should('have.text', staticData.login.loginText);
			});
		});
	});
	context('GX2-5299 | Block Three', () => {
		const user = faker.internet.userName();
		before('Preconditions (user creation)', () => {
			requests.SignUp(user, pass).then(response => {
				Cypress.env('userID', response.body.userID);
			});
			cy.visit('/login');
			login.logIn(user, pass);
			login.clickLoginButton();
		});
		it('GX2-5299 | TC7: Validate that the user deleted his/her account with the button "delete account".', () => {
			cy.intercept('DELETE', `/Account/v1/User/${Cypress.env('userID')}`).as('request');
			profile.get.deleteAccountButton().should('exist');
			profile.clickOnDeleteAccount();
			profile.get
				.modalWrapper()
				.should('exist')
				.within(() => {
					profile.get.modalText().should('have.text', staticData.profile.modalText);
					profile.get.deleteOKBbutton().should('exist');
					profile.clickOKdelete();
				});
			cy.wait('@request').then(response => {
				expect(response.state).to.equal(staticData.requestState);
				expect(response.response.statusCode).to.equal(staticData.deleteStatusOK);
			});
			login.get.fullLoginWrapper().within(() => {
				login.get.title().should('have.text', staticData.login.loginText);
			});
		});
	});
});
removeLogs();
