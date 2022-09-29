describe('ToolsQA|Elements|Check Box', () => {
	beforeEach('Precondición: Ir a la página de check-box', () => {
		cy.visit('https://demoqa.com/checkbox')
		cy.url().should('contain', 'checkbox')
	})

	it('US-GX-590|TS-616|TC01 : Verificar poder expandir todas las carpetas', () => {
		cy.get('.rct-title').should('have.text', 'Home')
		cy.get('[aria-label="Expand all"]').click()
        cy.get('.rct-icon.rct-icon-expand-open').should('be.exist')
        cy.get('.rct-icon.rct-icon-expand-close').should('be.not.exist')
	})

	it('US-GX-590|TS-616|TC02 : Verificar poder contraer todas las carpetas', () => {
		cy.get('[aria-label="Expand all"]').click()
		cy.get('[aria-label="Collapse all"]').click()
		cy.get('.rct-icon.rct-icon-expand-close').should('be.exist')
		cy.get('.rct-icon.rct-icon-expand-open').should('be.not.exist')
	})

	it('US-GX-590|TS-616|TC03 : Verificar poder tildar todas las casillas', () => {
		cy.get('[aria-label="Expand all"]').click()
		cy.get('.rct-checkbox').eq(0).click()
		//cy.get('.rct-icon.rct-icon-check').eq(0)    /alternativa
		//.should("be.exist")
		cy.get('#result > :nth-child(2)').should('have.text', 'home')
		cy.get('#result > :nth-child(3)').should('have.text', 'desktop')
		cy.get('#result > :nth-child(4)').should('have.text', 'notes')
		cy.get('#result > :nth-child(5)').should('have.text', 'commands')
		cy.get('#result > :nth-child(6)').should('have.text', 'documents')
		cy.get('#result > :nth-child(7)').should('have.text', 'workspace')
		cy.get('#result > :nth-child(8)').should('have.text', 'react')
		cy.get('#result > :nth-child(9)').should('have.text', 'angular')
		cy.get('#result > :nth-child(10)').should('have.text', 'veu')
		cy.get('#result > :nth-child(11)').should('have.text', 'office')
		cy.get('#result > :nth-child(12)').should('have.text', 'public')
		cy.get('#result > :nth-child(13)').should('have.text', 'private')
		cy.get('#result > :nth-child(14)').should('have.text', 'classified')
		cy.get('#result > :nth-child(15)').should('have.text', 'general')
		cy.get('#result > :nth-child(16)').should('have.text', 'downloads')
		cy.get('#result > :nth-child(17)').should('have.text', 'wordFile')
		cy.get('#result > :nth-child(18)').should('have.text', 'excelFile')
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
