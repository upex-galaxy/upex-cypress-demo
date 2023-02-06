describe("ToolsQA | Widgets | Tool-Tips", () =>
{

    let the;
    before("cargar data",() =>
    {
        cy.fixture("DOM/toolsqa/Widgets/Tool-Tips.Page").then((data) =>
    {
        the = data 
    })
        
    })

    beforeEach("Precondition: Estar situado en la pagina", () =>
    {   
        cy.getUrl(the.url, "/tool-tips") 
    })
    
        it("US-GX-781|TC1: Validate tooltip textfield is displayed “You hovered over the Button” when you hover over the buttón “hover me to see” ", () =>
        {
            
            cy.get("#toolTipButton").trigger('mouseover')
                cy.get(".tooltip-inner").should("be.visible").should("contain", "You hovered over the Button")
            

        })
    
        it("US-GX-781 | TC2 : Validate tooltip textfield is displayed “You hovered over the text field“ when you hover over the  Input field “hover over me to see” ", () =>
        {
            cy.get("#toolTipTextField").trigger('mouseover')
            cy.get(".tooltip-inner").should("be.visible").should("contain", "You hovered over the text field")

        })
    
        it("US-GX-52 | TC3 : Validate tooltip textfield is displayed “You hovered over the Contrary“ when you hover over Text link Contrary",() =>
        {
            cy.get('#texToolTopContainer > :nth-child(1)').trigger('mouseover')
            cy.get(".tooltip-inner").should("be.visible").should("contain", "You hovered over the Contrary")
        })

        
        it("US-GX-781| TC4 : Validate tooltip textfield is displayed “ You hovered over the 1.10.32“ when you hover over the  Text link “1.10.32“  ", () =>
        {
            cy.get('#texToolTopContainer a').eq(1).trigger('mouseover')
            cy.get(".tooltip-inner").should("be.visible").should("contain", "You hovered over the 1.10.32")


        })
        
})

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

