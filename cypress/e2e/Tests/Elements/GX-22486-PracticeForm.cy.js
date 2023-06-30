describe('22486 | TS: ✅ToolsQA | Forms | Practice Form', () => 
{
    beforeEach('Usuario debe estar en la Pagina web de Demo QA en la sección de Practice Form', () =>
    {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.url().should('contains', 'automation-practice-form')
    })
    it('22487 | TC1: 22787 | TC1: Validar rellenar el formulario con datos aleatorios (Happy path)', () =>
    {
        const fName = faker.name.firstName();
        const lName = faker.name.lastName();
        const email = faker.internet.email();
        const pNumber = faker.random.numeric(10);

        
        textF.enterFirstName(fName);
        textF.get.firstNameInput().should('have.value', fName);
        textF.enterLastName(lName);
        textF.get.lastNameInput().should('have.value', lName);
        textF.enterEmail(email);
        textF.get.emailInput().should('have.value', email);
        
        textF.get.genderInput().then(choice => {
            const random = Cypress._.random(0, 2);
            textF.get.genderInput().eq(random).click();
            textF.get.genderInput().eq(random).should('be.checked');

        });
        textF.enterMobile(pNumber);
        textF.get.mobileInput().should('have.value', pNumber);
    })
})

import { faker } from "@faker-js/faker";
import { textF } from '@pages/Elements/GX-22486-PracticeForm.Page';
import { removeLogs } from '@helper/RemoveLogs';
import { random } from "cypress/types/lodash";
removeLogs();
