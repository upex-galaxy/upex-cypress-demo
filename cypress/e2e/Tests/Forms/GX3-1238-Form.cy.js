import FormData from '@pages/Forms/GX3-1238-formData';
import VerifyTable from '@pages/Forms/GX3-1238-verifyTable';
import FormAction from '@pages/Forms/GX3-1238-formActions';

describe('TS 🧪GX3-1238 | TS: ⚡️ToolsQA | Forms | Practice Form', () => {
	beforeEach('acceder a la pagina web https://demoqa.com/automation-practice-form', () => {
		cy.visit('https://demoqa.com/automation-practice-form');
	});
	it('1239 | TC01: Verificar poder enviar formulario con todos los campos exitosamente.', () => {
		const formData = new FormData();
		const formAction = new FormAction();
		const verifyTable = new VerifyTable();

		formAction.typeText('firstName', formData.firstName);
		formAction.typeText('lastName', formData.lastName);
		formAction.typeText('userEmail', formData.email);
		formAction.selectGender();
		formAction.typeText('userNumber', formData.mobile);
		const date = formAction.selectDate();
		formAction.selectSubject();
		formAction.selectHobbies(formData.hobbies);
		formAction.selectFile();
		formAction.typeText('currentAddress', formData.address);
		formAction.selectElements('state');
		formAction.selectElements('city');

		formAction.clicSubmit();

		verifyTable.verifyText('Student Name', `${formData.firstName} ${formData.lastName}`);
		verifyTable.verifyText('Student Email', formData.email);
		verifyTable.verifyGender();
		verifyTable.verifyText('Mobile', formData.mobile);
		verifyTable.verifyText('Date of Birth', date);
		verifyTable.verifySubjects();
		verifyTable.verifyHobbies(formData.hobbies);
		verifyTable.verifyText('Picture', 'upexlogo.png');
		verifyTable.verifyText('Address', formData.address);
		verifyTable.verifyStateAndCity();

		verifyTable.clicClose();
		verifyTable.verifyClose();
	});
	it('1239 | TC02: Verificar poder enviar formulario con todos los campos requeridos exitosamente.', () => {
		const formData = new FormData();
		const formAction = new FormAction();
		const verifyTable = new VerifyTable();

		formAction.typeText('firstName', formData.firstName);
		formAction.typeText('lastName', formData.lastName);
		formAction.selectGender();
		formAction.typeText('userNumber', formData.mobile);
		const date = formAction.selectDate();

		formAction.clicSubmit();
		verifyTable.verifyText('Student Name', `${formData.firstName} ${formData.lastName}`);
		verifyTable.verifyGender();
		verifyTable.verifyText('Mobile', formData.mobile);
		verifyTable.verifyText('Date of Birth', date);

		verifyTable.clicClose();
		verifyTable.verifyClose();
	});
});
