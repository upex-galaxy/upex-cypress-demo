import { removeLogs } from '@helper/RemoveLogs';
import { dataPickerPage } from '@pages/Widgets/GX2-7099-DataPicker.Page';
import data from '@data/GX2-7099-DataPicker.json';
removeLogs();
describe('🪶ToolsQA | Widgets | Date Picker', () => {
	beforeEach('PCR: Situarse en la Website Demoqa en el endpoint data-picker', () => {
		cy.visit('/date-picker');
	});

	it('7100 | TC1: Validar Default values de Select Date', () => {
		dataPickerPage.selectDateDefaultValues().then(Dates => {
			let [month, day, year] = Dates;
			dataPickerPage.get
				.inputSelectDate()
				.invoke('val')
				.then(currentDate => {
					expect(currentDate).to.contain(`${month}/${day}/${year}`);
				});
		});
	});

	it('7100 | TC2: Validar Formato de fecha de Select Date', () => {
		dataPickerPage.SelectDateRandom().then(values => {
			let [month, day, year] = values;
			dataPickerPage.get
				.inputSelectDate()
				.invoke('val')
				.then(formatCurrentDate => {
					let randomDate = `${month}/${day}/${year}`;
					expect(formatCurrentDate).to.eq(randomDate);
				});
		});
	});
});
