// describe('ToolsQA | Elements | Buttons', () => {
//     beforeEach(()=>{
//       cy.visit('https://demoqa.com/buttons')
//     })
//     it('6341 | TC1:   validar doble click en boton “Double Click Me“',() => {
//       //doble click
//       cy.get('#doubleClickBtn').dblclick()
//       const dblclickmsn = "You have done a double click"
//       cy.get('#doubleClickMessage').should('have.text',dblclickmsn)
//     })
describe('ToolsQA | Elements | Buttons', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/buttons')
        cy.url().should('contain', 'buttons')
    })
    it('40164 | TC1: Validar doble click en boton "Double click Me"', () => {
        cy.get('#doubleClickBtn').dblclick()
        const dblclickmsn = "You have done a double click"
        cy.get('#doubleClickMessage').should('have.text',dblclickmsn)
    })
    it('40164 | TC2: Validar doble click en boton "Right click Me"', () => {
        cy.get('#rightClickBtn').rightclick()
        const rightclickmsn = "You have done a right click"
        cy.get('#rightClickMessage').should('have.text',rightclickmsn)
    })
    it('40164 | TC3: Validar doble click en boton "click Me"', () => {
        cy.get('[Type="Button"]').eq(3).click()
        const clickmsn = "You have done a dynamic click"
        cy.get('#dynamicClickMessage').should('have.text',clickmsn)
    })
});