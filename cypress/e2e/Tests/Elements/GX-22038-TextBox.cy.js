describe('22038 | TS: ✅ToolsQA | Elements | Text Box: Fill form and Submit', () => {
    beforeEach('Usuario debe esta en la Página web de Demo QA en la sección de Text-box', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.url().should('contains', 'text-box');
    })
    it('22039 | TC1: Validar que al ingresar datos validos en todos los campos se muestren los mensajes esperados.', () => {
        cy.fixture("data/GX-22038-TextBox.json").then((the) =>
        {
            cy.get(the.fullname.input)
                .type(the.fullname.data.filled);
            cy.get(the.email.input)
                .type(the.email.data.valid);
            cy.get(the.currentAddress.input)
                .type(the.currentAddress.data.filled);
            cy.get(the.permanentAddress.input)
                .type(the.permanentAddress.data.filled);
            cy.get(the.submitbutton)
                .click();
            cy.get('.mb-1').should('contain.text', (the.fullname.data.filled), (the.email.data.valid), (the.currentAddress.data.filled), (the.permanentAddress.data.filled));
        });
    });
    it('22039 | TC2: Validar que al enviar campos vacios en “Full name”, “Current Address” and “Permanent Address” ,  no se muestre ningún mensaje.', () => {
        cy.fixture("data/GX-22038-TextBox.json").then((the) =>
        {
            cy.get(the.email.input)
                .type(the.email.data.valid);
            cy.get(the.submitbutton)
                .click();
            cy.get('.mb-1').should('not.contain.text', 'Name', 'Current Address', 'Permanent Address');
        });
    });
    it('22039 | TC3: Validar que al enviar un  email  que no contenga “@” se muestre un borde rojo en "class="mr-sm-2 field-error form-control"', () =>
    {
        cy.fixture("data/GX-22038-TextBox.json").then((the) =>
        {

        })
    });

})
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
