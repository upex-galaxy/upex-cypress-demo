import { SelectablePage } from "../../../../support/Pages/GX-1589/SelectablePage"
import { SelectableListPage } from "../../../../support/Pages/GX-1589/SelectableListPage"
import { SelectableGridPage } from "../../../../support/Pages/GX-1589/SelectableGridPage"

describe('US GX-1589 | TS: ✅ToolsQA | Interactions | Selectable', () => {
    const selectablepage = new SelectablePage();
    const selectablelistpage = new SelectableListPage();
    const selectablegridpage = new SelectableGridPage();

    beforeEach('Precondición: Utilización de baseUrl', () => {
        selectablepage.visitPage();
    });

    it('GX-1589 | TC 1: Visualizar correctamente las pestañas “List” y “Grid” una a la vez', () => {
        selectablepage.inspectionpage();
    });

    it('GX-1589 | TC 2: Validar el comportamiento de selección de la lista de items', () => {
        selectablelistpage.listClicks();
    });

    it('GX-1589 | TC 3: Validar el comportamiento de selección de la cuadricula de items', () => {
        selectablegridpage.numbersClicks();
    });

    // Comando predeterminado para que no ocurran errores de excepciones proporcionado por Upex-Galaxy:

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

});