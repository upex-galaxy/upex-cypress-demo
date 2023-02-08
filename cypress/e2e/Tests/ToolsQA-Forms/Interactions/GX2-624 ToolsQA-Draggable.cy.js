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
    it('GX2-625 | TC2:  Validate that the user can drag the box “only X” anywhere in an X coordinate in the “Axis restricted” tab',()=>{
        
        let Xcoord= Cypress._.random(1, 350)

        cy.get('[id="draggableExample-tab-axisRestriction"]')
        .should('exist')
        .click()
        cy.get('[id="restrictedX"]')
        .should('have.css', "top", "0px")

        cy.get('[id="restrictedX"]').then(($button)=>{
            let rect= $button[0].getBoundingClientRect();
            cy.wrap($button)
            .trigger('mousedown',{
                which: 1,
                pageX: rect.left,
                force: true
            })
            .trigger('mousemove',{
                pageX: rect.left + Xcoord,
                force: true
            })
            .trigger('mouseup',{
                which: 1,
                force: true
            })
        })
        if(Xcoord> 155 && Xcoord < 360){
            cy.get('[id="restrictedY"]').then(($button)=>{
                let rect= $button[0].getBoundingClientRect();
                cy.wrap($button)
                .trigger('mousedown',{
                    which: 1,
                    pageY: rect.top,
                    force: true
                })
                .trigger('mousemove',{
                    pageY: rect.top + 50,
                    force: true
                })
                .trigger('mouseup',{
                    which: 1,
                    force: true
                })
            })
        }
        cy.get('[id="restrictedX"]')
        .should('have.css', "left", `${Xcoord}px`)
    })
    
    it('GX2-625 | TC3: Validate that the user can drag the box “only Y” anywhere in an Y coordinate in the “Axis restricted” tab',()=>{

        let Ycoord= Cypress._.random(1, 300)

        cy.get('[id="draggableExample-tab-axisRestriction"]')
        .should('exist')
        .click()
        cy.get('[id="restrictedY"]')
        .should('have.css', "left", "0px")

        cy.get('[id="restrictedY"]').then(($button)=>{
            let rect= $button[0].getBoundingClientRect();
            cy.wrap($button)
            .trigger('mousedown',{
                which: 1,
                pageY: rect.top,
                force: true
            })
            .trigger('mousemove',{
                pageY: rect.top + Ycoord,
                force: true
            })
            .trigger('mouseup',{
                which: 1,
                force: true
            })
        })
        cy.get('[id="restrictedY"]')
        .should('have.css', "top", `${Ycoord}px`)
    })

    it('GX2-625 | TC4: Validate that the the text “I’m contained within the box” cant be dragged out of the delimited area of action in the “Container restricted tab”',()=>{
        let Ycoord=Cypress._.random(106, 300) 

    cy.get('[id="draggableExample-tab-containerRestriction"]')
    .should('exist').click()

    cy.get('[class="draggable ui-widget-content ui-draggable ui-draggable-handle"]')
    .then(($draggable)=>{
        let rect= $draggable[0].getBoundingClientRect();
        cy.wrap($draggable)
        .should('exist')
        .and('have.text', "I'm contained within the box")
        .trigger('mousedown',{
            which: 1,
            pageY: rect.top,
            force: true
        })
        .trigger('mousemove',{
            pageY: rect.top + Ycoord,
            force: true
        })
        .trigger('mouseup',{
            which: 1,
            force: true
        })
        cy.get($draggable)
        .should('have.css', 'top', "106px")
        .and('not.have.css', "top", `${Ycoord}px`)
    })
})    
    it('GX2-625 | TC5: Validate that the the text “Im contained within the box” cant be dragged out of the delimited area of action in the “Container restricted tab”',()=>{

        let Xcoord= Cypress._.random(13,100)
        cy.get('[id="draggableExample-tab-containerRestriction"]').click()
        cy.get('[class="ui-widget-header ui-draggable ui-draggable-handle"]')
        .then(($draggable)=>{
                cy.wrap($draggable).should('exist').and('have.text', "I'm contained within my parent")

                let rect= $draggable[0].getBoundingClientRect();
                cy.wrap($draggable)
                .trigger('mousedown',{
                    which: 1,
                    pageX: rect.left,
                    force: true
                })
                .trigger('mousemove',{
                    pageX: rect.left + Xcoord,
                    force: true
                })
                .trigger('mouseup',{
                    which: 1,
                    force: true
                })
            cy.wrap($draggable).should('not.have.css', 'left', `${Xcoord}px`)
            .and('have.css', 'left', "13px")
        })
    })
    it.only('hover over test 1',()=>{

        let Xcoord= Cypress._.random(50,200)
        cy.get('[id="draggableExample-tab-cursorStyle"]').click()
        
        cy.get('[id="cursorCenter"]').then(($box1)=>{
            let rect= $box1[0].getBoundingClientRect();
        
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