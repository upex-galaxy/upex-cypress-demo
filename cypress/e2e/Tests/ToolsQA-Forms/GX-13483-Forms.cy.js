import { removeLogs } from '@helper/RemoveLogs';
removeLogs();

import { TC } from '@pages/Form.Page.js';
import { URL, firstName, lastName, email, userNumber, subjects,  invalidEmail, invalidNum } from '../../../fixtures/data/data.json';


describe('✅ US GX-13483 | ToolsQA | Forms | Practice Form', () => {
	beforeEach(() => {
		cy.visit(URL);
	});
	it('13483 |TC1: Validar registrarse con full campos validos cuando se presiona boton submit', () => {
		TC.n01(firstName, lastName, email, userNumber, subjects);
	});
	
	it('13483 | TC2: Validar registrarse con full campos vacios cuando se presiona boton submit', () => {
		TC.n02();
	});
		
	/*it.skip('13483 | TC3: Validar registrarse con email inválido y un mobile number inválido.', () => {
		//Se skipea por bug en mobile number porque no cumple con la funcionalidad(se exigen 10 digitos y la prueba pasa correctamente poniendo menos)
		TC.n03(firstName, lastName, invalidEmail, invalidNum, subjects);
	});*/
});
