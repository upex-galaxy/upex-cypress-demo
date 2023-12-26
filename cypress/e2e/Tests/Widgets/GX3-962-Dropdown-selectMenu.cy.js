import { removeLogs } from "@helper/RemoveLogs";

describe('🧪GX3-962 | TS: ⚡️ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach('PRC: El usuario debe ubicarse en la página de Select Menu de DemoQA', () => {
		cy.visit('https://demoqa.com/select-menu');
		cy.url().should('contain', 'select');
	});

    it('962 | TC1: Validar que elemento aleatorio seleccionado en “Select Value” se muestre en input y se cierre menú', () => {
        
    });



});


removeLogs();