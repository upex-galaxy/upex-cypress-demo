describe('✅ToolsQA | Forms | Practice Form', () => {
	beforeEach(() => {
		cy.visit('https://demoqa.com/automation-practice-form');
	});
	it('10752 | TC1: Validar el registro exitoso del formulario de registro.', () => {
		cy.get('#firstName').type('Pepito');
		cy.get('#lastName').type('Perez');
		cy.get('#userEmail').type('adcdefg@hotmail.com');
		cy.get('#gender-radio-1').click({ force: true });
		cy.get('#gender-radio-2').click({ force: true });
		cy.get('#gender-radio-3').click({ force: true });
		cy.get('#userNumber').type('1234567890');
		// se decide dejar para mas tarde por falta de conocimiento, se requiere mas info.
		cy.get('#subjectsInput').type('Mi mama me mima');
		cy.get('#hobbies-checkbox-1').click({ force: true });
		cy.get('#hobbies-checkbox-2').click({ force: true });
		cy.get('#hobbies-checkbox-3').click({ force: true });
		cy.get('#submit').click({ force: true });
	});
	//
	it('10752 | TC2:  Validar la ausencia del error en firts name y last name', () => {
		cy.get('#firstName').type('12345');
		cy.get('#firstName').should('have.value', '12345');
		cy.get('#lastName').type('65478');
		cy.get('#lastName').should('have.value', '65478');
		cy.get('#userEmail').type('adcdefg@hotmail.com');
		cy.get('#gender-radio-1').click({ force: true });
		cy.get('#gender-radio-2').click({ force: true });
		cy.get('#gender-radio-3').click({ force: true });
		cy.get('#userNumber').type('1234567890');
		// se decide dejar para mas tarde por falta de conocimiento, se requiere mas info.
		cy.get('#subjectsInput').type('Mi mama me mima');
		cy.get('#hobbies-checkbox-1').click({ force: true });
		cy.get('#hobbies-checkbox-2').click({ force: true });
		cy.get('#hobbies-checkbox-3').click({ force: true });
		cy.get('#submit').click({ force: true });
	});
	it('10752 | TC3: Validar realizar el registro sin escoger ningún campo en Gender.', () => {
		cy.get('#firstName').type('Pereza');
		cy.get('#firstName').should('have.value', 'Pereza');
		cy.get('#lastName').type('Pataquiva');
		cy.get('#lastName').should('have.value', 'Pataquiva');
		cy.get('#userEmail').type('adcdefg@hotmail.com');
		cy.get('#userNumber').type('1234567890');
		// se decide dejar para mas tarde por falta de conocimiento, se requiere mas info.
		cy.get('#subjectsInput').type('Mi mama me mima');
		cy.get('#hobbies-checkbox-1').click({ force: true });
		cy.get('#hobbies-checkbox-2').click({ force: true });
		cy.get('#hobbies-checkbox-3').click({ force: true });
		cy.get('#submit').click({ force: true });
	});
	it('10752 | TC4: Validar realizar el registro ingresando caracteres alfabéticos en Mobile Number.', () => {
		cy.get('#firstName').type('Pereza');
		cy.get('#firstName').should('have.value', 'Pereza');
		cy.get('#lastName').type('Pataquiva');
		cy.get('#lastName').should('have.value', 'Pataquiva');
		cy.get('#gender-radio-1').click({ force: true });
		cy.get('#gender-radio-2').click({ force: true });
		cy.get('#gender-radio-3').click({ force: true });
		cy.get('#userEmail').type('adcdefg@hotmail.com');
		cy.get('#userNumber').type('abcdefg');
		cy.get('#userNumber').should('have.value', 'abcdefg');
		// se decide dejar para mas tarde por falta de conocimiento, se requiere mas info.
		cy.get('#subjectsInput').type('Mi mama me mima');
		cy.get('#hobbies-checkbox-1').click({ force: true });
		cy.get('#hobbies-checkbox-2').click({ force: true });
		cy.get('#hobbies-checkbox-3').click({ force: true });
		cy.get('#submit').click({ force: true });
	});
});
import { removeLogs } from '@helper/RemoveLogs';
removeLogs();