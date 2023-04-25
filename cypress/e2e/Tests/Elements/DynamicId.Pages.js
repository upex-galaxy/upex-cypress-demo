//Selectors
export const URL = 'https://demoqa.com/dynamic-properties';
const idTxt = '//p["This text has random Id"]';
const firstButton = '#enableAfter';
const lastButton = '#visibleAfter';
const colorButton = '#colorChange';

//conditions
const enabled = 'be.enabled';
const disabled = 'be.disabled';
const visible = 'be.visible';

//classes
const haveClass = 'have.class';
const initialClass = 'initial-class';
const addClass = 'addClass';
const newClass = 'new-class';
//text variable

//VALUES
const TVALUE = 5000;

class Select {
	get = {
		//din: () => cy.xpath(idTxt),
		din: () => cy.contains('This text has random Id'),
		WAIT: () => cy.wait(TVALUE),
		firstButton: () => cy.get(firstButton),
		colorButton: () => cy.get(colorButton),
		lastButton: () => cy.get(lastButton),
	};

	textDynamic() {
		this.get.din();
	}

	itsDisabled() {
		this.get.firstButton();
	}

	WAIT() {
		this.get.WAIT();
	}

	itsEnabled() {
		this.get.firstButton().contains('Will enable 5 seconds');
	}

	classChanges() {
		this.get.colorButton();
		this.get.colorButton();
		this.get.colorButton();
	}
}

export const select = new Select();

class Functions {
	//validar existencia del elemento 1
	n01() {
		select.textDynamic().should(visible);
	}
	// elemento  2 existe y esta DESHABILITADO
	n02() {
		select.itsDisabled().should(disabled);
	}
	//elemento 2 pasa a estar HABILITADO
	n03() {
		select.WAIT;
		select.itsEnabled().should(enabled);
	}
	// Elemento 3 cambia de color
	n04() {
		select.classChanges().should(haveClass, initialClass);
		select.classChanges().invoke(addClass, newClass);
		select.classChanges().should(haveClass, newClass);
	}
	//validar existencia de elemento 4
	n05() {
		select.WAIT;
	}
}

export const TC = new Functions();
