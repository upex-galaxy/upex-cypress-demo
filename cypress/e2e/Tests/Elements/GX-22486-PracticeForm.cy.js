describe('22486 | TS: ✅ToolsQA | Forms | Practice Form', () => 
{
    beforeEach('Usuario debe estar en la Pagina web de Demo QA en la sección de Practice Form', () =>
    {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.url().should('contains', 'automation-practice-form')
    })
    it('22487 | TC1: Validar rellenar el formulario con datos aleatorios (Happy path)', () =>
    {
        const fName = faker.name.firstName();
        const lName = faker.name.lastName();
        const email = faker.internet.email();
        const pNumber = faker.random.numeric(10);
        const subject1 = faker.random.words();
        const subject2 = faker.random.words();
        const subjectsSeparadosPorComa = `${subject1}, ${subject2}`;

        
        textForm.enterFirstName(fName);
        textForm.get.firstNameInput().should('have.value', fName);
        textForm.enterLastName(lName);
        textForm.get.lastNameInput().should('have.value', lName);
        textForm.enterEmail(email);
        textForm.get.emailInput().should('have.value', email);
        
        // textForm.get.genderInput().then(choice => {
        //     const random = Cypress._.random(0, 2);
        //     textForm.get.genderInput().eq(random).click();
        //     textForm.get.genderInput().eq(random).should('be.checked');

        // });
        textForm.selectRandomGender().then(indexGenderSelected => {
            textForm.get.radioGenderInput().eq(indexGenderSelected).should('be.checked');
            textForm.get.radioGenderInput().eq(indexGenderSelected).invoke('val').then((text) => {
            cy.log(text);
        })
        textForm.enterMobile(pNumber);
        textForm.get.mobileInput().should('have.value', pNumber);
        textForm.enterSubjects(subjectsSeparadosPorComa);
        
        })
    })
})

import { faker } from "@faker-js/faker";
import { textForm } from '@pages/Elements/GX-22486-PracticeForm.Page';
import { removeLogs } from '@helper/RemoveLogs';

removeLogs();
