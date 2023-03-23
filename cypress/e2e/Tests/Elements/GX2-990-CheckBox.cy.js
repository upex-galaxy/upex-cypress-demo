/* eslint-disable @typescript-eslint/no-empty-function */
//import { checkBox } from '@pages/checkBox.Page.js';

describe('✅ToolsQA | Elements | Check Box', () => {
	beforeEach('Precondition: Be located in Check Box', () => {
		//Scope(Only Page):
		cy.visit('https://demoqa.com/checkbox');
		cy.url().should('contain', 'checkbox');
		cy.viewport(1080, 980);
	});

	it('991 | TC1: Validar hacer Checked y Expand en el Directorio Principal.', () => {
		cy.get('input[type="checkbox"]').check({ force: true }).should('be.checked');

		cy.get('button[aria-label="Toggle"]').click({ force: true });
		cy.get('button>svg[class="rct-icon rct-icon-expand-open"]');
		cy.get('button[class="rct-option rct-option-expand-all"]').click({ force: true });
		/*cy.get('button>svg[class="rct-icon rct-icon-expand-close"]').each(($el) => {
			cy.wrap($el).click();
		});
		cy.get('button>svg[class="rct-icon rct-icon-expand-close"]').each(($el) => {
			cy.wrap($el).click();
		});*/
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
	it('991 | TC2: Validar hacer Checked y Expand en el Subdirectorio.', () => {
		cy.get('button[aria-label="Toggle"]').click({ force: true });

		cy.get('input[type="checkbox"]').then(($els) => {
			let $sliced = $els.slice(-3);
			cy.log($sliced);
			let $randomsliced = $sliced[Math.floor(Math.random() * $sliced.length)];
			cy.log($randomsliced);
			cy.wrap($randomsliced).check({ force: true });
		});
		cy.get('button[class="rct-option rct-option-expand-all"]').click({ force: true });
		cy.get('#result>span').eq(0).should('contain.text', 'You have selected :');
		cy.get('#result>span').each(($el, index) => {
			if (index > 0) {
				let text = $el.text();
				cy.wrap($el).should('be.visible').and('contain.text', text).and('have.class', 'text-success');
			}
		});
	});

	it('991 | TC3: Validar hacer Checked y Expand en el menú de Subdirectorio.', () => {
		cy.get('button[aria-label="Toggle"]').click({ force: true });
		//cy.get('button>svg[class="rct-icon rct-icon-expand-open"]')
		cy.get('button>svg[class="rct-icon rct-icon-expand-close"]').each(($el) => {
			cy.wrap($el).click({ multiple: true });
		});
		//Expanded los restante:
		cy.get('button[class="rct-option rct-option-expand-all"]').click({ force: true });
		cy.get('input[type="checkbox"]').then(($els) => {
			let $sliced = $els.slice(5, 14);
			let $randomsEls = $sliced[Math.floor(Math.random() * $sliced.length)];
			cy.wrap($randomsEls).check({ force: true });
			cy.log($randomsEls);
		});
		cy.get('#result>span').eq(0).should('contain.text', 'You have selected :');
		cy.get('#result>span').each(($el, index) => {
			if (index > 0) {
				let text = $el.text();
				cy.wrap($el).should('be.visible').and('contain.text', text).and('have.class', 'text-success');
			}
		});
	});

	it('991 | TC4: Validar hacer Checked en un folder.', () => {
		cy.get('button[class="rct-option rct-option-expand-all"]').click({ force: true });
		cy.get('input[type="checkbox"]').then(($els) => {
			let $randomsEls = $els[Math.floor(Math.random() * $els.length)];
			cy.log($randomsEls);
			cy.wrap($randomsEls).check({ force: true });
		});
		//cy.get('#result>span').eq(0).should('contain.text', 'You have selected :');
		cy.get('#result>span').first().should('contain.text', 'You have selected :');
		cy.get('#result>span').each(($el, index) => {
			if (index > 0) {
				let text = $el.text();
				cy.wrap($el).should('be.visible').and('contain.text', text).and('have.class', 'text-success');
			}
		});
	});
	it('991 | TC5: Validar hacer Checked en mas de un archivo.', () => {
		cy.get('button[class="rct-option rct-option-expand-all"]').click({ force: true });
		cy.get('input[type="checkbox"]').then(($els) => {
			let $sliced = $els.slice(1);

			for (var i = 0; i < 2; i++) {
				let $randomsEls = $sliced[Math.floor(Math.random() * $sliced.length)];
				cy.wrap($randomsEls).check({ force: true });
			}
		});
		cy.get('#result>span').eq(0).should('contain.text', 'You have selected :');
		cy.get('#result>span').each(($el, index) => {
			if (index > 0) {
				let text = $el.text();
				cy.wrap($el).should('be.visible').and('contain.text', text).and('have.class', 'text-success');
			}
		});
	});
	it('991 | TC6: Validar Expand y Collapse All desde Toggle.', () => {
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
/*import { RemoveLogs } from '@helper/RemoveLogs';
RemoveLogs();*/
Cypress.on('uncaught:exception', () => {
	return false;
});
// Comando predeterminado para que no aparezcan los Fetch en el log del Test Runner:
const origLog = Cypress.log;
Cypress.log = function (opts, ...other) {
	if (opts.displayName === 'xhr' || (opts.displayName === 'fetch' && opts.url.startsWith('https://'))) {
		return;
	}
	return origLog(opts, ...other);
};
