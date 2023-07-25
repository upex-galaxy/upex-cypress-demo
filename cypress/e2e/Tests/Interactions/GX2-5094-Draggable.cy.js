import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
import { Draggable } from '@pages/Interactions/GX2-5094-Draggable.Page';
import the from '@data/GX2-5094-Draggable';

describe('GX2-5094-✅-tools-qa-interactions-dragabble', () => {
	beforeEach('Precondición: encontrarse en la página de Draggable', () => {
		cy.visit('/dragabble');
	});
	it('5095 | TC1: Validar que que se muestran las pestañas mencionadas dentro de la pagina y se visualiza una a la vez', () => {
		//Tab 1 Simple: Validaremos que sea visible la elección de la pestaña "Simple" y que es por default la que se encuentra activa
		Draggable.get.Tabs().should('contain.text', the.Tabs.Tab1);
		Draggable.get.TabSimple().should('contain.class', 'active');
		// Tab 2 Axis Restricted: Validaremos que sea visible la elección de la pestaña "Axis Restricted", que no está activa y luego que la seleccionemos se encuentre activa.
		Draggable.get.Tabs().should('contain.text', the.Tabs.Tab2);
		Draggable.get.TabAxisRestricted().should('not.contain.class', 'active');
		Draggable.SelectTabAxisRestricted();
		Draggable.get.TabAxisRestricted().should('contain.class', 'active');
		// Tab 3 Contain Restricted: Validaremos que sea visible la elección de la pestaña "Contain Restricted", que no está activa y luego que la seleccionemos se encuentre activa.
		Draggable.get.Tabs().should('contain.text', the.Tabs.Tab3);
		Draggable.get.TabContainerRestricted().should('not.contain.class', 'active');
		Draggable.SelectTabContainerRestricted();
		Draggable.get.TabContainerRestricted().should('contain.class', 'active');
		// Tab 4 Cursor Style: Validaremos que sea visible la elección de la pestaña "Cursor Style", que no está activa y luego que la seleccionemos se encuentre activa.
		Draggable.get.Tabs().should('contain.text', the.Tabs.Tab4);
		Draggable.get.TabCursorStyle().should('not.contain.class', 'active');
		Draggable.SelectTabCursorStyle();
		Draggable.get.TabCursorStyle().should('contain.class', 'active');
	});
});
