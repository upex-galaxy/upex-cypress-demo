class Checkbox {
	getCheck = {
		buttonCheck: () => cy.get('input[type="checkbox"]'),
		checkedTitle: () => cy.get('.rct-title'),
	};
	getToggle = {
		toggle: () => cy.get('[title="Toggle"]'),
		StatusOpen: () => cy.get('button>svg[class="rct-icon rct-icon-expand-open"]'),
		statusClose: () => cy.get('button>svg[class="rct-icon rct-icon-expand-close"]'),
		buttonPlus: () => cy.get('button[class="rct-option rct-option-expand-all"]'),
		buttonMinus: () => cy.get('button[class="rct-option rct-option-collapse-all"]'),
	};
	getResult = {
		first: () => cy.get('#result>span').first(),
		theRestEach: () => cy.get('#result>span'),
	};

	//Actions Checkbock
	clickPrincipalCheck() {
		this.getCheck.buttonCheck().click({ force: true });
	}
	getTitleChecked() {
		this.getCheck.checkedTitle().each(($el) => {
			let text = $el.text();
			cy.wrap($el).should('have.text', text);
		});
	}
	getOtherTitleResult() {
		this.getResult.theRestEach().each(($el, index) => {
			if (index > 0) {
				let text = $el.text();
				cy.wrap($el).should('be.visible').and('contain.text', text).and('have.class', 'text-success');
			}
		});
	}
	/*randomSimpleCheck() {
		this.getCheck.buttonCheck().then(($els) => {
			let $randomsEls = $els[Math.floor(Math.random() * $els.length)];
			cy.log($randomsEls);
			cy.wrap($randomsEls).check({ force: true });
		});
	}*/
	randomMoreThanOneCheck(params) {
		this.getCheck.buttonCheck().then(($els) => {
			let $sliced = $els.slice(2, 3);
			let $sliced1 = $els.slice(6, 8);
			let $sliced2 = $els.slice(10, 13);
			let $sliced3 = $els.slice(15, 16);
			let $joinSliced = [].concat(...$sliced, ...$sliced1, ...$sliced2, ...$sliced3);
			//let $joinSliced = $sliced.concat($sliced1, $sliced2, $sliced3);
			for (var i = 0; i < params; i++) {
				let $randomsEls = $joinSliced[Math.floor(Math.random() * $joinSliced.length)];
				cy.wrap($randomsEls).check({ force: true });
			}
		});
	}
	randomSubdirectoriesCheck(params1) {
		this.getCheck.buttonCheck().then(($els) => {
			/*puede ser de los 1ros, o los ultimos lo hacemos referencia con -, ex:-3
			accede a los 3 ultimos*/
			let $sliced = $els.slice(params1);
			let $randomsliced = $sliced[Math.floor(Math.random() * $sliced.length)];
			cy.wrap($randomsliced).check({ force: true });
		});
	}
	/*randomMenuCheck(params1, params2) {
		this.getCheck.buttonCheck().then(($els) => {
			let $sliced = $els.slice(params1, params2);
			let $randomsEls = $sliced[Math.floor(Math.random() * $sliced.length)];
			cy.wrap($randomsEls).check({ force: true });
		});*/
	randomFolderCheck() {
		//Array de arriba mejorado
		this.getCheck.buttonCheck().then(($els) => {
			let $sliced = $els.slice(2, 3);
			let $sliced1 = $els.slice(6, 8);
			let $sliced2 = $els.slice(9, 13);
			let $sliced3 = $els.slice(14, 16);
			let $joinSliced = [].concat(...$sliced, ...$sliced1, ...$sliced2, ...$sliced3);
			//let $joinSliced = $sliced.concat($sliced1, $sliced2, $sliced3);
			let $randomsEls = $joinSliced[Math.floor(Math.random() * $joinSliced.length)];
			cy.wrap($randomsEls).check({ force: true });
		});
	}
	//Actions Toggle
	clickPrincipalToggle() {
		this.getToggle.toggle().click({ force: true });
	}
	clickToggleClose() {
		this.getToggle.statusClose().each(($el) => {
			cy.wrap($el).click({ multiple: true });
		});
	}
	clickForCollapseToggle() {
		this.getToggle.toggle().then(($el) => {
			for (let i = $el.length - 1; i >= 0; i--) {
				cy.wrap($el[i]).click({ force: true });
			}
		});
	}
	clickButton_expandedAll() {
		this.getToggle.buttonPlus().click({ force: true });
	}
	clickButton_collapseAll() {
		this.getToggle.buttonMinus().click({ force: true });
	}
}
export const checkBox = new Checkbox();
