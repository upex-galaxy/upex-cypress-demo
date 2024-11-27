import { objCheckboxTree } from '@pages/GX3-5646-Checkbox.Page';

describe('US # GX3-5646 | ToolsQA | Elements | Checkbox', () => {
	beforeEach('PRC: Abrir url de Checkbox en ToolsQA', () => {
		cy.visit('https://demoqa.com/checkbox');
		cy.url().should('contain', 'checkbox');
	});

	it('GX3-5661 | TC#01: Validar que el boton "Expand All" abra todas las ramas', () => {
		const BUTTON_EXPAND_ALL = objCheckboxTree.getSelector.buttonExpandAll();
		const IMG_TOGGLE_OPENED = objCheckboxTree.getSelector.imgToggleOpened();
		const IMG_TOGGLE_CLOSED = objCheckboxTree.getSelector.imgToggleClosed();

		// Localizar el botón Expand
		cy.get(BUTTON_EXPAND_ALL).as('btnExpandAll');

		objCheckboxTree.validateExpandTreePRC();

		// tras hacer click en Expand All
		cy.get('@btnExpandAll').should('exist').click();

		// Localizar los iconos de toggle de la rama
		cy.get(IMG_TOGGLE_OPENED).as('imgToggleOpen');
		cy.get('@imgToggleOpen').should('exist'); //debe existir y estar abierta tras el click

		// Localizar los icono de la ramas cerrados. No debiera haber ninguno
		cy.get(IMG_TOGGLE_CLOSED).should('not.exist');

		// debe haber más de 1 (en principio son 17, pero puede cambiar)
		cy.get('@chkNode').should('have.length.above', 1);
	}); // it TC01

	it('GX3-5661 | TC#02: Validar que el boton "Collapse All" cierre todas las ramas', () => {
		const BUTTON_EXPAND_ALL = objCheckboxTree.getSelector.buttonExpandAll();
		const BUTTON_COLLAPSE_ALL = objCheckboxTree.getSelector.buttonCollapseAll();
		const IMG_TOGGLE_CLOSED = objCheckboxTree.getSelector.imgToggleClosed();

		// PRC: Localizar el botón Expand All y hacer click
		cy.get(BUTTON_EXPAND_ALL).as('btnExpandAll').click();

		// Localizar el botón Collapse All
		cy.get(BUTTON_COLLAPSE_ALL).as('btnCollapseAll');

		objCheckboxTree.validateCollapseTreePRC();

		// tras hacer click en Collapse
		cy.get('@btnCollapseAll').should('exist').click();
		cy.get(IMG_TOGGLE_CLOSED).as('imgToggleClosed');

		// debe haber sólo 1
		cy.get('@chkNode').should('have.length', 1);
		cy.get('@btnToggle').should('exist').and('have.length', 1);
		// y estar cerrada la rama
		cy.get('@imgToggleClosed').should('exist');
	}); // it TC02

	it('GX3-5661 | TC#03: Validar que al expandir cada toggle el aspecto cambie adecuadamente', () => {
		// comprobar que el árbol esta en el estado correcto antes de hacer nada
		objCheckboxTree.validateExpandEachTreeTogglePRC();

		objCheckboxTree.expandEachTreeNode();

		// Comprobar que el estado del árbol es correcto tras la expansión
		objCheckboxTree.validateExpandEachTreeTogglePSC();
	}); // it TC03

	it('GX3-5661 | TC#04: Validar que al colapsar cada toggle el aspecto cambie adecuadamente', () => {
		const BUTTON_EXPAND_ALL = objCheckboxTree.getSelector.buttonExpandAll();

		// PRC: Localizar el botón Expand All y hacer click
		cy.get(BUTTON_EXPAND_ALL).as('btnExpandAll').click();

		// Comprobar que el toggle esta en el estado correcto antes de empezar
		objCheckboxTree.validateCollapseEachTreeToggleReversePRC();

		// Colapsar en orden inverso los nodos abiertos
		objCheckboxTree.collapseEachTreeNodesReverse();

		// Comprobar estado del árbol tras la iteración
		objCheckboxTree.validateCollapseEachTreeToggleReversePSC();
	}); // it TC04

	it('GX3-5661 | TC#05: Validar que al marcar un checkbox contenedor se seleccionen los subelementos y se muestre el texto de la selección correctamente', () => {
		const BUTTON_EXPAND_ALL = objCheckboxTree.getSelector.buttonExpandAll();
		const LI_NODES = objCheckboxTree.getSelector.liNodes();
		const CHECKBOX_TITLE = objCheckboxTree.getSelector.checkboxTitle();
		const CHECKBOX_ELEMENT = objCheckboxTree.getSelector.checkboxElement();
		const IMG_CHECKBOX_UNCHECKED_OR_HALF_CHECKED = objCheckboxTree.getSelector.imgCheckboxUncheckedOrHalfChecked();
		const IMG_CHECKBOX_CHECKED_OR_HALF_CHECKED = objCheckboxTree.getSelector.imgCheckboxCheckedOrHalfChecked();
		const TXT_RESULT = objCheckboxTree.getSelector.txtResult();
		const TXT_SUCCESS = objCheckboxTree.getSelector.txtSuccess();

		// PRC: Localizar el botón Expand All y hacer click
		cy.get(BUTTON_EXPAND_ALL).as('btnExpandAll').click();

		cy.get(LI_NODES).then($checkboxItems => {
			// Obtiene un índice aleatorio
			const randomIndex = Math.floor(Math.random() * ($checkboxItems.length - 1)) + 1;

			// No se puede marcar directamente el input porque es invisible
			// Selecciona el checkbox aleatorio y hace clic
			cy.get($checkboxItems[randomIndex]).within($the => {
				cy.get(CHECKBOX_TITLE).as('chkName');

				cy.get(CHECKBOX_ELEMENT).as('chkListElement');
				cy.get('@chkListElement').first().click();

				// Comprobar que los subelementos se han seleccionado
				objCheckboxTree.validateSubNodesSelection('@chkListElement');

				// No debe haber subelementos sin seleccionar o seleccionados a medias
				cy.get(IMG_CHECKBOX_UNCHECKED_OR_HALF_CHECKED).should('not.exist');

				// El padre (li) del padre (ol) debe estar marcado o semimarcado
				cy.get($the).parent().parent().first().as('liParent').find(IMG_CHECKBOX_CHECKED_OR_HALF_CHECKED).should('exist');
			}); // $checkboxItems[randomIndex] within

			// El Result debe ser visible
			cy.get(TXT_RESULT).should('exist').and('be.visible');
			cy.get(TXT_SUCCESS).should('exist').and('be.visible');
		}); // li then
	}); // it TC05
});
