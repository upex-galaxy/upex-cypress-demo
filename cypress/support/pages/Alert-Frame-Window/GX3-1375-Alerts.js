class Alerts {
	get = {
		firtsButtonClickMe: () => cy.get('[id="alertButton"]'),
		secondButtonClickMe: () => cy.get('[id="timerAlertButton"]'),
		thirthButtonClickMe: () => cy.get('#confirmButton'),
		fourthButtonClickMe: () => cy.get('#promtButton'),
		thirthMsjButtonClickme: () => cy.get('[id="confirmResult"]'),
		fourthMsjButtonClickme: () => cy.get('[id="promptResult"]'),
	};

	clickFirtsButtonClickMe() {
		this.get.firtsButtonClickMe().click();
	}
	clickSecondButtonClickMe() {
		this.get.secondButtonClickMe().click();
	}
	clickThirthButtonClickMe() {
		this.get.thirthButtonClickMe().click();
	}
	clickFourthButtonClickMe() {
		return this.get.fourthButtonClickMe().click();
	}
	getThirthMsjButtonClickme() {
		return this.get.thirthMsjButtonClickme().invoke('text');
	}
	getFourthMsjButtonClickme() {
		return this.get.fourthMsjButtonClickme().invoke('text');
	}

	windowAlert({ expectedMsj }) {
		cy.on('window:alert', alert => {
			expect(alert).to.equal(expectedMsj);
		});
	}

	windowConfirm({ expectedMsj, sendOkOption }) {
		cy.on('window:confirm', alert => {
			expect(alert).to.equal(expectedMsj);
			let choiceAlert = sendOkOption === 'true' ? true : false;
			return choiceAlert;
		});
	}
}

export const alertPage = new Alerts();
