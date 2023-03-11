class GridPage{
	elements={
		gridtab:()=> cy.get('[id="demo-tab-grid"]'),
		gridnumbers:()=> cy.get('[class="create-grid"]').children()
	};

	Gridtab(){
		return this.elements.gridtab();
	}
	Gridnumbers(){
		return this.elements.gridnumbers();
	}

}
export const  gridpage= new GridPage();