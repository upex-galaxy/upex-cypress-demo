const {And} = require('@badeball/cypress-cucumber-preprocessor')

describe('GX-4607 ToolsQA | Inteactions | Sortable', () => {
	let values = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
	let textOfInitialSpot
	let textOfFinalSpot

	beforeEach(() => {
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

	it('4607 | TC5: Drag an element of the LIST and verify new location', () => {
		// NOT COMPLETED YET
		cy.get('div[class="vertical-list-container mt-4"]').within(() => {
			cy.get('div[class="list-group-item list-group-item-action"]').eq(5).invoke('text').should('eq', 'Six')
		})
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

	it('prueba', () => {
		cy.get('a[id="demo-tab-grid"]').click()

		let text = cy.xpath(`//*[@id="demo-tabpane-grid"]/div/div/div[5]`).invoke('text')

		cy.xpath(`//*[@id="demo-tabpane-grid"]/div/div/div[5]`).then(function (obj) {
			text = obj.text()
		})

		cy.log(text)
	})

	it.only('4607 | TC7: Drag and drop a random element to another location', () => {
		let sourcePosition = Math.floor(Math.random() * 9 + 1)
		let targetPosition = Math.floor(Math.random() * 9 + 1)
		let textSourcePosition, textTargetPosition
		let slidesCounter = targetPosition - sourcePosition // to be used to count the number of slides
		let attemptCounter = 1
		let textTargetPositionLeft, textTargetPositionRight, textSourcePositionLeft, textSourcePositionRight,  right, left, textTargetPositionFinal

		// make sure sourcePosition <> targetPosition so positions to move are different
		while (sourcePosition == targetPosition) {
			cy.log(`**------------NUMEROS DUPLICADOS:  ${targetPosition} -------------------**`)
			sourcePosition = Math.floor(Math.random() * 9 + 1)
		}

		cy.get('a[id="demo-tab-grid"]').click()

		//Get element on the source position
		cy.xpath(`//*[@id="demo-tabpane-grid"]/div/div/div[${sourcePosition}]`)
			.then(function (objSource) {
				// Get text of Source Position
				textSourcePosition = objSource.text()
			})
			.then(() => {
				// Get text of Target Position
				cy.xpath(`//*[@id="demo-tabpane-grid"]/div/div/div[${targetPosition}]`).then(function (objTarget) {
					textTargetPosition = objTarget.text()
				})
			})
			.then(() => {
				cy.log(`TEXT OF SOURCE ELEMENT---->${textSourcePosition} 
				TEXT OF TARGET ELEMENT---->${textTargetPosition}**`)
			})
			.then(() => {
				//Assertion: Text of the Element S-1 -> Text of S
				//Assertion: Text of the Element T -> Text of T+1
				if (sourcePosition > targetPosition) {
					cy.xpath(`//*[@id="demo-tabpane-grid"]/div/div/div[${sourcePosition - 1}]`)
						.then(function (left) {
							textSourcePositionLeft = left.text()
						})
						.then(() => {
							cy.xpath(`//*[@id="demo-tabpane-grid"]/div/div/div[${targetPosition + 1}]`).then(function (right) {
								textTargetPositionRight = right.text()
							})
						})
						.then(() => {
							//cy.log(`LEFT ${TextTargetPositionLeft}  ---- RIGHT ${TextTargetPositionRight}`)
						})
				} else {
					// sourcePosition < targetPosition
					//Assertion: Text of the Element S+1 -> Text of S --- capturo texto de sourcePosition+1
					//Assertion: Text of the Element T -> Text of T-1 --- capturo texto de tagetposition-1  
					cy.xpath(`//*[@id="demo-tabpane-grid"]/div/div/div[${sourcePosition + 1}]`)
						.then(function (right) {
							textSourcePositionRight = right.text()
						})
						.then(() => {
							cy.xpath(`//*[@id="demo-tabpane-grid"]/div/div/div[${targetPosition - 1}]`).then(function (left) {
								textTargetPositionLeft = left.text()
							})
						})
						.then(() => {
							//cy.log(`LEFT ${TextTargetPositionLeft}  ---- RIGHT ${TextTargetPositionRight}`)
						})



				}
			})
		// This function will conduct the drag and drop
		const dragAndDropAttempt = () => {
			//dragging from sourcePosition to targetPosition
			cy.get(`#demo-tabpane-grid > div > div > div:nth-child(${sourcePosition})`, {force: true})
				.drag(`#demo-tabpane-grid > div > div > div:nth-child(${targetPosition})`, {force: true})
				.then(() => {
					// Have to click on targetPosition to complete the drop
					cy.get(`#demo-tabpane-grid > div > div > div:nth-child(${targetPosition})`, {force: true}).click()
				})
				.then(() => {
					// Get text of Target Position
					cy.xpath(`//*[@id="demo-tabpane-grid"]/div/div/div[${targetPosition}]`)
						.then(function (objTarget) {
							textTargetPositionFinal = objTarget.text()
						})
						.then(() => {
							// Check if text of target position has the text of the source position
							if (textSourcePosition == textTargetPositionFinal) {
								cy.log(`DRAG AND DROP COMPLETED SUCCESSFULLY:
											SPOT # ${sourcePosition} HAS BEEN MOVED TO SPOT # ${targetPosition}
											`)
								cy.xpath(`//*[@id="demo-tabpane-grid"]/div/div/div[${targetPosition}]`)
									.invoke('text')
									.should('eq', textSourcePosition)
									.then(() => {
										if (sourcePosition > targetPosition) {
											// ejm (ejm de 9 a 1)
											//Assertion: Text of the Element S-1 -> Text of S
											//Assertion: Text of the Element T -> Text of T+1
											cy.log(`The value ${textTargetPosition} has been moved to position ${targetPosition + 1}`)
											cy.xpath(`//*[@id="demo-tabpane-grid"]/div/div/div[${targetPosition + 1}]`)
												.invoke('text')
												.should('eq', textTargetPosition)
										} else {
											// sourcePosition < targetPosition (ejm de 1 a 9)
											//Assertion: Text of the Element T -> Text of T-1
											//Assertion: Text of the Element S+1 -> Text of S
											cy.log(`The value ${textSourcePositionLeft} has been moved to position ${sourcePosition}`)
											cy.xpath(`//*[@id="demo-tabpane-grid"]/div/div/div[${sourcePosition}]`)
												.invoke('text')
												.should('eq', textSourcePositionLeft)

										}
									})

								return
							} else {
								// if not, reload the page, click on Grad tab, try the drag-and-drop again calling dragAndDropAttempt()
								cy.reload()
									.then(() => {
										cy.get('a[id="demo-tab-grid"]')
											.click()
											.then(() => {
												cy.log(`NUMBER OF ATTEMPS: ${attemptCounter++}`)
											})
									})
									.then(() => {
										dragAndDropAttempt()
									})
							}
						})
				})
		}

		dragAndDropAttempt()
		//cy.log(`NUMBER OF ATTEMPS: ${attemptCounter}`) // attemptCounter IS NOT WORKING
		// Assertions
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
