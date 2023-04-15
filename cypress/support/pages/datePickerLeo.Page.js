import { faker } from '@faker-js/faker';

class datePicker {
	get = {
		daySelected: () => cy.get('[class*=day--selected]'),
		monthInput: () => cy.get('[class*=current-month]'),
		yearInput: () => cy.get('[class*=current-month]'),
		selectDateAndTimeInput: () => cy.get('#dateAndTimePickerInput'),
		selectDateInput: () => cy.get('#datePickerMonthYearInput'),
		monthSelect: () => cy.get('[class*=month-select]'),
		yearSelect: () => cy.get('[class*=year-select]'),
		day: () => cy.get('[class*=datepicker__week] [role="option"]'),
		Month: month => cy.get(`[aria-label*='${month}']`),
		monthDateAndTimeImput: () => cy.get('[class*=selected-month]'),
		monthDropdown: () => cy.get('[class*=month-dropdown]'),
		yearDateAndTimeImput: () => cy.get('[class*=selected-year]'),
		yearDropdownOptions: () => cy.get('[class="react-datepicker__year-option"]'),
		timeOptions: () => cy.get('[class*=time-list-item]'),
		selectedMonth: () => cy.get('[class*=selected-month]'),
		selectedYear: () => cy.get('[class*=selected-year]'),
		inputMonthYear: () => cy.get('[class*=hasMonthDropdown]'),
		inputSelectedTime: () => cy.get('[class*=item--selected]'),
	};
	getRandomMonth() {
		let RandomMonth = [];
		this.get
			.monthSelect()
			.children()
			.its('length')
			.then(monthLength => {
				const randomMonth = Cypress._.random(0, monthLength - 1);
				RandomMonth.push(randomMonth + 1);
			});
		return RandomMonth;
	}
	selectRandomMonth(randomMonth) {
		let randomMonthName = [];
		this.get
			.monthSelect()
			.children()
			.then(month => {
				cy.wrap(month)
					.eq(randomMonth - 1)
					.invoke('text')
					.then(nameMonth => {
						randomMonthName.push(nameMonth);
						this.get.monthSelect().select(nameMonth);
						cy.log(randomMonthName);
					});
			});
		return randomMonthName;
	}
	selectRandomYear() {
		let yearValue = [];
		this.get
			.yearSelect()
			.children()
			.its('length')
			.then(yearLength => {
				const randomYear = Cypress._.random(0, yearLength - 1);
				this.get
					.yearSelect()
					.children()
					.then(year => {
						cy.wrap(year)
							.eq(randomYear)
							.invoke('text')
							.then(YearValue => {
								yearValue.push(YearValue);
								this.get.yearSelect().select(yearValue);
							});
					});
			});
		return yearValue;
	}
	selectRandomDay(monthName) {
		let RandomDay = [];
		this.get.Month(monthName).then(day => {
			cy.wrap(day)
				.its('length')
				.then(monthDays => {
					const randomDay = Cypress._.random(0, monthDays - 1);
					cy.wrap(day)
						.eq(randomDay)
						.click()
						.then(daySelected => {
							RandomDay.push(daySelected.text());
						});
				});
		});
		return RandomDay;
	}
	SelectRandomDate() {
		let randomDate = [];
		this.get.selectDateInput().click();
		const monthIndex = this.getRandomMonth();
		const monthName = this.selectRandomMonth(monthIndex);
		const yearValue = this.selectRandomYear();
		cy.get('*').then(() => {
			const randomDayValue = this.selectRandomDay(monthName);
			cy.get('*').then(() => {
				let RandomDay = randomDayValue.toString();
				let RandomMonth = monthIndex.toString();
				const RandomYear = yearValue.toString();
				if (RandomDay < 10) {
					RandomDay = `0${RandomDay}`;
				} else {
					RandomDay = `${RandomDay}`;
				}
				if (RandomMonth < 10) {
					RandomMonth = `0${RandomMonth}`;
				} else {
					RandomMonth = `${RandomMonth}`;
				}
				let date = [`${RandomMonth}/${RandomDay}/${RandomYear}`];
				let dateFormat = date.toString();
				randomDate.push(dateFormat);
				cy.log(dateFormat);
			});
		});
		return randomDate;
	}
	getDateInInput() {
		let DateValue = [];
		this.get
			.selectDateInput()
			.invoke('val')
			.then(dateValue => {
				DateValue.push(dateValue);
			});
		return DateValue;
	}
	getActualDate() {
		let date = new Date();
		let day = date.getDate();
		let month = date.getMonth();
		let monthName = date.toLocaleString('default', { month: 'long' });
		let year = date.getFullYear();
		let hour = date.getHours();
		let minutes = date.getMinutes();
		let time = 'AM';
		let Month = month + 1;
		if (hour >= 12) {
			hour = Math.abs(hour - 12);
			time = 'PM';
		}
		if (hour == 0) {
			hour = Math.abs(hour + 12);
			time = 'AM';
		}
		if (day < 10) {
			day = `0${day}`;
		} else {
			day = `${day}`;
		}
		if (Month < 10) {
			Month = `0${Month}`;
		} else {
			Month = `${Month}`;
		}
		if (minutes < 10) {
			minutes = `0${minutes}`;
		} else {
			minutes = `${minutes}`;
		}
		const actualDateTime = [`${monthName} ${day}, ${year} ${hour}:${minutes} ${time}`];
		const actualDate = [`${Month}/${day}/${year}`];
		const dates = [actualDate, actualDateTime];
		return dates;
	}
	selectRandomMonthDateAndTimeInput() {
		const RandomMonthName = faker.date.month();
		this.get.monthDateAndTimeImput().click();
		this.get.monthDropdown().children().contains(RandomMonthName).click();
		return RandomMonthName;
	}
	selectRandomYearDateAndTimeInput() {
		let year = [];
		let randomIndexYear = [];

		this.get.yearDateAndTimeImput().click();
		this.get
			.yearDropdownOptions()
			.its('length')
			.then(IndexValue => {
				randomIndexYear.push(Cypress._.random(1, IndexValue - 2));
			});
		this.get
			.yearDropdownOptions()
			.eq(randomIndexYear)
			.click()
			.then(yearValue => {
				year.push(yearValue.text());
			});
		return year;
	}
	selectRandomTime() {
		let randomTime = [];
		this.get
			.timeOptions()
			.its('length')
			.then(hourIndex => {
				const randomIndex = Cypress._.random(0, hourIndex - 1);
				this.get
					.timeOptions()
					.eq(randomIndex)
					.click()
					.then(timeValue => {
						randomTime.push(timeValue.text());
					});
			});
		return randomTime;
	}
	selectRandonDateAndTimeInput() {
		let randomDateTime = [];
		this.get.selectDateAndTimeInput().click();
		const randomMonth = this.selectRandomMonthDateAndTimeInput();
		const randomYear = this.selectRandomYearDateAndTimeInput();
		cy.get('*').then(() => {
			const randomDay = this.selectRandomDay(randomMonth);
			const randomTime = this.selectRandomTime();
			cy.get('*').then(() => {
				const RandomMonth = randomMonth;
				const RandomYear = randomYear.toString();
				let RandomDay = randomDay.toString();
				let RandomTime = randomTime.toString();
				let completeHour = RandomTime.split(':');
				let hour = parseInt(completeHour[0]);
				let minutes = completeHour[1];
				let time = 'AM';

				if (hour >= 12) {
					hour = Math.abs(hour - 12);
					time = 'PM';
				}
				if (hour == 0) {
					hour = Math.abs(hour + 12);
					time = 'AM';
				}

				let date = [`${RandomMonth} ${RandomDay}, ${RandomYear} ${hour}:${minutes} ${time}`];
				let dateFormat = date.toString();
				randomDateTime.push(dateFormat);
			});
		});
		return randomDateTime;
	}
	getDateAndTimeInput() {
		let ValueDateAndTime = [];
		this.get
			.selectDateAndTimeInput()
			.invoke('val')
			.then(valueDateAndTime => {
				ValueDateAndTime.push(valueDateAndTime);
			});
		return ValueDateAndTime;
	}
	getMonthInputValue() {
		let monthValue = [];
		this.get.selectedMonth().then(selectedMonthValue => {
			monthValue.push(selectedMonthValue.text());
		});
		return monthValue;
	}
	getYearInputValue() {
		let yearValue = [];
		this.get.selectedYear().then(selectedYearValue => {
			yearValue.push(selectedYearValue.text());
		});
		return yearValue;
	}
	getMonthYearInputValue() {
		let monthYearValue = [];
		this.get.inputMonthYear().then(inputValue => {
			monthYearValue.push(inputValue.text());
		});
		return monthYearValue;
	}
	getDaySelectedInput() {
		let dayValue = [];
		this.get.daySelected().then(day => {
			dayValue.push(day.text());
		});
		return dayValue;
	}
	getTimeSelectedInput() {
		let timeValue = [];
		this.get.inputSelectedTime().then(time => {
			timeValue.push(time.text());
		});
		return timeValue;
	}
}

export const DatePicker = new datePicker();
