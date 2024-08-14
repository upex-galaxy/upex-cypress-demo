import { selectMenuPage } from '@pages/GX3-4358-SelectMenu.Page';
describe ('GX3 - 4358 | ToolsQA | Widgets | Dropdown - Select Menu',( ) => {
	beforeEach('PRC: El Usuario deberia ubicarse en la pagina Demo QA /select-menu', () => {
		cy.visit('https://demoqa.com/select-menu');
		cy.url().should('contain','select-menu');
	});

	it('4359 |TC1: Validar que se pueda seleccionar un elemento del menu "Select Value"',() => {
		selectMenuPage.clickSelectValue();
 	  	selectMenuPage.selectRandomSelectValue().then(text => {
         	selectMenuPage.get.selectValueText().invoke('text').then(textoDowd => {
				selectMenuPage.clickSelectValue();
              	expect(text).to.equal(textoDowd);
          	});
		});
	});

	it('4359 |TC2: Validar que se pueda seleccionar un elemento del menu "Select One"',() => {
		selectMenuPage.clickSelectOne();
		selectMenuPage.selectRandomsSelectOne().then(textSelect2 => {
			selectMenuPage.get.selectOneOptionsText().invoke('text').then(textDow2 => {
				expect(textSelect2).to.equal(textDow2);
			});
		});
	});

	it('4359 |TC3: Validar que se pueda seleccionar un elemento del menu "Old Style Select Menu"',() => {
		selectMenuPage.selectOldStyleSelect().then(textSelect3 => {
			selectMenuPage.get.selectOldStyleSelectText().invoke('text').then(textDow3 => {
				expect(textSelect3).to.equal(textDow3);
			});
		});
	});
	it('4359 |TC4: Validar que se pueda seleccionar varios elementos del menu "Multiselect drop dow"',() => {
		selectMenuPage.selectRandomMultipleValue().then(texto => {

			texto.forEach((texto,index) => {
				selectMenuPage.get.selectMultipleOptionsText().eq(index).invoke('text').then(textoActual => {
					expect(textoActual).to.equal(texto);
				});
			});

		});

	});

});
