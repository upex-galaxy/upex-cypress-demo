describe('US 107 : ToolsQA | Alert-Frame-Window | Browser Windows', () => {

    beforeEach('Precondition', () => {

        cy.visit('https://demoqa.com/browser-windows')
        cy.url().should('contain', 'browser-windows')
    })
    
    it('US 107 | TS 261 | TC 01 - Validate a new browser tab window to click the button named New Tab', () => {
        
        cy.get('#tabButton').invoke('removeAttr', 'btn btn-primary').click()
        cy.visit('https://demoqa.com/sample')
        cy.url().should('contain', 'sample')
        cy.get('h1').should('have.text', 'This is a sample page')
    })

    it('US 107 | TS 261 | TC 02 - Validate handling a new pop-up window by clicking on the button named New Window', () => {
        
        cy.visit('https://demoqa.com/browser-windows')
        
        cy.window().then((win) => {
            cy.stub(win, 'open', url => {
                win.location.href = 'https://demoqa.com/sample';
            }).as('popup')
        })
        
        cy.get('#windowButton').click()
        cy.get('@popup').should("be.called")
        cy.get('h1').should('have.text', 'This is a sample page')        
    })
    
    it('US 107 | TS 261 | TC 03 - Validate handling a new pop-up window message by clicking on the button named New Window Message', ()=>  {
        
        cy.get('#messageWindowButton').click()

        cy.on('window:alert', (text) => {
            expect(text).to.contains('Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.')
        })// https://chercher.tech/cypress-io/alerts-popups-cypressio                
    })
})
s
// Command predeterminado para que no ocurran errores de excepciones: //
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
    if (opts.displayName === 'xhr' || opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
        return
    }
    return origLog(opts, ...other)
}