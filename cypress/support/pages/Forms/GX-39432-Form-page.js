class FormPage {
	get = {
		inputFirstName: () => cy.get('#firstName'),
		inputEmail: () => cy.get('#userEmail'),
		inputLastName: () => cy.get('#lastName'),
		genderMale: () => cy.get('[for="gender-radio-1"]'),
		genderFemale: () => cy.get('[for="gender-radio-2"]'),
		genderOther: () => cy.get('[for="gender-radio-3"]'),
		inputMobile: () => cy.get('#userNumber'),
		inputDateOfBirthInput: () => cy.get('[class="react-datepicker-wrapper"]'),
		inputMonth: () => cy.get('[select[class="react-datepicker__month-select"]'),
		inputYear: () => cy.get('[class="react-datepicker__year-select"]'),
		inputWeek: () => cy.get('[class*="react-datepicker__day--"]:not([class$="outside-month"])'),
		inputSubjects: () => cy.get('#subjectsContainer'),
		checkboxHobbiesSports: () => cy.get('#hobbies-checkbox-1'),
		checkboxHobbiesReading: () => cy.get('#hobbies-checkbox-2'),
		checkboxHobbiesMusic: () => cy.get('#hobbies-checkbox-3'),
		selectPicture: () => cy.get('#uploadPicture'),
		addressTextarea: () => cy.get('#currentAddress'),
		selectState: () => cy.get('.css-1hwfws3').eq(2),
	};
}

export const Form = new FormPage();
