describe('ToolsQA | Elements | Radio Buttons', () => {
    
    const US = 'US 203';
    
    beforeEach('Precondición: Estar situado en elements/radiobuttons', () => {
        cy.visit('https://demoqa.com/radio-button');
        cy.url().should("contain", "radio-button");
    });
    
    it(`${US} | TC 01 - Validar seleccionar el RB cuando la opción está habilitada (Yes).`, () => {
        cy.fixture("DOM/toolsqa/Elements/RadioButtons.Page").then((the) => {
            cy.get(the.label.yes).should("have.text", "Yes");
            cy.get(the.radio.yes).click({force:true});
            cy.get(the.output).should("have.text", "Yes");     
        });
    });

    it(`${US} | TC 02 - Validar seleccionar el RB cuando la opción está habilitada (Impressive).`, () => {
        cy.fixture("DOM/toolsqa/Elements/RadioButtons.Page").then((the) => {
            cy.get(the.label.impressive).should("have.text", "Impressive");
            cy.get(the.radio.impressive).click({force:true});
            cy.get(the.output).should("have.text", "Impressive");     
        });
    });

    it(`${US} | TC 03 - Validar NO seleccionar el RB cuando la opción está desahabilitada (No).`, () => {
        cy.fixture("DOM/toolsqa/Elements/RadioButtons.Page").then((the) => {
            cy.get(the.label.no).should("have.text", "No");
            cy.get(the.radio.no).click({force:true});
            cy.get(the.output).should("not.exist");     
        });
    });
});

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
	if (opts.displayName === 'xhr'|| opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
		return
	}
	return origLog(opts, ...other)
}