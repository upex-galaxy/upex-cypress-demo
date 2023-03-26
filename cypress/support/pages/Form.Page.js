class Form {
	get = {
		inputFirstName: () => cy.get('input[id="firstName"]'),
		inputLastName: () => cy.get('input[id="lastName"]'),
		inputEmail: () => cy.get('input[id="userEmail"]'),
		radioBtnGender: () => cy.get('.custom-radio input'),
		inputUserNumber: () => cy.get('input[id="userNumber"]'),
		//Datepicker
		inputDatepicker: () => cy.get('#dateOfBirthInput'),
		selectMonth: () => cy.get('select[class*="month-select"]'),
		selectYear: () => cy.get('select[class*="year-select"]'),
		selectDay: () => cy.get('.react-datepicker__day'),

		inputSubjects: () => cy.get('#subjectsWrapper').find('input'),
		dropdownSubjectsChildren: () => cy.get('#subjectsWrapper').find('.subjects-auto-complete__menu-list').children(),
		checkboxHobbies: () => cy.get('#hobbiesWrapper input'),
		inputSelectPicture: () => cy.get('#uploadPicture'),
		textarea: () => cy.get('#currentAddress'),
		dropdownSelectState: () => cy.get('#state input'),
		dropdownSelectStateChildren: () => cy.get('#state').find('div[class*="menu"]').children().children(),
		dropdownSelectCity: () => cy.get('#city input'),
		dropdownSelectCityChildren: () => cy.get('#city').find('div[class*="menu"]').children().children(),
		btnSubmit: () => cy.get('#submit'),
		btnClose: () => cy.get('#close-fixedban'),
		containerModal: () => cy.get('.modal-content'),
	};
}

export const form = new Form();
