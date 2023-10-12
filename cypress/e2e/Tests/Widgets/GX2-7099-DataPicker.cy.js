import { removeLogs } from '@helper/RemoveLogs';
import { dataPickerPage } from '@pages/Widgets/GX2-7099-DataPicker.Page';
import data from '@data/GX2-7099-DataPicker.json';
removeLogs();
describe('🪶ToolsQA | Widgets | Date Picker', () => {
	beforeEach('PCR: Situarse en la Website Demoqa en el endpoint data-picker', () => {
		cy.visit('/date-picker');
		cy.url().should('equal', data.Url);
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

	it('7100 | TC3: Validar poder seleccionar/escribir el año 1900', () => {
		dataPickerPage.TypeSelectDate({ year: '1900' }).should('contain', '1900');
	});

	it('7100 | TC4: Validar poder seleccionar/escribir el año 2100', () => {
		dataPickerPage.TypeSelectDate({ year: '2100' }).should('contain', '2100');
	});
	//fail TC5
	it.skip('7100 | TC5: Validar NO poder seleccionar/escribir el año 1899', () => {
		dataPickerPage.TypeSelectDate({ year: '1899' }).should('not.contain', '1899');
	});
	//fail TC6
	it.skip('7100 | TC6: Validar NO poder seleccionar/escribir el año 2101', () => {
		dataPickerPage.TypeSelectDate({ year: '2101' }).should('not.contain', '2101');
	});

	it('7100 | TC7: Validar funcionalidad de left y right button de Month pagination de Select Date', () => {
		//right button (Next)

		dataPickerPage.ValidateFunctionalityButtonMonth({ target: 'Select Date', button: 'Next' }).then(Months => {
			let [beforeMonth, afterMonth] = Months;
			expect(afterMonth).greaterThan(beforeMonth);
		});

		//left button (Prev)

		dataPickerPage.ValidateFunctionalityButtonMonth({ target: 'Select Date', button: 'Prev' }).then(Months => {
			let [beforeMonth, afterMonth] = Months;
			expect(afterMonth).to.below(beforeMonth);
		});
	});

	it('7100 | TC8: Validar que el background del día seleccionado sea blue en Select Date', () => {
		dataPickerPage.ValidateColorBlue('Select Date').invoke('css', 'background-color').should('contain', data.BlueColor);
	});

	it('7100 | TC9: Validar Default values de Date and time', () => {
		dataPickerPage.DataAndTime({}).then(TimeValues => {
			let [month, day, year, HourAndMinutes, formattAmPm] = TimeValues;

			const expectedCompleteDate = `${month} ${day}, ${year} ${HourAndMinutes} ${formattAmPm}`;

			dataPickerPage.get
				.inputDateAndTime()
				.invoke('val')
				.then(currentDate => {
					// Compara la fecha y hora completas permitiendo una diferencia de hasta 5 minutos
					const expectedTime = new Date(expectedCompleteDate).getTime();
					const actualTime = new Date(currentDate).getTime();

					const minuteDiff = Math.abs((actualTime - expectedTime) / (1000 * 60));

					expect(currentDate).to.contain(`${month} ${day}, ${year}`);
					// Comprueba si la diferencia en minutos es menor o igual a 5
					expect(minuteDiff).to.be.lte(5);
				});
		});
	});

	it('7100 | TC10: Validar Formato de fecha de Date and time', () => {
		const randomMonth = Cypress._.random(1, 11);

		dataPickerPage.DataAndTime({ monthNumber: randomMonth }).then(TimeValues => {
			let [monthName, day, year, HourAndMinutes, formattAmPm] = TimeValues;

			const expectedCompleteDate = `${monthName} ${day}, ${year} ${HourAndMinutes} ${formattAmPm}`;

			dataPickerPage.get
				.inputDateAndTime()
				.invoke('val')
				.then(currentDate => {
					// Compara la fecha y hora completas permitiendo una diferencia de hasta 5 minutos
					const expectedTime = new Date(expectedCompleteDate).getTime();
					const actualTime = new Date(currentDate).getTime();

					const minuteDiff = Math.abs((actualTime - expectedTime) / (1000 * 60));

					expect(currentDate).to.contain(`${monthName} ${day}, ${year}`);
					// Comprueba si la diferencia en minutos es menor o igual a 5
					expect(minuteDiff).to.be.lte(5);
				});
		});
	});

	it('7100 | TC11: Validar el rango de meses de January a December de Date and time', () => {
		dataPickerPage.ValidateRangeMonth().then(CurrentMonth => {
			const monthRanges = Object.values(data.MonthSelect);
			monthRanges.map(monthsExpect => {
				expect(CurrentMonth).to.include(monthsExpect);
			});
		});
	});

	it('7100 | TC12: Validar funcionalidad de left y right button de Month pagination de Date and time', () => {
		//right button (Next)

		dataPickerPage.ValidateFunctionalityButtonMonth({ target: 'Data Time', button: 'Next' }).then(Months => {
			let [beforeMonth, afterMonth] = Months;
			expect(afterMonth).greaterThan(beforeMonth);
		});

		//left button (Prev)

		dataPickerPage.ValidateFunctionalityButtonMonth({ target: 'Data Time', button: 'Prev' }).then(Months => {
			let [beforeMonth, afterMonth] = Months;
			expect(afterMonth).to.below(beforeMonth);
		});
	});
	it('7100 | TC13: Validar el rango de tiempo de 00:00 a 23:45 de Date and time', () => {
		dataPickerPage.ValidateRangeTime().then(CurrentTime => {
			const timeRanges = Object.values(data.TimeRange);
			timeRanges.map(rangeTimeExpect => {
				expect(CurrentTime).to.include(rangeTimeExpect);
			});
		});
	});
});
