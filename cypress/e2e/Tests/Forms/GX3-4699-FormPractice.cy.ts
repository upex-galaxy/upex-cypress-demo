import{ faker } from '@faker-js/faker';
import { formPage } from '@pages/GX3-4699-formsPractice.Page';
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email();
const mobileIn =faker.finance.pin(10);
const currentAddress = faker.location.direction();
//const letterRandoms=faker.string.alpha({ length :1, exclude:['w','q','z','k','j','f','x'] });
const letterRandoms=faker.helpers.arrayElement(['a','t','h','u']);
let state;

describe('GX3 - 4699 |ToolsQA | Forms | Practice Form',() => {
	beforeEach('PCR: Usuario debe estar en la web de Demo QA',() => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('contain','practice-form');
	});
	it('TC1',() => {
		formPage.typeFirthName(firstName);
		formPage.typeLastName(lastName);
		formPage.typeEmail(email);
		formPage.selectRandomsGender();
		formPage.typeMobile(mobileIn);
		//cumpleanos
		formPage.clickDateBirth();
		formPage.selectRandomMonthBirth();
		formPage.selectRandomYearBirth();
		formPage.selectRandomDayBirth();
		formPage.typeRandomsSubjects(letterRandoms);
		formPage.selectRandomHobbies();
		formPage.clickPicture();
		formPage.typeCurrentAddress(currentAddress);
		formPage.selectRandomState().then(estado => {
			state=estado;
		});
		formPage.selectRandomCity();
		formPage.clickSubmitButtons();
		//student name
		formPage.get.resultFirstName().invoke('text').then(rFirstName => {
			const firtsName =Cypress.env('firstName');
			expect(rFirstName).to.contain(firtsName);
		});
		//student email
		formPage.get.resultEmail().invoke('text').then(rEmail => {
			expect(rEmail).to.contain(email);
		});
		//genders
		formPage.get.resultGenders().invoke('text').then(rGenders => {
			const genders =Cypress.env('genders');
			expect(rGenders).to.contain(genders);
		});
		//mobile
		formPage.get.resultMobile().invoke('text').then(rMobile => {
			cy.get('@mobile1').then(mobile => {
				expect(rMobile).to.contain(mobile);
			});
		});
		//Date birth
		formPage.get.resultBirth().invoke('text').then(rFecha => {
			formPage.get.selectBirth().invoke('val').then(fechaN => {
				const date = new Date(rFecha);
				const formatDate=date.toLocaleDateString('en-GB',{ month:'short',day:'2-digit',year:'numeric' });
				expect(formatDate).to.contain(fechaN);
			});
		});

		//subjects
		formPage.get.resultSubjects().invoke('text').then(rSubjects => {
			expect(rSubjects).to.contain(Cypress.env('subjects'));
		});
		//hobbies
		formPage.get.resultHobbies().invoke('text').then(rHobbies => {
			const hobbies = Cypress.env('hobbies');
			expect(rHobbies).to.contain(hobbies);
		});
		//Picture

		//Address
		formPage.get.resultAddress().invoke('text').then(rSAddress => {
			expect(rSAddress).to.contain(currentAddress);
		});
		//State y City
		formPage.get.resultStateCity().invoke('text').then(rStateCity => {
			expect(rStateCity).to.contain(state);
		});

	});

});