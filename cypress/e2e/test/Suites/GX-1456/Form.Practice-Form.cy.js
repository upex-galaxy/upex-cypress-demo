describe('ToolsQA | Forms | Practice Form', () => 
{
	const url      = 'https://demoqa.com/automation-practice-form';
	const title    = 'ToolsQA';
	const contain  = 'form';
	const protocol = 'https';
	const hostname = 'demoqa.com';
	const id       = '1456';
	const filepath = 'images/upexlogo';
	const path     = 'DOM/toolsqa/Form/Form.page';
	let the;

	before('Inicializar la data', () =>
	{
		cy.fixture(path).then((data) =>
		{
			the = data;
		});
	});

	beforeEach('Precondición: El usuario debe estar situado en la página web https://demoqa.com/automation-practice-form', () => 
	{
		cy.getUrl(url, title, contain, protocol, hostname);
		cy.viewport(600, 800);		
	});

	xit(`US-GX-${id} | TC1: Validar poder registrarse correctamente cuando todos los campos son válidos`, () => 
	{
		cy.get(the.firstName.input)
			.clear()
			.type(the.firstName.valid)
			.should('be.visible');
			
		cy.get(the.lastName.input)
			.clear()
			.type(the.lastName.valid)
			.should('be.visible');
			
		cy.get(the.email.input)
			.clear()
			.type(the.email.valid)
			.should('be.visible');
			
		cy.get(the.gender.input)
			.click()
			.should('be.visible');
			
		cy.get(the.mobile.input)
			.clear()
			.type(the.mobile.valid)
			.should('be.visible');
			
		cy.get(the.dateOfBirth.input)
			.click()
			.should('be.visible');
			
		cy.get(the.dateOfBirth.month)
			.select('May')
			.should('exist', 'May');
			
		cy.get(the.dateOfBirth.year)
			.select('2000')
			.should('exist', '2000');
			
		cy.xpath(the.dateOfBirth.day)
			.contains('14')
			.click();
			
		cy.get(the.subjects.input)
			.type(the.subjects.valid1)
			.should('be.visible');
			
		cy.get(the.hobbies.input)
			.first()
			.click({force: true})
			.should('exist');
			
		cy.get(the.hobbies.input)
			.eq(1)
			.click({force: true})
			.should('exist');
			
		cy.get(the.hobbies.input)
			.last()
			.click({force: true})
			.should('exist');
			
		cy.xpath(the.picture.input)
			.attachFile(filepath)
			.should('exist');
			
		cy.xpath(the.currentAddress.input)
			.clear()
			.type(the.currentAddress.message)
			.should('exist');
			
		cy.get(the.state.input)
			.eq(1)
			.type(the.state.select)
			.should('exist');
			
		cy.get(the.city.input)
			.eq(2)
			.type(the.city.select)
			.should('exist');
		
		cy.get(the.submit)
			.click({force: true})
			.should('exist');
			
		cy.contains(the.output)
			.should('contain', 'Thanks for submitting the form');
	});

	xit(`US-GX-${id} | TC2: Validar poder registrarse correctamente cuando los campos "First Name", "Last Name", "Gender", "Mobile" y "Date of Birth" son válidos`, () => 
	{
		cy.get(the.firstName.input)
			.clear()
			.type(the.firstName.valid)
			.should('be.visible');
			
		cy.get(the.lastName.input)
			.clear()
			.type(the.lastName.valid)
			.should('be.visible');
			
		cy.get(the.gender.input)
			.click()
			.should('be.visible');
			
		cy.get(the.mobile.input)
			.clear()
			.type(the.mobile.valid)
			.should('be.visible');
			
		cy.get(the.dateOfBirth.input)
			.click()
			.should('be.visible');
			
		cy.get(the.dateOfBirth.month)
			.select('May')
			.should('exist', 'May');
			
		cy.get(the.dateOfBirth.year)
			.select('2000')
			.should('exist', '2000');
			
		cy.xpath(the.dateOfBirth.day)
			.contains('14')
			.click();
			
		cy.get(the.submit)
			.click({force: true})
			.should('exist');
			
		cy.contains(the.output)
			.should('contain', 'Thanks for submitting the form');
	});

	xit(`US-GX-${id} | TC3: Validar NO poder registrase correctamente cuando todos los campos son vacíos`, () => 
	{
		cy.get(the.submit)
			.click({force: true})
			.should('exist');
			
		cy.get(the.firstName.input)
			.should('be.empty')
			.and('have.css', 'border-color', 'rgb(220, 53, 69)');
			
		cy.get(the.lastName.input)
			.should('be.empty')
			.and('have.css', 'border-color', 'rgb(220, 53, 69)');
			
		cy.get(the.email.input)
			.should('be.empty');
			
		cy.get(the.gender.input)
			.should('contain', '')
			.and('have.css', 'border-color', 'rgb(220, 53, 69)');

		cy.get(the.mobile.input)
			.should('be.empty')
			.and('have.css', 'border-color', 'rgb(220, 53, 69)');

		cy.get(the.dateOfBirth.input)
			.should('be.empty');
			
		cy.get(the.subjects.input)
			.should('be.empty');

		cy.get(the.hobbies.input)
			.should('be.empty');
		
		cy.xpath(the.currentAddress.input)
			.should('be.empty');	

		cy.get(the.state.input)
			.eq(1)
			.should('contain', '');
			
		cy.get(the.city.input)
			.eq(2)
			.should('contain', '');
	});

	xit(`US-GX-${id} | TC4: Validar NO poder registrase correctamente cuando el campo "Email" contiene un dominio incorrecto`, () => 
	{
		cy.get(the.firstName.input)
			.clear()
			.type(the.firstName.valid)
			.should('be.visible');
			
		cy.get(the.lastName.input)
			.clear()
			.type(the.lastName.valid)
			.should('be.visible');
			
		cy.get(the.email.input)
			.clear()
			.type(the.email.noExistDomain) // Example: john@.com
			.should('be.visible');
			
		cy.get(the.gender.input)
			.click()
			.should('be.visible');
			
		cy.get(the.mobile.input)
			.clear()
			.type(the.mobile.valid)
			.should('be.visible');
			
		cy.get(the.dateOfBirth.input)
			.click()
			.should('be.visible');
			
		cy.get(the.dateOfBirth.month)
			.select('May')
			.should('exist', 'May');
			
		cy.get(the.dateOfBirth.year)
			.select('2000')
			.should('exist', '2000');
			
		cy.xpath(the.dateOfBirth.day)
			.contains('14')
			.click();
			
		cy.get(the.subjects.input)
			.type(the.subjects.valid1)
			.should('be.visible');
		
		cy.get(the.hobbies.input)
			.first()
			.click({force: true})
			.should('exist');
			
		cy.get(the.hobbies.input)
			.eq(1)
			.click({force: true})
			.should('exist');
			
		cy.get(the.hobbies.input)
			.last()
			.click({force: true})
			.should('exist');
			
		cy.xpath(the.picture.input)
			.attachFile(filepath)
			.should('exist');
			
		cy.xpath(the.currentAddress.input)
			.clear()
			.type(the.currentAddress.message)
			.should('exist');
			
		cy.get(the.state.input)
			.eq(1)
			.type(the.state.select)
			.should('exist');
			
		cy.get(the.city.input)
			.eq(2)
			.type(the.city.select)
			.should('exist');
			
		cy.get(the.submit)
			.click({force: true})
			.should('exist');
			
		cy.get(the.email.input)
			// css inválido de color rojo
			.should('have.css', 'border-color', 'rgb(220, 53, 69)');
	});

	xit(`US-GX-${id} | TC5: Validar NO poder registrase correctamente cuando el campo "Email" NO contiene el símbolo arroba`, () => 
	{
		cy.get(the.firstName.input)
			.clear()
			.type(the.firstName.valid)
			.should('be.visible');
			
		cy.get(the.lastName.input)
			.clear()
			.type(the.lastName.valid)
			.should('be.visible');
			
		cy.get(the.email.input)
			.clear()
			.type(the.email.noExistAt) // Example: johngmail.com
			.should('be.visible');
			
		cy.get(the.gender.input)
			.click()
			.should('be.visible');
			
		cy.get(the.mobile.input)
			.clear()
			.type(the.mobile.valid)
			.should('be.visible');
			
		cy.get(the.dateOfBirth.input)
			.click()
			.should('be.visible');
			
		cy.get(the.dateOfBirth.month)
			.select('May')
			.should('exist', 'May');
			
		cy.get(the.dateOfBirth.year)
			.select('2000')
			.should('exist', '2000');
		
		cy.xpath(the.dateOfBirth.day)
			.contains('14')
			.click();
			
		cy.get(the.subjects.input)
			.type(the.subjects.valid1)
			.should('be.visible');
		
		cy.get(the.hobbies.input)
			.first()
			.click({force: true})
			.should('exist');
			
		cy.get(the.hobbies.input)
			.eq(1)
			.click({force: true})
			.should('exist');
			
		cy.get(the.hobbies.input)
			.last()
			.click({force: true})
			.should('exist');
			
		cy.xpath(the.picture.input)
			.attachFile(filepath)
			.should('exist');
			
		cy.xpath(the.currentAddress.input)
			.clear()
			.type(the.currentAddress.message)
			.should('exist');
			
		cy.get(the.state.input)
			.eq(1)
			.type(the.state.select)
			.should('exist');
			
		cy.get(the.city.input)
			.eq(2)
			.type(the.city.select)
			.should('exist');
			
		cy.get(the.submit)
			.click({force: true})
			.should('exist');
			
		cy.get(the.email.input)
			// css inválido de color rojo
			.should('have.css', 'border-color', 'rgb(220, 53, 69)');
	});

	xit(`US-GX-${id} | TC6: Validar NO poder registrase correctamente cuando el campo "Email" NO contiene al menos 1 carácter alfanumérico antes del arroba`, () => 
	{
		cy.get(the.firstName.input)
			.clear()
			.type(the.firstName.valid)
			.should('be.visible');
			
		cy.get(the.lastName.input)
			.clear()
			.type(the.lastName.valid)
			.should('be.visible');
			
		cy.get(the.email.input)
			.clear()
			.type(the.email.noName) // Example: "@gmail.com"
			.should('be.visible');
			
		cy.get(the.gender.input)
			.click()
			.should('be.visible');
			
		cy.get(the.mobile.input)
			.clear()
			.type(the.mobile.valid)
			.should('be.visible');
			
		cy.get(the.dateOfBirth.input)
			.click()
			.should('be.visible');
			
		cy.get(the.dateOfBirth.month)
			.select('May')
			.should('exist', 'May');
			
		cy.get(the.dateOfBirth.year)
			.select('2000')
			.should('exist', '2000');
			
		cy.xpath(the.dateOfBirth.day)
			.contains('14')
			.click();
			
		cy.get(the.subjects.input)
			.type(the.subjects.valid1)
			.should('be.visible');
			
		cy.get(the.hobbies.input)
			.first()
			.click({force: true})
			.should('exist');
			
		cy.get(the.hobbies.input)
			.eq(1)
			.click({force: true})
			.should('exist');
			
		cy.get(the.hobbies.input)
			.last()
			.click({force: true})
			.should('exist');
			
		cy.xpath(the.picture.input)
			.attachFile(filepath)
			.should('exist');
			
		cy.xpath(the.currentAddress.input)
			.clear()
			.type(the.currentAddress.message)
			.should('exist');
			
		cy.get(the.state.input)
			.eq(1)
			.type(the.state.select)
			.should('exist');
			
		cy.get(the.city.input)
			.eq(2)
			.type(the.city.select)
			.should('exist');
			
		cy.get(the.submit)
			.click({force: true})
			.should('exist');
			
		cy.get(the.email.input)
			// css inválido de color rojo
			.should('have.css', 'border-color', 'rgb(220, 53, 69)');
	});

	xit(`US-GX-${id} | TC7: Validar NO poder registrase correctamente cuando el campo "Email" NO contiene una extensión correcta`, () => 
	{
		cy.get(the.firstName.input)
			.clear()
			.type(the.firstName.valid)
			.should('be.visible');
			
		cy.get(the.lastName.input)
			.clear()
			.type(the.lastName.valid)
			.should('be.visible');
			
		cy.get(the.email.input)
			.clear()
			.type(the.email.noExistExtension) // Example: "john@gmail."
			.should('be.visible');
			
		cy.get(the.gender.input)
			.click()
			.should('be.visible');
			
		cy.get(the.mobile.input)
			.clear()
			.type(the.mobile.valid)
			.should('be.visible');
			
		cy.get(the.dateOfBirth.input)
			.click()
			.should('be.visible');
			
		cy.get(the.dateOfBirth.month)
			.select('May')
			.should('exist', 'May');
			
		cy.get(the.dateOfBirth.year)
			.select('2000')
			.should('exist', '2000');
			
		cy.xpath(the.dateOfBirth.day)
			.contains('14')
			.click();
			
		cy.get(the.subjects.input)
			.type(the.subjects.valid1)
			.should('be.visible');
			
		cy.get(the.hobbies.input)
			.first()
			.click({force: true})
			.should('exist');
		
		cy.get(the.hobbies.input)
			.eq(1)
			.click({force: true})
			.should('exist');
			
		cy.get(the.hobbies.input)
			.last()
			.click({force: true})
			.should('exist');
			
		cy.xpath(the.picture.input)
			.attachFile(filepath)
			.should('exist');
			
		cy.xpath(the.currentAddress.input)
			.clear()
			.type(the.currentAddress.message)
			.should('exist');
			
		cy.get(the.state.input)
			.eq(1)
			.type(the.state.select)
			.should('exist');
			
		cy.get(the.city.input)
			.eq(2)
			.type(the.city.select)
			.should('exist');
			
		cy.get(the.submit)
			.click({force: true})
			.should('exist');
			
		cy.get(the.email.input)
		    // css inválido de color rojo
			.should('have.css', 'border-color', 'rgb(220, 53, 69)');
	});

	xit(`US-GX-${id} | TC8: Validar mensaje de Pop-Up contenga la data correspondiente después de enviar el form con todos los campos válidos`, () => 
	{
		cy.get(the.firstName.input)
			.clear()
			.type(the.firstName.valid)
			.should('be.visible');
			
		cy.get(the.lastName.input)
			.clear()
			.type(the.lastName.valid)
			.should('be.visible');
			
		cy.get(the.email.input)
			.clear()
			.type(the.email.valid)
			.should('be.visible');
			
		cy.get(the.gender.input)
			.click()
			.should('be.visible');
			
		cy.get(the.mobile.input)
			.clear()
			.type(the.mobile.valid)
			.should('be.visible');
			
		cy.get(the.dateOfBirth.input)
			.click()
			.should('be.visible');
			
		cy.get(the.dateOfBirth.month)
			.select('May')
			.should('exist', 'May');
			
		cy.get(the.dateOfBirth.year)
			.select('2000')
			.should('exist', '2000');
			
		cy.xpath(the.dateOfBirth.day)
			.contains('14')
			.click();
			
		cy.get(the.subjects.input)
			.type(the.subjects.valid1)
			.should('be.visible');
			
		cy.get(the.hobbies.input)
			.first()
			.click({force: true})
			.should('exist');
			
		cy.get(the.hobbies.input)
			.eq(1)
			.click({force: true})
			.should('exist');
			
		cy.get(the.hobbies.input)
			.last()
			.click({force: true})
			.should('exist');
			
		cy.xpath(the.picture.input)
			.attachFile(filepath)
			.should('exist');
			
		cy.xpath(the.currentAddress.input)
			.clear()
			.type(the.currentAddress.message)
			.should('exist');
		
		cy.get(the.state.input)
			.eq(1)
			.type(the.state.select)
			.should('exist');
			
		cy.get(the.city.input)
			.eq(2)
			.type(the.city.select)
			.should('exist');
			
		cy.get(the.submit)
			.click({force: true})
			.should('exist');
			
		cy.contains(the.output)
			.should('contain', 'Thanks for submitting the form');
			
		// Validate all pop-up	
		cy.get('td')
			.eq(1)
			.should('contain.text', the.firstName.valid + ' ' + the.lastName.valid);		
		
		cy.get('td')
			.eq(3)
			.should('contain.text', the.email.valid);
		
		cy.get('td')
			.eq(5)
			.should('contain.text', the.gender.valid);	
		
		cy.get('td')
			.eq(7)
			.should('contain.text', the.mobile.valid);
		
		cy.get('td')
			.eq(9)
			.should('contain.text', the.dateOfBirth.valid);	
		
		cy.get('td')
			.eq(11)
			.should('contain.text', the.subjects.valid2);	
		
		cy.get('td')
			.eq(13)
			.should('contain.text', the.hobbies.valid);

		cy.get('td')
			.eq(15)
			.should('contain.text', the.picture.valid);
		
		cy.get('td')
			.eq(17)
			.should('contain.text', the.currentAddress.message);	
		
		cy.get('td')
			.eq(19)
			.should('contain.text', the.state.valid + ' ' + the.city.valid);
	});

	xit(`US-GX-${id} | TC9: Validar NO poder registrase correctamente cuando el campo "Mobile" es igual a 9 dígitos`, () => 
	{
		cy.get(the.firstName.input)
			.clear()
			.type(the.firstName.valid)
			.should('be.visible');
			
		cy.get(the.lastName.input)
			.clear()
			.type(the.lastName.valid)
			.should('be.visible');
			
		cy.get(the.email.input)
			.clear()
			.type(the.email.valid)
			.should('be.visible');
			
		cy.get(the.gender.input)
			.click()
			.should('be.visible');
			
		cy.get(the.mobile.input)
			.clear()
			.type(the.mobile.invalidNineDigits) // Example: "123456789"
			.should('be.visible');
			
		cy.get(the.dateOfBirth.input)
			.click()
			.should('be.visible');
			
		cy.get(the.dateOfBirth.month)
			.select('May')
			.should('exist', 'May');
			
		cy.get(the.dateOfBirth.year)
			.select('2000')
			.should('exist', '2000');
			
		cy.xpath(the.dateOfBirth.day)
			.contains('14')
			.click();
			
		cy.get(the.subjects.input)
			.type(the.subjects.valid1)
			.should('be.visible');
			
		cy.get(the.hobbies.input)
			.first()
			.click({force: true})
			.should('exist');
			
		cy.get(the.hobbies.input)
			.eq(1)
			.click({force: true})
			.should('exist');
			
		cy.get(the.hobbies.input)
			.last()
			.click({force: true})
			.should('exist');
			
		cy.xpath(the.picture.input)
			.attachFile(filepath)
			.should('exist');
			
		cy.xpath(the.currentAddress.input)
			.clear()
			.type(the.currentAddress.message)
			.should('exist');
			
		cy.get(the.state.input)
			.eq(1)
			.type(the.state.select)
			.should('exist');
			
		cy.get(the.city.input)
			.eq(2)
			.type(the.city.select)
			.should('exist');
			
		cy.get(the.submit)
			.click({force: true})
			.should('exist');
			
		cy.get(the.mobile.input)
			// css inválido de color rojo
			.should('have.css', 'border-color', 'rgb(220, 53, 69)');
	});

	xit(`US-GX-${id} | TC10: Validar NO poder registrase correctamente cuando el campo "Mobile" es igual a 11 dígitos`, () => 
	{
		cy.get(the.firstName.input)
			.clear()
			.type(the.firstName.valid)
			.should('be.visible');
			
		cy.get(the.lastName.input)
			.clear()
			.type(the.lastName.valid)
			.should('be.visible');
			
		cy.get(the.email.input)
			.clear()
			.type(the.email.valid)
			.should('be.visible');
			
		cy.get(the.gender.input)
			.click()
			.should('be.visible');
			
		cy.get(the.mobile.input)
			.clear()
			.type(the.mobile.invalidElevenDigits) // Example: "12345678901"
			.should('be.visible');
			
		cy.get(the.dateOfBirth.input)
			.click()
			.should('be.visible');
			
		cy.get(the.dateOfBirth.month)
			.select('May')
			.should('exist', 'May');
			
		cy.get(the.dateOfBirth.year)
			.select('2000')
			.should('exist', '2000');
			
		cy.xpath(the.dateOfBirth.day)
			.contains('14')
			.click();
			
		cy.get(the.subjects.input)
			.type(the.subjects.valid1)
			.should('be.visible');
			
		cy.get(the.hobbies.input)
			.first()
			.click({force: true})
			.should('exist');
			
		cy.get(the.hobbies.input)
			.eq(1)
			.click({force: true})
			.should('exist');
			
		cy.get(the.hobbies.input)
			.last()
			.click({force: true})
			.should('exist');
			
		cy.xpath(the.picture.input)
			.attachFile(filepath)
			.should('exist');
			
		cy.xpath(the.currentAddress.input)
			.clear()
			.type(the.currentAddress.message)
			.should('exist');
			
		cy.get(the.state.input)
			.eq(1)
			.type(the.state.select)
			.should('exist');
			
		cy.get(the.city.input)
			.eq(2)
			.type(the.city.select)
			.should('exist');
			
		cy.get(the.submit)
			.click({force: true})
			.should('exist');
			
		cy.get(the.mobile.input)
			// css inválido de color rojo
			.should('have.css', 'border-color', 'rgb(220, 53, 69)');
	});

	xit(`US-GX-${id} | TC11: Validar NO poder registrase correctamente cuando el campo "Mobile" contiene sólo letras`, () => 
	{
		cy.get(the.firstName.input)
			.clear()
			.type(the.firstName.valid)
			.should('be.visible');
			
		cy.get(the.lastName.input)
			.clear()
			.type(the.lastName.valid)
			.should('be.visible');
			
		cy.get(the.email.input)
			.clear()
			.type(the.email.valid)
			.should('be.visible');
			
		cy.get(the.gender.input)
			.click()
			.should('be.visible');
			
		cy.get(the.mobile.input)
			.clear()
			.type(the.mobile.invalidLetters) // Example: "abcd"
			.should('be.visible');
			
		cy.get(the.dateOfBirth.input)
			.click()
			.should('be.visible');
			
		cy.get(the.dateOfBirth.month)
			.select('May')
			.should('exist', 'May');
			
		cy.get(the.dateOfBirth.year)
			.select('2000')
			.should('exist', '2000');
			
		cy.xpath(the.dateOfBirth.day)
			.contains('14')
			.click();
			
		cy.get(the.subjects.input)
			.type(the.subjects.valid1)
			.should('be.visible');
			
		cy.get(the.hobbies.input)
			.first()
			.click({force: true})
			.should('exist');
		
		cy.get(the.hobbies.input)
			.eq(1)
			.click({force: true})
			.should('exist');
			
		cy.get(the.hobbies.input)
			.last()
			.click({force: true})
			.should('exist');
			
		cy.xpath(the.picture.input)
			.attachFile(filepath)
			.should('exist');
			
		cy.xpath(the.currentAddress.input)
			.clear()
			.type(the.currentAddress.message)
			.should('exist');
			
		cy.get(the.state.input)
			.eq(1)
			.type(the.state.select)
			.should('exist');
			
		cy.get(the.city.input)
			.eq(2)
			.type(the.city.select)
			.should('exist');
			
		cy.get(the.submit)
			.click({force: true})
			.should('exist');
			
		cy.get(the.mobile.input)
			// css inválido de color rojo
			.should('have.css', 'border-color', 'rgb(220, 53, 69)');
	});

	xit(`US-GX-${id} | TC12: Validar NO poder registrase correctamente cuando el campo "Mobile" contiene carácteres especiales`, () => 
	{
		cy.get(the.firstName.input)
			.clear()
			.type(the.firstName.valid)
			.should('be.visible');
			
		cy.get(the.lastName.input)
			.clear()
			.type(the.lastName.valid)
			.should('be.visible');
			
		cy.get(the.email.input)
			.clear()
			.type(the.email.valid)
			.should('be.visible');
			
		cy.get(the.gender.input)
			.click()
			.should('be.visible');
			
		cy.get(the.mobile.input)
			.clear()
			.type(the.mobile.invalidSpecialCharacters) // Example: "$%.,"
			.should('be.visible');
			
		cy.get(the.dateOfBirth.input)
			.click()
			.should('be.visible');
			
		cy.get(the.dateOfBirth.month)
			.select('May')
			.should('exist', 'May');
			
		cy.get(the.dateOfBirth.year)
			.select('2000')
			.should('exist', '2000');
		
		cy.xpath(the.dateOfBirth.day)
			.contains('14')
			.click();
		
		cy.get(the.subjects.input)
			.type(the.subjects.valid1)
			.should('be.visible');
		
		cy.get(the.hobbies.input)
			.first()
			.click({force: true})
			.should('exist');
			
		cy.get(the.hobbies.input)
			.eq(1)
			.click({force: true})
			.should('exist');
		
		cy.get(the.hobbies.input)
			.last()
			.click({force: true})
			.should('exist');
		
		cy.xpath(the.picture.input)
			.attachFile(filepath)
			.should('exist');
		
		cy.xpath(the.currentAddress.input)
			.clear()
			.type(the.currentAddress.message)
			.should('exist');
		
		cy.get(the.state.input)
			.eq(1)
			.type(the.state.select)
			.should('exist');
		
		cy.get(the.city.input)
			.eq(2)
			.type(the.city.select)
			.should('exist');
			
		cy.get(the.submit)
			.click({force: true})
			.should('exist');
			
		cy.get(the.mobile.input)
			// css inválido de color rojo
			.should('have.css', 'border-color', 'rgb(220, 53, 69)');
	});
}); // End describe

// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', (err, runnable) =>
{
	// Returning false here prevents Cypress from.
	// Failing the test.
	return false;
});

// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log;

Cypress.log = function (opts, ...other) 
{
	if (opts.displayName === 'xhr' || (opts.displayName === 'fetch' && opts.url.startsWith('https://'))) 
	{
		return
	};

	return origLog(opts, ...other);
};