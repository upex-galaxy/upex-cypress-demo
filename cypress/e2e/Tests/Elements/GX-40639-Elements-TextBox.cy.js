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
    });
    let data;
    before(() => {
        cy.fixture('data/GX-40639-TextBox').then(fixtureData => {
            data = fixtureData;
        });
    });
    it('40639 | TC1: Validar completar el formulario con Datos Validos', () => {
            cy.get(data.FullNameInput).type(data.FullNameValid),
                cy.get(data.FullNameInput).should('have.value', data.FullNameValid),//verificación campo 'Full name'
                cy.get(data.emailInput).type(data.emailValid),
                cy.get(data.emailInput).should('have.value', data.emailValid),//Verificación campo 'email'
                cy.get(data.CurrentAddress.input).type(data.CurrentAddress.data.valid),
                cy.get(data.CurrentAddress.input).should('have.value', data.CurrentAddress.data.valid),//verificación campo 'Current Address'
                cy.get(data.PermanentAddress.input).type(data.PermanentAddress.data.valid),
                cy.get(data.PermanentAddress.input).should('have.value', data.PermanentAddress.data.valid),//verificación campo 'Permanent Address'
                cy.get('#submit').click(),
                cy.get('#output').should('have.class', 'mt-4 row')
    });
    it('40639 | TC2: Validar completar el formulario con Email vacío', () => {
            cy.get(data.FullNameInput).type(data.FullNameValid),
                cy.get(data.FullNameInput).should('have.value', data.FullNameValid),//Verificación campo 'Full Name'
                cy.get(data.emailInput).should('be.empty'),//Verificación campo 'email' Vacío
                cy.get(data.CurrentAddress.input).type(data.CurrentAddress.data.valid),
                cy.get(data.CurrentAddress.input).should('have.value', data.CurrentAddress.data.valid),//Verificación campo 'Current Address'
                cy.get(data.PermanentAddress.input).type(data.PermanentAddress.data.valid),
                cy.get(data.PermanentAddress.input).should('have.value', data.PermanentAddress.data.valid),//Verificación campo 'PErmanent Address'
                cy.get('#submit').click(),
                cy.get('#output').should('have.class', 'mt-4 row')
    });
    it('40639 | TC3: Validar completar el formulario con Email sin @', () => {
            cy.get(data.FullNameInput).type(data.FullNameValid),
                cy.get(data.FullNameInput).should('have.value', data.FullNameValid),//Verificación campo 'Full Name'
                cy.get(data.emailInput).type(data.emailInvalid.data.emailWithOutAt),
                cy.get(data.emailInput).should('have.value', data.emailInvalid.data.emailWithOutAt),//Verificación campo 'email' sin @
                cy.get(data.CurrentAddress.input).type(data.CurrentAddress.data.valid),
                cy.get(data.CurrentAddress.input).should('have.value', data.CurrentAddress.data.valid),//Verificación campo 'Current Address'
                cy.get(data.PermanentAddress.input).type(data.PermanentAddress.data.valid),
                cy.get(data.PermanentAddress.input).should('have.value', data.PermanentAddress.data.valid),//Verificación campo 'Permanent Address'
                cy.get('#submit').click(),
                cy.get('#output').should('have.class', 'mt-4 row')
    });
    it('40639 | TC4: Validar Completar el formulario com Email sin Domain', () => {
            cy.get(data.FullNameInput).type(data.FullNameValid),
                cy.get(data.FullNameInput).should('have.value', data.FullNameValid),//Validar campo 'Full Name'
                cy.get(data.emailInput).type(data.emailInvalid.data.emailWithoutDomain),
                cy.get(data.emailInput).should('have.value', data.emailInvalid.data.emailWithoutDomain),//Validar Campo 'email'
                cy.get(data.CurrentAddress.input).type(data.CurrentAddress.data.valid),
                cy.get(data.CurrentAddress.input).should('have.value', data.CurrentAddress.data.valid),//Validar Campo 'Current Address'
                cy.get(data.PermanentAddress.input).type(data.PermanentAddress.data.valid),
                cy.get(data.PermanentAddress.input).should('have.value', data.PermanentAddress.data.valid),
                cy.get('#submit').click(),
                cy.get('#output').should('have.class', 'mt-4 row')
    });
    it('40639 | TC5: Validar Completar el formulario con Email sin . previo al domain', () => {
            cy.get(data.FullNameInput).type(data.FullNameValid),
                cy.get(data.FullNameInput).should('have.value', data.FullNameValid),//Validar campo 'Full name'
                cy.get(data.emailInput).type(data.emailInvalid.data.emailWithOutDot),
                cy.get(data.emailInput).should('have.value', data.emailInvalid.data.emailWithOutDot),//Validar campo 'Email'
                cy.get(data.CurrentAddress.input).type(data.CurrentAddress.data.valid),
                cy.get(data.CurrentAddress.input).should('have.value', data.CurrentAddress.data.valid),//Validar campo 'Current Address'
                cy.get(data.PermanentAddress.input).type(data.PermanentAddress.data.valid),
                cy.get(data.PermanentAddress.input).should('have.value', data.PermanentAddress.data.valid),//Validar campo 'Permanent Address'
                cy.get('#submit').click(),
                cy.get('#output').should('have.class', 'mt-4 row')
    });
    it('40639 | TC6: Validar completar Formulario con Email incompleto', () => {
            cy.get(data.FullNameInput).type(data.FullNameValid),
                cy.get(data.FullNameInput).should('have.value', data.FullNameValid),//Validar campo 'Full Name'
                cy.get(data.emailInput).type(data.emailInvalid.data.emailIncomplete),
                cy.get(data.emailInput).should('have.value', data.emailInvalid.data.emailIncomplete),//Validar campo 'email'
                cy.get(data.CurrentAddress.input).type(data.CurrentAddress.data.valid),
                cy.get(data.CurrentAddress.input).should('have.value', data.CurrentAddress.data.valid),//Validar campo 'current address'
                cy.get(data.PermanentAddress.input).type(data.PermanentAddress.data.valid),
                cy.get(data.PermanentAddress.input).should('have.value', data.PermanentAddress.data.valid),//Validar Campo 'Permanent Adress'
                cy.get('#submit').click(),
                cy.get('#output').should('have.class', 'mt-4 row')
    });
    it('40639 | TC7: Validar completar el formulario con Current Adress vacío', () => {
            cy.get(data.FullNameInput).type(data.FullNameValid),
                cy.get(data.FullNameInput).should('have.value', data.FullNameValid),//verificación campo 'Full name'
                cy.get(data.emailInput).type(data.emailValid),
                cy.get(data.emailInput).should('have.value', data.emailValid),//Verificación campo 'email'
                cy.get(data.CurrentAddress.input).should('be.empty'),//verificación campo 'Current Address'
                cy.get(data.PermanentAddress.input).type(data.PermanentAddress.data.valid),
                cy.get(data.PermanentAddress.input).should('have.value', data.PermanentAddress.data.valid),
                cy.get('#submit').click(),
                cy.get('#output').should('have.class', 'mt-4 row')
    });
    it('40639 | TC8: Validar completar el formulario con Permanent Adress Vacío', () => {
            cy.get(data.FullNameInput).type(data.FullNameValid),
                cy.get(data.FullNameInput).should('have.value', data.FullNameValid),//Validar campo 'Full Name'
                cy.get(data.emailInput).type(data.emailValid),
                cy.get(data.emailInput).should('have.value', data.emailValid),//Validar campo 'Email'
                cy.get(data.CurrentAddress.input).type(data.CurrentAddress.data.valid),
                cy.get(data.CurrentAddress.input).should('have.value', data.CurrentAddress.data.valid),//Validar campo 'Current Address'
                cy.get(data.PermanentAddress.input).should('not.have.text'),//Validar Campo 'Permanent Address'
                cy.get('#submit').click(),
                cy.get('#output').should('have.class', 'mt-4 row')
    })
})