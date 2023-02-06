describe ("GX-2664-tools-qa-book-store-applications-login-fill-form-and-login", ()=>
{
    beforeEach(() =>
    {
        cy.gotoLogin()
    })
    it('US GX-2664 | TS 2665 | TC1:  Verify if an user can log in with a registered Username and password', ()=>
	{
		cy.signin("testpractice","ToolsQA01+%")
		cy.get("#userName-value")	
			.should("contain","testpractice")
	})
	// it("US GX-2664 | TS 2665 | TC2:  Verify if a user cannot log in with a valid username and an invalid password",()=>
	// {
	// 	cy.signin("testpractice","toolsqa01+%")
	// 	cy.get("#name")	
	// 		.should("contain","Invalid username or password!")
	// }) 

	it("US GX-2664 | TS 2665 | TC4:  Verify if a user cannot log in with an invalid username and a valid password.",()=>
	{
		cy.signin("testpract","ToolsQA01+%")
		cy.get("#name")	
			.should("contain","Invalid username or password!")
	}) 
	it("US GX-2664 | TS 2665 | TC5:  Verify if a user cannot log in with an empty username and a valid password.",()=>
	{
		cy.get('#userName').invoke('val', '')
		cy.get("#password")	
			.type("ToolsQA01+$")
		cy.get("#login")
			.click()
		cy.get('#userName:invalid').should('exist')
	}) 

	it("US GX-2664 | TS 2665 | TC6:  Verify if a user cannot log in with a valid username and an empty password",()=>
	{
		cy.get("#userName").
			type("testpractice")
		cy.get('#password').invoke('val', '')
		cy.get("#login")
			.click()
		cy.get('#password:invalid').should('exist')
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