import { studentForm } from '../../../support/pages/Forms/GX-19307-Student-Form';

describe('✅ToolsQA | Forms | Practice Form', () => {
	beforeEach('Precondición: Usuario debe estar en pagina de Student Registration Form', () => {
		studentForm.enterPage();
		cy.url().should('contain', 'automation-practice-form');
	});
	it('19308 | TC01 - Validar usuario completa formulario correctamente', () => {
		//studentForm.typeRandomFirstName();
		//studentForm.selectGenderFromArray();
		studentForm.selectMonth();
		studentForm.selectYear();
		studentForm.selectDay();
		studentForm.typeRandomSubjects;
	});
});

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
