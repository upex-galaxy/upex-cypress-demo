import { faker } from '@faker-js/faker';

// Test Suite
describe('Challenge Elements', () => {
	it('TEXTBOX - TC1: Should submit form with valid credentials', () => {
		cy.visit('/text-box');
		//todo: ARRANGE (preparación y declaración)
		const fullName = faker.name.fullName();
		const email = faker.internet.email();
		const currentAddress = faker.address.streetAddress();
		const permaAddress = faker.address.country();

		//todo: ACT (Acción y ejecución de métodos)
		cy.get('input#userName').type(fullName);
		cy.get('input#userEmail').type(email);
		cy.get('textarea#currentAddress').type(currentAddress);
		cy.get('textarea#permanentAddress').type(permaAddress);

		cy.get('#submit').click();

		//todo: ASSERT (VALIDAR los resultados esperados)
		cy.get('p#name').should('contain.text', fullName);
		cy.get('p#email').should('contain.text', email);
		cy.get('p#currentAddress').should('contain.text', currentAddress);
		cy.get('p#permanentAddress').should('contain.text', permaAddress);
	});

	it('CHECKBOX - TC2: Should check and display the labels', () => {
		cy.visit('/checkbox');
		cy.get('[for^=tree-node]').should('have.length', 1);
		cy.get('[aria-label="Expand all"]').click();
		cy.get('[for^=tree-node]')
			.its('length')
			.then(count => {
				const randomNodeIndex = Cypress._.random(count);
				cy.get('[type=checkbox]').eq(randomNodeIndex).check({ force: true });
				cy.get('[type=checkbox]').eq(randomNodeIndex).should('be.checked');

				cy.get('[type=checkbox]').eq(0).check({ force: true });
				cy.get('[type=checkbox]').eq(0).should('be.checked');

				cy.get('[type=checkbox]').eq(randomNodeIndex).uncheck({ force: true });
				cy.get('[type=checkbox]').eq(randomNodeIndex).should('not.be.checked');
			});

		const labels = [];
		cy.get('[for^=tree-node]:has(.rct-icon-check)') // 11
			.each(element => {
				labels.push(element.text());
			});

		const successTexts = [];
		cy.get('#result .text-success') // 11
			.each(element => {
				successTexts.push(element.text());
			})
			.then(() => {
				const checkedLabels = labels.map(text => text.toLowerCase().replace(' ', '').replace('.doc', ''));
				const displayedTexts = successTexts.map(text => text.toLowerCase());
				expect(displayedTexts).deep.equal(checkedLabels);
			});
	});

	it('RADIOBUTTON - TC3: Should check radio buttons', () => {
		//* ARRANGE
		const radioYes = 'Yes';
		const radioImpressive = 'Impressive';
		const radioNo = 'No';
		function getRadio(radioName) {
			// return cy.get('.custom-radio').contains(radioName).siblings(); //* note: Este es más corto pero no muy específico
			return cy.get('.custom-radio').filter(`:contains("${radioName}")`).find('input'); //* el find está específico debido al diseño de prueba.
		}

		cy.visit('/radio-button');

		//* ACT
		getRadio(radioYes)
			.check({ force: true })
			.then(() => {
				//* ASSERT
				cy.get('.text-success').should('have.text', radioYes);
			});

		getRadio(radioImpressive)
			.check({ force: true })
			.then(() => {
				//* ASSERT
				cy.get('.text-success').should('have.text', radioImpressive);
			});

		//* ASSERT
		getRadio(radioNo).should('be.disabled');
	});

	it('BUTTONS - TC4: Should be clickable', () => {
		cy.visit('/buttons');

		cy.contains('Double Click Me').dblclick();
		cy.contains('Right Click Me').rightclick();
		cy.get('button.btn:not([id$=Btn])').click();
	});

	it('WAITS - TC5: Should show up after waiting or before waiting', () => {
		cy.visit('/dynamic-properties');

		cy.get('#enableAfter').should('not.be.enabled');
		cy.get('#visibleAfter').should('not.exist');
		cy.wait(5000);
		cy.get('#colorChange').should('have.css', 'color', 'rgb(220, 53, 69)');
		cy.get('#enableAfter').should('be.enabled');
		cy.get('#visibleAfter').should('be.visible');
	});

	it('UPLOAD/DOWNLOAD - TC6: Should upload a file and download it', () => {
		cy.visit('/upload-download');

		cy.get('#downloadButton')
			.invoke('attr', 'download')
			.then(name => {
				cy.log(name);
				cy.get('#downloadButton').click();
				cy.readFile('cypress/downloads/' + name).should('exist');

				cy.get('#uploadFile').selectFile('cypress/downloads/' + name);

				cy.get('#uploadedFilePath').should('contain.text', name);
			});
	});
});
