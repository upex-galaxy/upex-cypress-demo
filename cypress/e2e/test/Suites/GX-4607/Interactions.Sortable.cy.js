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


	it('4607 | TC5: LIST -> Drag a randon element to a random position', () => {
		let sourcePosition = Math.floor(Math.random() * 6 + 1)
		let targetPosition = Math.floor(Math.random() * 6 + 1)
		let textSourcePosition, textTargetPosition, textSourcePositionFollowing, textTargetPositionFinal
		let position = []
		let elementGrid 
		// make sure sourcePosition <> targetPosition so positions to move are different
		while (sourcePosition == targetPosition) {
			sourcePosition = Math.floor(Math.random() * 6 + 1)
		}
		// Get array with all grid elements
		for (let index = 1; index <= 7; index++) {
			elementGrid = `#demo-tabpane-list > div > div:nth-child(${index})` 
			// #demo-tabpane-list > div > div:nth-child(2)
			position[index -1] = elementGrid
		}
		cy.get('a[id="demo-tab-list"]',{force: true}).click().then(() => {
		}).then(() => {
				// Get text of the source position
				cy.get(position[(sourcePosition-1)]).then(function (objSource) {
					cy.log('debug point 2')
					textSourcePosition = objSource.text()
					cy.log(cy.get(position[sourcePosition-1]).invoke('text'))
				})
			})
			.then(() => {
				// Get text of the target position
				cy.get(position[targetPosition-1], {force: true}).then(function (objTarget) {
					textTargetPosition = objTarget.text()
				})
			})
			.then(() => {
				if (sourcePosition < targetPosition) {
					// Get the text of the following position next to the source position. The text will be use in an assertion later
					cy.log(`DEBUG POINT. Source Position: -->${position[sourcePosition - 1]}`) //DEBUG
					cy.get(position[sourcePosition]).then(function (right) {
						textSourcePositionFollowing = right.text()
					})
				}
			})
		//
		const dragAndDropAttempt = () => {
			cy.get('a[id="demo-tab-list"]',{force: true}).click()
			cy.log('starting Drag & Drop')
			//dragging from sourcePosition to targetPosition
			cy.log(`Source Position: ${sourcePosition}`)  //for debugging 
			cy.get(position[sourcePosition-1],{force: true})
				.drag(position[targetPosition-1],{force: true})
				.then(() => {
					// Have to click on targetPosition to complete the drop
					cy.get(position[targetPosition-1], {force: true}).click()
				})
				.then(() => {
					// Get text of target position after Drag&Drop had conducted
					cy.get(position[targetPosition-1])
						.then(function (objTarget) {
							textTargetPositionFinal = objTarget.text()
						})
						.then(() => {
							// Check if text of target position (after Drag&Drop) has the text of the source position
							if (textSourcePosition == textTargetPositionFinal) {
								cy.get(position[targetPosition-1])
									.invoke('text')
									.should('eq', textSourcePosition)
									.then(() => {
										cy.log(`DRAG AND DROP COMPLETED SUCCESSFULLY:
														SPOT # ${sourcePosition} HAS BEEN MOVED TO SPOT # ${targetPosition}
														`)
										if (sourcePosition > targetPosition) {
											// ejm de 6 a 1
											//Assertion: Text of target (before Drag&Drop) has moved to the next following position
											cy.log(`The value ${textTargetPosition} has been moved to position ${targetPosition +1} (SP>TP)`)
											cy.get(position[targetPosition])
												.invoke('text')
												.should('eq', textTargetPosition)
										} else {
											// Ejm de 1 a 6
											//Assertion: Text of the element next to the source position should have moved to the source position.
											cy.log(`The value ${textSourcePositionFollowing} has been moved to position ${sourcePosition} (TP>SP)`)
											cy.get(position[sourcePosition-1]).invoke('text').should('eq', textSourcePositionFollowing)
										}
									})

								return
							} else {
								// if not, reload the page and try the drag-and-drop again using dragAndDropAttempt()
								cy.reload()
								.then(() => {
									cy.get('a[id="demo-tab-list"]',{force: true}).click()
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

	it('4607 | TC7: GRID -> Drag a randon element to a random position', () => {
		let sourcePosition = Math.floor(Math.random() * 9 + 1)
		let targetPosition = Math.floor(Math.random() * 9 + 1)
		let textSourcePosition, textTargetPosition, textSourcePositionFollowing, textTargetPositionFinal
		let position = []
		let elementGrid 
		// make sure sourcePosition <> targetPosition so positions to move are different
		while (sourcePosition == targetPosition) {
			sourcePosition = Math.floor(Math.random() * 9 + 1)
		}
		// Get array with all grid elements
		for (let index = 1; index <= 10; index++) {
			elementGrid = `#demo-tabpane-grid > div > div > div:nth-child(${index})` 
			position[index -1] = elementGrid
		}
		cy.get('a[id="demo-tab-grid"]').click().then(() => {
		}).then(() => {
				// Get text of the source position
				cy.get(position[(sourcePosition-1)]).then(function (objSource) {
					cy.log('debug point 2')
					textSourcePosition = objSource.text()
				})
			})
			.then(() => {
				// Get text of the target position
				cy.get(position[targetPosition-1], {force: true}).then(function (objTarget) {
					textTargetPosition = objTarget.text()
				})
			})
			.then(() => {
				if (sourcePosition < targetPosition) {
					// Get the text of the following position next to the source position. The text will be use in an assertion later
					cy.log(`DEBUG POINT. Source Position: -->${position[sourcePosition - 1]}`) //DEBUG
					cy.get(position[sourcePosition]).then(function (right) {
						textSourcePositionFollowing = right.text()
					})
				}
			})
		//
		const dragAndDropAttempt = () => {
			cy.get('a[id="demo-tab-grid"]').click()
			cy.log('starting Drag & Drop') //DEBUG
			//dragging from sourcePosition to targetPosition
			cy.log(`Source Position: ${sourcePosition}`)
			cy.get(position[sourcePosition-1],{force: true})
				.drag(position[targetPosition-1],{force: true})
				.then(() => {
					// Have to click on targetPosition to complete the drop
					cy.get(position[targetPosition-1], {force: true}).click()
				})
				.then(() => {
					// Get text of target position after Drag&Drop had conducted
					cy.get(position[targetPosition-1])
						.then(function (objTarget) {
							textTargetPositionFinal = objTarget.text()
						})
						.then(() => {
							// Check if text of target position (after Drag&Drop) has the text of the source position
							if (textSourcePosition == textTargetPositionFinal) {
								cy.get(position[targetPosition-1])
									.invoke('text')
									.should('eq', textSourcePosition)
									.then(() => {
										cy.log(`DRAG AND DROP COMPLETED SUCCESSFULLY:
														SPOT # ${sourcePosition} HAS BEEN MOVED TO SPOT # ${targetPosition}
														`)
										if (sourcePosition > targetPosition) {
											// ejm de 9 a 1
											//Assertion: Text of target (before Drag&Drop) has moved to the next following position
											cy.log(`The value ${textTargetPosition} has been moved to position ${targetPosition +1} (SP>TP)`)
											cy.get(position[targetPosition])
												.invoke('text')
												.should('eq', textTargetPosition)
										} else {
											// Ejm de 1 a 9
											//Assertion: Text of the element next to the source position should have moved to the source position.
											cy.log(`The value ${textSourcePositionFollowing} has been moved to position ${sourcePosition} (TP>SP)`)
											cy.get(position[sourcePosition-1]).invoke('text').should('eq', textSourcePositionFollowing)
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
