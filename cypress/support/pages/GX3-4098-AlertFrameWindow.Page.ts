class AlertFrameWindow {
	get={
		//TC1
		alertButton:() => cy.get('#alertButton'),
		//TC2
		timerAlertButton: () => cy.get('#timerAlertButton'),
		//TC3
		confirmButton: () => cy.get('#confirmButton'),
		confirmResult: () => cy.get('#confirmResult'),

	};
	actionAlertButton() {
		this.get.alertButton().click();
		const condition = true;
		expect(condition).to.be.true;

	};

	timerAlert() {
		this.get.timerAlertButton().click();
	}
	confirmAlert() {
		this.get.confirmButton().click();

	}

}
export const alertPage = new AlertFrameWindow();