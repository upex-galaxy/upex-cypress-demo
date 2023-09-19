import { removeLogs } from "@helper/RemoveLogs";
removeLogs();
import { menuDropdown } from '@pages/Elements/GX-34548-widgets-dropdown.page';

describe("GX-34548-✅-tools-qa-widgets-dropdown-select-menu", () => {
    beforeEach("Usuario debe estar posicionado en el select-menu", () => {
        cy.visit('/select-menu');
        cy.url().should('contain', 'menu');
    })
    it("34549 | TC1: Validar seleccionar en el Dropdown de select Value una opción", () => {
        menuDropdown.get.selectValue().should('contain.text', 'Select Value').and('be.visible')
       
        
    })
    it("34549 | TC2: Validar seleccionar una opción en el Select One", ()=> {
        menuDropdown.get.selectOne().should('contain.text', 'Select One').and('be.visible')

    })
})