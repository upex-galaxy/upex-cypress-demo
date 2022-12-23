context('GX-4177-✅-tools-qa-elements-buttons',()=>{

    beforeEach('User must be in buttons page',()=>{
        cy.visit('/buttons');
        cy.url().should('contain','buttons');
    });

    specify('4178 | TC1: Validate message after use "double click me" button',()=>{
        cy.get("[class*='btn-primary']").eq(0).dblclick()
        cy.get("[id='doubleClickMessage']").should("have.text","You have done a double click");
    })

    specify('4178 | TC2: Validate message after use "right click me" button',()=>{
        cy.get("[class*='btn-primary']").eq(1).rightclick()
        cy.get("[id='rightClickMessage']").should("have.text","You have done a right click");
    })

    specify('4178 | TC3: Validate message after use "click me" button',()=>{
        cy.get("[class*='btn-primary']").eq(2).click()
        cy.get("[id='dynamicClickMessage']").should("have.text","You have done a dynamic click");
    })
});

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