import { faker } from '@faker-js/faker';

describe('ToolsQA | Forms | Practice Form', () => {

	let the;
	const name  = faker.name;
	const email = faker.internet;
	const phone = faker.phone;
	
	before('Inicializar la data', () =>	{
		cy.fixture('DOM/toolsqa/Form/Form.page').then((data) => {
			the = data;
		});
	});

    beforeEach('Precondición: El usuario debe estar situado en la página web /automation-practice-form', () => {
		cy.getUrl('https://demoqa.com/automation-practice-form', 'form');
		cy.viewport(600, 800);
	});

    it('1457 | TC1: Validar poder registrarse correctamente cuando todos los campos se llenan', () => {        		
		const firstNameRandom = name.firstName();
		const lastNameRandom  = name.lastName();
		const emailRandom     = email.email();
		const phoneRandom     = phone.number('##########');

		// fillForm(firstName, lastName, email, mobile, subjects, currentAddress, state, city)
		cy.fillForm(firstNameRandom, // firstName random with faker
			        lastNameRandom, // lastName random with faker
					emailRandom, // email random with faker
					phoneRandom, // mobile random with faker
					the.subjects.valid, // subjects
					the.currentAddress.message, // currentAddress
					the.state.select, // state
					the.city.select); // city
		
		cy.contains(the.output).should('be.visible');
		
		// Validate all pop-up.			
		cy.fixture('DOM/toolsqa/Form/Data').then((data) => {
			
			const birth = `${data.day} ${data.month},${data.year}`;
			let gender  = data.gender;

			// verifyForm(name, email, gender, mobile, dateOfBirth, subjects, hobbies, picture, address,stateAndCity)
			cy.verifyForm(firstNameRandom + ' ' + lastNameRandom, // names random with faker
						  emailRandom, // email random with faker the faker
						  gender, // gender generated
				          phoneRandom, // mobile random with faker
				          birth, // dateOfBirth
				          the.subjects.valid, // subjects
				          data.hobbies, // hobbies
			  	          "upexlogo", // picture
				          the.currentAddress.message, // address
				          "Rajasthan Jaipur"); // stateAndCity
		});
    });

	it('1457 | TC2: Validar poder registrarse correctamente cuando sólo se llenan campos requeridos', () => {        		
		const firstNameRandom = name.firstName();
		const lastNameRandom  = name.lastName();
		const emailRandom     = email.email();
		const phoneRandom     = phone.number('##########');

		// fillFormRequire(firstName, lastName, email, mobile)
		cy.fillFormRequire(firstNameRandom, // firstName random with faker
						   lastNameRandom, // lastName random with faker
						   emailRandom, // email random with faker
					       phoneRandom); // mobile random with faker
		
		cy.contains(the.output).should('be.visible');
		
		// Validate all pop-up.			
		cy.fixture('DOM/toolsqa/Form/Data').then((data) => {
			
			let gender = data.gender;
			
			// Cuando no se pickea una fecha, por predeterminado, la fecha es hoy:		
			const date = new Date()
			let day    = date.getDate();
			let month  = date.toLocaleString('default', { month: 'long' });
			let year   = date.getFullYear();
			
			// verifyForm(name, email, gender, mobile, dateOfBirth, subjects, hobbies, picture, address,stateAndCity)
			cy.verifyForm(firstNameRandom + ' ' + lastNameRandom, // names with faker
						  emailRandom, // email with faker
				          gender, // gender generated
				          phoneRandom, // mobile random with faker
				          `${day} ${month},${year}`, // no dateOfBirth required
				          "", // subjects
				   		  "", // hobbies
						  "", // picture
						  "", // address
						  ""); // stateAndCity
		});
    });

	it('1457 | TC3: Validar poder registrarse correctamente cuando los campos "First Name", "Last Name", "Gender", "Mobile" y "Date of Birth" son válidos', () => {

		const firstNameRandom = name.firstName();
		const lastNameRandom  = name.lastName();
		const phoneRandom     = phone.number('##########');
		
		// fillForm(firstName, lastName, email, mobile, subjects, currentAddress, state, city)
		cy.fillForm(firstNameRandom, // firstName random with faker
					lastNameRandom, // lastName random with faker
					the.email.null, // email
					phoneRandom, // mobile random with faker
					the.subjects.null, // subjects
					the.currentAddress.null, // currentAddress
					the.state.null, // state
					the.city.null); // city
		
		cy.contains(the.output).should('be.visible');
	});

	it('1457 | TC4: Validar NO poder registrase correctamente cuando todos los campos son vacíos', () => { 
		
		// fillForm(firstName, lastName, email, mobile, subjects, currentAddress, state, city)
		cy.fillForm(the.firstName.null, // firstName
					the.lastName.null, // lastName
					the.email.null, // email
					the.mobile.null, // mobile
					the.subjects.null, // subjects
					the.currentAddress.null, // currentAddress
					the.state.null, // state
					the.city.null); // city
		
		cy.contains(the.output).should('not.exist');
	});

	it('1457 | TC5: Validar NO poder registrase correctamente cuando el campo "Email" contiene un dominio incorrecto', () => {

		const firstNameRandom = name.firstName();
		const lastNameRandom  = name.lastName();
		const phoneRandom     = phone.number('##########');

		// fillForm(firstName, lastName, email, mobile, subjects, currentAddress, state, city)
		cy.fillForm(firstNameRandom, // firstName random with faker
					lastNameRandom, // lastName random with faker
					the.email.noExistDomain, // email example: john@.com
					phoneRandom, // mobile random with faker
					the.subjects.valid, // subjects
					the.currentAddress.message, // currentAddress
					the.state.select, // state
					the.city.select); // city
		
		cy.contains(the.output).should('not.exist');
	});

	it('1457 | TC6: Validar NO poder registrase correctamente cuando el campo "Email" NO contiene el símbolo arroba', () => {

		const firstNameRandom = name.firstName();
		const lastNameRandom  = name.lastName();
		const phoneRandom     = phone.number('##########');

		// fillForm(firstName, lastName, email, mobile, subjects, currentAddress, state, city)
		cy.fillForm(firstNameRandom, // firstName random with faker
					lastNameRandom, // lastName random with faker
					the.email.noExistAt, // email example: johngmail.com
					phoneRandom, // mobile random with faker
					the.subjects.valid, // subjects
					the.currentAddress.message, // currentAddress
					the.state.select, // state
					the.city.select); // city
		
		cy.contains(the.output).should('not.exist');
	});

	it('1457 | TC7: Validar NO poder registrase correctamente cuando el campo "Email" NO contiene al menos 1 carácter alfanumérico antes del arroba', () => {

		const firstNameRandom = name.firstName();
		const lastNameRandom  = name.lastName();
		const phoneRandom     = phone.number('##########');

		// fillForm(firstName, lastName, email, mobile, subjects, currentAddress, state, city)
		cy.fillForm(firstNameRandom, // firstName random with faker
					lastNameRandom, // lastName random with faker
					the.email.noName, // email example: "@gmail.com"
					phoneRandom, // mobile random with faker
					the.subjects.valid, // subjects
					the.currentAddress.message, // currentAddress
					the.state.select, // state
					the.city.select); // city
		
		cy.contains(the.output).should('not.exist');
	});

	it('1457 | TC8: Validar NO poder registrase correctamente cuando el campo "Email" NO contiene una extensión correcta', () => {

		const firstNameRandom = name.firstName();
		const lastNameRandom  = name.lastName();
		const phoneRandom     = phone.number('##########');

		// fillForm(firstName, lastName, email, mobile, subjects, currentAddress, state, city)
		cy.fillForm(firstNameRandom, // firstName random with faker
					lastNameRandom, // lastName random with faker
					the.email.noExistExtension, // email example: "john@gmail."
					phoneRandom, // mobile random with faker
					the.subjects.valid, // subjects
					the.currentAddress.message, // currentAddress
					the.state.select, // state
					the.city.select); // city
		
		cy.contains(the.output).should('not.exist');
	});

	it('1457 | TC9: Validar NO poder registrase correctamente cuando el campo "Mobile" contiene sólo letras', () => {

		const firstNameRandom = name.firstName();
		const lastNameRandom  = name.lastName();

		// fillForm(firstName, lastName, email, mobile, subjects, currentAddress, state, city)
		cy.fillForm(firstNameRandom, // firstName
					lastNameRandom, // lastName
					the.email.valid, // email 
					the.mobile.invalidLetters, // mobile example: "abcd"
					the.subjects.valid, // subjects
					the.currentAddress.message, // currentAddress
					the.state.select, // state
					the.city.select); // city

		cy.contains(the.output).should('not.exist');
	});

	it('1457 | TC10: Validar NO poder registrase correctamente cuando el campo "Mobile" contiene carácteres especiales', () => {

		const firstNameRandom = name.firstName();
		const lastNameRandom  = name.lastName();

		// fillForm(firstName, lastName, email, mobile, subjects, currentAddress, state, city)
		cy.fillForm(firstNameRandom, // firstName
					lastNameRandom, // lastName
					the.email.valid, // email 
					the.mobile.invalidSpecialCharacters, // mobile example: "$%.,"
					the.subjects.valid, // subjects
					the.currentAddress.message, // currentAddress
					the.state.select, // state
					the.city.select); // city

		cy.contains(the.output).should('not.exist');
	});
});

// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', (err, runnable) => {
	// Returning false here prevents Cypress from.
	// Failing the test.
	return false;
});

// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log;

Cypress.log = function (opts, ...other) {

	if (opts.displayName === 'xhr' || (opts.displayName === 'fetch' && opts.url.startsWith('https://'))) {
		return;
	}

	return origLog(opts, ...other);
};