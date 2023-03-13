class AxisRestricted{

	elements={
		ARtab:()=> cy.get('[id="draggableExample-tab-axisRestriction"]'),
		Xbox:()=> cy.get('[id="restrictedX"]'),
		Ybox:()=> cy.get('[id="restrictedY"]')
	};
	ARtab(){
		return this.elements.ARtab();
	}
	Xbox(){
		return this.elements.Xbox();
	}
	Ybox(){
		return this.elements.Ybox();
	}
}
export const axisrestricted= new AxisRestricted();
