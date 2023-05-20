import { removeLogs } from '@helper/RemoveLogs';
import { datePicker } from '@pages/GX2-2979-DatePicker/datePickerPage';
removeLogs();
import dayjs from 'dayjs';

describe('GX2-2979 | ToolsQA | Widgets | Date Picker', () => {
	let data;
	before('fixture', () => {
		cy.fixture('data/datePicker').then(dato => {
			data = dato;
		});
	});
	beforeEach('User must be situated in the website', () => {
		cy.visit('https://demoqa.com/date-picker');
	});
	it('2980 | TC1:Validate current day ', () => {});
	it('2980 | TC2:Validate the input day format is ${Month}/${Day}/${Year}', () => {});
	it('2980 | TC3:Validate the list of years (1900-2100)', () => {
		datePicker.get.datePicker().click();
		datePicker.clicklistOfYear();
		datePicker.checkValuesYear();
	});
	it('2980 | TC4:Validate the list of months in the year (January-December)', () => {
		datePicker.get.datePicker().click();
		datePicker.clicklistOfYear();
		cy.get('.react-datepicker__month-select').within(() => {
			cy.get('option').each(($option, index) => {
				cy.wrap($option)
					.invoke('text')
					.then(text => {
						expect(text).to.be.equal(data.months[index]);
					});
			});
		});
	});
	it('2980 | TC4:Validate in the month pagination the arrows button', () => {});
	it('2980 | TC4:Validate the background color blue when the day is selected', () => {});
});
