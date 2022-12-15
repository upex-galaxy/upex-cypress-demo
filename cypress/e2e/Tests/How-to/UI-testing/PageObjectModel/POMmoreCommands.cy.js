const {username, password} = Cypress.env('AdminUser')

describe('user logs in', () => {
    
    beforeEach(() => {
        cy.Login(username, password)
    });

    it('click on X', () => {
        expect(1).equal(1)

        cy.log("Este Caso de Prueba puede ser cualquier otra cosa")
    });
    
    
});

