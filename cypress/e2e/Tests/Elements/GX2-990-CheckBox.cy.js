/* eslint-disable @typescript-eslint/no-empty-function */
//import { checkBox } from '@pages/checkBox.Page.js';

describe('✅ToolsQA | Elements | Check Box', () => {
	beforeEach('Precondition: Be located in Check Box', () => {
		//Scope(Only Page):
		cy.visit('https://demoqa.com/checkbox');
		cy.url().should('contain', 'checkbox');
	});

	it('991 | TC1: Validar hacer Checked y Expand en el Directorio Principal.', () => {
		cy.get('input[type="checkbox"]').check({ force: true }).should('be.checked');

		cy.get('button[aria-label="Toggle"]').click({ force: true });
		cy.get('button>svg[class="rct-icon rct-icon-expand-open"]');
		cy.get('button>svg[class="rct-icon rct-icon-expand-close"]').each(($el) => {
			cy.wrap($el).click();
		});
		cy.get('button>svg[class="rct-icon rct-icon-expand-close"]').each(($el) => {
			cy.wrap($el).click();
		});

		/*Aquí me funciona pero solo entra hasta el 1 pero no hace click 
        cy.get('button[aria-label="Toggle"]').eq(0).click()
        cy.get('button[aria-label="Toggle"]').each(($el, index)=>{
            if (index > 0 ){
                cy.wrap($el).should('have.length', index).and('have.arr', 'type').click()
            }
        });*/

		/*cy.get('input[type="checkbox"]').check({force:true}).should('be.checked')
        cy.get('button[aria-label="Toggle"]').click({force:true})
        cy.get('button[aria-label="Toggle"]').eq(1).click({force:true})
        cy.get('button[aria-label="Toggle"]').eq(2).click({force:true})
        cy.get('button[aria-label="Toggle"]').eq(3).click({force:true})
        cy.get('button[aria-label="Toggle"]').eq(4).click({force:true})
        cy.get('button[aria-label="Toggle"]').eq(5).click({force:true})*/

		cy.get('.rct-title').each(($el) => {
			let text = $el.text();
			cy.wrap($el).should('have.text', text);
		});
		cy.get('#result>span').eq(0).should('contain.text', 'You have selected :');
		cy.get('#result>span').each(($el, index) => {
			if (index > 0) {
				let text = $el.text();
				cy.wrap($el).should('be.visible').and('contain.text', text).and('have.class', 'text-success');
			}
		});
	});
	it.skip('991 | TC2: Validar hacer Checked y Expand en el Subdirectorio.', () => {
		cy.get('button[aria-label="Toggle"]').click({ force: true });
		cy.get('input[type="checkbox"]').eq(1).check({ force: true });
		cy.get('button[aria-label="Toggle"]').eq(1).click({ force: true });

		cy.get('#tree-node-desktop').each(($el) => {
			cy.wrap($el).get('span.rct-icon');
		});
		cy.get('#result').find('.text-success').should('have.class', 'text-success');

		//Verificación para los Checkeados:
		cy.get('#result>span').eq(0).should('contain.text', 'You have selected :');
		cy.get('#result>span').each(($el, index) => {
			if (index > 0) {
				let text = $el.text();
				cy.wrap($el).should('be.visible').and('contain.text', text);
			}
		});
	});
	it.skip('991 | TC3: Validar hacer Checked y Expand en el menú de Subdirectorio.', () => {});
	it.skip('991 | TC4: Validar hacer Checked en un archivo.', () => {});
	it.skip('991 | TC5: Validar hacer Checked en mas de un archivo.', () => {});
	it.skip('991 | TC6: Validar Expand y Collapse All desde el button plus(+) y minus(-).', () => {
		//cy.get('button>svg[class="rct-icon rct-icon-expand-close"]')
		cy.get('button[class="rct-option rct-option-expand-all"]').click({ force: true });
		//cy.get('button>svg[class="rct-icon rct-icon-expand-open"]')
		cy.get('button[class="rct-option rct-option-collapse-all"]').click({ force: true });

		//Aquí hacer assertions cuando no estan en check, ya que solo estoy verificando los button(+, -)
	});
	it.skip('991 | TC7: Validar Expand y Collapse All desde Toggle.', () => {
		cy.get('button[aria-label="Toggle"]').click({ force: true });
		//cy.get('button>svg[class="rct-icon rct-icon-expand-open"]')
		cy.get('button>svg[class="rct-icon rct-icon-expand-close"]').each(($el) => {
			cy.wrap($el).click({ multiple: true });
		});
		//cy.get('button>svg[class="rct-icon rct-icon-expand-open"]')
		cy.get('button[aria-label="Toggle"]').eq(0).click({ force: true });

		//Aqui hacer assertions cuando no estan en check, ya que solo estoy verificando el Toggle
	});
});
import { RemoveLogs } from '@helper/RemoveLogs';
RemoveLogs();
