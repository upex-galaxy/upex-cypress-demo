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
        cy.visit('/text-box')
        cy.url().should('contain', 'text-box')
    })
    it('40639 | TC1: Validar completar el formulario con Datos Validos', () => {
        cy.fixture("data/GX-40639-TextBox").then(data => {
            cy.get(data.FullName.input).type(data.FullName.data.valid),
                cy.get(data.FullName.input).should('have.value', data.FullName.data.valid),//verificación campo 'Full name'
                cy.get(data.email.input).type(data.email.data.valid),
                cy.get(data.email.input).should('have.value', data.email.data.valid),//Verificación campo 'email'
                cy.get(data.CurrentAddress.input).type(data.CurrentAddress.data.valid),
                cy.get(data.CurrentAddress.input).should('have.value', data.CurrentAddress.data.valid),//verificación campo 'Current Address'
                cy.get(data.PermanentAddress.input).type(data.PermanentAddress.data.valid),
                cy.get(data.PermanentAddress.input).should('have.value', data.PermanentAddress.data.valid)//verificación campo 'Permanent Address'
        })
    }
    )

        

})