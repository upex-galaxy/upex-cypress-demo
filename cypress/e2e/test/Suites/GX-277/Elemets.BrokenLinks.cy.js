describe('GX277 | ToolsQA | Elements | Broken Links Images', () => {
    beforeEach("Ingreso a elementos ", () => {
        cy.fixture("DOM/toolsqa/Elements/BrokenLinks.Page").then((the) => { 
            cy.viewport(1900,1080)
            cy.visit(the.url.Base, {pageLoadTimeout:1200000})
            cy.url()
                .should('include', '/broken')
        })    
    })
    it('US 277 | TS 287 | TC1: Validation of a valid image.', () => {
        cy.fixture("DOM/toolsqa/Elements/BrokenLinks.Page").then((the) => { 
            cy.get(the.image.valid)
                .should(([ img ]) => {
                    expect(img.naturalWidth).not.equal(0)
                })
        })
    })
    it('US 277 | TS 287 | TC2: Validation of an invalid image.', () => {
        cy.fixture("DOM/toolsqa/Elements/BrokenLinks.Page").then((the) => {
            cy.get(the.image.broken)
                .should(([ img ]) => {
                    expect(img.naturalWidth).to.equal(0)
                })
        })
    })
    it('US 277 | TS 287 | TC3: Validation of a valid link.', () => { 
        cy.fixture("DOM/toolsqa/Elements/BrokenLinks.Page").then((the) =>
        {
            cy.contains(the.link.valid)
                .click()
            cy.url()
                .should('include', the.url.valid)
        })
    })
    it('US 277 | TS 287 | TC4: Validation of an invalid link.', () => { 
        cy.fixture("DOM/toolsqa/Elements/BrokenLinks.Page").then((the) =>
        {
            cy.contains(the.link.invalid)
                .click()
            cy.url()
                .should('include', the.url.invalid)
        })
    })
})


// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false
})
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr'|| opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
		return
	}
	return origLog(opts, ...other)
}