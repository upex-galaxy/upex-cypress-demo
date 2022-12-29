const {And} = require('@badeball/cypress-cucumber-preprocessor')

describe('GX-4607 ToolsQA | Inteactions | Sortable', () => {
	let values = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']

	beforeEach(() => {
		cy.viewport(1536, 796)
		cy.gotoSortablePage()
	})

	it('4607 | TC1: The tabs "List" and "Gird” must be showing by default.', () => {
		cy.get('a[id="demo-tab-list"]').should('be.visible')
		cy.get('a[id="demo-tab-grid"]').should('be.visible')
	})

	it('4607 | TC2: The tab “List” must be opened by default showing the contained list of items.', () => {
		cy.get('a[id="demo-tab-list"]').should('have.attr', 'aria-selected', 'true')
		// Verify each of the six elements in the list is visible
		cy.get('div[id="demo-tabpane-list"]').within(() => {
			cy.get('div[class="list-group-item list-group-item-action"]').each(($el, index) => {
				cy.wrap($el).should('be.visible')
				cy.log(values[index])
			})
		})
	})

	it('4607 | TC3: Only one tab can be displayed at once. ', () => {
		if (cy.get('a[id="demo-tab-list"]').should('have.attr', 'aria-selected', 'true')) {
			cy.get('a[id="demo-tab-grid"]').should('have.attr', 'aria-selected', 'false')
		} else {
			cy.get('a[id="demo-tab-list"]').should('have.attr', 'aria-selected', 'false')
		}
	})

	it('4607 | TC4: Default order of LIST items', () => {
		// Verify each of the six elements in the list has the expected value
		cy.get('div[id="demo-tabpane-list"]').within(() => {
			cy.get('div[class="list-group-item list-group-item-action"]').each(($el, index) => {
				if ($el.text() === values[index]) {
					cy.wrap($el).invoke('text').should('eq', values[index])
					cy.log(values[index])
				}
			})
		})
	})

	it('4607 | TC5: Drag a random element of the LIST and verify new location', () => {
		let sourcePosition = Math.floor(Math.random() * 6 + 1)
		let targetPosition = Math.floor(Math.random() * 6 + 1)
		let textSourcePosition, textTargetPosition, textSourcePositionFollowing, textTargetPositionFinal
		// make sure sourcePosition <> targetPosition so positions to move are different
		while (sourcePosition == targetPosition) {
			sourcePosition = Math.floor(Math.random() * 6 + 1)
		}
		//Get element on the source position
		cy.xpath(`//*[@id="demo-tabpane-list"]/div/div[${sourcePosition}]`)
			.then(function (objSource) {
				textSourcePosition = objSource.text()
			})
			.then(() => {
				// Get text of Target Position
				cy.xpath(`//*[@id="demo-tabpane-list"]/div/div[${targetPosition}]`).then(function (objTarget) {
					textTargetPosition = objTarget.text()
				})
			})
			.then(() => {
				if (sourcePosition < targetPosition) {
					// Get the text of the following position next to the source position. The text will be use in an assertion later
					cy.xpath(`//*[@id="demo-tabpane-list"]/div/div[${sourcePosition + 1}]`).then(function (right) {
						textSourcePositionFollowing = right.text()
					})
				}
			})
		// This function will conduct the drag and drop
		const dragAndDropAttempt = () => {
			//dragging from sourcePosition to targetPosition
			cy.get(`#demo-tabpane-list > div > div:nth-child(${sourcePosition})`, {force: true})
				.drag(`#demo-tabpane-list > div > div:nth-child(${targetPosition})`, {force: true})
				.then(() => {
					// Have to click on targetPosition to complete the drop
					cy.xpath(`//*[@id="demo-tabpane-list"]/div/div[${targetPosition}]`, {force: true}).click()
				})
				.then(() => {
					// Get text of target position after Drag&Drop had conducted
					cy.xpath(`//*[@id="demo-tabpane-list"]/div/div[${targetPosition}]`)
						.then(function (objTarget) {
							textTargetPositionFinal = objTarget.text()
						})
						.then(() => {
							// Check if text of target position (after Drag&Drop) has the text of the source position
							if (textSourcePosition == textTargetPositionFinal) {
								cy.xpath(`//*[@id="demo-tabpane-list"]/div/div[${targetPosition}]`)
									.invoke('text')
									.should('eq', textSourcePosition)
									.then(() => {
										cy.log(`DRAG AND DROP COMPLETED SUCCESSFULLY:
														SPOT # ${sourcePosition} HAS BEEN MOVED TO SPOT # ${targetPosition}
														`)
										if (sourcePosition > targetPosition) {
											// ejm de 6 a 1
											//Assertion: Text of target (before Drag&Drop) has moved to the next following position
											cy.log(`The value ${textTargetPosition} has been moved to position ${targetPosition + 1}`)
											cy.xpath(`//*[@id="demo-tabpane-list"]/div/div[${targetPosition + 1}]`)
												.invoke('text')
												.should('eq', textTargetPosition)
										} else {
											// Ejm de 1 a 6
											//Assertion: Text of the element next to the source position should have moved to the source position.
											cy.log(`The value ${textSourcePositionFollowing} has been moved to position ${sourcePosition}`)
											cy.xpath(`//*[@id="demo-tabpane-list"]/div/div[${sourcePosition}]`)
												.invoke('text')
												.should('eq', textSourcePositionFollowing)
										}
									})

								return
							} else {
								// if not, reload the page and try the drag-and-drop again using dragAndDropAttempt()
								cy.reload()
									.then(() => {
										dragAndDropAttempt()
									})
							}
						})
				})
		}

		dragAndDropAttempt()
	})

	it('4607 | TC6: Default order of GRID items', () => {
		cy.get('a[id="demo-tab-grid"]').click()

		cy.get('div[id="demo-tabpane-grid"]').within(() => {
			cy.get('div[class="list-group-item list-group-item-action"]').each(($el, index) => {
				if ($el.text() === values[index]) {
					cy.wrap($el).invoke('text').should('eq', values[index])
					cy.log(`Grid element ${values[index]} has been verified`)
				}
			})
		})
	})

	it('4607 | TC7: Drag a random element of the GRID and verify new location', () => {
		let sourcePosition = Math.floor(Math.random() * 9 + 1)
		let targetPosition = Math.floor(Math.random() * 9 + 1)
		let textSourcePosition, textTargetPosition, textSourcePositionFollowing, textTargetPositionFinal
		// make sure sourcePosition <> targetPosition so positions to move are different
		while (sourcePosition == targetPosition) {
			sourcePosition = Math.floor(Math.random() * 9 + 1)
		}

		cy.get('a[id="demo-tab-grid"]').click()

		//Get element on the source position
		cy.xpath(`//*[@id="demo-tabpane-grid"]/div/div/div[${sourcePosition}]`)
			.then(function (objSource) {
				textSourcePosition = objSource.text()
			})
			.then(() => {
				// Get text of Target Position
				cy.xpath(`//*[@id="demo-tabpane-grid"]/div/div/div[${targetPosition}]`).then(function (objTarget) {
					textTargetPosition = objTarget.text()
				})
			})
			.then(() => {
				if (sourcePosition < targetPosition) {
					// Get the text of the following position next to the source position. The text will be use in an assertion later
					cy.xpath(`//*[@id="demo-tabpane-grid"]/div/div/div[${sourcePosition + 1}]`).then(function (right) {
						textSourcePositionFollowing = right.text()
					})
				}
			})
		// This function will conduct the drag and drop
		const dragAndDropAttempt = () => {
			//dragging from sourcePosition to targetPosition
			cy.get(`#demo-tabpane-grid > div > div > div:nth-child(${sourcePosition})`, {force: true})
				//
				.drag(`#demo-tabpane-grid > div > div > div:nth-child(${targetPosition})`, {force: true})
				.then(() => {
					// Have to click on targetPosition to complete the drop
					cy.xpath(`//*[@id="demo-tabpane-grid"]/div/div/div[${targetPosition}]`, {force: true}).click()
				})
				.then(() => {
					// Get text of target position after Drag&Drop had conducted
					cy.xpath(`//*[@id="demo-tabpane-grid"]/div/div/div[${targetPosition}]`)
						.then(function (objTarget) {
							textTargetPositionFinal = objTarget.text()
						})
						.then(() => {
							// Check if text of target position (after Drag&Drop) has the text of the source position
							if (textSourcePosition == textTargetPositionFinal) {
								cy.xpath(`//*[@id="demo-tabpane-grid"]/div/div/div[${targetPosition}]`)
									.invoke('text')
									.should('eq', textSourcePosition)
									.then(() => {
										cy.log(`DRAG AND DROP COMPLETED SUCCESSFULLY:
													SPOT # ${sourcePosition} HAS BEEN MOVED TO SPOT # ${targetPosition}
													`)
										if (sourcePosition > targetPosition) {
											// ejm de 6 a 1
											//Assertion: Text of target (before Drag&Drop) has moved to the next following position
											cy.log(`The value ${textTargetPosition} has been moved to position ${targetPosition + 1}`)
											cy.xpath(`//*[@id="demo-tabpane-grid"]/div/div/div[${targetPosition + 1}]`)
												.invoke('text')
												.should('eq', textTargetPosition)
										} else {
											// Ejm de 1 a 6
											//Assertion: Text of the element next to the source position should have moved to the source position.
											cy.log(`The value ${textSourcePositionFollowing} has been moved to position ${sourcePosition}`)
											cy.xpath(`//*[@id="demo-tabpane-grid"]/div/div/div[${sourcePosition}]`)
												.invoke('text')
												.should('eq', textSourcePositionFollowing)
										}
									})

								return
							} else {
								// if not, reload the page and try the drag-and-drop again using dragAndDropAttempt()
								cy.reload()
									.then(() => {
										cy.get('a[id="demo-tab-grid"]').click()
									})
									.then(() => {
										dragAndDropAttempt()
									})
							}
						})
				})
		}

		dragAndDropAttempt()
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
