import { form } from '@pages/Form.Page.js';

class Functions {

	n01(firstName, lastName, email, userNumber, subjects){
		form.contactData(firstName, lastName, email, userNumber, subjects);
		form.radioButtons();
		form.checkBoxs();
		form.submitButton();
	}

	n02(){
		form.submitButton();
	}

	n03(firstName, lastName, invalidEmail, invalidNum, subjects){
		form.contactData(firstName, lastName, invalidEmail, invalidNum, subjects);
		form.radioButtons();
		form.checkBoxs();
		form.submitButton();
	}
}


export const TC = new Functions();

