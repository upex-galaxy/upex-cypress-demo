const TXT_RESULT = 'p.mb-1';
const CLASS_ERROR = '.mr-sm-2.field-error.form-control';

describe('US GX3-5484 | ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	let dataForm;

	cy.on('uncaught:exception', (err, runnable) => {
		return false;
	});

	before(() => {
		cy.fixture('data/Elements/GX3-5484_TextBox.json').then(data => {
			dataForm = data;
		});
	});

	beforeEach('PRC: Abrir la url text-box de ToolsQA', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
	});

	it('US # GX3-5484 | TC#01: Validar que SI se muestre mensaje si los CAMPOS estan BIEN rellenados', () => {
		/* https://www.infomaniak.com/es/asistencia/faq/438/descubrir-los-caracteres-permitidos-para-una-direccion-de-correo-electronico*/

		const VALID_NAME = dataForm.UserName.valid[0];
		const VALID_EMAIL = dataForm.Email.valid[1];
		const VALID_CURRENT_ADDRESS = dataForm.CurrentAddress.valid[0];
		const VALID_PERMANENT_ADDRESS = dataForm.PermanentAddress.valid[0];

		cy.get('input#userName').should('exist').and('be.enabled').and('be.visible').type(VALID_NAME);
		cy.get('input#userEmail').should('exist').and('be.enabled').and('be.visible').type(VALID_EMAIL);
		cy.get('textarea#currentAddress').should('exist').and('be.enabled').and('be.visible').type(VALID_CURRENT_ADDRESS);
		cy.get('textarea#permanentAddress').should('exist').and('be.enabled').and('be.visible').type(VALID_PERMANENT_ADDRESS);

		cy.get('button#submit').should('exist').and('be.enabled').and('be.visible').click();

		cy.get(TXT_RESULT).should('exist').and('be.visible');

		cy.get('p#name.mb-1').should('contain.text', VALID_NAME);
		cy.get('p#email.mb-1').should('contain.text', VALID_EMAIL);
		cy.get('p#currentAddress.mb-1').should('contain.text', VALID_CURRENT_ADDRESS);
		cy.get('p#permanentAddress.mb-1').should('contain.text', VALID_PERMANENT_ADDRESS);
	});

	it('US # GX3-5484 | TC#02: Validar que NO se muestre mensaje si los CAMPOS estan VACÍOS', () => {
		//No se agregan datos porque cypress no permite insertar cadena vacía ''
		cy.get('input#userName').should('exist').and('be.enabled').and('be.visible').and('be.empty');
		cy.get('input#userEmail').should('exist').and('be.enabled').and('be.visible').and('be.empty');
		cy.get('textarea#currentAddress').should('exist').and('be.enabled').and('be.visible').and('be.empty');
		cy.get('textarea#permanentAddress').should('exist').and('be.enabled').and('be.visible').and('be.empty');

		cy.get('button#submit').should('exist').and('be.enabled').and('be.visible').click();

		cy.get(TXT_RESULT).should('not.exist');
	});

	it('US # GX3-5484 | TC#03: Validar que SI se muestre mensaje si los CAMPOS NO estan VACÍOS', () => {
		const VALID_NAME = dataForm.UserName.valid[0];
		const VALID_CURRENT_ADDRESS = dataForm.CurrentAddress.valid[0];
		const VALID_PERMANENT_ADDRESS = dataForm.PermanentAddress.valid[0];

		cy.get('input#userName').should('exist').and('be.enabled').and('be.visible').type(VALID_NAME);
		cy.get('textarea#currentAddress').should('exist').and('be.enabled').and('be.visible').type(VALID_CURRENT_ADDRESS);
		cy.get('textarea#permanentAddress').should('exist').and('be.enabled').and('be.visible').type(VALID_PERMANENT_ADDRESS);

		cy.get('button#submit').should('exist').and('be.enabled').and('be.visible').click();

		cy.get(TXT_RESULT).should('exist').and('be.visible');

		cy.get('p#name.mb-1').should('contain.text', VALID_NAME);
		cy.get('p#currentAddress.mb-1').should('contain.text', VALID_CURRENT_ADDRESS);
		cy.get('p#permanentAddress.mb-1').should('contain.text', VALID_PERMANENT_ADDRESS);
	});

	it('US # GX3-5484 | TC#04: Validar que el input EMAIL tenga BORDE si NO tiene ARROBA', () => {
		const INVALID_EMAIL_WITHOUT_SYMBOL = dataForm.Email.invalid[0];

		cy.get('input#userEmail').should('exist').and('be.enabled').and('be.visible').type(INVALID_EMAIL_WITHOUT_SYMBOL);

		cy.get('button#submit').should('exist').and('be.enabled').and('be.visible').click();

		cy.get(CLASS_ERROR).should('exist');
	});

	it('US # GX3-5484 | TC#05: Validar que el input EMAIL tenga BORDE si NO tiene USUARIO', () => {
		const INVALID_EMAIL_WITHOUT_USER = dataForm.Email.invalid[1];

		cy.get('input#userEmail').should('exist').and('be.enabled').and('be.visible').type(INVALID_EMAIL_WITHOUT_USER);

		cy.get('button#submit').should('exist').and('be.enabled').and('be.visible').click();

		cy.get(CLASS_ERROR).should('exist');
	});

	it('US # GX3-5484 | TC#06: Validar que el input EMAIL tenga BORDE si NO tiene SUBDOMINIO', () => {
		const INVALID_EMAIL_WITHOUT_SUBDOMAIN = dataForm.Email.invalid[2];

		cy.get('input#userEmail').should('exist').and('be.enabled').and('be.visible').type(INVALID_EMAIL_WITHOUT_SUBDOMAIN);

		cy.get('button#submit').should('exist').and('be.enabled').and('be.visible').click();

		cy.get(CLASS_ERROR).should('exist');
	});

	it('US # GX3-5484 | TC#07: Validar que el input EMAIL tenga BORDE si no tiene DOMINIO', () => {
		const INVALID_EMAIL_WITHOUT_DOMAIN = dataForm.Email.invalid[3];

		cy.get('input#userEmail').should('exist').and('be.enabled').and('be.visible').type(INVALID_EMAIL_WITHOUT_DOMAIN);

		cy.get('button#submit').should('exist').and('be.enabled').and('be.visible').click();

		cy.get(CLASS_ERROR).should('exist');
	});

	it('US # GX3-5484 | TC#08: Validar que el input EMAIL tenga BORDE si NO tiene un DOMINIO VÁLIDO', () => {
		const INVALID_EMAIL_WITHOUT_VALID_DOMAIN = dataForm.Email.invalid[4];

		cy.get('input#userEmail').should('exist').and('be.enabled').and('be.visible').type(INVALID_EMAIL_WITHOUT_VALID_DOMAIN);

		cy.get('button#submit').should('exist').and('be.enabled').and('be.visible').click();

		cy.get(CLASS_ERROR).should('exist');
	});

	it('US # GX3-5484 | TC#09: Validar que el input EMAIL tenga BORDE si contiene DOS ARROBAS', () => {
		const INVALID_EMAIL_WITH_DOUBLE_SYMBOL = dataForm.Email.invalid[5];

		cy.get('input#userEmail').should('exist').and('be.enabled').and('be.visible').type(INVALID_EMAIL_WITH_DOUBLE_SYMBOL);

		cy.get('button#submit').should('exist').and('be.enabled').and('be.visible').click();

		cy.get(CLASS_ERROR).should('exist');
	});

	it('US # GX3-5484 | TC#10: Validar que el input EMAIL tenga BORDE si contiene ACENTOS', () => {
		// https://www.infomaniak.com/es/asistencia/faq/438/descubrir-los-caracteres-permitidos-para-una-direccion-de-correo-electronico

		const INVALID_EMAIL_WITH_SPECIAL_CHARS = dataForm.Email.invalid[6];

		cy.get('input#userEmail').should('exist').and('be.enabled').and('be.visible').type(INVALID_EMAIL_WITH_SPECIAL_CHARS);

		cy.get('button#submit').should('exist').and('be.enabled').and('be.visible').click();

		cy.get(CLASS_ERROR).should('exist');
	});
});
