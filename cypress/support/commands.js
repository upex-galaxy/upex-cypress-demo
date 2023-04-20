/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import 'cypress-file-upload';
import '@4tw/cypress-drag-drop';
import 'cypress-downloadfile/lib/downloadFileCommand';
import { login } from '@pages/Login.Page';
const { authLogin, dashboardIndex } = Cypress.env('endpoint');
import { signin } from '@pages/SignIn.Page.js';

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Login', (username, password) => {
	cy.session('login', () => {
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php');
		cy.url().should('contain', authLogin);
		username && login.enterUsername(username);
		password && login.enterPassword(password);
		login.submitLogin();

		cy.url().should('contain', dashboardIndex);
	});
});

Cypress.Commands.add('SignIn', () => {
	const { username, password } = Cypress.env('user');
	const { signUp } = Cypress.env('endpoint');
	cy.session('signIn', () => {
		cy.visit(signUp);
		signin.goToLoginTab();
		signin.enterUsername(username);
		signin.enterPassword(password);
		signin.submitLogin();
	});
});

Cypress.Commands.add('randomNumber', n => {
	return Cypress._.random(0, n - 1);
});

Cypress.Commands.add('SortingVertical', () => {
	rn1 = Cypress._.random(0, 5);
	const rn2 = getRandomNumber(0, 5, rn1);
	listpage
		.VerticalNumber()
		.eq(rn1)
		.then($el => {
			listpage.VerticalNumber().eq(rn1).trigger('mousedown', { force: true });
			listpage.VerticalNumber().eq(rn2).trigger('mousemove', { force: true }).trigger('mouseup', { force: true });
			cy.wrap($el)
				.invoke('text')
				.then(number => {
					const info = { number: number, rn1: rn1 };
					cy.wrap(info).as('info');
				});
		});
});
Cypress.Commands.add('VerticalDragOutside', () => {
	rn1 = Cypress._.random(0, 5);
	listpage
		.VerticalNumber()
		.eq(rn1)
		.then($el => {
			let rect = $el[0].getBoundingClientRect();
			cy.wrap($el)
				.trigger('mousedown', { which: 1, force: true })
				.trigger('mousemove', { pageY: rect.top, force: true })
				.trigger('mouseup', { which: 1, force: true });
			cy.wrap($el)
				.invoke('text')
				.then(number => {
					const values = { number: number, rn1: rn1 };
					cy.wrap(values).as('text');
				});
		});
});

Cypress.Commands.add('SortingGrid', () => {
	rn1 = Cypress._.random(0, 8);
	const rn2 = getRandomNumber(0, 8, rn1);
	gridpage
		.Gridnumbers()
		.eq(rn1)
		.invoke('text')
		.then(number1 => {
			gridpage.Gridnumbers().eq(rn1).trigger('mousedown', { force: true });
			gridpage.Gridnumbers().eq(rn2).trigger('mousemove', { force: true }).trigger('mouseup', { force: true });
			gridpage
				.Gridnumbers()
				.eq(rn2)
				.invoke('text')
				.then(() => {
					const value = { text: number1, rn2: rn2 };
					cy.wrap(value).as('values');
				});
		});
});
Cypress.Commands.add('GridDragOutside', () => {
	rn1 = Cypress._.random(0, 8);
	gridpage
		.Gridnumbers()
		.eq(rn1)
		.then($el => {
			cy.wrap($el)
				.invoke('text')
				.then(number => {
					let rect = $el[0].getBoundingClientRect();
					cy.wrap($el)
						.trigger('mousedown', {
							which: 1,
							force: true,
						})
						.trigger('mousemove', {
							pageY: rect.top + 800,
							force: true,
						})
						.trigger('mouseup', {
							which: 1,
							force: true,
						});
					const values = { number: number, rn1: rn1 };
					cy.wrap(values).as('text');
				});
		});
});

Cypress.Commands.add('SticktoBottom', () => {
	let Xcoord = Cypress._.random(1, 150);
	let Ycoord = Cypress._.random(1, 50);
	cy.get('[id="cursorBottom"]').then($draggable => {
		cy.wrap($draggable)
			.trigger('mousedown', { which: 1 })
			.then($box => {
				let initialX = $box.offset().left;
				let initialY = $box.offset().top;

				cy.get('body')
					.trigger('mousemove', {
						clientX: initialX + Xcoord,
						clientY: initialY + Ycoord,
					})
					.trigger('mouseup');

				cy.wrap($draggable)
					.trigger('mousedown', { which: 1 })
					.then($box2 => {
						let finalX = $box2.offset().left;
						let finalY = $box2.offset().top;

						const variables = {
							initialx: initialX + Xcoord,
							initialy: initialY + Ycoord,
							finalx: finalX,
							finaly: finalY,
						};
						cy.wrap(variables).as('variables3');
					});
			});
	});
});
Cypress.Commands.add('getTableCell', (columnName, rowIndex) => {
	cy.contains('.rt-th', columnName)
		.invoke('index')
		.then(colIndex => {
			cy.get('.rt-tr')
				.eq(rowIndex)
				.within(() => {
					cy.get('.rt-td').eq(colIndex);
				});
		});
});
