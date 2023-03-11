//import { checkbox } from '@pages/Checkbox.Page.js';
describe('✅ToolsQA | Elements | Check Box', () => {

	beforeEach('login', () => {
		cy.visit('https://demoqa.com/checkbox');
	});
	it.only('1177 | TC1: Validar hacer Checked y Expand en el Directorio principal', () => {
		// checkbox.checkFolder()
		// checkbox.clickSelectedAll()

		// //cy.get('button[title="Toggle"]').click()
		// cy.get('span[class*="rct-title"]').each(($el) => {
		// 	let results = []
		// 	let text = $el.text()
		// 	text = text.replace(/.doc| /gi, '')
		// 	results.push(text)
		// 	results.forEach((text) => {
		// 		cy.get('.text-success').contains(text, { matchCase: false }).should('exist')
		// 	})
		// })

		cy.get('input[type="checkbox"]').check({ force: true }).should('be.checked');
        
		cy.get('button[aria-label="Toggle"]').as('first');
		cy.get('button[aria-label="Toggle"]').click({ force: true });
		cy.get('button[type="button"]').each(($el) => {
			// if (!@first) {
			// 	cy.wrap($el).click()
			// }
			// if(!$el.parent('ol>li[class$="rct-node-expanded"]')){
			//     cy.wrap($el).click()
			// }
		});

		// cy.get('label[for*="tree-node"]').each(($el) => {
		// 	cy.wrap($el).within((item) => {
		// 		let $item = $el.find('svg[class*="rct-icon"]')
		// 		if ($item.hasClass('rct-icon-check')) {
		// 			cy.get('span[class*="rct-title"]')
		// 				.invoke('text')
		// 				.then((texto) => {
		// 					cy.log(texto)
		// 				})
		// 		}
		// 	})
		// })

		// cy.get('label[for*="tree-node"]').eq(0).within((item)=>{
		//     cy.wrap($button).click()
		//     let texto = cy.get('span[class*="rct-title"]').text()
		//         cy.log(texto)
		//     })
		// })

		// .each(($el, index, $list) => {
		// 	if ($el.text() === 'Red') {
		// 		$el.on('click')
		// 	}
		// })
	});

	it('1177 | TC2: Validar hacer Checked y Expand en el Subdirectorio.', () => {
		let results = [];
		cy.get('button[title="Toggle"]').click();
		cy.get('#tree-node-desktop').check({ force: true });
		cy.get('button[title="Toggle"]').eq(1).click();

		cy.get('[class*="rct-node-expanded"]')
			.eq(1)
			.within(() => {
				cy.get('span[class*="rct-title"]').each(($el) => {
					let text = $el.text();
					text = text.replace(/.doc| /gi, '');
					results.push(text);
					cy.log(results);
				});
			})
			.then(() => {
				results.forEach((text) => {
					cy.get('.text-success').contains(text, { matchCase: false }).should('exist');
				});
			});

		// let results = []
		// let text;
		// cy.get('button[title="Toggle"]').click()
		// cy.get('li[class*="rct-node"]')
		// 	.eq(1)
		// 	.within((item) => {
		// 		cy.get('input').check({ force: true })
		// 		cy.get('button[title="Toggle"]').click()
		// 		cy.get('span[class*="rct-title"]').each(($el) => {
		// 			text = $el.text()
		// 			text = text.replace(/.doc| /gi, '')
		// 			results.push(text)
		//             //cy.log(results)
		// 		})
		// 	})
		// cy.log(results)
		// results.forEach((text) => {
		// cy.get('.text-success').contains(text, { matchCase: false }).should('exist')
		// })
	});
});

import { RemoveLogs } from '@helper/RemoveLogs';
RemoveLogs();
