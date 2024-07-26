class SelectMenu {
	get={
		selectValue: () => cy.get('.css-yk16xz-control').eq(0),
		selectOne: () => cy.get('.css-yk16xz-control').eq(1),
		multiSelect:() => cy.get('.css-yk16xz-control').eq(2),
		oldStyleSelect:() => cy.get('#oldSelectMenu')
	};
 	clickSelectValue() {
		this.get.selectValue().click;
	};
	selectOldStyleSelect() {
		const randomsSel =Cypress._.random(0,10);
		cy.log('randomsSel');
		this.get.oldStyleSelect().select('randomsSel');
	}
}

export const selectMenuPage = new SelectMenu();