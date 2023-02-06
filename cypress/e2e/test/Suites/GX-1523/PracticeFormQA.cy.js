/ <reference types="cypress" / >
    require('cypress-xpath')
import { INTERNAL_PROPERTY_NAME } from '@badeball/cypress-cucumber-preprocessor/lib/constants'
import 'cypress-file-upload'
describe("Tools QA | Interactions | Selectable", () => {
    beforeEach("Precondición: Estar situado en Interactions/selectable", () => {
        cy.viewport(1900,1080);
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.url().should("contain", "automation-practice-form")
        // cy.clearCookies()
        // cy.clearLocalStorage()
        //rgb(206, 212, 218)'
    })
    it("|GX-1523| TC 1: Validar registro del formulario completando los campos requeridos.'", () => {
        cy.get("#firstName").should("be.visible")
            .type("Mauro")
        cy.get("#lastName").should("be.visible")
            .type("Icardi")
        cy.xpath("//INPUT[@id='userEmail']").type("mauroywanda@gmail.com")
        cy.get("#gender-radio-1").click({ force: true })
            
        cy.get("#userNumber").should("be.visible")
            .type("54911697788")
            cy.get("#dateOfBirthInput").click()
        cy.get(".react-datepicker__month-select").select("April")
        
        cy.get(".react-datepicker__year-select").select("1997")
        
            cy.xpath("//DIV[@class='react-datepicker__day react-datepicker__day--028'][text()='28']").click({ force: true })
            
        cy.get("#subjectsInput").should("be.visible").type("English").type('{enter}')
        
            cy.get("#hobbies-checkbox-1").click({ force: true })
        
        const ruta = 'images/image.jpg'
        cy.get('[type="file"]').attachFile(ruta)
        cy.get("#currentAddress").type("Erogan 1334 , Turkey.")
        cy.get(".css-1hwfws3").eq("1").type("Haryana{enter}")
        cy.get(".css-1hwfws3").eq("2").type("Karnal{enter}")
        cy.get("#submit").click({ force: true })       
    })
    it("|GX-1523| TC 2: Validar registro del formulario con todos los campos nulos.'", () => {
        cy.get("#firstName").should("have.css", "border-color", "rgb(206, 212, 218)")
        cy.get("#lastName").should("have.css", "border-color", "rgb(206, 212, 218)")
        cy.get("[for='gender-radio-1']").should("have.css", "border-color", "rgb(33, 37, 41)")
            
        cy.get("#userNumber").should("have.css", "border-color", "rgb(206, 212, 218)")
        
        cy.get("#submit").click({ force: true })

    })
    it("|GX-1523| TC 3: Validar registro del formulario con los campos obligatorios.'", () => {
        cy.get("#firstName").should("be.visible")
            .type("Mauro")
        cy.get("#lastName").should("be.visible")
            .type("Icardi")
        cy.get("#submit").click({ force: true })
        cy.get("#gender-radio-1").click({ force: true })
            
        cy.get("#userNumber").should("be.visible")
            .type("54911697788")
    })
    it("|GX-1523| TC 4: Validar registro del formulario completando los campos requeridos de forma invalida.'", () => {
        cy.get("#firstName").should("be.visible")  //Aclarar en Jira
            .type("maurito123")
        cy.get("#lastName").should("be.visible")
            .type("Ic@rdi")
        cy.xpath("//INPUT[@id='userEmail']").should("be.visible").type("mauro.x.wanda.com")
        cy.get("#gender-radio-1").click({ force: true })
            
        cy.get("#userNumber").should("be.visible").type("541212121")
            cy.get("#dateOfBirthInput").click()
        cy.get(".react-datepicker__month-select").select("April")
        
        cy.get(".react-datepicker__year-select").select("1997")
        
            cy.xpath("//DIV[@class='react-datepicker__day react-datepicker__day--028'][text()='28']").click({ force: true })
            
        cy.get("#subjectsInput").should("be.visible").type("English").type('{enter}')
        
            cy.get("#hobbies-checkbox-1").click({ force: true })
        
        const ruta = 'images/image.jpg'
        cy.get('[type="file"]').attachFile(ruta)
        cy.xpath("//TEXTAREA[@id='currentAddress']").type("Erogan 1334 , Turkey.")
        
        cy.get("#submit").click({ force: true })     
        cy.xpath("//INPUT[@id='userEmail']").should("have.css", "border-color", "rgb(220, 53, 69)")  
        cy.get("#userNumber").should("have.css", "border-color", "rgb(40, 167, 69)")
    })
    it("|GX-1523| TC 5: Validar registro del formulario completando el campo Email sin el punto del dominio.'", () => {
        cy.get("#firstName").should("be.visible")  //Aclarar en Jira
            .type("Mauro")
        cy.get("#lastName").should("be.visible")
            .type("Icardi")
        cy.xpath("//INPUT[@id='userEmail']").should("be.visible").type("mauro@wanda.com")
        cy.get("#gender-radio-1").click({ force: true })
            
        cy.get("#userNumber").should("be.visible")
            .type("5412121211")
        
        cy.get("#submit").click({ force: true })     
        cy.xpath("//INPUT[@id='userEmail']").should("have.css", "border-color", "rgb(40, 167, 69)")  
    })
    it("|GX-1523| TC 6: Validar registro del formulario completando el campo Email sin el dominio ('.com').'", () => {
        cy.get("#firstName").should("be.visible")  //Aclarar en Jira
            .type("Mauro")
        cy.get("#lastName").should("be.visible")
            .type("Icardi")
        cy.xpath("//INPUT[@id='userEmail']").should("be.visible").type("mauro@wanda")
        cy.get("#gender-radio-1").click({ force: true })
            
        cy.get("#userNumber").should("be.visible")
            .type("5412121211")
        
        cy.get("#submit").click({ force: true })
        cy.xpath("//INPUT[@id='userEmail']").should("have.css", "border-color", "rgb(220, 53, 69)")       
    })
    it("|GX-1523| TC 7: Validar registro del formulario completando el campo Mobile de forma invalida con carácter alfanumérico.'", () => {
        cy.get("#firstName").should("be.visible")  //Aclarar en Jira
            .type("Mauro")
        cy.get("#lastName").should("be.visible")
            .type("Icardi")
        cy.xpath("//INPUT[@id='userEmail']").type("mauro@wanda.com")
        cy.get("#gender-radio-1").click({ force: true })
            
        cy.get("#userNumber").should("be.visible")
            .type("54121212as")
        
        cy.get("#submit").click({ force: true })  
        cy.get("#userNumber").should("have.css", "border-color", "rgb(220, 53, 69)")     
    })
    it("|GX-1523| TC 8: Validar registro del formulario completando el campo Mobile de forma invalida con menos de 10 dígitos.'", () => {
        cy.get("#firstName").should("be.visible")  //Aclarar en Jira
            .type("Mauro")
        cy.get("#lastName").should("be.visible")
            .type("Icardi")
        cy.xpath("//INPUT[@id='userEmail']").type("mauro@wanda.com")
        cy.get("#gender-radio-1").click({ force: true })
            
        cy.get("#userNumber").should("be.visible")
            .type("5412121")
        
        cy.get("#submit").click({ force: true })  
        cy.get("#userNumber").should("have.css", "border-color", "rgb(40, 167, 69)")      
    })
})

// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', (err, runnable) => 
{
	// returning false here prevents Cypress from
	// failing the test
	return false
})
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log
Cypress.log = function (opts, ...other) 
{
	if (opts.displayName === 'xhr'|| opts.displayName === 'fetch' && opts.url.startsWith('https://')) 
	{
		return
	}
	return origLog(opts, ...other)
}
