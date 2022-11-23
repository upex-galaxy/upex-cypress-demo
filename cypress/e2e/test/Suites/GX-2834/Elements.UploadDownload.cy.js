describe ("✅ToolsQA | Elements | Upload and Download",()=>
{
    beforeEach('Precondition: User must be in Upload Download page',()=>
        {
            cy.gotoUploadDownload()
        }) 

    it("US GX-2834 | TS 2835 | TC1:  Validate downloading a file", ()=>
    {
        cy.validateDownload()
    })
    it('US GX-2834 | TS 2835 | TC2:  Validate choosing a file',()=>
    {
        cy.validateSelectFile()
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
})