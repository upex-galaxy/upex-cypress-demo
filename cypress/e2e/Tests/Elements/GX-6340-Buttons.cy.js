
  describe('ToolsQA | Elements | Buttons', () => {
    it('click in buttons', () => {
      //cy.visit('https://example.cypress.io')
      cy.visit('https://demoqa.com/buttons')
      
      //doble click
      cy.get('#doubleClickBtn').dblclick()
      const dblclickmsn = "You have done a double click"
      cy.get('#doubleClickMessage').should('have.text',dblclickmsn)

      //click derecho
      cy.get('#rightClickBtn').rightclick()
      const rightclickmsn = "You have done a right click"
      cy.get('#rightClickMessage').should('have.text',rightclickmsn)
      
    
      //cy.get('button[type="button"]').eq(3).click()
      cy.get('button').last().click()
      const clickmsn = "You have done a dynamic click"
      cy.get('#dynamicClickMessage').should('have.text',clickmsn)


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
      