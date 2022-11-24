describe('ToolsQA | Interactions | Dragabble', () => {

    let the;
    let x;
    let y;

    before('Inicializar la data', () => {
        cy.fixture("DOM/Iterations/Draggable.Page").then((data) => {
            the = data;
        });
    });
    
    beforeEach('Precondición: El usuario debe estar situado en /draggable', () => {
        
        cy.getUrl('/dragabble', 'dragabble');
        
        // Función para buscar posiciones aleatorias.
        function posRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        x = posRandom(300, 300);
        y = posRandom(400, 400);
    });

    it('2349 | TC1: Validar que se muestren correctamente las cuatro pestañas', () => {        
        cy.get(the.tabSimple).contains('Simple').should('be.visible');        
        cy.get(the.tabAxisRestricted).contains('Axis Restricted').should('be.visible');
        cy.get(the.tabContainerRestricted).contains('Container Restricted').should('be.visible');        
        cy.get(the.tabCursorStyle).contains('Cursor Style').should('be.visible');
    });

    it('2349 | TC2: Validar "Drag and Drop" en la pestaña "Simple" que se mueva en cualquier dirección', () => {
        
        // Ir a la pestaña "Simple".
        cy.get(the.tabSimple).contains('Simple').click().should('be.visible');
        
        // Método drag and drop pasándole como parámetros elemento, posiciones x e y.
        cy.dragAndDrop(the.dragBox, x, y);    
    });

    it('2349 | TC3: Validar "Drag and Drop" en la pestaña "Axis Restricted" cuando solamente se puede mover de forma horizontal (eje x)', () => {

        // Ir a la pestaña "Axis Restricted".
        cy.get(the.tabAxisRestricted).contains('Axis Restricted').click().should('be.visible');

        // Método Drag and Drop pasándole como parámetros el elemento en x, posiciones x e y
        // No se tiene en cuenta el eje y.
        cy.dragAndDropX(the.restrictedX, x, y);
    });

    it('2349 | TC4: Validar "Drag and Drop" en la pestaña "Axis Restricted" cuando solamente se puede mover de forma vertical (eje y)', () => {

        // Ir a la pestaña "Axis Restricted".
        cy.get(the.tabAxisRestricted).contains('Axis Restricted').click().should('be.visible');

        // Método Drag and Drop pasándole como parámetros el elemento en x, posiciones x e y
        // No se tiene en cuenta el eje x.
        cy.dragAndDropY(the.restrictedY, x, y);    
    });

    it('2349 | TC5: Validar "Drag and Drop" en la pestaña "Axis Restricted" cuando se puedan mover ambos de forma horizontal y vertical', () => {

        // Ir a la pestaña "Axis Restricted".
        cy.get(the.tabAxisRestricted).contains('Axis Restricted').click().should('be.visible');

        // Llamo al método dragAndDrop pasándoles como parámetros el elemento, pos x, pos y 
        cy.dragAndDropX(the.restrictedX, x, y);

        // Llamo al método dragAndDrop pasándoles como parámetros el elemento, pos x, pos y 
        cy.dragAndDropY(the.restrictedY, x, y);   
    });

    it('2349 | TC6: Validar "Drag and Drop" en la pestaña "Container Restricted" cuando se pueda mover dentro del recuadro el texto "Im contained within the box"', () => {

        // Ir a la pestaña "Container Restricted".
        cy.get(the.tabContainerRestricted).contains('Container Restricted').click().should('be.visible');

        cy.get(the.containerWrapper).within(() => {  
            // Llamo al método dragAndDrop pasándoles como parámetros el elemento, pos x, pos y          
            cy.dragAndDrop('div', x, y);
        });
    });

    it('2349 | TC7: Validar "Drag and Drop" en la pestaña "Container Restricted" cuando se pueda mover dentro del recuadro el texto "Im contained within my parent"', () => {

        // Ir a la pestaña "Container Restricted".
        cy.get(the.tabContainerRestricted).contains('Container Restricted').click().should('be.visible');

        cy.get(the.draggable).eq(1).within(() => {                         
            // Llamo al método dragAndDrop pasándoles como parámetros el elemento, pos x, pos y
            cy.dragAndDrop('span', x, y);
        });
    });

    it('2349 | TC8: Validar "Drag and Drop" en la pestaña "Cursor Style" cuando se pueda mover el texto "I will always stick to the center"', () => {

        // Ir a la pestaña "Cursor Style".
        cy.get(the.tabCursorStyle).contains('Cursor Style').click().should('be.visible');

        // Llamo al método dragAndDrop pasándoles como parámetros el elemento, pos x, pos y
        cy.dragAndDrop(the.cursorCenter, x, y);
    });

    it('2349 | TC9: Validar "Drag and Drop" en la pestaña "Cursor Style" cuando se pueda mover el texto "My cursor is at top left"', () => {

        // Ir a la pestaña "Cursor Style".
        cy.get(the.tabCursorStyle).contains('Cursor Style').click().should('be.visible');

        // Llamo al método dragAndDrop pasándoles como parámetros el elemento, pos x, pos y
        cy.dragAndDrop(the.cursorTopLeft, x, y);
    });

    it('2349 | TC10: Validar "Drag and Drop" en la pestaña "Cursor Style" cuando se pueda mover el texto "My cursor is at bottom"', () => {

        // Ir a la pestaña "Cursor Style".
        cy.get(the.tabCursorStyle).contains('Cursor Style').click().should('be.visible');

        // Llamo al método dragAndDrop pasándoles como parámetros el elemento, pos x, pos y
        cy.dragAndDrop(the.cursorBottom, x, y);
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

    if (opts.displayName === 'xhr' || opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
        return
    }

    return origLog(opts, ...other);
};