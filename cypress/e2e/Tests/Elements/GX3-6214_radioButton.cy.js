describe("GX3-6214 | ToolsQA | Elements | Radio Buttons",()=>{
    beforeEach('PRC:El usuario debe estar situado en la pagina de Demo QA', () => {
        cy.visit('https://demoqa.com/radio-button');
        cy.url().should('include', 'radio-button');
        cy.get('h1.text-center').should('have.text', 'Radio Button');
    });
it("GX3-6216 | TC1: validar hacer clic en radio button yes",()=>{
    
    cy.get('[for="yesRadio"]').click();
    cy.get ('span.text-success').should('have.text', 'Yes');
});
it("GX3-6216 | TC2: validar hacer clic en radio button impressive",()=>{
    
    cy.get ('[for="impressiveRadio"]').click();
    cy.get ('span.text-success').should('have.text', 'Impressive');
});

it("GX3-6216 | TC3: validar no poder hacer clic en button no",()=>{
    cy.get ('#noRadio').should('be.disabled');
});
})