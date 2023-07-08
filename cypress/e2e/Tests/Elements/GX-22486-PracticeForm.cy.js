describe('22486 | TS: ✅ToolsQA | Forms | Practice Form', () => 
{
    beforeEach('Usuario debe estar en la Pagina web de Demo QA en la sección de Practice Form', () => {
        cy.fixture("data/GX-22486-PracticeForm.json").then((the) => {
        cy.visit(the.endPoint);
        cy.url().should('contains', the.endPoint);
        });
        
    });
    it('22487 | TC1: Validar rellenar el formulario con datos validos y aleatorios (Happy path)', () => {
        cy.fixture("data/GX-22486-PracticeForm.json").then((the) => {
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
                });
            });
            //Phone number
            textForm.enterMobile(phoneNumber);
            textForm.get.mobileInput().should('have.value', phoneNumber);
            //date of birth
            textForm.selectRandomDateOfBirth();
            //Subjects
            textForm.enterSubjects();
            textForm.get.subjectsInput().should('have.text', the.anySubject);
            //Hobbie
            textForm.selectRandomHobbie().then(indexHobbieSelected => {
                textForm.get.radioHobbieInput().eq(indexHobbieSelected).should('be.checked');
                textForm.get.labelHobbieInput().eq(indexHobbieSelected).invoke('text').then((text) => {
                    cy.wrap(text).as('hobbieText');
                });
            });
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
            cy.get('#uploadPicture').selectFile('cypress/fixtures/images/upexlogo.png');
            //submitButton click
            textForm.get.submitButton().click();

            //Form Review
            textForm.get.formTable().should('contain', fName, lName, email, phoneNumber, 'Maths', address);
            cy.get('@genderText').then((genderText) => {
                textForm.get.formTable().should('contain', genderText);
            })
            textForm.get.dateOfBirthInput().invoke('val').then((text) => {
                var fecha = new Date(text);
                var dia = fecha.getDate();
                var nombreMes = fecha.toLocaleString('en-us', { month: 'long' });
                var año = fecha.getFullYear();
                var fechaFormateada = dia + ' ' + nombreMes + ',' + año;
                console.log(fechaFormateada);
                textForm.get.formTable().should('contain', fechaFormateada);
            });
            cy.get('@hobbieText').then((hobbieText) => {
                textForm.get.formTable().should('contain', hobbieText);
            });
            textForm.get.stateSelecter().invoke('text').then((text) => {
                textForm.get.formTable().should('contain', text);
            });
            textForm.get.citySelecter().invoke('text').then((text) => {
                textForm.get.formTable().should('contain', text);
            });
        })
    });
    it('22787 | TC2: Validar  que al tratar de enviar todos los campos vacíos no se muestre ningún mensaje.', () => {
        //submitButton click
        textForm.get.submitButton().click();
        textForm.get.formTable().should('not.exist');
    });
    it('22787 | TC3: Validar que al enviar un  email  que no contenga “@” no se muestre ningún mensaje y que en el campo se muestre un borde rojo.', () => {
        cy.fixture("data/GX-22486-PracticeForm.json").then((the) => {
            
                //Invalid Email
            textForm.enterEmail(the.email.data.invalid.invalidEmail1);
                
            
            const fName = faker.name.firstName();
            const lName = faker.name.lastName();
            const phoneNumber = faker.random.numeric(10);
            const address = faker.address.streetAddress();

            //First Name
            textForm.enterFirstName(fName);
            textForm.get.firstNameInput().should('have.value', fName);
            //Last Name
            textForm.enterLastName(lName);
            textForm.get.lastNameInput().should('have.value', lName);
            //select random gender
            textForm.selectRandomGender().then(indexGenderSelected => {
                textForm.get.radioGenderInput().eq(indexGenderSelected).should('be.checked');
                textForm.get.radioGenderInput().eq(indexGenderSelected).invoke('val').then((text) => {
                    cy.wrap(text).as('genderText');
                });
            });
            //Phone number
            textForm.enterMobile(phoneNumber);
            textForm.get.mobileInput().should('have.value', phoneNumber);
            //date of birth
            textForm.selectRandomDateOfBirth();
            //Subjects
            textForm.enterSubjects();
            textForm.get.subjectsInput().should('have.text', the.anySubject);
            //Hobbie
            textForm.selectRandomHobbie().then(indexHobbieSelected => {
                textForm.get.radioHobbieInput().eq(indexHobbieSelected).should('be.checked');
                textForm.get.labelHobbieInput().eq(indexHobbieSelected).invoke('text').then((text) => {
                    cy.wrap(text).as('hobbieText');
                });
            });
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
            cy.get('#uploadPicture').selectFile('cypress/fixtures/images/upexlogo.png');
            //submitButton click
            textForm.get.submitButton().click();

            //Form Review 
            textForm.get.formTable().should('not.exist');
        textForm.get.emailInput().should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });
    })
    it('22787 | TC4: Validar que al enviar un  email  que no contenga “mínimo un carácter alfanumérico antes de @ ” no se muestre ningún mensaje y que en el campo se muestre un borde rojo.', () => {
        cy.fixture("data/GX-22486-PracticeForm.json").then((the) => {
            //Invalid Email
            textForm.enterEmail(the.email.data.invalid.invalidEmail2);
            
        
            const fName = faker.name.firstName();
            const lName = faker.name.lastName();
            const phoneNumber = faker.random.numeric(10);
            const address = faker.address.streetAddress();

            //First Name
            textForm.enterFirstName(fName);
            textForm.get.firstNameInput().should('have.value', fName);
            //Last Name
            textForm.enterLastName(lName);
            textForm.get.lastNameInput().should('have.value', lName);
            //select random gender
            textForm.selectRandomGender().then(indexGenderSelected => {
                textForm.get.radioGenderInput().eq(indexGenderSelected).should('be.checked');
                textForm.get.radioGenderInput().eq(indexGenderSelected).invoke('val').then((text) => {
                    cy.wrap(text).as('genderText');
                });
            });
            //Phone number
            textForm.enterMobile(phoneNumber);
            textForm.get.mobileInput().should('have.value', phoneNumber);
            //date of birth
            textForm.selectRandomDateOfBirth();
            //Subjects
            textForm.enterSubjects();
            textForm.get.subjectsInput().should('have.text', the.anySubject);
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
            cy.get('#uploadPicture').selectFile('cypress/fixtures/images/upexlogo.png');
            //submitButton click
            textForm.get.submitButton().click();

            //Form Review 
            textForm.get.formTable().should('not.exist');
            textForm.get.emailInput().should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });
    });
    it('22787 | TC5: Validar que al enviar un  email  que no contenga “mínimo un carácter alfanumérico después de @ ” no se muestre ningún mensaje y que en el campo se muestre un borde rojo.', () => {
        cy.fixture("data/GX-22486-PracticeForm.json").then((the) => {
            //Invalid Email
            textForm.enterEmail(the.email.data.invalid.invalidEmail3);
            
        
            const fName = faker.name.firstName();
            const lName = faker.name.lastName();
            const phoneNumber = faker.random.numeric(10);
            const address = faker.address.streetAddress();

            //First Name
            textForm.enterFirstName(fName);
            textForm.get.firstNameInput().should('have.value', fName);
            //Last Name
            textForm.enterLastName(lName);
            textForm.get.lastNameInput().should('have.value', lName);
            //select random gender
            textForm.selectRandomGender().then(indexGenderSelected => {
                textForm.get.radioGenderInput().eq(indexGenderSelected).should('be.checked');
                textForm.get.radioGenderInput().eq(indexGenderSelected).invoke('val').then((text) => {
                    cy.wrap(text).as('genderText');
                });
            });
            //Phone number
            textForm.enterMobile(phoneNumber);
            textForm.get.mobileInput().should('have.value', phoneNumber);
            //date of birth
            textForm.selectRandomDateOfBirth();
            //Subjects
            textForm.enterSubjects();
            textForm.get.subjectsInput().should('have.text', the.anySubject)
            //Hobbie
            textForm.selectRandomHobbie().then(indexHobbieSelected => {
                textForm.get.radioHobbieInput().eq(indexHobbieSelected).should('be.checked');
                textForm.get.labelHobbieInput().eq(indexHobbieSelected).invoke('text').then((text) => {
                    cy.wrap(text).as('hobbieText');
                });
            });
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
            cy.get('#uploadPicture').selectFile('cypress/fixtures/images/upexlogo.png');
            //submitButton click
            textForm.get.submitButton().click();

            //Form Review 
            textForm.get.formTable().should('not.exist');
            textForm.get.emailInput().should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });
    });
    it('22787 | TC6: Validar que al enviar un  email  que no contenga “ . despues de al menos un caracter alfanumerico despues de @ ”  no se muestre ningún mensaje y que en el campo se muestre un borde rojo.', () => {
        cy.fixture("data/GX-22486-PracticeForm.json").then((the) => {
            //Invalid Email
            textForm.enterEmail(the.email.data.invalid.invalidEmail4);
            
        
            const fName = faker.name.firstName();
            const lName = faker.name.lastName();
            const phoneNumber = faker.random.numeric(10);
            const address = faker.address.streetAddress();

            //First Name
            textForm.enterFirstName(fName);
            textForm.get.firstNameInput().should('have.value', fName);
            //Last Name
            textForm.enterLastName(lName);
            textForm.get.lastNameInput().should('have.value', lName);
            //select random gender
            textForm.selectRandomGender().then(indexGenderSelected => {
                textForm.get.radioGenderInput().eq(indexGenderSelected).should('be.checked');
                textForm.get.radioGenderInput().eq(indexGenderSelected).invoke('val').then((text) => {
                    cy.wrap(text).as('genderText');
                });
            });
            //Phone number
            textForm.enterMobile(phoneNumber);
            textForm.get.mobileInput().should('have.value', phoneNumber);
            //date of birth
            textForm.selectRandomDateOfBirth();
            //Subjects
            textForm.enterSubjects();
            textForm.get.subjectsInput().should('have.text', the.anySubject);
            //Hobbie
            textForm.selectRandomHobbie().then(indexHobbieSelected => {
                textForm.get.radioHobbieInput().eq(indexHobbieSelected).should('be.checked');
                textForm.get.labelHobbieInput().eq(indexHobbieSelected).invoke('text').then((text) => {
                    cy.wrap(text).as('hobbieText');
                });
            });
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
            cy.get('#uploadPicture').selectFile('cypress/fixtures/images/upexlogo.png');
            //submitButton click
            textForm.get.submitButton().click();

            //Form Review 
            textForm.get.formTable().should('not.exist');
            textForm.get.emailInput().should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });
    });
    it('22787 | TC7: Validar que al enviar un  email  que no contenga “mínimo 2 carácteres alfanuméricos despues del . ” no se muestre ningún mensaje y que en el campo se muestre un borde rojo.', () => {
        cy.fixture("data/GX-22486-PracticeForm.json").then((the) => {
            //Invalid Email
            textForm.enterEmail(the.email.data.invalid.invalidEmail5);
            
        
            const fName = faker.name.firstName();
            const lName = faker.name.lastName();
            const phoneNumber = faker.random.numeric(10);
            const address = faker.address.streetAddress();

            //First Name
            textForm.enterFirstName(fName);
            textForm.get.firstNameInput().should('have.value', fName);
            //Last Name
            textForm.enterLastName(lName);
            textForm.get.lastNameInput().should('have.value', lName);
            //select random gender
            textForm.selectRandomGender().then(indexGenderSelected => {
                textForm.get.radioGenderInput().eq(indexGenderSelected).should('be.checked');
                textForm.get.radioGenderInput().eq(indexGenderSelected).invoke('val').then((text) => {
                    cy.wrap(text).as('genderText');
                });
            });
            //Phone number
            textForm.enterMobile(phoneNumber);
            textForm.get.mobileInput().should('have.value', phoneNumber);
            //date of birth
            textForm.selectRandomDateOfBirth();
            //Subjects
            textForm.enterSubjects();
            textForm.get.subjectsInput().should('have.text', 'Maths');
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
            cy.get('#uploadPicture').selectFile('cypress/fixtures/images/upexlogo.png');
            //submitButton click
            textForm.get.submitButton().click();

            //Form Review 
            textForm.get.formTable().should('not.exist');
            textForm.get.emailInput().should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });
    });
    // El siguiente TC fue comentado por el comportamiento de la pagina, debido a que caundo ingresamos un número telefónico, con menos de 10 digitos 
    // it('22788 | TC8: Validar que al ingresar un número telefónico que no contenga 10 números, no se muestre ningún mensaje y que en el campo se muestre un borde rojo.', () => {
    //     //Invalid Phone Number
    //     cy.fixture("data/GX-22486-PracticeForm.json").then((the) => {
    //         //Invalid Phone Number
    //         textForm.enterMobile(the.phoneNumber.data.invalid);
    //         textForm.get.mobileInput('{enter}');
    //     }); 
    //     const fName = faker.name.firstName();
    //     const lName = faker.name.lastName();
    //     const email = faker.internet.email();
    //     const phoneNumber = faker.random.numeric(10);
    //     const address = faker.address.streetAddress();

    //     //First Name
    //     textForm.enterFirstName(fName);
    //     textForm.get.firstNameInput().should('have.value', fName);
    //     //Last Name
    //     textForm.enterLastName(lName);
    //     textForm.get.lastNameInput().should('have.value', lName);
    //     //select random gender
    //     textForm.selectRandomGender().then(indexGenderSelected => {
    //         textForm.get.radioGenderInput().eq(indexGenderSelected).should('be.checked');
    //         textForm.get.radioGenderInput().eq(indexGenderSelected).invoke('val').then((text) => {
    //             cy.wrap(text).as('genderText');
    //         })    
    //     })
    //     //Email
    //     textForm.enterEmail(email);
    //     textForm.get.emailInput().should('have.value', email);
    //     //date of birth
    //     textForm.selectRandomDateOfBirth()
    //     //Subjects
    //     textForm.enterSubjects();
    //     textForm.get.subjectsInput().should('have.text', 'Maths')
    //     //Hobbie
    //     textForm.selectRandomHobbie().then(indexHobbieSelected => {
    //         textForm.get.radioHobbieInput().eq(indexHobbieSelected).should('be.checked');
    //         textForm.get.labelHobbieInput().eq(indexHobbieSelected).invoke('text').then((text) => {
    //             cy.wrap(text).as('hobbieText');
    //         })
    //     })
    //     //address    
    //     textForm.enterAddress(address);
    //     textForm.get.addressInput().should('have.value', address);
    //     //state
    //     textForm.get.stateSelecter().click();
    //     textForm.selectRandomStateOption();
    //     //city
    //     textForm.get.citySelecter().click();
    //     textForm.selectRandomCityOption();
    //     //Picture
    //     cy.get('#uploadPicture').selectFile('cypress/fixtures/images/upexlogo.png')
        
    //     //submitButton click
    //     textForm.get.submitButton().click();
        

    //     //Form Review 
    //     textForm.get.formTable().should('not.exist');
    //     textForm.get.mobileInput().should('have.css', 'border-color', 'rgb(220, 53, 69)');
    // })
     
})

import { faker } from "@faker-js/faker";
import { textForm } from '@pages/Elements/GX-22486-PracticeForm.Page';
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
