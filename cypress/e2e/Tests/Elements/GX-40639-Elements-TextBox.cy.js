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
            cy.get(data.FullNameInput).type(data.FullNameValid),
                cy.get(data.FullNameInput).should('have.value', data.FullNameValid),//verificación campo 'Full name'
                cy.get(data.emailInput).type(data.emailValid),
                cy.get(data.emailInput).should('have.value', data.emailValid),//Verificación campo 'email'
                cy.get(data.CurrentAddress.input).type(data.CurrentAddress.data.valid),
                cy.get(data.CurrentAddress.input).should('have.value', data.CurrentAddress.data.valid),//verificación campo 'Current Address'
                cy.get(data.PermanentAddress.input).type(data.PermanentAddress.data.valid),
                cy.get(data.PermanentAddress.input).should('have.value', data.PermanentAddress.data.valid)//verificación campo 'Permanent Address'
        });
    });
    it('40639 | TC2: Validar completar el formulario con Email vacío', () => {
        cy.fixture("data/GX-40639-TextBox").then(data => {
            cy.get(data.FullNameInput).type(data.FullNameValid),
                cy.get(data.FullNameInput).should('have.value', data.FullNameValid),//Verificación campo 'Full Name'
                cy.get(data.emailInput).type(data.emailInvalid.invalidMail),
                cy.get(data.emailInput).should('have.value', data.emailInvalid.invalidMail),//Verificación campo 'email' Vacío
                cy.get(data.CurrentAddress.input).type(data.CurrentAddress.data.valid),
                cy.get(data.CurrentAddress.input).should('have.value', data.CurrentAddress.data.valid),//Verificación campo 'Current Address'
                cy.get(data.PermanentAddress.input).type(data.PermanentAddress.data.valid),
                cy.get(data.PermanentAddress.input).should('have.value', data.PermanentAddress.data.valid)//Verificación campo 'PErmanent Address'
        })
    });
    it('40639 | TC3: Validar completar el formulario con Email sin @', () => {
        cy.fixture("data/GX-40639-TextBox").then(data => {
            cy.get(data.FullNameInput).type(data.FullNameValid),
                cy.get(data.FullNameInput).should('have.value', data.FullNameValid),//Verificación campo 'Full Name'
                cy.get(data.emailInput).type(data.emailInvalid.emailWithOutAt),
                cy.get(data.emailInput).should('have.value', data.emailInvalid.emailWithOutAt),//Verificación campo 'email' sin @
                cy.get(data.CurrentAddress.input).type(data.CurrentAddress.data.valid),
                cy.get(data.CurrentAddress.input).should(data.CurrentAddress.data.valid),//Verificación campo 'Current Address'
                cy.get(data.PermanentAddress.input).type(data.PermanentAddress.data.valid),
                cy.get(data.PermanentAddress.input).should(data.PermanentAddress.data.valid)//Verificación campo 'Permanent Address'
        })
    });
    it('40639 | TC4: Validar Completar el formulario com Email sin Domain', () => {
        cy.fixture("data/GX-40639-TextBox").then(data => {
            cy.get(data.FullNameInput).type(data.FullNameValid),
                cy.get(data.FullNameInput).should('have.value', data.FullNameValid),//Validar campo 'Full Name'
                cy.get(data.emailInput).type(data.emailInvalid.emailWithOutDomain),
                cy.get(data.emailInput).should('have.value', data.emailInvalid.emailWithOutDomain),//Validar Campo 'email'
                cy.get(data.CurrentAddress.input).type(data.CurrentAddress.data.valid),
                cy.get(data.CurrentAddress.input).should('have.value', data.CurrentAddress.data.valid),//Validar Campo 'Current Address'
                cy.get(data.PermanentAddress.input).type(data.PermanentAddress.data.valid),
                cy.get(data.PermanentAddress.input).should('have.value', data.PermanentAddress.data.valid)
        })
    });
    it('40639 | TC5: Validar Completar el formulario con Email sin. previo al domain', () => {
        cy.fixture("data/GX-40639-TextBox").then(data => {
            cy.get(data.FullNameInput).type(data.FullNameValid),
                cy.get(data.FullNameInput).should('have.value', data.FullNameValid),//Validar campo 'Full name'
                cy.get(data.emailInput).type(data.emailInvalid.emailWithOutDot),
                cy.get(data.emailInput).should('have.value', data.emailInvalid.emailWithOutDot),//Validar campo 'Email'
                cy.get(data.CurrentAddress.input).type(data.CurrentAddress.data.valid),
                cy.get(data.CurrentAddress.input).should('have.value', data.CurrentAddress.data.valid),//Validar campo 'Current Address'
                cy.get(data.PermanentAddress.input).type(data.PermanentAddress.data.valid),
                cy.get(data.PermanentAddress.input).should('have.value', data.PermanentAddress.data.valid)//Validar campo 'Permanent Address'
        })
    })
    
})