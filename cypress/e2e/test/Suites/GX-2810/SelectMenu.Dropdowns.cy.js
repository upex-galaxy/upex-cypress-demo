describe('GX-2810 ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach(() => {
        
		cy.gotoSelectMenuPage()
        
	})

	it('2810 | TC01: Validar elemento; Select value', () => {
		cy.get('#react-select-2-input').click({force: true}).type('A root option').type('{enter}')
		cy.get('#withOptGroup').contains('A root option')
	})

	it('2810 | TC2: Validar elemento; Select One', () => {
		cy.get('#selectOne').click({force: true}).type('Dr.').type('{enter}').click({force: true}).type('{enter}').contains('Dr.')
	})

	it('2810 | TC03: Validar elemento; Old Style Select Menu', () => {
		cy.get('#oldSelectMenu').select('Indigo')
		cy.get('#oldSelectMenu option:selected').invoke('text').should('eq', 'Indigo')
	})

	it('2810 | TC4: Validar elemento; Multiselect drop down', () => {

        cy.get('#react-select-4-input')
			.click({force: true})
			.type('Blue')
			.type('{enter}')
			.type('Green')
			.type('{enter}')
			.type('Black')
			.type('{enter}')
			.type('Red')
			.type('{enter}')
		cy.contains('No options')

        // Validate 'Blue', 'Green', 'Black' and 'Red' were selected
		const list = []
		cy.get('.css-12jo7m5')
			.each(($li) => {
				list.push($li.text())
			})
			.wrap(list)
			.should('deep.equal', ['Blue', 'Green', 'Black', 'Red'])
	})

	it('2810 | TC5: Validar elemento; Standard multi select', () => {
		cy.get('#cars').select('Opel')
        cy.get('#cars option:selected').invoke('text').should('eq', 'Opel')
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
		if (opts.displayName === 'xhr' || (opts.displayName === 'fetch' && opts.url.startsWith('https://'))) {
			return
		}
		return origLog(opts, ...other)
	}
})
