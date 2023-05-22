//TS Created by Wilson Medina
import { selectMenus } from '@pages/dom-16717-dropdown'

describe('GX-16717 | ToolsQA | Widgets  | Dropdown Select-Menu', function () {

    beforeEach('User is on select-menu page', () => {
        
        cy.SelectMenuPage()
        cy.fixture('data/fxt-16717-dropdown').then( fxt => { this.fxt = fxt })

    })

    it('16718 | TC1: Validate do click on dropdown Select Value and select the Group 2 - Option 2.', () => {
       
        selectMenus.clickSelectValue()
        selectMenus.clickGroup2Option2()

    })
    it('16718 | TC2: Validate do click on dropdown Select One and select Ms.', () => {
        
        selectMenus.clickSelectOne()
        selectMenus.clickMs()
        
    })
    it('116718 | TC3: Validate do click on dropdown Old Style Select Menu and select Black color.', () => {

        selectMenus.selectOldStyleSelectMenu(this.fxt.color)

    })
    it('16718 | TC4: Validate do click on dropdown Multiselect and select Green, Blue, Black and Red colors.', () => {

        selectMenus.clickMultiselectDropdown()
        selectMenus.clickAllColors()
        cy.contains(this.fxt.noOptions)

    })
    it('16718 | TC5: Validate selecy Audi in standard multiselect.', () => {

        selectMenus.selectStandardMultiSelect(this.fxt.car)

    })
    it('16718 | TC6: Validate do all TCs previous and their conditions.', () => {

        selectMenus.clickSelectValue()
        selectMenus.clickGroup2Option2()
        selectMenus.clickSelectOne()
        selectMenus.clickMs()
        selectMenus.selectOldStyleSelectMenu(this.fxt.color)
        selectMenus.clickMultiselectDropdown()
        selectMenus.clickAllColors()
        cy.contains(this.fxt.noOptions)
        selectMenus.selectStandardMultiSelect(this.fxt.car)

    })
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs()


