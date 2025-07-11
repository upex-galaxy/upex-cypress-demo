describe('GX3-6335-ToolsQA | Elements | Buttons',()=>{
    beforeEach('PRC:El usuario está situado en la página de Buttons',()=>{
        cy.visit('https://demoqa.com/buttons');
        cy.url().should('include', '/buttons');
    });
    it('TC1:',()=>{
        cy.get('#doubleClickBtn').dblclick();
        cy.get('#doubleClickMessage').should('have.text','You have done a double click');
    })
    it('TC2:',()=>{
        cy.get('#rightClickBtn').rightclick();
        cy.get('#rightClickMessage').should('have.text','You have done a right click');
    })
    it('TC3:',()=>{
        cy.get('.btn.btn-primary').eq(2).click();
        cy.get('#dynamicClickMessage').should('have.text','You have done a dynamic click');
    })
})