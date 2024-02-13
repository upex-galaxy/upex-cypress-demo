class Form {
	get = {
		firstName : () => cy.get('#firstName'),
		lastName : () => cy.get('#lastName'),
		email : () => cy.get('#userEmail'),
		mobile : () => cy.get('#userNumber'),
		calendar : () => cy.get('#dateOfBirthInput'),
		monthSelector : () => cy.get('.react-datepicker__month-select'),
		yearSelector : () => cy.get('.react-datepicker__year-select'),
		validDaysSelector : () => cy.get('.react-datepicker__week > div:not(.react-datepicker__day--outside-month)'),
		subjects : () => cy.get('#subjectsContainer'),
		currentAddress : () => cy.get('#currentAddress'),
		gender : () => cy.get('.custom-radio > input'),
		hobbies : () => cy.get('.custom-checkbox > input'),
		uploadFile : () => cy.get('#uploadPicture'),
		state : () => cy.get('#state'),
		city : () => cy.get('#city'),
		stateAndCityOptions : () => cy.get('[class$=option]'),
		selectedStateOrCity : () => cy.get('[class$=singleValue'),
		submitButton : () => cy.get('#submit'),
		modalHeader : () => cy.get('.modal-header'),
	};

	completeInputs(firstName, lastName, email, mobile, subjects, address) {
		this.get.firstName().type(firstName);
		this.get.lastName().type(lastName);
		this.get.email().type(email);
		this.get.mobile().type(mobile);
		this.get.subjects().type(`${subjects}{enter}`);
		this.get.currentAddress().type(address);
	}
	readSubject() {
		return this.get.subjects().then(subject => {
			return cy.wrap(subject).invoke('text');
		});
	}
	selectRandomOption(option) {
		return option().its('length').then(optionsCount => {
			const randomOption = Math.floor(Math.random() * optionsCount);
			return option().eq(randomOption).invoke('text').then(text => {
				option().eq(randomOption).click({ force: true });
				return cy.wrap({index: randomOption, value: text});
			});
		});
	}
	getTodayDate() {
		const today = new Date();
		const day = today.getDate().toString().padStart(2, '0');
		const month = today.toLocaleString('en-GB', { month: 'short' });
		const year = today.getFullYear();
		return `${day} ${month} ${year}`;
	}
	selectRandomDateOfBirth() {
		this.get.calendar().click();
		return this.selectRandomMonth().then(month => {
			return this.selectRandomYear().then(year => {
				return this.selectRandomDay().then(day => {
					const formattedDate = `${day} ${month} ${year}`;
					return formattedDate;
				});
			});
		});
	}
	selectRandomMonth() {
		return this.get.monthSelector().then($selectMonth => {
			const optionsCount = $selectMonth.find('option').length;
			const randomOption = Math.floor(Math.random() * optionsCount);
			cy.wrap($selectMonth).select(randomOption).then(() => {
				const fullMonthName = $selectMonth.find('option:selected').text();
				const selectedMonthName = fullMonthName.substring(0, 3);
				return selectedMonthName;
			});

		});
	}
	selectRandomYear() {
		const currentYear = new Date().getFullYear();
		return this.get.yearSelector().then($selectYear => {
			const arrayOfYears = $selectYear.find('option').toArray();
			const validYears = arrayOfYears.filter(years => parseInt(years.text) <= currentYear);
			const randomOption = Math.floor(Math.random() * validYears.length);
			return cy.wrap($selectYear).select(validYears[randomOption].value).then(() => {
				const selectedYearValue = validYears[randomOption].text;
				return selectedYearValue;
			});
		});
	}
	selectRandomDay() {
		return this.get.validDaysSelector().then($days => {
			const optionsCount = $days.length;
			const randomOption = Math.floor(Math.random() * optionsCount);
			return cy.wrap($days).eq(randomOption).invoke('text').then(dayText => {
				return cy.wrap($days).eq(randomOption).click().then(() => {
					const dayNumber = parseInt(dayText, 10);
					const formattedDayText = dayNumber < 10 ? `0${dayNumber.toString()}` : dayText;
					return formattedDayText;
				});
			});
		});
	}
	selectFile() {
		this.get.uploadFile().selectFile('cypress/fixtures/images/upexlogo.png');
	}
	selectState(option) {
		this.get.state().click();
		return this.selectRandomOption(option);
	}
	selectCity(option) {
		this.get.city().click();
		return this.selectRandomOption(option);
	}
	submitForm() {
		this.get.submitButton().click({force:true});
	}


}
export const formPage = new Form();