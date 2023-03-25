const {baseUrl} = Cypress.env();
import { form } from "@pages/Form.Page";

describe('US # : GX-8748', () =>
{
    beforeEach('Precondition: user is currently in the page form',() =>
    {
        form.visit()
    })

    it('US #8748: TS 11663 | TC1 : Should submit the form with all the required fields', () =>    
    {
        const name = "Florencia"
        const email = "florgomez@hotmail.com"
        const currentaddress = "Liniers 345"
        const permanentaddress = "Viel 234"
        
        form.fillForm(name, email, currentaddress, permanentaddress);

        form.submitForm();

        //assertions
        cy.get('.border.col-md-12.col-sm-12')
        .should('contain', name)
        .should('contain', email)
        .should('contain', currentaddress)
        .should('contain', permanentaddress);
    })
})

//import { removeLogs } from '@helper/'




