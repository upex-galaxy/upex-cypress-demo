describe('GX-5025 | ToolsQA | Widgets | Dropdown - Select Menu',()=>{

    beforeEach('User must be in Select-Menu page',()=>{
        cy.viewport(1440,900);
        cy.visit('/select-menu');
        cy.url().should('contain','select-menu');
    })

    it('5026 | TC1 Validate being able to select an option in the "Select Option" dropdown list',()=>{

        cy.get("[class*=placeholder]").eq(0).click();
        cy.get("[id=react-select-2-option-1-1]").click();
        cy.get("[class*=css-1uccc91-singleValue]").should('have.text','Group 2, option 2');
    })

    it('5026 | TC2 Validate being able to select an option in the "Select One" dropdown list',()=>{

        cy.get("[class*=placeholder]").eq(1).click();
        cy.get("[id=react-select-3-option-0-4]").click()
        cy.get("[class*=css-1uccc91-singleValue]").should('contain','Prof.');
    })

    it('5026 | TC3 Validate being able to select an option in the "Old Select Menu" dropdown list',()=>{

        cy.get("[id=oldSelectMenu]").select('Black').should('have.value',5);
    })

    it('5026 | TC4 Validate being able to select all option in the "Multiselect" dropdown list',()=>{
        
        cy.get("[class*=placeholder]").eq(2).click();
        cy.get('[id=react-select-4-option-0]').click();
        cy.get('[id=react-select-4-option-1]').click();
        cy.get('[id=react-select-4-option-2]').click();
        cy.get('[id=react-select-4-option-3]').click();
        cy.get('[class*=css-1gl4k7y]').should('have.text','No options');
        
    })

    it('5026 | TC5 Validate being able to select all option in the "Standard multi select"',()=>{

        cy.get('#cars').select(['Volvo','Saab','Opel','Audi']).should('have.focus');
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