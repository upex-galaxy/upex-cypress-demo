describe('GX3-2738 | TS: ToolsQA | Elements | CheckBox', () => {

	const ETIQUETAS = [ 'home', 'desktop', 'notes', 'commands', 'documents', 'workspace', 'react', 'angular', 'veu', 'office', 'public', 'private',
		'classified', 'general', 'downloads', 'wordFile', 'excelFile'
	];

	beforeEach(() => {
		cy.visit('https://demoqa.com/checkbox');
		cy.url().should('contains', 'checkbox');
	});

	it('GX3-2738 | TC1: Validar expandir todas las casillas de verificación desde el botón "Expand all"', () => {
		cy.get('svg.rct-icon-expand-all').as('expandAllIcon');
		cy.get('@expandAllIcon').click();
		cy.get('ol').should('have.length', 7);
	});

	it('GX3-2738 | TC2: Validar contraer todas las casillas de verificación desde el botón "Collapse all" ', () => {
		cy.get('svg.rct-icon-expand-all').as('expandAllIcon');
		cy.get('@expandAllIcon').click();
		cy.get('svg.rct-icon-collapse-all').as('collapseAllIcon');
		cy.get('@collapseAllIcon').click();
		cy.get('ol').should('have.length', 1);
	});

	it('GX3-2738 | TC3: Validar poder desplegar cada toggle (Home, Desktop, Documents, WorkSpace, Offie, Downloads)', () => {
		cy.get('.rct-collapse-btn').as('btnCollapse');
		cy.get('@btnCollapse').eq(0).click();
		cy.get('@btnCollapse').eq(1).click();
		cy.get('@btnCollapse').eq(2).click();
		cy.get('@btnCollapse').eq(3).click();
		cy.get('@btnCollapse').eq(4).click();
		cy.get('@btnCollapse').eq(5).click();
	});

	it('GX3-2738 | TC4: Validar poder seleccionar todos los checkbox)', () => {
		cy.get('span.rct-checkbox').click({ multiple: true });
		cy.get('svg.rct-icon-expand-all').click();

		ETIQUETAS.forEach(etiqueta => {
			cy.get('span.text-success').contains(etiqueta).should('exist');
		});
	});

	it('GX3-2738 | TC5: Validar que se autoseleccionen los nodos internos cuando se hace click en el nodo de nivel 1)', () => {
		cy.get('svg.rct-icon-expand-all').click();
		cy.get('span.rct-title').eq(0).click();
		const indicesCbHome = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];

		indicesCbHome.forEach(index => {
			cy.get('input[type="checkbox"]').eq(index).should('be.checked');
		});

		ETIQUETAS.forEach(etiqueta => {
			cy.get('span.text-success').contains(etiqueta).should('exist');
		});
	});

	it('GX3-2738 | TC6: Validar que se autoseleccionen los nodos internos cuando se hace click en el nodo de nivel 2)', () => {
		cy.get('svg.rct-icon-expand-all').click();

		//Nodo Desktop
		cy.get('span.rct-title').eq(1).click();
		const indicesCbDesktop = [ 2, 3 ];
		indicesCbDesktop.forEach(index => {
			cy.get('input[type="checkbox"]').eq(index).should('be.checked');
		});
		const etiquetasDesktop = [ 'desktop', 'notes', 'commands'
		];
		etiquetasDesktop.forEach(etiqueta => {
			cy.get('span.text-success').contains(etiqueta).should('exist');
		});

		//Nodo Documents
		cy.get('span.rct-title').eq(4).click();
		const indicesCbDocuments = [ 5, 6, 7, 8, 9, 10, 11, 12, 13 ];
		indicesCbDocuments.forEach(index => {
			cy.get('input[type="checkbox"]').eq(index).should('be.checked');
		});
		const etiquetasDocuments = [ 'documents', 'workspace', 'react', 'angular', 'veu', 'office', 'public', 'private',
			'classified', 'general'
		];
		etiquetasDocuments.forEach(etiqueta => {
			cy.get('span.text-success').contains(etiqueta).should('exist');
		});

		//Nodo Downloads
		cy.get('span.rct-title').eq(14).click();
		const indicesCbDownloads = [ 15, 16 ];
		indicesCbDownloads.forEach(index => {
			cy.get('input[type="checkbox"]').eq(index).should('be.checked');
		});
		const etiquetasDownloads = [ 'downloads', 'wordFile', 'excelFile'
		];
		etiquetasDownloads.forEach(etiqueta => {
			cy.get('span.text-success').contains(etiqueta).should('exist');
		});

	});

	it('GX3-2738 | TC7: Validar que se autoseleccionen los nodos internos cuando se hace click en el nodo de nivel 3)', () => {
		cy.get('svg.rct-icon-expand-all').click();

		//Nodo WorkSpace
		cy.get('span.rct-title').eq(5).click();
		const indicesCbWorkSpace = [ 6, 7, 8 ];
		indicesCbWorkSpace.forEach(index => {
			cy.get('input[type="checkbox"]').eq(index).should('be.checked');
		});
		const etiquetasWorkSpace = [ 'workspace', 'react', 'angular', 'veu'
		];
		etiquetasWorkSpace.forEach(etiqueta => {
			cy.get('span.text-success').contains(etiqueta).should('exist');
		});

		//Nodo Office
		cy.get('span.rct-title').eq(9).click();
		const indicesCbOffice = [ 10, 11, 12, 13 ];
		indicesCbOffice.forEach(index => {
			cy.get('input[type="checkbox"]').eq(index).should('be.checked');
		});
		const etiquetasOffice = [ 'office', 'public', 'private', 'classified', 'general'
		];
		etiquetasOffice.forEach(etiqueta => {
			cy.get('span.text-success').contains(etiqueta).should('exist');
		});
	});

})