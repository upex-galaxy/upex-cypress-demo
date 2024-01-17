import { alertPage } from '@pages/Alert-Frame-Window/GX3-1375-Alerts';
import { faker } from '@faker-js/faker';
import data from '@data/GX3-1375-Alert.json';
const valueEntered = faker.music.songName();
describe('ToolsQA | Alert-Frame-Window | Alerts', () => {
	beforeEach(() => {
		cy.visit('/alerts');
		cy.url().should('include', data.enpoint);
	});
	it('1376 | TC1: Validar mensaje de alerta del primer botton "Click me" cuando es clickeado', () => {
		alertPage.clickFirtsButtonClickMe();
		alertPage.windowAlert({ expectedMsj: data.AlertMsj1 });
	});
	it('1376 | TC2: Validar mensaje de alerta del segundo botton "Click me" después de 5 segundos', () => {
		alertPage.clickSecondButtonClickMe();
		alertPage.windowAlert({ expectedMsj: data.AlertMsj2 });
	});
	it('1376 | TC3: Validar mensaje del tercer botton "Click me" cuando se clickea "OK"', () => {
		alertPage.clickThirthButtonClickMe();
		alertPage.windowConfirm({ expectedMsj: data.AlertMsj3, sendOkOption: 'true' });

		alertPage.getThirthMsjButtonClickme().then(ActualMsj => {
			expect(ActualMsj).to.equal(data.ElementMsj1);
		});
	});
	it('1376 | TC4: Validar mensaje del tercer botton "Click me" cuando se clickea "Cancel"', () => {
		alertPage.clickThirthButtonClickMe();
		alertPage.windowConfirm({ expectedMsj: data.AlertMsj3, sendOkOption: 'false' });

		alertPage.getThirthMsjButtonClickme().then(ActualMsj => {
			expect(ActualMsj).to.equal(data.ElementMsj2);
		});
	});
	it('1376 | TC5: Validar No visualizar mensaje del cuarto botton "Click me" cuando SOLO se clickea "Ok"', () => {
		alertPage.windowPrompt({ expectedMsj: data.AlertMsj4, sendValueOrOption: 'okOption' });
		alertPage.get.fourthMsjButtonClickme().should('not.exist');
	});
	it('1376 | TC6: Validar No visualizar mensaje del cuarto botton "Click me" cuando SOLO se clickea "Cancel"', () => {
		alertPage.windowPrompt({ expectedMsj: data.AlertMsj4, sendValueOrOption: 'cancelOption' });
		alertPage.get.fourthMsjButtonClickme().should('not.exist');
	});
	it('1376 | TC7: Validar visualizar mensaje del cuarto botton "Click me" cuando se introduce un valor en el prompt', () => {
		alertPage.windowPrompt({ expectedMsj: data.AlertMsj4, sendValueOrOption: valueEntered });
		alertPage.getFourthMsjButtonClickme().then(ActualMsj => {
			expect(ActualMsj).to.equal(`You entered ${valueEntered}`);
		});
	});
});
