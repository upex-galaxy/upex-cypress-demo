    const fullName = 'Angel';
    const email = 'erwe@ely.com';
    const currentAddress = 'Avamor';
    const permanentAddress = 'Tucorazon'


describe('✅ToolsQA | Elements | Text Box: Fill form and Submit', () => {
    beforeEach('Precondition: be located in text-box', () => {
        cy.visit('https://demoqa.com/text-box');
	
    })
    
    it('GX-18413 | TC1: Validar completar formulario con todos los campos completos.', () =>
	{
		
        cy.get('#userName').type(fullName);
        cy.get('#userEmail').type(email);
        cy.get('#currentAddress').type(currentAddress);
        cy.get('#permanentAddress').type(permanentAddress);
        cy.get('#submit').click();
	})
	
})


