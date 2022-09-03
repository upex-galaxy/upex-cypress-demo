const { And } = require("@badeball/cypress-cucumber-preprocessor")
const { get } = require("cypress/types/lodash")

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

describe('GX277 | ToolsQA | Elements | Broken Links Images', () => {
    before("Ingreso a elementos ",() =>{
        cy.visit("https://demoqa.com/broken")
    })
    it.skip('US 277 | TS 287 | TC1: Validation of a valid image.', () => {
        cy.fixture("DOM/Elements/BrokenLinks.Page.json").then((the) => { 
            cy.get(the.image.valid)
            .should(([ img ]) => {
                expect(img.naturalWidth).not.equal(0)
            })
        })
        /* cy.get('div>img:first')
        .should(([ img ]) => {
            expect(img.naturalWidth).not.equal(0)
        }) */
    })
    it.skip('US 277 | TS 287 | TC1: Validation of an invalid image.', () => {
        cy.fixture("DOM/Elements/BrokenLinks.Page.json").then((the) => {
            cy.get(the.image.broken)
            .should(([ img ]) => {
                expect(img.naturalWidth).to.equal(0)
            })
        })
        /* cy.get('[src="/images/Toolsqa_1.jpg"]')
            .should(([ img ]) => {
                expect(img.naturalWidth).to.equal(0)
            }) */
    })
    it('US 277 | TS 287 | TC1: Validation of a valid link.', () => { 
        cy.fixture("DOM/Elements/BrokenLinks.Page.json").then((the) =>
        {
            cy.get(the.link.valid)
                .click()
            cy.url()
            .should('include', the.validUrl)
        })
    })
})