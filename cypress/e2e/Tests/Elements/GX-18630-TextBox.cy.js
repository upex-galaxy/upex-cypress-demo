    const fullName = 'Angel';
    const email = 'erwe@ely.com';
    const currentAddress = 'Avamor';
    const permanentAddress = 'Tucorazon';
    const bademail = 'elco@go';
    


describe('✅ToolsQA | Elements | Text Box: Fill form and Submit', () => {
    beforeEach('Precondition: be located in text-box', () => {
        cy.visit('https://demoqa.com/text-box');
	
    })
    
    it('GX-18413 | TC1: Validar completar formulario con todos los campos completos.', () =>
	{
		
        cy.get('#userName').type(fullName);
        cy.get('#userEmail').type(email);
        cy.get('#currentAddress').type(currentAddress);
        cy.get('#permanentAddress').type(permanentAddress);
        cy.get('#submit').click();
        cy.get('p#name.mb-1').should('contain', fullName);
        cy.get('p#email.mb-1').should('contain', email);
        cy.get('p#currentAddress.mb-1').should('contain', currentAddress);
        cy.get('p#permanentAddress.mb-1').should('contain', permanentAddress);
        
    })
    
    it('GX-18413 | TC2: Validar completar formulario con todos los campos vacíos', () =>
	{
        cy.get('#submit').click();
        cy.get('#output').should("contain", '');
  
    })
	
    it('GX-18413 | TC3: Validar completar formulario con Full Name vacio, Email: maqueta correcta, Current Address: vacío, Permanent Address: vacío', () =>
	{
		cy.get('#userEmail').type(email);
        cy.get('#submit').click();
        cy.get('p#email.mb-1').should('contain', email);
        cy.get('#output').should('have.length', 1);
    })

     it('GX-18413 | TC4: Validar completar formulario con Full Name vacio, Email: maqueta incorrecta , Current Address: vacío, Permanent Address: vacío.', () =>
	{
	   cy.get('#userEmail').type(bademail);
       cy.get('#submit').click();
       cy.get('#output').should("contain", '');
     })
    
     it('GX-18413 | TC5: Validar completar formulario con Full Name completo, Email: maqueta correcta, Current Address: vacío, Permanent Address: vacío.', () =>
	{
		cy.get('#userName').type(fullName);
        cy.get('#userEmail').type(email);
        cy.get('#submit').click();
        cy.get('p#name.mb-1').should('contain', fullName);
        cy.get('p#email.mb-1').should('contain', email);
     })
    
     it('GX-18413 | TC6: Validar completar formulario con Full Name completo, Email: maqueta correcta, Current Address: completo, Permanent Address: vacio.', () =>
	{
		
        cy.get('#userName').type(fullName);
        cy.get('#userEmail').type(email);
        cy.get('#currentAddress').type(currentAddress);
        cy.get('#submit').click();
        cy.get('p#name.mb-1').should('contain', fullName);
        cy.get('p#email.mb-1').should('contain', email);
        cy.get('p#currentAddress.mb-1').should('contain', currentAddress);
    })
    
    it('GX-18413 | TC7: Validar completar formulario con Full Name completo, Email: maqueta correcta, Current Address: vacio, Permanent Address: completo.', () =>
	{
		
        cy.get('#userName').type(fullName);
        cy.get('#userEmail').type(email);
        cy.get('#permanentAddress').type(permanentAddress);
        cy.get('#submit').click();
        cy.get('p#name.mb-1').should('contain', fullName);
        cy.get('p#email.mb-1').should('contain', email);
        cy.get('p#permanentAddress.mb-1').should('contain', permanentAddress);
    })

     it('GX-18413 | TC8: Validar completar formulario con Full Name completo, Email: maqueta incorrecta, Current Address: vacío, Permanent Address: vacío.', () =>
	{
		
        cy.get('#userName').type(fullName);
        cy.get('#userEmail').type(bademail);
        cy.get('#submit').click();
        cy.get('#output').should("contain", '');
     })
    
    it('GX-18413 | TC9: Validar completar formulario con Full Name completo, Email: maqueta incorrecta, Current Address: completo, Permanent Address: vacío.', () =>
	{
		
        cy.get('#userName').type(fullName);
        cy.get('#userEmail').type(bademail);
        cy.get('#currentAddress').type(currentAddress);
        cy.get('#submit').click();
        cy.get('#output').should("contain", '');
    })

    it('GX-18413 | TC10: Validar completar formulario con Full Name completo, Email: maqueta incorrecta, Current Address: vacio, Permanent Address: completo.', () =>
	{
		
        cy.get('#userName').type(fullName);
        cy.get('#userEmail').type(bademail);
        cy.get('#permanentAddress').type(permanentAddress);
        cy.get('#submit').click();
        cy.get('#output').should("contain", '');
    })

    it('GX-18413 | TC11: Validar completar formulario con Full Name completo, Email: maqueta incorrecta, Current Address: completo, Permanent Address: completo.', () =>
	{
		
        cy.get('#userName').type(fullName);
        cy.get('#userEmail').type(bademail);
        cy.get('#currentAddress').type(currentAddress);
        cy.get('#permanentAddress').type(permanentAddress);
        cy.get('#submit').click();
        cy.get('#output').should("contain", '');
    })
    
})


