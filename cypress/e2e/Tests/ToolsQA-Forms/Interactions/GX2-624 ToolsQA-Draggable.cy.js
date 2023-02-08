describe('US GX2-624 | TS: ✅ToolsQA | Interactions | Dragabble',()=>{

    beforeEach('Precondition',()=>{
        cy.visit('https://demoqa.com/dragabble')
    })
    
    it('GX2-625 | TC1: Validate that the user can dragg the box “drag me” anywhere',()=>{
        let Xcoord= Cypress._.random(1, 500)
        let Ycoord= Cypress._.random(1, 340)
        
        cy.get('[id="draggableExample-tab-simple"]').should('exist')
        cy.get('[id="dragBox"]').then(($button)=>{
            let rect= $button[0].getBoundingClientRect();

            cy.wrap($button)
            .trigger('mousedown',{
                which: 1,
                pageX: rect.left,
                pageY: rect.top,
                force: true
            })
            .trigger('mousemove',{
                pageX: rect.left + Xcoord,
                pageY: rect.top + Ycoord,
                force: true
            })
            .trigger('mouseup',{
                which: 1,
                force: true
            })
        cy.wrap($button).should('have.css', "left", `${Xcoord}px`) 
        cy.wrap($button).should('have.css', "top", `${Ycoord}px`)
        })
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