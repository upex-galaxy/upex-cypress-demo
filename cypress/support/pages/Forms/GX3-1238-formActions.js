import { faker } from '@faker-js/faker';

class FormAction {
	selectFile() {
		cy.get('#uploadPicture').selectFile('cypress/fixtures/images/upexlogo.png');
	}

	typeText(id, data) {
		cy.get(`#${id}`).type(data);
	}

	selectHobbies(hobbies) {
		hobbies.forEach(label => {
			cy.contains('.custom-control-label', label).first().click();
		});
	}

	selectSubject() {
		const subjects = faker.helpers.arrayElement(['a', 'c', 'd', 'e', 'g', 'h', 'i', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'y']);
		cy.get('#subjectsInput').type(subjects);
		cy.get('.subjects-auto-complete__menu').find(':first-child').should('exist').first().click();

		cy.get('.subjects-auto-complete__multi-value__label').invoke('text').as('subject');
	}

	selectElements(id) {
		cy.get(`#${id}`).click();
		cy.get(`#${id}`)
			.children()
			.last()
			.then(outerHTML => {
				const text = outerHTML.html();
				const parserDOM = new DOMParser();
				const doc = parserDOM.parseFromString(text, 'text/html');
				const div = doc.querySelector('.css-11unzgr');
				const childrenElements = div.children;
				const ids = Array.from(childrenElements).map(elements => elements.id);
				const idRandom = ids[Math.floor(Math.random() * ids.length)];

				cy.get(`#${idRandom}`).click();
			});

		cy.get(`#${id} .css-1uccc91-singleValue`).invoke('text').as('selection');

		cy.get(`#${id} .css-1uccc91-singleValue`).invoke('text').as(id);
	}

	selectGender() {
		cy.get('label[for^="gender-radio"]').then($labels => {
			const randomIndex = Math.floor(Math.random() * $labels.length);
			cy.wrap($labels[randomIndex]).click().should('have.attr', 'for');
		});

		cy.get('input[name="gender"]:checked + .custom-control-label').invoke('text').as('Gender');
	}

	selectDate() {
		const randomDate = faker.date.between('1950-01-01', '2023-12-31');

		const year = randomDate.getFullYear().toString();
		const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(randomDate);
		const monthSlice = month.charAt(0).toUpperCase() + month.slice(1);
		const day = randomDate.getDate().toString().padStart(2, '0');
		const dayClass = `.react-datepicker__day--0${day}`;

		cy.get('.react-datepicker__input-container').click();
		cy.wait(500);

		cy.get('.react-datepicker__year-select').should('be.visible').select(year);
		cy.wait(500);
		cy.get('.react-datepicker__month-select').should('be.visible').select(monthSlice);
		cy.wait(500);

		if (day > 15) {
			cy.get(dayClass).then(elements => {
				if (elements.length === 2) {
					cy.get(dayClass).eq(1).first().click();
				} else if (elements.length === 1) {
					cy.get(dayClass).first().click();
				} else {
					throw new Error('No se pudo encontrar el dia indicado para la fecha');
				}
			});
		} else {
			cy.get(dayClass).first().click();
		}

		return `${day} ${month},${year}`;
	}

	clicSubmit() {
		cy.get('#submit').click();
	}
}

export default FormAction;
