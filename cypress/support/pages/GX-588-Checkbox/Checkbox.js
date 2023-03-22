export let confirm = [];
export let confirm2 = [];
let elements;
let Index;
let checked;

class Checkbox {
    elements = {
        toggle: () => cy.get('[aria-label="Toggle"]'),
        checkbox: () => cy.get('span[class="rct-checkbox"]'),
    }
    Toggle() {
        return this.elements.toggle()
    }
    selectingFolder(number) {
        this.elements.toggle().eq(number).click()
    }
    checkingFolder(number) {

        if (number === 1) {
            this.elements.checkbox().eq(number).click()
            cy.get('[class="rct-icon rct-icon-check"]').its('length').then(scope => {
                checked = scope
            
                cy.get('[class="rct-checkbox"] svg').then(items => {
                elements = items
                    const ArrayEl = elements.toArray()
                    cy.log(ArrayEl.length)
                for (let i = ArrayEl.length-1; i >= 0; i--) {
				
                    if (ArrayEl[ i ].getAttribute('class').includes('rct-icon-check')) {
                        cy.log('element found')
                        const el = ArrayEl[ i ]
                        Index = i
                        cy.log(i)
                        break;
                    }
                    }
                for (let i = number; i <= Index; i++) {
                    cy.get('[class="rct-title"]').eq(i).invoke('text').then(info => {
                        confirm.push(info.toLowerCase())
                    })
                }
                for (let i = 0; i <= checked - 1; i++) {
                    cy.get('[class="text-success"]').eq(i).invoke('text').then(check => {
                            confirm2.push(check)
                        })
                }
                
            })
            })
        }
        else if (number === 2) {
            this.elements.checkbox().eq(number).click()
            this.elements.toggle().eq(3).click()
            this.elements.toggle().eq(4).click()

            cy.get('[class="rct-icon rct-icon-check"]').its('length').then(scope => {
                checked = scope
            })

            cy.get('[class="rct-checkbox"] svg').then(items => {
                elements = items
                cy.log(elements)
                const ArrayEl = elements.toArray()
                for (let i = ArrayEl.length-1; i >= 0; i--) {
				
                    if (ArrayEl[ i ].getAttribute('class').includes('rct-icon-check')) {
                        cy.log('element found')
                        const el = ArrayEl[ i ]
                        Index = i
                        cy.log(i)
                        break;
                    }
                    }
                for (let i = number; i <= Index; i++) {
                    cy.get('[class="rct-title"]').eq(i).invoke('text').then(info => {
                        confirm.push(info.toLowerCase())
                    })
                }
                for (let i = 0; i <= checked - 1; i++) {
                    cy.get('[class="text-success"]').eq(i).invoke('text').then(check => {
                            confirm2.push(check)
                        })
                }
                
            })
        }
        if (number === 3) {
            this.elements.checkbox().eq(number).click()
            cy.get('[class="rct-icon rct-icon-check"]').its('length').then(scope => {
                checked = scope
            
                cy.get('[class="rct-checkbox"] svg').then(items => {
                    elements = items
                    const ArrayEl = elements.toArray()
                    cy.log(ArrayEl)
                for (let i = ArrayEl.length-1; i >= 0; i--) {
				
                    if (ArrayEl[ i ].getAttribute('class').includes('rct-icon-check')) {
                        cy.log('element found')
                        const el = ArrayEl[ i ]
                        Index = i
                        cy.log(i)
                        break;
                    }
                    }
                cy.log(Index)
                for (let i = number; i <= Index; i++) {
                    cy.get('[class="rct-title"]').eq(i).invoke('text').then(info => {
                        confirm.push(info.toLowerCase())
                    })
                }
                for (let i = 0; i <= checked - 1; i++) {
                    cy.get('[class="text-success"]').eq(i).invoke('text').then(check => {
                            confirm2.push(check)
                        })
                }
                
            })
            })
        }
    }
}    


export const checkbox= new Checkbox()