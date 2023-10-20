describe('ToolsQA | Elements | Radio Buttons', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/radio-button')
    })
    it('40541 | TC1:   validar Selección de Radio Button "Yes"', () => {
        //click
        cy.get('[class="custom-control-label"]').eq(0).click()
        const Yesclickmsn = "Yes"
        cy.get('[class=text-success]').should('have.text', Yesclickmsn)
    })
     it('40541 | TC2:   validar Selección de Radio Button "Impressive"', () => {
        //click
        cy.get('[class="custom-control-label"]').eq(1).click()
        const Impressiveclickmsn = "Impressive"
        cy.get('[class=text-success]').should('have.text', Impressiveclickmsn)
     })
    it('40541 | TC3:   validar Selección de Radio Button "No"', () => {
        //click
        cy.get('[class="custom-control-label disabled"]').eq(0).click()
        const Noclickmsn = "No"
        cy.get('[class=text-success]').should('have.text', Noclickmsn)
    })
})