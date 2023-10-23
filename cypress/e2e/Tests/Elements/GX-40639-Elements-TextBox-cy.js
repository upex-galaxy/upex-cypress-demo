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
describe('ToolsQA | Elements | Text Box', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/text-box')
    })
    it('40639 | TC1: Validar completar el formulario con Datos Validos', () => {
        cy.fixture("fixtures/data/GX-40639").then(the => {
            cy.get(the.FullName.input).type(the.FullName.data.valid),
                cy.get(the.FullName.input).should('have.value', the.FullName.data.valid),//verificación campo 'Full name'
                cy.get(the.email.input).type(the.email.data.valid),
                cy.get(the.email.input).should('have.value', the.email.data.valid),//Verificación campo 'email'
                cy.get(the.CurrentAddress.input).type(the.CurrentAddress.data.valid),
                cy.get(the.CurrentAddress.input).should('have.value', the.CurrentAddress.data.valid),//verificación campo 'Current Address'
                cy.get(the.PermanentAddress.input).type(the.PermanentAddress.data.valid),
                cy.get(the.PermanentAddress.input).should('have.value', the.PermanentAddress.data.valid)//verificación campo 'Permanent Address'
        })
    }
    )

        

})