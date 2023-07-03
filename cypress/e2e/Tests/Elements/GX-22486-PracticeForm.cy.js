describe('22486 | TS: ✅ToolsQA | Forms | Practice Form', () => 
{
    beforeEach('Usuario debe estar en la Pagina web de Demo QA en la sección de Practice Form', () =>
    {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.url().should('contains', 'automation-practice-form')
    })
    it('22487 | TC1: Validar rellenar el formulario con datos validos y aleatorios (Happy path)', () =>
    {
        const fName = faker.name.firstName();
        const lName = faker.name.lastName();
        const email = faker.internet.email();
        const phoneNumber = faker.random.numeric(10);
        const address = faker.address.streetAddress();

        //First Name
        textForm.enterFirstName(fName);
        textForm.get.firstNameInput().should('have.value', fName);
        //Last Name
        textForm.enterLastName(lName);
        textForm.get.lastNameInput().should('have.value', lName);
        //Email
        textForm.enterEmail(email);
        textForm.get.emailInput().should('have.value', email);
        //select random gender
        textForm.selectRandomGender().then(indexGenderSelected => {
            textForm.get.radioGenderInput().eq(indexGenderSelected).should('be.checked');
            textForm.get.radioGenderInput().eq(indexGenderSelected).invoke('val').then((text) => {
                cy.wrap(text).as('genderText');
            })    
        })
        //Phone number
        textForm.enterMobile(phoneNumber);
        textForm.get.mobileInput().should('have.value', phoneNumber);
        //date of birth
        textForm.selectRandomDateOfBirth()
        //Subjects
        textForm.enterSubjects();
        textForm.get.subjectsInput().should('have.text', 'Maths')
        //Hobbie
        textForm.selectRandomHobbie().then(indexHobbieSelected => {
            textForm.get.radioHobbieInput().eq(indexHobbieSelected).should('be.checked');
            textForm.get.labelHobbieInput().eq(indexHobbieSelected).invoke('text').then((text) => {
                cy.wrap(text).as('hobbieText');
            })
        })
        //address    
        textForm.enterAddress(address);
        textForm.get.addressInput().should('have.value', address);
        //state
        textForm.get.stateSelecter().click();
        textForm.selectRandomStateOption();
        //city
        textForm.get.citySelecter().click();
        textForm.selectRandomCityOption();
        //Picture
        cy.get('#uploadPicture').selectFile('cypress/images/image.png')
        //submitButton click
        textForm.get.submitButton().click();

        //Form Review
        textForm.get.formTable().contains('td', fName, lName, email, phoneNumber, 'Maths', address);
        cy.get('@genderText').then((genderText) => {
            cy.get('.table.table-dark').contains('td', genderText);
        })
        textForm.get.dateOfBirthInput().invoke('val').then((text) => {
            var fecha = new Date(text);
            var dia = fecha.getDate();
            var nombreMes = fecha.toLocaleString('en-us', { month: 'long' });
            var año = fecha.getFullYear();
            var fechaFormateada = dia + ' ' + nombreMes + ',' + año;
            console.log(fechaFormateada);
            cy.get('.table.table-dark').contains('td', fechaFormateada);
        })
        cy.get('@hobbieText').then((hobbieText) => {
            cy.get('.table.table-dark').contains('td', hobbieText);
        });
        textForm.get.stateSelecter().invoke('text').then((text) => {
            cy.get('.table.table-dark').contains('td', text);
        })
        textForm.get.citySelecter().invoke('text').then((text) => {
            cy.get('.table.table-dark').contains('td', text);
        })
    })
    it('22787 | TC2: Validar  que al tratar de enviar todos los campos vacíos no se muestre ningún mensaje.', () => {
        //submitButton click
        textForm.get.submitButton().click();
        textForm.get.formTable().should('not.exist');
    })
})

import { faker } from "@faker-js/faker";
import { textForm } from '@pages/Elements/GX-22486-PracticeForm.Page';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
