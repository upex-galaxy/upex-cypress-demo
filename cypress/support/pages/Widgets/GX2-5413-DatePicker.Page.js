import { faker } from '@faker-js/faker';
class datePicker {
	get = {
		SelectDate: () => cy.get('[id="datePickerMonthYearInput"]'),
		Year: () => cy.get('[class$="year-select"]'),
		Month: () => cy.get('[class$="month-select"]'),
		Day: () => cy.get('[class^="react-datepicker__day react-datepicker__day"]:not([class$="outside-month"])'),
		RightArrow: () => cy.get('[class$="navigation--next"]'),
		LeftArrow: () => cy.get('[class$="navigation--previous"]'),
	};

	CurrentDate() {
		const today = new Date();
		const styleDate = { month: '2-digit', day: '2-digit', year: 'numeric' };
		return today.toLocaleDateString('en-US', styleDate);
	}

	ClickOnSelectDate() {
		this.get.SelectDate().click();
	}

	SelectRandomYear() {
		this.get
			.Year()
			.children()
			.then(length => {
				let randomYear = Cypress._.random(0, length.length - 1);
				cy.log(randomYear);
				this.get.Year().select(randomYear);
				randomYear = 1900 + randomYear; // El valor inicial es 1900 según las BR's
				Cypress.env('RandomYear', randomYear);
			});
	}

	SelectRandomMonth() {
		let randomMonth = Cypress._.random(0, 11);
		this.get.Month().select(randomMonth);
		Cypress.env('SelectedMonth', randomMonth);
		randomMonth = randomMonth + 1;
		cy.log(randomMonth);
		Cypress.env('RandomMonth', randomMonth);
	}

	SelectRandomDay() {
		this.get.Day().then(length => {
			let randomDay = Cypress._.random(1, length.length);
			cy.log(randomDay);
			Cypress.env('RandomDay', randomDay);
			this.get.Day().contains(randomDay).click();
		});
	}

	ExpectedDate() {
		const MonthSelect = Cypress.env('RandomMonth').toString().padStart(2, 0);
		const DaySelect = Cypress.env('RandomDay').toString().padStart(2, 0);
		const expectedDate = MonthSelect + '/' + DaySelect + '/' + Cypress.env('RandomYear');
		return expectedDate;
	}

	ClickOnRightArrow() {
		let clicks = Cypress._.random(1, 12);
		cy.log(clicks);
		let i = 0;
		while (i < clicks) {
			this.get.RightArrow().click();
			i = i + 1;
		}
		this.get
			.Month()
			.invoke('val')
			.then(Month => {
				Cypress.env('ActualMonth', Month);
			});
		this.get
			.Year()
			.invoke('val')
			.then(Year => {
				Cypress.env('ActualYears', Year);
			});
	}

	ExpectedArrowButtonDate() {
		const Month = parseInt(Cypress.env('ActualMonth')) + 1;
		const MonthSelect = Month.toString().padStart(2, 0);
		const DaySelect = Cypress.env('RandomDay').toString().padStart(2, 0);
		const expectedDate = MonthSelect + '/' + DaySelect + '/' + Cypress.env('ActualYears');
		return expectedDate;
	}

	ClickOnLeftArrow() {
		let clicks = Cypress._.random(1, 12);
		cy.log(clicks);
		let i = 0;
		while (i < clicks) {
			this.get.LeftArrow().click();
			i = i + 1;
		}
		this.get
			.Month()
			.invoke('val')
			.then(Month => {
				Cypress.env('ActualMonth', Month);
			});
		this.get
			.Year()
			.invoke('val')
			.then(Year => {
				Cypress.env('ActualYears', Year);
			});
	}

	RandomDate() {
		const maxDate = Date.now();
		const timestamp = Math.floor(Math.random() * maxDate);
		return new Date(timestamp).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
	}

	RandomText() {
		let text = faker.random.words(5);
		return text;
	}
}

class DateAndTime {
	get = {
		DateAndTime: () => cy.get('#dateAndTimePickerInput'),
		Year: () => cy.get('[class$=year-read-view]'),
		YearDropdown: () => cy.get('[class$="year-dropdown"]'),
		YearOption: () => cy.get('[class$="year-option"]'),
		YearSelect: () => cy.get('span[class$="option--selected"]'),
		Month: () => cy.get('[class$="month-read-view"]'),
		MonthDropdown: () => cy.get('[class$="month-read-view--down-arrow"]'),
		MonthOption: () => cy.get('[class$="month-option"]'),
		MonthSelect: () => cy.get('span[class$="month-option--selected"]'),
		Day: () => cy.get('[class^="react-datepicker__day react-datepicker__day"]:not([class$="outside-month"])'),
		TimeList: () => cy.get('ul[class$="time-list"]'),
		TimeItem: () => cy.get('li[class*="time-list-item "]'),
		RightArrow: () => cy.get('[class$="navigation--next--with-time"]'),
		LeftArrow: () => cy.get('[class$="navigation--previous"]'),
	};

	currentDateAndTime() {
		const today = new Date();
		const styleDate = { month: 'long', day: 'numeric', year: 'numeric' };
		const styleTime = { hour: 'numeric', minute: 'numeric', hour12: true };
		const currentDate = today.toLocaleDateString('en-US', styleDate);
		const currentTime = today.toLocaleTimeString('en-US', styleTime);
		return `${currentDate} ${currentTime}`;
	}

	ClickOnDateAndTime() {
		this.get.DateAndTime().click();
	}

	SelectedRandomYear() {
		this.get.Year().click();
		this.get.YearOption().then(length => {
			let randomYear = Cypress._.random(1, length.length - 2);
			this.get
				.YearOption()
				.eq(randomYear)
				.invoke('text')
				.then(Year => {
					Cypress.env('DateYear', Year);
					cy.log(Year);
				});
			this.get.YearOption().eq(randomYear).click();
		});
	}

	SelectedRandomMonth() {
		this.get.Month().click();
		this.get.MonthOption().then(length => {
			let randomMonth = Cypress._.random(0, length.length - 1);
			this.get
				.MonthOption()
				.eq(randomMonth)
				.invoke('text')
				.then(Month => {
					Cypress.env('DateMonth', Month);
					cy.log(Month);
				});
			this.get.MonthOption().eq(randomMonth).click();
		});
	}

	SelectedRandomDay() {
		this.get.Day().then(length => {
			let randomDay = Cypress._.random(1, length.length);
			cy.log(randomDay);
			Cypress.env('DateDay', randomDay);
			this.get.Day().contains(randomDay).click();
		});
	}

	SelectedRandomTime() {
		this.get
			.TimeList()
			.children()
			.then(length => {
				let randomTime = Cypress._.random(0, length.length - 1);
				cy.log(randomTime);
				this.get
					.TimeItem()
					.eq(randomTime)
					.invoke('text')
					.then(Time => {
						cy.log(Time);
						Cypress.env('DateTime', Time);
					});
				this.get.TimeItem().eq(randomTime).click();
			});
	}

	ChangeTimeFormat() {
		let Horario = Cypress.env('DateTime').split(':', '2');
		const Hora = Horario[0];
		const Minutos = Horario[1];
		let changeHora;
		let time;
		if (Hora > 12) {
			changeHora = Hora - 12;
			time = changeHora + ':' + Minutos + ' ' + 'PM';
		} else if (Hora == 12) {
			time = Hora + ':' + Minutos + ' ' + 'PM';
		} else if (Hora == '00') {
			time = '12' + ':' + Minutos + ' ' + 'AM';
		} else if (0 < Hora < 12) {
			changeHora = parseInt(Hora);
			time = changeHora + ':' + Minutos + ' ' + 'AM';
		}
		return time;
	}

	ExpectedDate() {
		let prueba = this.ChangeTimeFormat();
		const expectedDate = Cypress.env('DateMonth') + ' ' + Cypress.env('DateDay') + ', ' + Cypress.env('DateYear') + ' ' + prueba;
		return expectedDate;
	}

	ClickOnRightArrow() {
		let clicks = Cypress._.random(1, 12);
		cy.log(clicks);
		let i = 0;
		while (i < clicks) {
			this.get.RightArrow().click();
			i = i + 1;
		}
		this.get
			.Month()
			.invoke('text')
			.then(Month => {
				Cypress.env('ActualMonth', Month);
			});
		this.get
			.Year()
			.invoke('text')
			.then(Year => {
				Cypress.env('ActualYear', Year);
			});
	}

	ClickOnLeftArrow() {
		let clicks = Cypress._.random(1, 12);
		cy.log(clicks);
		let i = 0;
		while (i < clicks) {
			this.get.LeftArrow().click();
			i = i + 1;
		}
		this.get
			.Month()
			.invoke('text')
			.then(Month => {
				Cypress.env('ActualMonth', Month);
			});
		this.get
			.Year()
			.invoke('text')
			.then(Year => {
				Cypress.env('ActualYear', Year);
			});
	}

	ExpectedArrowButtonDate() {
		let prueba = this.ChangeTimeFormat();
		const expectedDate = Cypress.env('ActualMonth') + ' ' + Cypress.env('DateDay') + ', ' + Cypress.env('ActualYear') + ' ' + prueba;
		return expectedDate;
	}
}

export const DatePicker = new datePicker();
export const DateAndTimePicker = new DateAndTime();
