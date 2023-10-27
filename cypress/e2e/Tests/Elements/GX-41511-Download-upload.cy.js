import { download } from "../Widgets/GX-41511-Download.cy";

//describe('ToolsQA | Elements | Radio Buttons', () => {
//    beforeEach(() => {
//        cy.visit('https://demoqa.com/radio-button')
//    })
//    it('40541 | TC1:   validar Selección de Radio Button "Yes"', () => {
//        //click
//        cy.get('[class="custom-control-label"]').eq(0).click()
//        const Yesclickmsn = "Yes"
//        cy.get('[class=text-success]').should('have.text', Yesclickmsn)
//    })

describe('ToolsQA | Elements | Upload and Download', () => {
    beforeEach(() => {
        cy.visit('/upload-download')
        cy.url().should('contain', 'upload-download')
    });
    it('41511 | TC1: Validar Download Button', () => {
        cy.get('#downloadButton').click()
    })
})