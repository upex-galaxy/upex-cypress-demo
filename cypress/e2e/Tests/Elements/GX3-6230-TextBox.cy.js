describe('',()=>{
    //visitar la página demoQA
    beforeEach('PRC:El usuario debe estar situado en demo qa en text box',()=>{
        cy.visit('https://demoqa.com/text-box');
        cy.url().should('contain','text-box')
    });
    it('GX3-6255 | TC1: Validar registro exitoso al ingresar email valido',()=>{
        cy.get('#userName').type('Lio');
        cy.get('#userEmail').type('lionel@gmail.com');
        cy.get('#currentAddress').type('Lomas');
        cy.get('#permanentAddress').type('Lomas');
        cy.get('#submit').click();
        cy.get('#name').should('contain.text','Lio');
        cy.get('#email').should('contain.text','lionel@gmail.com');
        cy.get('p#currentAddress').should('contain.text','Lomas');
        cy.get('p#permanentAddress').should('contain.text','Lomas');

    
    })
    it('GX3-6255 | TC2: Validar no registrarse al ingresar email sin @',()=>{
        cy.get('#userName').type('Lio');
        cy.get('#userEmail').type('lionelgmail.com');
        cy.get('#currentAddress').type('Lomas');
        cy.get('#permanentAddress').type('Lomas');
        cy.get('#submit').click();
        cy.get('#userEmail').should('have.class', 'field-error')

    })
    it('GX3-6255 | TC3: Validar no registrarse al ingresar email sin nombre',()=>{
        cy.get('#userName').type('Lio');
        cy.get('#userEmail').type('@gmail.com');
        cy.get('#currentAddress').type('Lomas');
        cy.get('#permanentAddress').type('Lomas');
        cy.get('#submit').click();
        cy.get('#userEmail').should('have.class', 'field-error')

    })
    it('GX3-6255 | TC4: Validar no registrarse al ingresar email sin dominio',()=>{
        cy.get('#userName').type('Lio');
        cy.get('#userEmail').type('lionel@');
        cy.get('#currentAddress').type('Lomas');
        cy.get('#permanentAddress').type('Lomas');
        cy.get('#submit').click();
        cy.get('#userEmail').should('have.class', 'field-error')

    })
    it('GX3-6255 | TC5: Validar no registrarse al ingresar email sin punto',()=>{
        cy.get('#userName').type('Lio');
        cy.get('#userEmail').type('lionel@gmailcom');
        cy.get('#currentAddress').type('Lomas');
        cy.get('#permanentAddress').type('Lomas');
        cy.get('#submit').click();
        cy.get('#userEmail').should('have.class', 'field-error')

    })
    
    
})