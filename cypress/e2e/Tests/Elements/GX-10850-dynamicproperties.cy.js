describe('US GX-10850 | TS: ToolsQA | Elements | Dynamic Properties', () => {
	beforeEach('Precondiciones: Usuario debe estar situado en Dynamic properties page', () => {
		cy.visit('https://demoqa.com/dynamic-properties');
	});

	it('10851 | TC1: Validate text element', () => {
		cy.xpath('//p["This text has random Id"]').should('be.visible'); //Validate with a text
		cy.xpath('//div[@id="app"]/div/div/div/div/div[2]/p').should('be.visible'); //validate without text or attribute

		//Debe instalarse xpath para correr este TC
	});
	it('10851 | TC2: Validate that the button (Will enable 5 Sec) cannot be clicked before 5 seconds', () => {
		cy.get('#enableAfter').should('not.be.enabled');
	});
	it('10851 | TC3: Validate that the button (Will enable 5 Sec) can be clicked after 5 seconds', () => {
		cy.wait(5000); //wait 5 seconds for enable button
		cy.get('#enableAfter').should('be.enabled');
	});
	it('10851 | TC4: Validate that the button (Color Change) have text in white color before 5 seconds', () => {
		cy.get('[class="mt-4 btn btn-primary"]').eq(1).contains('Color Change'); //this class change after 5 second, for extra confirmation add contain a text ColorChange
	});
	it('10851 | TC5: Validate that the button (Color Change) have text in red color after 5 seconds', () => {
		cy.wait(5000);
		cy.get('[class="mt-4 text-danger btn btn-primary"]').contains('Color Change');
	});
	it('10851 | TC6: Validate dont visible button (Visible after 5 sec) Before 5 sec', () => {
		cy.contains('Visible After 5 Seconds').should('not.exist');
	});
	it('10851 | TC7: Validate visible button (Visible after 5 sec) after 5 sec', () => {
		cy.wait(5000);
		cy.get('#visibleAfter').should('be.visible');
	});
});

//________________________________________________________________________
// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', () => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
});
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log;
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr' || (opts.displayName === 'fetch' && opts.url.startsWith('https://'))) {
		return;
	}
	return origLog(opts, ...other);
};
