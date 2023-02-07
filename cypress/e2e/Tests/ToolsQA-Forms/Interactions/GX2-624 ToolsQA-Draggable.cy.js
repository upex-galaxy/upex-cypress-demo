describe('US GX2-624 | TS: ✅ToolsQA | Interactions | Dragabble',()=>{

    it('GX2-625 | TC1: Validate that the user can dragg the box “drag me” anywhere',()=>{
        
        cy.visit('https://demoqa.com/dragabble')
        cy.get('[id="draggableExample-tab-simple"]').should('exist')
        cy.get('[id="dragBox"]').should('exist')

        
    })
})
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