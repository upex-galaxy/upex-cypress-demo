describe('GX-4607 ToolsQA | Inteactions | Sortable', () => {
	beforeEach(() => {
		cy.gotoSortablePage()
	})


	it('4607 | TC1: The tab “List” must be opened by default showing the contained list of items.', () => {
		cy.get('demo-tab-list').should('be.visible')
		cy.get('demo-tab-grid').should('be.visible')
	});
	
	it('4607 | TC2: The tabs List and “Gird” must be showing by default.', () => {
		cy.get('a[id="demo-tab-list"]').should('have.attr', 'aria-selected', 'true')
		cy.get('a[id="demo-tab-grid"]').should('have.attr', 'aria-selected', 'false')
		//cy.get('demo-tab-grid').should('be.visible')
	});

	it('4607 | TC3: Only one tab can be displayed at once. ', () => {
		if (cy.get('a[id="demo-tab-list"]').should('have.attr', 'aria-selected', 'true')) {
			cy.get('a[id="demo-tab-grid"]').should('have.attr', 'aria-selected', 'false')
		} else {
			cy.get('a[id="demo-tab-list"]').should('have.attr', 'aria-selected', 'false')
		}
	});

	it.only('4607 | TC4: Default order of LIST items', () => {

		cy.get('#demo-tabpane-list > div > div:nth-child(1)')
		.invoke('text').should('eq','One')
		cy.get('#demo-tabpane-list > div > div:nth-child(2)').invoke('text').should('eq','Two')
		cy.get('#demo-tabpane-list > div > div:nth-child(3)').invoke('text').should('eq','Three')
		cy.get('#demo-tabpane-list > div > div:nth-child(4)').invoke('text').should('eq','Four')
		cy.get('#demo-tabpane-list > div > div:nth-child(5)').invoke('text').should('eq','Five')
		cy.get('#demo-tabpane-list > div > div:nth-child(6)').invoke('text').should('eq','Six')

	});	

	xit('4607 | TC5: Drag an element of the LIST and verify new location', () => {
	//	cy.get('#demo-tabpane-list > div > div:nth-child(1)')
/*	let listItem = cy.get('#demo-tabpane-list').within(()=>{ cy.get('div[class="list-group-item list-group-item-action"]').invoke('text')})
		console.log("ITEM----->" + listItem[0])
		*/

		cy.get('div[class="vertical-list-container mt-4"]').within(() =>{
			cy.get('div[class="list-group-item list-group-item-action"]').eq(5).invoke('text').should('eq', 'Six')

		})
	});	


	it('4607 | TC6: Default order of GRID items', () => {
		cy.get('a[id="demo-tab-grid"]').click()
		cy.get('#demo-tabpane-grid > div > div > div:nth-child(1)').invoke('text').should('eq','One')
		cy.get('#demo-tabpane-grid > div > div > div:nth-child(2)').invoke('text').should('eq','Two')
		cy.get('#demo-tabpane-grid > div > div > div:nth-child(3)').invoke('text').should('eq','Three')
		cy.get('#demo-tabpane-grid > div > div > div:nth-child(4)').invoke('text').should('eq','Four')
		cy.get('#demo-tabpane-grid > div > div > div:nth-child(5)').invoke('text').should('eq','Five')
		cy.get('#demo-tabpane-grid > div > div > div:nth-child(6)').invoke('text').should('eq','Six')
		cy.get('#demo-tabpane-grid > div > div > div:nth-child(7)').invoke('text').should('eq','Seven')
		cy.get('#demo-tabpane-grid > div > div > div:nth-child(8)').invoke('text').should('eq','Eight')
		cy.get('#demo-tabpane-grid > div > div > div:nth-child(9)').invoke('text').should('eq','Nine')
	});

	it('4607 | TC7: Drag and drop a random element to another location', () => {
		/*
		const dataTransfer = new DataTransfer()
		cy.get('.create-grid').contains('One').trigger('dragstart', {
			dataTransfer
		})
		
		cy.get('.create-grid').contains('Nine').trigger('drop', {
			dataTransfer
		})
		
		//div[class="create-grid"][div[class="list-group-item list-group-item-action"]
		*/
		cy.get('a[id="demo-tab-grid"]').click()

		cy.moveFromTo('#demo-tabpane-grid > div > div > div:nth-child(9)', '#demo-tabpane-grid > div > div > div:nth-child(1)')
		cy.get('#demo-tabpane-grid > div > div > div:nth-child(1)').invoke('text').should('eq', 'Nine')
		
		/*cy.get('#demo-tabpane-grid > div > div > div:nth-child(9)').drag('#demo-tabpane-grid > div > div > div:nth-child(1)', {force: true}).then((success) =>{
			assert.isTrue(success)
		})
*/


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
