describe('ToolsQA|Forms|Practice Form', () => {

    const texto = 'Prueba que te prueba la pruebita'

    beforeEach('Precondicion: Visitar Endpoint "automation-practice-form"', ()=> {
        cy.viewport('iphone-8')
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.url().should('contain', 'automation-practice-form')
        cy.clearCookies();
        cy.clearLocalStorage();
        
})

it('US-GX-637|TS-645|TC01 Validar poder enviar formulario colocando datos válidos y seleccionables', () =>
{

    cy.get('#firstName')
        .type('hola')
        .should('contain.value', "hola")
        cy.get('#lastName')
        .type('chau')
        .should('contain.value', "chau")
    cy.get('#userEmail')
        .type('yes@yes.yes')
        .should('contain.value', "yes")
    cy.get('#userNumber')
        .type('111112233')
        .should('contain.value', "111")
    cy.get('.subjects-auto-complete__value-container')
        .type('English{enter}')
    cy.get('.css-12jo7m5')    
        .should('have.text', "English")
    cy.get('#currentAddress')
        .type(texto).type(texto).type(texto)
        .should('contain.value', "pruebita")
    cy.get('[value="Male"]')                       //Gender
        .click({ force: true })
        cy.get('[value="Female"]')
        .click({ force: true })
        cy.get('[value="Other"]')
        .click({ force: true })
    cy.get('[value="1"]')              //Current Address
        .click({ force: true })
        cy.get('[value="2"]')
        .click({ force: true })
        cy.get('[value="3"]')
        .click({ force: true })   
    cy.get('#uploadPicture')
        .attachFile("images/upexlogo.png");
    cy.get('#uploadPicture')
        .should('contain.value', "upexlogo.png");
    cy.get(".css-tlfecz-indicatorContainer").eq(1)
        .click()
    cy.get(".css-1n7v3ny-option")
        .click()
    cy.get(".css-tlfecz-indicatorContainer").eq(1)
        .click()
    cy.get(".css-1n7v3ny-option")
        .click()    
    cy.get('#submit')
        .click({ force: true })
    cy.get('.modal-header')
        .should('have.text', "Thanks for submitting the form")
        
        
    
})

    it('US-GX-637|TS-645|TC02 Validar No poder enviar formulario con datos y seleccionables "null"', ()=>
    {

    cy.get('#submit')                           //no encontré la forma de apuntar al recuadro rojo en name y lastname null
        .click()
    cy.get('.modal-header')
        .should('be.not.exist') 
    })

    it('US-GX-637|TS-645|TC03 Validar No poder enviar formulario con Nombre, apellido, email inválidos', ()=>
    {
        cy.get('#firstName')                    //Debería no poder usar solo números como un nombre
        .type('1')                              
        .should('contain.value', "1")           
        cy.get('#lastName')                     //Debería no poder usar solo números como un apellido
        .type('2')                              
        .should('contain.value', "2")           
    cy.get('#userEmail')
        .type('yes@yes')
        .should('contain.value', "yes")         
    cy.get('#userNumber')
        .type('123456789')
        .should('contain.value', "9")
    cy.get('.subjects-auto-complete__value-container')
        .type('English{enter}')
    cy.get('.css-12jo7m5')    
        .should('have.text', "English")
    cy.get('#currentAddress')
        .type(texto).type(texto).type(texto)
        .should('contain.value', "pruebita")
    cy.get('[value="Male"]')                       //Gender
        .click({ force: true })
        cy.get('[value="Female"]')
        .click({ force: true })
        cy.get('[value="Other"]')
        .click({ force: true })
    cy.get('[value="1"]')              //Current Address
        .click({ force: true })
        cy.get('[value="2"]')
        .click({ force: true })
        cy.get('[value="3"]')
        .click({ force: true })   
    cy.get('#uploadPicture')
        .attachFile("images/upexlogo.png");
    cy.get('#uploadPicture')
        .should('contain.value', "upexlogo.png");
    cy.get(".css-tlfecz-indicatorContainer").eq(1)
        .click()
    cy.get(".css-1n7v3ny-option")
        .click()
    cy.get(".css-tlfecz-indicatorContainer").eq(1)
        .click()
    cy.get(".css-1n7v3ny-option")
        .click()    
    cy.get('#submit')
        .click({ force: true })
    cy.get('.modal-header')
        .should('be.not.exist')           
    }) 

})   
//________________________________________________________________________
// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', (err, runnable) => {
	//returning false here prevents Cypress from
	// failing the test
	return false
})
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr' || (opts.displayName === 'fetch' && opts.url.startsWith('https://'))) {
		return
	}
	return origLog(opts, ...other)
}
