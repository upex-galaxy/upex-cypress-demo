// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop');
require('cypress-downloadfile/lib/downloadFileCommand');
require('cy-verify-downloads').addCustomCommand();

Cypress.Commands.add("getUrl", (url, contain) =>
{
    cy.visit(url);
    cy.url().should("contain", contain);
    cy.clearCookies();
    cy.clearLocalStorage();
});

Cypress.Commands.add("buttonClickDownload", (file) =>
{
    cy.fixture("DOM/toolsqa/Elements/UploadAndDownload.Page").then((the) =>
    {
        cy.get(the.downloadButton).click();
        cy.verifyDownload(file);
    });
});

Cypress.Commands.add("buttonClickChooseFile", (file) =>
{    
    cy.fixture("DOM/toolsqa/Elements/UploadAndDownload.Page").then((the) =>
    {
        const filepath = `images/${file}`;
        cy.get('#uploadFile').attachFile(filepath);
        cy.get('#uploadedFilePath').should('contain', file);
    });
})

Cypress.Commands.add("alerta", () => {//activacion de la alerta
    
    cy.fixture("DOM/toolsqa/alertas/Alertas.Page").then((the) => {
        cy.get(the.alertas.alert).eq(1)
            .click()//hacer click en alerta
        cy.on('window:alert', (text) => {
            expect(text).to.contains(the.message.alert)
        })
    })//window:alert. Cuando se activa, Cypress pasará el argumento text
    //que contiene el mensaje de alerta a la función de devolución de llamada,
    // contra la cual podemos escribir una afirmación.
})


Cypress.Commands.add("alerta1", () => { //activacion de la alerta

    cy.fixture("DOM/toolsqa/alertas/Alertas.Page").then((the) => {

        cy.get(the.alertas.alerta).click()
        cy.on('window:alert', (text) => {
            expect(text).to.contains(the.message.alerta)
        })
    })
})

Cypress.Commands.add("Confirm", () => {//diálogo de confirmación 
    
    cy.fixture("DOM/toolsqa/alertas/Alertas.Page").then((the) => {
        
        cy.get(the.alertas.confirm).eq(3).click()
        cy.on('window:confirm', (text) => {
            expect(text).to.contains(the.message.confirm.confirm1)//estamos probando para asegurarnos de que nuestro mensaje ( text) 
        })                                                          //incluya exactamente lo que queremos.
        cy.get(the.alertas.result).contains(the.message.confirm.confirm2)
    })//de manera predeterminada, Cypress presionará automáticamente "Ok" en nuestra confirmación. 
})

Cypress.Commands.add("ConfirmFalse", () => {//quisiéramos probar un caso de uso de alguien que hace clic en "Cancelar",
    // podemos devolver falso en nuestra devolución de llamada de evento
    
    cy.fixture("DOM/toolsqa/alertas/Alertas.Page").then((the) => {
        
        cy.get(the.alertas.confirm).eq(3).click()
        cy.on('window:confirm', (text) => {
            expect(text).to.equal(the.message.confirm.confirm1)
            return false
        })
    })
})

Cypress.Commands.add("aviso",()=>{//cypress no incluye un window:prompt

    cy.fixture("DOM/toolsqa/alertas/Alertas.page").then((the) => {//debemos acceder primero a la ventana usando cy.window(),
                              // donde luego "stub" ese evento de aviso, 
            //junto con el mensaje de que queremos que Cypress regrese al diálogo de aviso.
        
    
        cy.window().then(win => {
            cy.get("button").filter(the.alertas.aviso).click()
            cy.stub(win, 'prompt').returns(the.aviso1)
    
        })
        cy.get(the.alertas.aviso2).should("exist",the.aviso2)
    }) 
    
})
Cypress.Commands.add("avisoFalse", () => {//Para probar la ruta de cancelación, 
    //podemos usar el callsFakem y regresar null(tiene que ser null), 
    //que luego le dirá a Cypress que queremos cancelar ese mensaje cuando se active.

    cy.fixture("DOM/toolsqa/alertas/Alertas.page").then(()=>{
        cy.window().then(win => {
            cy.stub(win, 'prompt').callsFake(() => null)
        })
    })
})

Cypress.Commands.add("Login", () =>
{
    cy.fixture("DOM/sauce/login.Page").then((the) =>
        {
            cy.get(the.input.username).type(the.data.user)
            .should("have.value", the.data.user)
        
            cy.get(the.input.password).type(the.data.password)
            .should("have.value", the.data.password)
        
            cy.contains("Login").click()
        })
})
Cypress.Commands.add("CustomLogin", (user,password) =>
{
    cy.fixture("DOM/sauce/login.Page").then((the) =>
        {
            cy.get(the.input.username).type(user)
            .should("have.value", user)
        
            cy.get(the.input.password).type(password)
            .should("have.value", password)
        
            cy.contains("Login").click()
        })
})
Cypress.Commands.add("ErrorCard", () =>
{
    cy.fixture("DOM/sauce/login.Page").then((the) =>
        {
            cy.get(the.error)
                .should("be.visible")
                .and("contain.text",
                    "Epic sadface: Username and password do not match any user in this service")
        })
})
Cypress.Commands.add("DragDrop", (obj, X, Y) =>
{
    cy.get(obj)
        .move({ deltaX: X, deltaY: Y })
    cy.get(obj)
        .should("have.attr", "style",`position: relative; left: ${X}px; top: ${Y}px;`)
})
Cypress.Commands.add("DragDropX", (obj, X, Y) =>
{
    cy.get(obj)
        .move({ deltaX: X, deltaY: Y })
    cy.get(obj)
        .should("have.attr", "style",`position: relative; left: ${X}px; top: 0px;`)
})
Cypress.Commands.add("DragDropY", (obj, X, Y) =>
{
    cy.get(obj)
        .move({ deltaX: X, deltaY: Y })
    cy.get(obj)
        .should("have.attr", "style",`position: relative; left: 0px; top: ${Y}px;`)
})

Cypress.Commands.add("LoginAdmin", () => {
    cy.fixture("DOM/orange/Login.Page").then((the) =>
        {
            cy.get(the.input.username)
                .type(the.data.username)
                .should("have.value", the.data.username)
            
            cy.get(the.input.password)
                .type(the.data.password)
                .should("have.value", the.data.password)
            
            cy.get(the.button).click()

            cy.url().should("contain","viewEmployeeList")
        })
})
Cypress.Commands.add("LoginCustom", (username, password) => {
    cy.fixture("DOM/orange/Login.Page").then((the) =>
        {
            cy.get(the.input.username)
                .type(username)
                .should("have.value", username)
            
            cy.get(the.input.password)
                .type(password)
                .should("have.value", password)
            
            cy.get(the.button).click()

            cy.contains(the.Message.invalid).should("be.visible")
        })
})

Cypress.Commands.add("SignIn", (email, password) =>
{
    cy.session("signIn", () =>
        {
            cy.visit("https://opensource-demo.orangehrmlive.com/")
            cy.url().should("contain","login")
            cy.get("[name='username']")
                .type(email)
            cy.get("[name='password']")
                .type(password)
            cy.get("[type='submit']")
                .click()
            cy.url().should("contain","pim")
        })
})

/* Checkbox commands */
/* Al usar as debemor declarar el caso de puerba (it) o el command con function y no como arrow function ()=> */
Cypress.Commands.add("clickCheckbox", function (checkbox){
    cy.fixture("DOM/toolsqa/Elements/CheckBox.Page").then((the) => {
        cy.contains(the.option, checkbox).within(()=>{
            cy.get(the.label.checkbox).click()
            //Se obtiene el texto
            cy.get(the.label.boxName).then(($label) => {
                let title = $label.text();
                //reemplazamos caracteres ".doc" y espacios con nada (basicamente los borramos)
                title = title.replace(/.doc| /gi, "");
                cy.wrap(title).as('labelText');
            })
        }).then(()=> {
            cy.log(this.labelText);
            //Validamos que exista desabilitando el case sensitive
            cy.get(the.outputMsg).contains(this.labelText, { matchCase: false }).should("exist")
        })
    })
    
})

Cypress.Commands.add("SelectItemRandom", (topRange) => {
    cy.fixture("DOM/toolsqa/Iterations/Selectable.Page").then((the) => {
        // generate random number 
        let rand = Math.random();
        // multiply with difference 
        rand = Math.floor(rand * topRange );
        cy.get(the.item.unSelected).filter(':visible').eq(rand).click()
        cy.getItemSelected().should("exist")
    })
})
Cypress.Commands.add("getItemSelected", () => {
    cy.fixture("DOM/toolsqa/Iterations/Selectable.Page").then((the) => {
        cy.get(the.item.selected).filter(".list-group-item")
    })
})


// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })