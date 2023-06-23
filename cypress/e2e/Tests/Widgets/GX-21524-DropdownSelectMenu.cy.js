import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

describe('ToolsQA | Widgets | Dropdown - Select Menu', () => {
    beforeEach('', () => {
        cy.visit('https://demoqa.com/select-menu');
        cy.url().should('contain', 'text-box');
    })
})







GX - 21525 | TC1: Validar la funcionalidad del Dropdown “Select Value” al poder seleccionar correctamente una opción del mismo.

GX-21525 | TC2: Validar la funcionalidad del Dropdown “Select One” al poder seleccionar correctamente una opción del mismo.

GX-21525 | TC3: Validar la funcionalidad del Dropdown “Old Style Select Menu” al poder seleccionar correctamente una opción del mismo.

GX-21525 | TC4: Validar la funcionalidad del Dropdown “Multiselect drop down” al poder seleccionar correctamente más de una opción del mismo.

GX-21525 | TC5: Validar la funcionalidad del Dropdown “Standard Multi select” al poder seleccionar correctamente más de una opción del mismo.