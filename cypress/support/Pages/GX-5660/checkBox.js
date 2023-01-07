class toggle{
    collapse = {
        homeToggle:()=> cy.get('li button[title=Toggle]').eq(0),
            desktopToggle:()=> cy.get('li button[title=Toggle]').eq(1),
            documentsToggle:()=> cy.get('li button[title=Toggle]').eq(2),
                workspaceToggle:()=> cy.get('li button[title=Toggle]').eq(3),
                officeToggle:()=> cy.get('li button[title=Toggle]').eq(4),
            downloadToggle:()=> cy.get('li button[title=Toggle]').eq(5),
        assertToggle:()=> cy.get('span [class="rct-title"]')
    }
    clickToggle(){
    this.collapse.homeToggle().click()
    this.collapse.desktopToggle().click()
    this.collapse.documentsToggle().click()
    this.collapse.workspaceToggle().click()
    this.collapse.officeToggle().click()
    this.collapse.downloadToggle().click()
    }
    clickToggle2(){
    this.collapse.downloadToggle().click()
    this.collapse.officeToggle().click()
    this.collapse.workspaceToggle().click()
    this.collapse.documentsToggle().click()
    this.collapse.desktopToggle().click()
    this.collapse.homeToggle().click()
    }
}
class checkBox{
    CB = {
        homeCB:()=> cy.get('span [class="rct-checkbox"]').eq(0),
            desktopCB:()=> cy.get('span [class="rct-checkbox"]').eq(1),
                notesCB:()=> cy.get('span [class="rct-checkbox"]').eq(2),
                commandsCB:()=> cy.get('span [class="rct-checkbox"]').eq(3),
            documentsCB:()=> cy.get('span [class="rct-checkbox"]').eq(4),
                workspaceCB:()=> cy.get('span [class="rct-checkbox"]').eq(5),
                    reactCB:()=> cy.get('span [class="rct-checkbox"]').eq(6),
                    angularCB:()=> cy.get('span [class="rct-checkbox"]').eq(7),
                    veuCB:()=> cy.get('span [class="rct-checkbox"]').eq(8),
                officeCB:()=> cy.get('span [class="rct-checkbox"]').eq(9),
                    publicCB:()=> cy.get('span [class="rct-checkbox"]').eq(10),
                    privateCB:()=> cy.get('span [class="rct-checkbox"]').eq(11),
                    classfliedCB:()=> cy.get('span [class="rct-checkbox"]').eq(12),
                    generalCB:()=> cy.get('span [class="rct-checkbox"]').eq(13),
            downloadCB:()=> cy.get('span [class="rct-checkbox"]').eq(14),
                wordFileCB:()=> cy.get('span [class="rct-checkbox"]').eq(15),
                excelFileCB:()=> cy.get('span [class="rct-checkbox"]').eq(16),
        assertCB:()=> cy.get('#result [class="text-success"]'),
        randomCheckBox:()=> cy.get('span [class="rct-checkbox"]')
    }
    clickrandomCheckBox(x){
        this.CB.randomCheckBox().eq(x).click()
        this.CB.randomCheckBox().eq(x).then(($nameCheckBox)=>{
            const nameCheckBox = $nameCheckBox.siblings().text()
            cy.log(nameCheckBox)
            this.CB.assertCB().contains(nameCheckBox,{ matchCase: false })
        })
    }
    clickCheckbox(){
        this.CB.officeCB().click()
    }
}

export const Toggle = new toggle()
export const CheckBox = new checkBox()