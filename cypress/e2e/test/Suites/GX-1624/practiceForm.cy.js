describe('US GX-1624 | TS: ✅ToolsQA | Forms | Practice Form', () => {
    // RemoveFetch - Predeterminado para que no ocurran errores de excepciones proporcionado por Upex-Galaxy:
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

    let PracticeFormData;
    const filepath = "images/upexlogo"


    before('PracticeForm textbox', () => {

        cy.fixture('DOM/toolsqa/Elements/practiceFormPage.json').then(PFdata => { PracticeFormData = PFdata });
    })

    it('GX-1624 | TC1: Validar la verificación de error en los campos “First Name” y “Last Name” si no contiene datos.', () => {
    });
    it('GX-1624 | TC2: Validar la verificación de datos completos en los campos “First Name” y “Last Name”.', () => {
    });
    it('GX-1624 | TC3: Validar la verificación de error en el campo “Email” si este se encuentra vacío.', () => {
    });
    it('GX-1624 | TC4: Validar la verificación de error en el campo “Email” si este no contiene un “@”.', () => {
    });
    it('GX-1624 | TC5: Validar la verificación de error en el campo “Email” si este no contiene (mínimo) 1 carácter alfanumérico antes de “@”.', () => {
    });
    it('GX-1624 | TC6: Validar la verificación de error en el campo “Email” si este no contiene (mínimo) 1 carácter alfanumérico después de “@”.', () => {
    });
    it('GX-1624 | TC7: Validar la verificación de error en el campo “Email” si este no contiene "." después de 1 carácter alfanumérico después de “@”.', () => {
    });
    it('GX-1624 | TC8: Validar la verificación de error en el campo “Email” si este no contiene (mínimo) 2 caracteres alfanuméricos después de “.”.', () => {
    });
    it('GX-1624 | TC9: Validar la verificación de error en el campo “Mobile” si este no contiene 10 caracteres numéricos.', () => {
    });
    it('GX-1624 | TC10: Validar la verificación de error en el campo “Mobile” si este no contiene ningún dato.', () => {
    });
    it('GX-1624 | TC11: Validar el correcto funcionamiento del calendario desplegable en el campo “Date of Birth”, pudiendo seleccionar otra fecha.', () => {
    });
    it('GX-1624 | TC12: Validar la funcionalidad de selección del campo “Subjects”, este no puede estar vacío.', () => {
    });
    it('GX-1624 | TC13: Verificar los correctos nombres de los CheckBox de “Hobbies”, deben de contener los nombres: “Sports”, “Reading” y “Music”.', () => {
    });
    it('GX-1624 | TC14: Validar el correcto funcionamiento de la carga de imagen en el campo “Picture”.', () => {
    });
    it('GX-1624 | TC15: Validar la verificación de error si el campo “Current Address” se encuentra vacío.', () => {
    });
    it('GX-1624 | TC16: Validar el funcionamiento de la selección de datos en los campos “State and City”.', () => {
    });
    it.only('GX-1624 | TC17: Corroborar que la funcionalidad de la comprobación de datos de todo el formulario con la utilización de datos validos.', () => {
        cy.visit(`${PracticeFormData.practiceFormUrl}`);
        cy.get(PracticeFormData.fullName.firstName).type(PracticeFormData.fullName.fName);
        cy.get(PracticeFormData.fullName.lastName).type(PracticeFormData.fullName.lName);
        cy.get(PracticeFormData.email.input).type(PracticeFormData.email.valid);
        cy.contains(PracticeFormData.genderCheckBox.male).click();
        cy.contains(PracticeFormData.genderCheckBox.female).click();
        cy.contains(PracticeFormData.genderCheckBox.other).click();
        cy.get(PracticeFormData.mobile.input).type(PracticeFormData.mobile.valid);
        cy.get(PracticeFormData.dataofbirth.input).click();
        cy.get(PracticeFormData.dataofbirth.month).select(PracticeFormData.dataofbirth.valueMonth);
        cy.get(PracticeFormData.dataofbirth.year).select(PracticeFormData.dataofbirth.valueYear);
        cy.get(PracticeFormData.dataofbirth.day).click();
        cy.get(PracticeFormData.subjects.input).type(PracticeFormData.subjects.subject).should('be.visible');
        cy.get(PracticeFormData.subjects.select).click();
        cy.contains(PracticeFormData.hobbies.hobbie1).click();
        cy.contains(PracticeFormData.hobbies.hobbie2).click();
        cy.contains(PracticeFormData.hobbies.hobbie3).click();
        cy.get(PracticeFormData.Picture.input).attachFile(filepath);
        cy.get(PracticeFormData.Adress.input).type(PracticeFormData.Adress.valid);
        // cy.get(PracticeFormData.Adress.stateandcity).eq(1).invoke('attr', 'NCR');
        // cy.get(PracticeFormData.Adress.stateandcity).eq(2).select(2);


    });



});