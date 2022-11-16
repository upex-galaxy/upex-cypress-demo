describe('ToolsQA | Forms | Practice Form', () => {

	const url = 'https://demoqa.com/automation-practice-form'
	const title = 'ToolsQA'
	const contain = 'form'
	const protocol = 'https'
	const hostname = 'demoqa.com'
	const id = '1456'
	const path = 'DOM/toolsqa/Form/Form.page'
	let the

	before('Inicializar la data', () =>	{
		cy.fixture(path).then((data) => {
			the = data
		})
	})

    beforeEach('Precondición: El usuario debe estar situado en la página web https://demoqa.com/automation-practice-form', () => {
		cy.getUrl(url, contain, title, protocol, hostname)
		cy.viewport(600, 800)
	})

    it.skip(`US-GX-${id} | TC1: Validar poder registrarse correctamente cuando todos los campos son válidos`, () => {        
		
		// 'fillForm', (firstName, lastName, email, mobile, subjects, currentAddress, state, city)
		cy.fillForm(the.firstName.valid, // firstName
					the.lastName.valid, // lastName
					the.email.valid, // email
					the.mobile.valid, // mobile
					the.subjects.valid, // subjects
					the.currentAddress.message, // currentAddress
					the.state.select, // state
					the.city.select) // city
		
		cy.contains(the.output).should('be.visible')
		
		// Validate all pop-up			
		cy.fixture('DOM/toolsqa/Form/Data').then((data) => {
			const Birth = `${data.day} ${data.month},${data.year}`

		// "CheckForm",(Name,Email,Gender,Mobile,DateofBirth,Subjects,Hobbies,Picture,Address,StateAndCity)
			cy.VerifyForm(
				the.firstName.valid+' '+the.lastName.valid, // Name
				the.email.valid, // Email
				data.gender, // Gender Generated
				the.mobile.valid, // Mobile
				Birth, // Date of Birth
				the.subjects.valid, // Subjects
				data.hobbies, // Hobbies
				"upexlogo", // Picture
				the.currentAddress.message, // Address
				"Rajasthan Jaipur" // StateAndCity
			)
		})	
    })
	it(`US-GX-${id} | TC1.2: Validar poder registrarse correctamente cuando solo se llenan campos requeridos`, () => {        
		
		// 'fillForm', (firstName, lastName, email, mobile, subjects, currentAddress, state, city)
		cy.fillFormRequire(the.firstName.valid, // firstName
					the.lastName.valid, // lastName
					the.email.valid, // email
					the.mobile.valid) // mobile
		
		cy.contains(the.output).should('be.visible')
		
		// Validate all pop-up			
		cy.fixture('DOM/toolsqa/Form/Data').then((data) => {
			let gender = data.gender
			// Cuando no se pickea una fecha, por predeterminado, la fecha es Hoy:		
			const date = new Date();
			let day = date.getDate();
			let month = date.toLocaleString('default', { month: 'long' });
			let year = date.getFullYear();
			// "CheckForm",(Name,Email,Gender,Mobile,DateofBirth,Subjects,Hobbies,Picture,Address,StateAndCity)
			cy.VerifyForm(
				the.firstName.valid+' '+the.lastName.valid, // Name
				the.email.valid, // Email
				gender, // Gender Generated
				the.mobile.valid, // Mobile
				`${day} ${month},${year}`, // No Birth Required
				"", // Subjects
				"", // Hobbies
				"", // Picture
				"", // Address
				"" // StateAndCity
			)
		})	
    })

	it(`US-GX-${id} | TC2: Validar poder registrarse correctamente cuando los campos "First Name", "Last Name", "Gender", "Mobile" y "Date of Birth" son válidos`, () => {
		
		// 'fillForm', (firstName, lastName, email, mobile, subjects, currentAddress, state, city)
		cy.fillForm(the.firstName.valid, // firstName
					the.lastName.valid, // lastName
					the.email.null, // email
					the.mobile.valid, // mobile
					the.subjects.null, // subjects
					the.currentAddress.null, // currentAddress
					the.state.null, // state
					the.city.null) // city
		
		cy.contains(the.output).should('be.visible')
	})

	it(`US-GX-${id} | TC3: Validar NO poder registrase correctamente cuando todos los campos son vacíos`, () => { 
		
		// 'fillForm', (firstName, lastName, email, mobile, subjects, currentAddress, state, city)
		cy.fillForm(the.firstName.null, // firstName
					the.lastName.null, // lastName
					the.email.null, // email
					the.mobile.null, // mobile
					the.subjects.null, // subjects
					the.currentAddress.null, // currentAddress
					the.state.null, // state
					the.city.null) // city
		
		cy.contains(the.output).should('not.exist')
	})

	it(`US-GX-${id} | TC4: Validar NO poder registrase correctamente cuando el campo "Email" contiene un dominio incorrecto`, () => {

		// 'fillForm', (firstName, lastName, email, mobile, subjects, currentAddress, state, city)
		cy.fillForm(the.firstName.valid, // firstName
					the.lastName.valid, // lastName
					the.email.noExistDomain, // email example: john@.com
					the.mobile.valid, // mobile
					the.subjects.valid, // subjects
					the.currentAddress.message, // currentAddress
					the.state.select, // state
					the.city.select) // city
		
		cy.contains(the.output).should('not.exist')
	})

	it(`US-GX-${id} | TC5: Validar NO poder registrase correctamente cuando el campo "Email" NO contiene el símbolo arroba`, () => {

		// 'fillForm', (firstName, lastName, email, mobile, subjects, currentAddress, state, city)
		cy.fillForm(the.firstName.valid, // firstName
					the.lastName.valid, // lastName
					the.email.noExistAt, // email example: johngmail.com
					the.mobile.valid, // mobile
					the.subjects.valid, // subjects
					the.currentAddress.message, // currentAddress
					the.state.select, // state
					the.city.select) // city
		
		cy.contains(the.output).should('not.exist')
	})

	it(`US-GX-${id} | TC6: Validar NO poder registrase correctamente cuando el campo "Email" NO contiene al menos 1 carácter alfanumérico antes del arroba`, () => {

		// 'fillForm', (firstName, lastName, email, mobile, subjects, currentAddress, state, city)
		cy.fillForm(the.firstName.valid, // firstName
					the.lastName.valid, // lastName
					the.email.noName, // email example: "@gmail.com"
					the.mobile.valid, // mobile
					the.subjects.valid, // subjects
					the.currentAddress.message, // currentAddress
					the.state.select, // state
					the.city.select) // city
		
		cy.contains(the.output).should('not.exist')
	})

	it(`US-GX-${id} | TC7: Validar NO poder registrase correctamente cuando el campo "Email" NO contiene una extensión correcta`, () => {

		// 'fillForm', (firstName, lastName, email, mobile, subjects, currentAddress, state, city)
		cy.fillForm(the.firstName.valid, // firstName
					the.lastName.valid, // lastName
					the.email.noExistExtension, // email example: "john@gmail."
					the.mobile.valid, // mobile
					the.subjects.valid, // subjects
					the.currentAddress.message, // currentAddress
					the.state.select, // state
					the.city.select) // city
		
		cy.contains(the.output).should('not.exist')
	})

	it(`US-GX-${id} | TC9: Validar NO poder registrase correctamente cuando el campo "Mobile" contiene sólo letras`, () => {

		// 'fillForm', (firstName, lastName, email, mobile, subjects, currentAddress, state, city)
		cy.fillForm(the.firstName.valid, // firstName
					the.lastName.valid, // lastName
					the.email.valid, // email 
					the.mobile.invalidLetters, // mobile example: "abcd"
					the.subjects.valid, // subjects
					the.currentAddress.message, // currentAddress
					the.state.select, // state
					the.city.select) // city

		cy.contains(the.output).should('not.exist')
	})

	it(`US-GX-${id} | TC10: Validar NO poder registrase correctamente cuando el campo "Mobile" contiene carácteres especiales`, () => {

		// 'fillForm', (firstName, lastName, email, mobile, subjects, currentAddress, state, city)
		cy.fillForm(the.firstName.valid, // firstName
					the.lastName.valid, // lastName
					the.email.valid, // email 
					the.mobile.invalidSpecialCharacters, // mobile example: "$%.,"
					the.subjects.valid, // subjects
					the.currentAddress.message, // currentAddress
					the.state.select, // state
					the.city.select) // city

		cy.contains(the.output).should('not.exist')
	})
})

// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', (err, runnable) => {
	// Returning false here prevents Cypress from.
	// Failing the test.
	return false
})

// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log

Cypress.log = function (opts, ...other) {

	if (opts.displayName === 'xhr' || (opts.displayName === 'fetch' && opts.url.startsWith('https://'))) {
		return
	}

	return origLog(opts, ...other);
}