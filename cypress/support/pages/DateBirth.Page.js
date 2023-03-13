

class DateBirth{

	clickDataPicker(){
		cy.get('#dateOfBirthInput').click(); //click en el data picker
	}
	selectYear(){
		cy.get('.react-datepicker__year-select').select(100); //selecciono el año
	}

	selectMonth(){
		cy.get('.react-datepicker__month-select').select(4); //selecciono el mes
	}

	selectDay(){
		cy.get('[class*="react-datepicker__day--018"]').click(); //click en el dia 
	}
}

export const datebirth = new DateBirth; 