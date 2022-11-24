describe('ToolsQA | Alerts, Frames & Window | Alerts', () => {

    let the;

    before('Inicializar la data', () => {

        cy.fixture('DOM/toolsqa/Alert-Frame-Window/Alerts.page').then((data) => {
            the = data;
        });
    });
    
    beforeEach('Precondición: El usuario debe estar situado en /alerts', () => { 

        cy.getUrl('/alerts', 'alerts');
        cy.url().should('contain', 'alerts');
    });

    it('3424 | TC1: Validar poder mostrar el mensaje "You clicked a button" cuando se hace presiona en el botón "Click me"', () => { 

        cy.alertButton(the.clickMeButton.alertButton, // element
                       the.messages.messageAlertButton); // message
    });

    it('3424 | TC2: Validar poder mostrar el mensaje "This alert appeared after 5 seconds" cuando se hace presiona en el botón "Click me"', () => {        

        cy.alertButton(the.clickMeButton.timerAlertbutton, // element
                       the.messages.messageTimerAlertButton); // message       
    });

    it('3424 | TC3: Validar poder presionar el botón "Ok" del mensaje "Do you confirm action?" cuando se hace presiona en el botón "Click me"', () => {        

        cy.alertConfirmButtonOk(the.clickMeButton.confirmButton, // element1
                                the.clickMeButton.confirmResult, // element2
                                the.messages.messageConfirm, // message1
                                the.messages.messageOK); // message2
    });

    it('3424 | TC4: Validar poder presionar el botón "Cancel" del mensaje "Do you confirm action?" cuando se hace presiona en el botón "Click me"', () => {        

        cy.alertConfirmButtonCancel(the.clickMeButton.confirmButton, // element1
                                    the.clickMeButton.confirmResult, // element2
                                    the.messages.messageConfirm, // message1
                                    the.messages.messageCancel); // message2
    });

    it('3424 | TC5: Validar poder ingresar un texto y presionar el botón "Ok" del mensaje "Please enter your name" cuando se presiona en el botón "Click me"', () => {        

        cy.alertPromptButtonOk(the.clickMeButton.promptButton, // element1 
                               the.clickMeButton.promptResult, // element2
                               the.messages.inputEnterNamePrompt, // message1
                               the.messages.messageEntered); // message2
    });

    it('3424 | TC6: Validar poder ingresar un texto y presionar el botón "Cancel" del mensaje "Please enter your name" cuando se hace presiona en el botón "Click me"', () => {        

        cy.alertPromptButtonCancel(the.clickMeButton.promptButton); // element.
    });
});

//________________________________________________________________________
// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', (err, runnable) => {
	
    // returning false here prevents Cypress from
	// failing the test
	return false;
});

// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log;

Cypress.log = function (opts, ...other) {

    if (opts.displayName === 'xhr'|| opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
		return;
	}

    return origLog(opts, ...other);
};