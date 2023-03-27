/* eslint-disable @typescript-eslint/no-empty-function */
import { checkBox } from '@pages/checkBox.Page.js';

describe('✅ToolsQA | Elements | Check Box', () => {
	beforeEach('Precondition: Be located in Check Box', () => {
		//Scope(Only Page):
		cy.visit('https://demoqa.com/checkbox');
		cy.url().should('contain', 'checkbox');
		cy.viewport(1080, 980);
	});
	it('991 | TC1: Validar hacer Checked y Expand en el Directorio Principal.', () => {
		checkBox.clickPrincipalCheck();
		cy.should('be.checked');

		checkBox.clickPrincipalToggle();
		checkBox.getToggle.StatusOpen();

		//Encuentra los Close para abrir:
		checkBox.clickToggleClose();
		checkBox.clickToggleClose();

		checkBox.getTitleChecked();
		checkBox.getResult.first().should('contain.text', 'You have selected :');
		checkBox.getOtherTitleResult();
	});
	it('991 | TC2: Validar hacer Checked y Expand en el Subdirectorio.', () => {
		checkBox.clickPrincipalToggle();

		//selecciona Random a partir de sus subdirectorios-3[Home, N/A]
		checkBox.randomSubdirectoriesCheck(-3);

		//Toggle que encuentre Close, hace click para abrirlos:
		checkBox.clickToggleClose();
		checkBox.clickToggleClose();

		//Se recorre los Title de los Checked:
		checkBox.getTitleChecked();
		checkBox.getResult.first().should('contain.text', 'You have selected :');

		//Se recorre los Title del Result, mismos anterior checked(Cantidad y Ttile):
		checkBox.getOtherTitleResult();
	});
	it('991 | TC3: Validar hacer Checked y Expand en el menú de Subdirectorio.', () => {
		checkBox.clickPrincipalToggle();

		checkBox.clickToggleClose();
		/*Checked a partir del indice 5, que entra a otro subdirectorio(Menu). 
		Aqui en este indice tiene 2 Menu, selecciona entre estos: */
		checkBox.randomSubdirectoriesCheck(5);
		checkBox.clickButton_expandedAll();

		checkBox.getTitleChecked();
		checkBox.getResult.first().should('contain.text', 'You have selected :');
		checkBox.getOtherTitleResult();
	});
	it('991 | TC4: Validar hacer Checked en un archivo.', () => {
		checkBox.clickButton_expandedAll();
		checkBox.randomFolderCheck();

		checkBox.getTitleChecked();
		checkBox.getResult.first().should('contain.text', 'You have selected :');
		checkBox.getOtherTitleResult();
	});
	it('991 | TC5: Validar hacer Checked en mas de un archivo.', () => {
		checkBox.clickButton_expandedAll();

		//Es mas de un folder se pasa(2) para que sean Dos.
		checkBox.randomMoreThanOneCheck(2);

		checkBox.getTitleChecked();
		checkBox.getResult.first().should('contain.text', 'You have selected :');
		checkBox.getOtherTitleResult();
	});
	it.skip('991 | TC6: Validar Expand y Collapse OneByOne desde Toggle.', () => {
		checkBox.clickPrincipalToggle();
		checkBox.clickToggleClose();
		checkBox.clickToggleClose();

		//Recorre del final al principio para ir cerrando todos de a uno
		checkBox.clickForCollapseToggle();
	});
	it('991 | TC7: Validar Expand y Collapse All desde el button plus y minus.', () => {
		checkBox.clickButton_expandedAll();
		checkBox.clickButton_collapseAll();
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
