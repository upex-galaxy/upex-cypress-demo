class DynamicProperties {
	get={
		textElement:() => cy.get ('[class="col-12 mt-4 col-md-6"] p'),
		enableButton:() => cy.get('#enableAfter',{ timeout:5000 }),
		colorButton:() => cy.get('#colorChange',{ timeout:5000 }),
		visibleButton:() => cy.get('#visibleAfter',{ timeout:5000 })
	};
}
export const dynamicPropertiesPage= new DynamicProperties();