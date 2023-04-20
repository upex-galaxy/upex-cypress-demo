//vars
const fN = '#firstName';
const lN = '#lastName';
const uE = '#userEmail';
const uN = '#userNumber';
const uS = '#subjectsInput';

//radioButtons
const radio1 = '#gender-radio-1';
const radio2 = '#gender-radio-2';
const radio3 = '#gender-radio-3';
//checkboxs
const check1 = '#hobbies-checkbox-1';
const check2 = '#hobbies-checkbox-2';
const check3 = '#hobbies-checkbox-3';
//submitButton
const submit = '#submit';

//buttonConditions
const forced = { force: true };

class Form{

	get = {
		firstName: ()=> cy.get(fN),
		lastName: ()=> cy.get(lN),
		userEmail: ()=> cy.get(uE),
		userNumber: ()=> cy.get(uN),
		userSubjects: ()=> cy.get(uS),
		radio1: ()=> cy.get(radio1),
		radio2: ()=> cy.get(radio2),
		radio3: ()=> cy.get(radio3),
		check1: ()=> cy.get(check1),
		check2: ()=> cy.get(check2),
		check3: ()=> cy.get(check3),
		submit: ()=> cy.get(submit)
	};

	contactData(data1, data2, data3, data4, data5) {
		this.get.firstName().type(data1);
		this.get.lastName().type(data2);
		this.get.userEmail().type(data3);
		this.get.userNumber().type(data4);
		this.get.userSubjects().type(data5);
	}
    
	radioButtons() {
		this.get.radio1().click(forced);
		this.get.radio2().click(forced);
		this.get.radio3().click(forced);
	}
    
	checkBoxs(){
		this.get.check1().click(forced);
		this.get.check2().click(forced);
		this.get.check3().click(forced);
	}
    
	submitButton(){
		this.get.submit().click(forced);
	}

}



export const form = new Form(); 