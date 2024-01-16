class Alerts {
	get = {
		firtsButtonClickMe: () => cy.get('[id="alertButton"]'),
		secondButtonClickMe: () => cy.get('[id="timerAlertButton"]'),
		thirthButtonClickMe: () => cy.get('#confirmButton'),
		fourthButtonClickMe: () => cy.get('#promtButton'),
		thirthMsjButtonClickme: () => cy.get('[id="confirmResult"]'),
		fourthMsjButtonClickme: () => cy.get('[id="promptResult"]'),
	};
}

export const alert = new Alerts();
