describe("prueba", () => {
    beforeEach(() =>{
      cy.visit('https://demoqa.com/webtables')
    }) 
  
    it('test', () => {
        cy.get('.rt-tbody').should('exist')
    })
})