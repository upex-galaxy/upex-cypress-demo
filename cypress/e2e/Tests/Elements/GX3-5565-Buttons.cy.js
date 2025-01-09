describe('US GX3-5565 | ToolsQA | Elements | Buttons', () => {
	beforeEach('PRC: Abrir la url buttons de ToolsQA', () => {
		cy.visit('https://demoqa.com/buttons');
		cy.url().should('contain', 'buttons');
	});

	it('US # GX3-5565 | TC#01: Validar comportamiento del button "DOUBLE Click" al hacer dblClick', () => {
		cy.get('button#doubleClickBtn').as('doubleClickBtn');

		cy.get('@doubleClickBtn').should('exist').and('be.enabled').and('be.visible').and('contain.text', 'Double Click Me');

		cy.get('@doubleClickBtn').dblclick();

		cy.get('p[id=doubleClickMessage]').as('doubleClickMessage');

		cy.get('@doubleClickMessage').should('exist').and('be.visible').and('contain.text', 'You have done a double click');
	});

	it('US # GX3-5565 | TC#02: Validar comportamiento del button "RIGHT Click" al hacer rightClick', () => {
		cy.get('button#rightClickBtn').as('rightClickBtn');

		cy.get('@rightClickBtn').should('exist').and('be.enabled').and('be.visible').and('contain.text', 'Right Click Me');

		cy.get('@rightClickBtn').rightclick();

		cy.get('p[id=rightClickMessage]').as('rightClickMessage');

		cy.get('@rightClickMessage').should('exist').and('be.visible').and('contain.text', 'You have done a right click');
	});

	it('US # GX3-5565 | TC#03: Validar comportamiento del button "CLICK" al hacer click', () => {
		// button#fcmdZ es un randomId. Hay que localizar el botón de otra manera
		cy.get('button.btn.btn-primary').should('contain.text', 'Click Me').not(':contains("Right")').not(':contains("Double")').as('clickBtn');

		cy.get('@clickBtn').should('exist').and('be.enabled').and('be.visible');

		cy.get('@clickBtn').click();

		cy.get('p[id=dynamicClickMessage]').as('dynamicClickMessage');

		cy.get('@dynamicClickMessage').should('exist').and('be.visible').and('contain.text', 'You have done a dynamic click');
	});

	it('US # GX3-5565 | TC#04: Validar que NO haga nada el button "DOUBLE Click" con OTRO EVENTO', () => {
		cy.get('button#doubleClickBtn').as('doubleClickBtn');

		cy.get('@doubleClickBtn').should('exist').and('be.enabled').and('be.visible');

		cy.get('@doubleClickBtn').click();

		cy.get('@doubleClickBtn').rightclick();

		cy.get('p[id=doubleClickMessage]').should('not.exist');

		cy.get('p[id=rightClickMessage]').should('not.exist');

		cy.get('p[id=dynamicClickMessage]').should('not.exist');
	});

	it('US # GX3-5565 | TC#05: Validar que NO haga nada el button "RIGHT Click" con OTRO EVENTO', () => {
		cy.get('button#rightClickBtn').as('rightClickBtn');
		cy.get('@rightClickBtn').should('be.enabled').and('be.visible');

		cy.get('@rightClickBtn').click();

		cy.get('@rightClickBtn').dblclick();

		cy.get('p[id=doubleClickMessage]').should('not.exist');

		cy.get('p[id=rightClickMessage]').should('not.exist');

		cy.get('p[id=dynamicClickMessage]').should('not.exist');
	});

	it('US # GX3-5565 | TC#06: Validar que NO haga nada el button "CLICK" con OTRO EVENTO', () => {
		cy.get('button.btn.btn-primary').should('contain.text', 'Click Me').not(':contains("Right")').not(':contains("Double")').as('clickBtn');

		cy.get('@clickBtn').should('be.enabled').and('be.visible');

		cy.get('@clickBtn').rightclick();

		cy.get('@clickBtn').dblclick();

		cy.get('p[id=doubleClickMessage]').should('not.exist');

		cy.get('p[id=rightClickMessage]').should('not.exist');

		// Al hacer doble click estamos haciendo si o si click
	});
});
