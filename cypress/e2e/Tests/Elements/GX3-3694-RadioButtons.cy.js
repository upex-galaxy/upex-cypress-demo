describe ('GX3-3694| ToolsQA | Elements | Radio Buttons',()=>{
	beforeEach('PRC:El usuario debe estar situado en la pagina de Demo QA',()=>{
		cy.visit('https://demoqa.com/radio-button');
		cy.url().should('include', 'radio-button');
	});
	it('GX3-3695 | TC1: Validar hacer click en el radiobutton “Yes” y se desplegue el mensaje del radiobutton',()=>{

    cy.get('[id="yesRadio"]').click({force:true});
	//cy.get('label[for="yesRadio"]').click();

	});
	/*it('GX3-3695 | TC2: Validar hacer click en el radiobutton "Impressive" y se desplegue el mensaje del radiobutton',()=>{

    cy.get('').click({force:true});

	});

it('GX3-3695 | TC3: Validar hacer click en el raidioutton “No" y se encuentre desabilitado',()=>{

    cy.get('').click({force:true});

	});
*/


});  