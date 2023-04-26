//vars
const randomID = '//p["This text has random Id"]';
const enableAfter = '#enableAfter';
const whiteClass = '[class="mt-4 btn btn-primary"]';
const dangerClass = '[class="mt-4 text-danger btn btn-primary"]';
const visibleAfter = '#visibleAfter';
const disabled = 'be.disabled';
const enabled = 'be.enabled';
const visible = 'be.visible';
const text = 'Color Change';

class Elements {
	get = {
		randomId: () => cy.xpath(randomID),
		enableAfter: () => cy.get(enableAfter),
		whiteClass: () => cy.get(whiteClass),
		dangerClass: () => cy.get(dangerClass),
		visibleAfter: () => cy.get(visibleAfter),
		wait: () => cy.wait(timeValue),
	};

	enabled() {
		this.get.enableAfter().should(enabled);
	}

	disabled() {
		this.get.enableAfter().should(disabled);
	}

	readText() {
		this.get.randomId().should(visible);
	}

	whiteClass() {
		this.get.whiteClass().contains(text);
	}

	dangerClass() {
		this.get.dangerClass().contains(text);
	}

	visibleAfter() {
		this.get.visibleAfter().should(visible);
	}

	wait(tv) {
		this.get.wait(tv);
	}
}

export const e = new Elements();

class TC {
	n01() {
		e.readText().should(visible);
	}

	n02() {
		e.disabled().should(disabled);
	}
	n03() {
		e.wait();
		e.enabled();
	}
	n04() {
		e.whiteClass().contains(text);
		e.wait();
		e.dangerClass().contains(text);
	}
	n05() {
		e.wait();
		e.visibleAfter().should(visible);
	}
}
export const tc = new TC();
