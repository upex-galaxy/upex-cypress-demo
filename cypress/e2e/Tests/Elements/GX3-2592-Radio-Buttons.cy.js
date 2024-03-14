describe('GX3-2592 | TS: ToolsQA | Elements | Radio Buttons', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/radio-button');
	});

	it('GX3-2592 | TC1: Validar que existen tres radio Buttons', () => {
		cy.get('input[type="radio"]').should('have.length', 3);
	});

	it('GX3-2592 | TC2: Validar que exista la etiqueta Yes', () => {
		cy.get('input[type="radio"][id="yesRadio"]').then($radio => {
			const labelText = $radio.next('label').text();
			expect(labelText).to.equal('Yes');
		});
	});

	it('GX3-2592 | TC3: Validar que exista la etiqueta Impressive', () => {
		cy.get('input[type="radio"][id="impressiveRadio"]').then($radio => {
			const labelText = $radio.next('label').text();
			expect(labelText).to.equal('Impressive');
		});
	});

	it('GX3-2592 | TC4: Validar que exista la etiqueta No', () => {
		cy.get('input[type="radio"][id="noRadio"]').then($radio => {
			const labelText = $radio.next('label').text();
			expect(labelText).to.equal('No');
		});
	});

	it('GX3-2592 | TC5: Validar que cuando se seleccione el RB "Yes" el mensaje es "You have selected Yes"', async () => {
		cy.get('label[for="yesRadio"]').click();
		cy.get('span.text-success').should('have.text', 'Yes');
	});

	it('GX3-2592 | TC6: Validar que cuando se seleccione el RB "Impressive" el mensaje es "You have selected Impressive"', async () => {
		cy.get('input[type="radio"][id="impressiveRadio"]').click();
		cy.get('span.text-success').should('have.text', 'Impressive');
	});

	it('GX3-2592 | TC7: Validar que el RB "No" no es seleccionable', async () => {
		cy.get('input[type="radio"][id="noRadio"]').should('be.disabled');
	});
});
