import { removeLogs } from "@helper/RemoveLogs";
removeLogs();
import { menuDropdown } from '@pages/Elements/GX-34548-widgets-dropdown.page';

describe("GX-34548-✅-tools-qa-widgets-dropdown-select-menu", () =>{
    let data;
    beforeEach("Usuario debe estar posicionado en el select-menu", () => {
        cy.visit('/select-menu');
        cy.url().should('contain', 'menu');
        cy.fixture("data/GX-34548-widgets-dropdown").then(fixtureData => {
            data = fixtureData
       })
    })
    it("34549 | TC1: Validar seleccionar en el Dropdown de select Value una opción", () => {
        menuDropdown.get.selectValue().should('contain.text', 'Select Value').and('be.visible')
        const groupValue = 'selectValue';
        const options = data[groupValue]
        const randomIndex = Math.floor(Math.random() * options.length);
        const optionRandom = options[ randomIndex ]
        menuDropdown.itemSelectOption(optionRandom)
        
    })
    it("34549 | TC2: Validar seleccionar una opción en el Select One", ()=> {
        menuDropdown.get.selectOne().should('contain.text', 'Select One').and('be.visible')
        const groupValue = 'selectOne';
        const options = data[groupValue]
        const randomIndex = Math.floor(Math.random() * options.length);
        const optionRandom = options[ randomIndex ]
        menuDropdown.itemSelectOption(optionRandom)

    })
     it.only("34549| TC3: Validar seleccionar en el Dropdown OLd una opción ", ()=> {
        menuDropdown.get.oldStyle().should('contain.text', 'Old Style Select Menu').and('be.visible')
         menuDropdown.itemOldStyle();
         menuDropdown.get.oldSelectMenu().then(item => {
             expect(item.text()).to.contain(Cypress.env('selectColor'))
         })


    })
})
