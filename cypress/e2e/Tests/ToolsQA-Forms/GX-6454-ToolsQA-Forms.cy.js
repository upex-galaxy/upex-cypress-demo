/// <reference types="cypress" />

//import {name} from "cypress\e2e\support\pages\Name.Page.js"

//import {name} from "cypress\e2e\support\pages\Name.Page.js

//import {name} from '../cypress/support/pages/Name.Page.js'
  
//import {name} from '@pages/Name.Page'

//import {fixtureRegisterStudent} from '../../../fixtures/images/fixtureRegisterStudent.json'


import {name} from '../../../support/pages/Name.Page'
import {male} from '../../../support/pages/Male.Page'
import {email} from '../../../support/pages/Email.Page'
import {paahs} from '../../../support/pages/PAAHS.Page'
import {statecity} from '../../../support/pages/StateCity.Page'
import {submit} from '../../../support/pages/Submit.Page'
import { datebirth } from '@pages/DateBirth.Page'






describe ('ToolsQA |Forms',() =>{

    let the 
    
    beforeEach('visit web',()=>{
        
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.fixture("fixtureRegisterStudent").then((Date)=>{
            the = Date 
        })
    })

    it('TC1: Validar registrar estudiante exitosamente con datos full validos',()=>{
        
        name.typeFirstName(the.firstname) //lastname
        name.typeLastName(the.lastname) //firstname

        male.selectMale()  //radio button genero male

        email.typeEmail(the.EmailTC1)  //email

        dateofBirthF = cy.get('#dateOfBirthInput')

        const date = new Date();
        const day = date.getDate().toString();
        const month = date.getMonth();
        const year = date.getFullYear();

    

        const months = {
	    0: "Jan",
        1: "Feb",
        2:"Mar",
        3:"Apr",
        4:"May",
        5:"Jun",
        6:"Jul",
        7:"Aug",
        8:"Sep",
        9:"Oct",
        10:"Nov",
        11:"Dec"

        };

        const finalDate = day + " " + months[month] + " " + year;
        cy.wait(4000)
        //cy.get('#dataOfBirthInput').should('have.value', finalDate)
        cy.get('#dateOfBirthInput').should('have.attr', 'value', finalDate)
       
        //cy.get('[class*="month-dropdown-container"]').contains('May').click({force: true})
        //cy.get('[class*="month-dropdown-container"]').eq(3).click()
        //cy.get('.react-datepicker__month-select').eq(3).click()
        //cy.get('[class*="month-dropdown-container"]').select(4)
        
        datebirth.clickDataPicker()
        datebirth.selectYear()
        datebirth.selectMonth()
        datebirth.selectDay()

        paahs.typeTelephoneNumber(the.numMobileTC1) // escribir numero de telefono
        paahs.typeCurrent(the.Adress)   //Escribir direccion
        paahs.selectHobbies()  //seleccionar hobbi
        paahs.attachFile()
        paahs.typeSubjects(the.Subject)

        // cy.get('#state').click()
        // cy.get('#react-select-3-option-0').click()
        // cy.get('#city').click()
        // cy.get('#react-select-4-option-0').click()

  

        statecity.selectState()  //seleccion de estado
        statecity.selectCity() //seleccion de ciudad

        submit.buttonSumit()
        

        //cy.get('#dateOfBirthInput')                     
    
    })

    it ('TC2 Validar no poder registrar estudiante con datos full nulos mobile number con 9 caracteres',()=>{
        submit.buttonSumit()
    } )


    it ('TC3 Validar no poder registrar estudiande con email que no contenga @', ()=>{
       
        name.typeFirstName(the.firstname) //lastname
        name.typeLastName(the.lastname) //firstname

        male.selectMale()  //radio button genero male

        email.typeEmail(the.EmailTC3)  //email

        datebirth.clickDataPicker()
        datebirth.selectYear()
        datebirth.selectMonth()
        datebirth.selectDay()


        paahs.typeTelephoneNumber(the.numMobileTC3) // escribir numero de telefono
        paahs.typeCurrent(the.Adress)   //Escribir direccion
        paahs.selectHobbies()  //seleccionar hobbi
        //paahs.attachFile()
        paahs.typeSubjects(the.Subject)

        //statecity.selectState()  //seleccion de estado
        //statecity.selectCity() //seleccion de ciudad

        submit.buttonSumit()
    })

    it('TC4 Validar no poder registrar estudiande con email que no contenga un caracter alfanumero antes del @,mobile number con 11 caractere',()=>{

        name.typeFirstName(the.firstname) //lastname
        name.typeLastName(the.lastname) //firstname

        male.selectMale()  //radio button genero male

        email.typeEmail(the.EmailTC4)  //email

        datebirth.clickDataPicker()
        datebirth.selectYear()
        datebirth.selectMonth()
        datebirth.selectDay()


        paahs.typeTelephoneNumber(the.numMobileTC4) // escribir numero de telefono
        paahs.typeCurrent(the.Adress)   //Escribir direccion
        paahs.selectHobbies()  //seleccionar hobbi
        //paahs.attachFile()
        paahs.typeSubjects(the.Subject)

        //statecity.selectState()  //seleccion de estado
        //statecity.selectCity() //seleccion de ciudad

        submit.buttonSumit()
    })

    it('TC5 Validar no poder registrar estudiande con email que no contenga un caracter alfanumero despues del @',()=>{

        name.typeFirstName(the.firstname) //lastname
        name.typeLastName(the.lastname) //firstname

        male.selectMale()  //radio button genero male

        email.typeEmail(the.EmailTC5)  //email

        datebirth.clickDataPicker()
        datebirth.selectYear()
        datebirth.selectMonth()
        datebirth.selectDay()


        paahs.typeTelephoneNumber(the.numMobileTC1) // escribir numero de telefono
        paahs.typeCurrent(the.Adress)   //Escribir direccion
        paahs.selectHobbies()  //seleccionar hobbi
        //paahs.attachFile()
        paahs.typeSubjects(the.Subject)

        //statecity.selectState()  //seleccion de estado
        //statecity.selectCity() //seleccion de ciudad

        submit.buttonSumit()
    })

    it ('TC6 Validar no poder registrar estudiande con email que no contenga un "." (punto) despues del @',()=>{
        
        name.typeFirstName(the.firstname) //lastname
        name.typeLastName(the.lastname) //firstname

        male.selectMale()  //radio button genero male

        email.typeEmail(the.EmailTC6)  //email

        datebirth.clickDataPicker()
        datebirth.selectYear()
        datebirth.selectMonth()
        datebirth.selectDay()


        paahs.typeTelephoneNumber(the.numMobileTC1) // escribir numero de telefono
        paahs.typeCurrent(the.Adress)   //Escribir direccion
        paahs.selectHobbies()  //seleccionar hobbi
        //paahs.attachFile()
        paahs.typeSubjects(the.Subject)

        //statecity.selectState()  //seleccion de estado
        //statecity.selectCity() //seleccion de ciudad

        submit.buttonSumit()

    })

    it('TC7  Validar no poder registrar estudiante con email que no contenga minimo 2 caracteres alfanumericos despues del punto',()=>{
        name.typeFirstName(the.firstname) //lastname
        name.typeLastName(the.lastname) //firstname

        male.selectMale()  //radio button genero male

        email.typeEmail(the.EmailTC7)  //email
        
        datebirth.clickDataPicker()
        datebirth.selectYear()
        datebirth.selectMonth()
        datebirth.selectDay()


        paahs.typeTelephoneNumber(the.numMobileTC1) // escribir numero de telefono
        paahs.typeCurrent(the.Adress)   //Escribir direccion
        paahs.selectHobbies()  //seleccionar hobbi
        //paahs.attachFile()
        paahs.typeSubjects(the.Subject)

        //statecity.selectState()  //seleccion de estado
        //statecity.selectCity() //seleccion de ciudad

        submit.buttonSumit()

    })




} )


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  // Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
  const origLog = Cypress.log
  Cypress.log = function (opts, ...other) {
    if (opts.displayName === 'xhr' || opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
        return
    }
    return origLog(opts, ...other)
  }
  