describe('US 422 ToolsQA | Elements | Text Box: Fill form and Submit', () => {
    beforeEach('Ingreso a la pagina', () => {
        cy.fixture("DOM/toolsqa/Elements/TextBox.Page").then((the) => {
            cy.visit(the.TextBoxUrl)
        cy.url()
            .should("include","text-box")
        })
    })
    /* it('TC 1: Submit Form Successfully (HP)', () => {
        cy.fixture("DOM/toolsqa/Elements/TextBox.Page").then((the) => { 
            cy.SubmitTextBoxFormSuccessfull(
                the.data.name.caracter,
                the.data.email.valid,
                the.data.Adr.int,
                the.data.Adr.null
            )
        })
        
    })
    it('TC 2: Submit Form Successfully with the minimum requirement in the field “email“ (HP 2)', () => {
        cy.fixture("DOM/toolsqa/Elements/TextBox.Page").then((the) => { 
            cy.SubmitTextBoxFormSuccessfull(
                the.data.name.null,
                the.data.email.minReq,
                the.data.Adr.null,
                the.data.Adr.null
            )
        })
    })
    it('TC 3: Fail to Submit Form because the field “email“ does not contain “@” (NEG 1)', () => {
        cy.fixture("DOM/toolsqa/Elements/TextBox.Page").then((the) => { 
            cy.FailSubmitTextBoxForm(
                the.data.name.null,
                the.data.email.invalid.noAt,
                the.data.Adr.int,
                the.data.Adr.caracter)
        })
    })
    it('TC 4: Fail to Submit Form because the field “email“ does not contain (minimum) 1 alphanumeric character before “@”(NEG 2)', () => {
        cy.fixture("DOM/toolsqa/Elements/TextBox.Page").then((the) => { 
            cy.FailSubmitTextBoxForm(
                the.data.name.space,
                the.data.email.invalid.noName,
                the.data.Adr.special,
                the.data.Adr.null)
        })
    })
    it('TC 5:  Fail to Submit Form because the field “email“ does not contain (minimum) 1 alphanumeric character after “@”(NEG 3)', () => {
        cy.fixture("DOM/toolsqa/Elements/TextBox.Page").then((the) => { 
            cy.fixture("DOM/toolsqa/Elements/TextBox.Page").then((the) => { 
                cy.FailSubmitTextBoxForm(
                    the.data.name.caracter,
                    the.data.email.invalid.noDomain,
                    the.data.Adr.space,
                    the.data.Adr.float)
            })
        })
    })
    it('TC 6:  Fail to Submit Form because the field “email“ does not contain “.” after 1 alphanumeric character after “@”(NEG 4)', () => {
        cy.fixture("DOM/toolsqa/Elements/TextBox.Page").then((the) => { 
            cy.FailSubmitTextBoxForm(
                the.data.name.int,
                the.data.email.invalid.noExt,
                the.data.Adr.space,
                the.data.Adr.caracter)
        })
    })
    it('TC 7: Fail to Submit Form because the field “email“ does not contain (minimum) 2 alphanumeric characters after “.”(NEG 5)', () => {
        cy.fixture("DOM/toolsqa/Elements/TextBox.Page").then((the) => { 
            cy.FailSubmitTextBoxForm(
                the.data.name.float,
                the.data.email.invalid.oneExt,
                the.data.Adr.caracter,
                the.data.Adr.space)
        })
    })
    it('TC 8:  Fail to Submit Form because the field “email“ contain special characters in each part of its structure(NEG 6)', () => {
        cy.fixture("DOM/toolsqa/Elements/TextBox.Page").then((the) => { 
            cy.FailSubmitTextBoxForm(
                the.data.name.caracter,
                the.data.email.invalid.special,
                the.data.Adr.caracter,
                the.data.Adr.caracter)
        })
    }) */
    it('TC 9: Submit Form successfully when the field “email“ is null ', () => {
        cy.fixture("DOM/toolsqa/Elements/TextBox.Page").then((the) => { 
            cy.SubmitTextBoxFormSuccessfull(
                the.data.name.null,
                the.data.email.invalid.null,
                the.data.Adr.null,
                the.data.Adr.null)
        })
    })
    it('TC 10: Submit Form successfully when the field “email“ is the character space', () => {
        cy.fixture("DOM/toolsqa/Elements/TextBox.Page").then((the) => { 
            cy.SubmitTextBoxFormSuccessfull(
                the.data.name.caracter,
                the.data.email.invalid.space,
                the.data.Adr.caracter,
                the.data.Adr.caracter)
        })
    })
})

//________________________________________________________________________
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