describe('GX3-1411: ToolsQA | Elements | Text Box: Fill form and Submit', () => {
	beforeEach('User visit web site Text Box', () => {
		cy.visit('https://demoqa.com/text-box');
		cy.url().should('contain', 'text-box');
	});

	it('1412 | TC1: Validar registrar formulario con todos los campos completos y válidos', () => {
		cy.fixture('data/Elements/GX3-1411-TextBox.json').then(the => {
			cy.get(the.fullName.input).type(the.fullName.data.full);
			cy.get(the.email.input).type(the.email.data.full);
			cy.get(the.currentAddress.input).type(the.currentAddress.data.full);
			cy.get(the.permanentAddress.input).type(the.permanentAddress.data.full);
			cy.get(the.submit.input).click();
			cy.get('p').should($p => {
				expect($p).to.have.length(4);
				expect($p.eq(0)).to.contain(`Name:${the.fullName.data.full}`);
				expect($p.eq(1)).to.contain(`Email:${the.email.data.full}`);
				expect($p.eq(2)).to.contain(`Current Address :${the.currentAddress.data.full}`);
				expect($p.eq(3)).to.contain(`Permananet Address :${the.permanentAddress.data.full}`);
			});
		});
	});

	it('1412 | TC2: Validar registrar formulario con campo "Full Name" vacío', () => {
		cy.fixture('data/Elements/GX3-1411-TextBox.json').then(the => {
			cy.get(the.email.input).type(the.email.data.full);
			cy.get(the.currentAddress.input).type(the.currentAddress.data.full);
			cy.get(the.permanentAddress.input).type(the.permanentAddress.data.full);
			cy.get(the.submit.input).click();
			cy.get('p').should($p => {
				expect($p).to.have.length(3);
				expect($p.eq(0)).to.contain(`Email:${the.email.data.full}`);
				expect($p.eq(1)).to.contain(`Current Address :${the.currentAddress.data.full}`);
				expect($p.eq(2)).to.contain(`Permananet Address :${the.permanentAddress.data.full}`);
			});
			cy.get(the.output.name).should('not.exist');
		});
	});

	it('1412 | TC3: Validar registrar formulario con campo "Current Address" vacío', () => {
		cy.fixture('data/Elements/GX3-1411-TextBox.json').then(the => {
			cy.get(the.fullName.input).type(the.fullName.data.full);
			cy.get(the.email.input).type(the.email.data.full);
			cy.get(the.permanentAddress.input).type(the.permanentAddress.data.full);
			cy.get(the.submit.input).click();
			cy.get('p').should($p => {
				expect($p).to.have.length(3);
				expect($p.eq(0)).to.contain(`Name:${the.fullName.data.full}`);
				expect($p.eq(1)).to.contain(`Email:${the.email.data.full}`);
				expect($p.eq(2)).to.contain(`Permananet Address :${the.permanentAddress.data.full}`);
			});
			cy.get(the.output.currentAddress).should('not.exist');
		});
	});

	it('1412 | TC4: Validar registrar formulario con campo "Permanent Address" vacío', () => {
		cy.fixture('data/Elements/GX3-1411-TextBox.json').then(the => {
			cy.get(the.fullName.input).type(the.fullName.data.full);
			cy.get(the.email.input).type(the.email.data.full);
			cy.get(the.currentAddress.input).type(the.currentAddress.data.full);
			cy.get(the.submit.input).click();
			cy.get('p').should($p => {
				expect($p).to.have.length(3);
				expect($p.eq(0)).to.contain(`Name:${the.fullName.data.full}`);
				expect($p.eq(1)).to.contain(`Email:${the.email.data.full}`);
				expect($p.eq(2)).to.contain(`Current Address :${the.currentAddress.data.full}`);
			});
			cy.get(the.output.permanentAddress).should('not.exist');
		});
	});

	it('1412 | TC5: Validar registrar formulario con campo "Email" vacío', () => {
		cy.fixture('data/Elements/GX3-1411-TextBox.json').then(the => {
			cy.get(the.fullName.input).type(the.fullName.data.full);
			cy.get(the.currentAddress.input).type(the.currentAddress.data.full);
			cy.get(the.permanentAddress.input).type(the.permanentAddress.data.full);
			cy.get(the.submit.input).click();
			cy.get('p').should($p => {
				expect($p).to.have.length(3);
				expect($p.eq(0)).to.contain(`Name:${the.fullName.data.full}`);
				expect($p.eq(1)).to.contain(`Current Address :${the.currentAddress.data.full}`);
				expect($p.eq(2)).to.contain(`Permananet Address :${the.permanentAddress.data.full}`);
			});
			cy.get(the.output.email).should('not.exist');
		});
	});

	it('1412 | TC6: Validar No registrar formulario cuando todos los campos están vacíos', () => {
		cy.fixture('data/Elements/GX3-1411-TextBox.json').then(the => {
			cy.get(the.fullName.input);
			cy.get(the.email.input);
			cy.get(the.currentAddress.input);
			cy.get(the.permanentAddress.input);
			cy.get(the.submit.input).click();
			cy.get('p').should('not.exist');
		});
	});

	it('1412 | TC7: Validar No registrar formulario cuando "Email" no tiene "@"', () => {
		cy.fixture('data/Elements/GX3-1411-TextBox.json').then(the => {
			cy.get(the.email.input).type(the.email.data.invalidArroba);
			cy.get(the.submit.input).click();
			cy.get(the.email.input).should('have.css', 'border-color', 'rgb(255, 0, 0)');
			cy.get(the.output.email).should('not.exist');
		});
	});

	it('1412 | TC8: Validar No registrar formulario cuando "Email" tiene el siguiente formato "@x.xx"', () => {
		cy.fixture('data/Elements/GX3-1411-TextBox.json').then(the => {
			cy.get(the.email.input).type(the.email.data.invalidUser);
			cy.get(the.submit.input).click();
			cy.get(the.email.input).should('have.css', 'border-color', 'rgb(255, 0, 0)');
			cy.get(the.output.email).should('not.exist');
		});
	});

	it('1412 | TC9: Validar No registrar formulario cuando "Email" tiene el siguiente formato "x@.xx"', () => {
		cy.fixture('data/Elements/GX3-1411-TextBox.json').then(the => {
			cy.get(the.email.input).type(the.email.data.invalidDomain1);
			cy.get(the.submit.input).click();
			cy.get(the.email.input).should('have.css', 'border-color', 'rgb(255, 0, 0)');
			cy.get(the.output.email).should('not.exist');
		});
	});

	it('1412 | TC10: Validar No registrar formulario cuando "Email" tiene el siguiente formato "x@x.x"', () => {
		cy.fixture('data/Elements/GX3-1411-TextBox.json').then(the => {
			cy.get(the.email.input).type(the.email.data.invalidDomain2);
			cy.get(the.submit.input).click();
			cy.get(the.email.input).should('have.css', 'border-color', 'rgb(255, 0, 0)');
			cy.get(the.output.email).should('not.exist');
		});
	});
});
