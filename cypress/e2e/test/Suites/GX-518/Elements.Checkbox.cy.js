describe("US GX-518 | TS ✅ToolsQA | Elements | Check Box", () => {
    beforeEach("visit ToolsQA page", () => {
        cy.fixture("DOM/toolsqa/Elements/CheckBox.Page").then((the) => {
            cy.visit(the.urlCheckbox)
            cy.url().should("include", "checkbox")
            cy.wait(2000)
        })
    })
    it.skip("TC1 | User expands all the options with the “+” button", () => {
        cy.fixture("DOM/toolsqa/Elements/CheckBox.Page").then((the) => {
            cy.get(the.expandAll).click()
            cy.get(the.label.checkbox).each((element) => {
                expect(element).to.be.visible
            })
        })
    })
    it.skip("TC2 | User expands a section of options with an arrow button (right)", () => {
        cy.fixture("DOM/toolsqa/Elements/CheckBox.Page").then((the) => {
            cy.get(the.toggle).click()
            cy.contains(the.option,"Documents").within(() => {
                cy.get(the.toggle).click()
                cy.get(the.label.checkbox).should("have.length.greaterThan",1)
            })
        })
    })
    it("TC3 | User collapse all the possibilities with the “-” button", () => {
        cy.fixture("DOM/toolsqa/Elements/CheckBox.Page").then((the) => {
            cy.get(the.expandAll).click()
            cy.get(the.label.boxName).should("have.length.greaterThan",1)
            cy.get(the.collapseAll).click()
            //if the element dont have attr lenght then is a single element not an array
            cy.get(the.label.boxName).should("not.have.attr","lenght")
        })
    })
    it("TC4 | User collapse a selection of options with an arrow button (down)", () => {
        cy.fixture("DOM/toolsqa/Elements/CheckBox.Page").then((the) => {
            cy.get(the.expandAll).click()
            cy.contains(the.option,"WorkSpace").within(() => {
                cy.get(the.toggle).click()
                cy.get(the.label.checkbox).should("have.length","1")
            })
        })
    })
    it("TC5 | User select all the options with the Home checkbox ", () => {
        cy.fixture("DOM/toolsqa/Elements/CheckBox.Page").then((the) => {
            cy.get(the.label.checkbox).click()
            cy.get(the.expandAll).click()
            cy.get(the.label.boxName).each(($label) => {
                //Se obtiene el texto
                let txt = $label.text()
                //reemplazamos caracteres ".doc" y espacios con nada (basicamente los borramos)
                txt = txt.replace(/.doc| /gi, "");
                //Validamos que exista desabilitando el case sensitive
                cy.get(the.outputMsg).contains(txt, { matchCase: false }).should("exist")
            })
        })
    })
    it("TC6 | User select a selection of options from a section checkbox ", () => {
        cy.fixture("DOM/toolsqa/Elements/CheckBox.Page").then((the) => {
            let texts = []
            cy.get(the.expandAll).click()
            cy.contains(the.checkboxParent.section,"WorkSpace").within(() => {
                cy.get(the.label.checkbox).eq(0).click()
                cy.get(the.label.boxName).each(($label) => {
                    //Se obtiene el texto
                    let txt = ($label.text())
                    //reemplazamos caracteres ".doc" y espacios con nada (basicamente los borramos)
                    txt = txt.replace(/.doc| /gi, "");
                    texts.push(txt)
                })
            })
            texts.forEach(txt => {
                //Validamos que exista desabilitando el case sensitive
                cy.get(the.outputMsg).contains(txt, { matchCase: false }).should("exist")
            });
        })
    })
    it("TC7 | User selects one checkbox from a section ", ()=>{
        cy.fixture("DOM/toolsqa/Elements/CheckBox.Page").then((the)=>{
            cy.get(the.expandAll).click()
            cy.clickCheckbox("Word File.doc")
        })
    })
    it("TC8 | User selects more than one checkbox from different sections",()=>{
        cy.fixture("DOM/toolsqa/Elements/CheckBox.Page").then((the) => {
            cy.get(the.expandAll).click()
            cy.clickCheckbox("Classified")
            cy.clickCheckbox("Notes")
        })
    })
    it("TC9 | User selects more than one checkbox from the same section",function(){
        cy.fixture("DOM/toolsqa/Elements/CheckBox.Page").then((the) => {
            cy.get(the.expandAll).click()
            cy.clickCheckbox("Commands")
            cy.clickCheckbox("Notes")
            cy.contains(the.checkboxParent.section, "Commands").within(() => {
                cy.get(the.checkboxParent.desktop).invoke("text").as("labelText")
            }).then(()=> {
                cy.log(this.labelText);
                //Validamos que exista desabilitando el case sensitive
                cy.get(the.outputMsg).contains(this.labelText, { matchCase: false }).should("exist")
            })
        })
    })
})

//________________________________________________________________________
// Comando predeterminado para que no ocurran errores de excepciones:
Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false
})
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr'|| opts.displayName === 'fetch' && opts.url.startsWith('https://')) {
		return
	}
	return origLog(opts, ...other)
}