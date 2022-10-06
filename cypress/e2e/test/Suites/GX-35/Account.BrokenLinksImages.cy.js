describe(" ToolsQA | Elements | Broken Links Images", () => {   beforeEach("Precondicion: Usuario debe estar situado en la pagina QA", () => {
  //  cy.BrokenLinksAccess()
  cy.visit("https://demoqa.com/broken","broken")
  cy.url().should("contain", "broken")

  })
        
  it("US-GX-35 | TC1: Validar logotipo de Tools QA sea correcto cuando ingresa a la página principal.", () => {
    cy.fixture("DOM/toolsqa/Elements/BrokenLink.Page").then((the) => {

      cy.contains(the.image.TextValid).should("be.visible")
      cy.get(the.image.imageValid).eq(1).should("be.visible")
    })
  })

  it("US-GX-35| TC2:  Validar  icono cuando la  imagen  está rota al ingresar página principal.", () => {
    cy.fixture("DOM/toolsqa/Elements/BrokenLink.Page").then((the) => {
      cy.contains(the.image.TextInvalid).should("be.visible")
      cy.contains(the.image.imageInvalid).should("not.exist")
    })
  })

  it("US-GX-35| TC3:  Validar link válido  cuando ingresa a la página principal.", () => {
   cy.fixture("DOM/toolsqa/Elements/BrokenLink.Page").then((the) => {

   cy.contains(the.link.TextLinkValid).click()
    cy.visit(the.link.linkValid, () => {
      cy.url().should("contain", "demo")
    })
    })
  })
 it("US-GX-35| TC4: Validar link roto  cuando ingresa a la página principal.", () => {

  cy.fixture("DOM/toolsqa/Elements/BrokenLink.Page").then((the) => {
  
  
    cy.contains(the.link.TextLinkInValid).click()
    cy.origin(the.link.linkInvalid, () => {  
      cy.url().should("contain", "500")
    })
  })
  })
    })
 // Comando predeterminado para que no ocurran errores de excepciones:
  Cypress.on('uncaught:exception', (err, runnable) =>
  {// Returning false here prevents Cypress from.
     // Failing the test.
   return false;
  });
   // Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
  const origLog = Cypress.log;
   
  Cypress.log = function (opts, ...other){    
        if (opts.displayName === 'xhr' || opts.displayName === 'fetch' && opts.url.startsWith('https://'))
        { 
         return;
        }   
    return origLog(opts, ...other);};





          

