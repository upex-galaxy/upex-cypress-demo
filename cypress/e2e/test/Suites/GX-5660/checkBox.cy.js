describe('GX-5660 | ✅ToolsQA | Elements | Check Box',()=>{

    beforeEach('',()=>{
        cy.viewport(1440,900)
        cy.visit('/checkbox')
        cy.url().should('contain','checkbox')
    })
    it('',()=>{

        cy.get('button').contains('label','Toggle').click()
    }) 
})


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
	return origLog(opts, ...other)}