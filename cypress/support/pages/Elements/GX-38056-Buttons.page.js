class buttonspage {
	get = {
		inputClickMe: () => cy.get('.btn.btn-primary').eq(2),
		inputRightClickMe: () => cy.get('#rightClickBtn'),
		inputDoubleClickMe: () => cy.get('#doubleClickBtn'),
		MessageClickMe: () => cy.get('#dynamicClickMessage'),
		MessageRightClickMe: () => cy.get('#rightClickMessage'),
		MessageDoubleClickMe: () => cy.get('#doubleClickMessage'),
	};
}
export const ButtonsPage = new buttonspage();
