import { removeLogs } from "@helper/RemoveLogs";

describe('🧪GX3-962 | TS: ⚡️ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach('PRC: El usuario debe ubicarse en la página de Select Menu de DemoQA', () => {
		cy.visit('https://demoqa.com/select-menu');
		cy.url().should('contain', 'select');
	});

        




});


removeLogs();