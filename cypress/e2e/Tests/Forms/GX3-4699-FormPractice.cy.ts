import{ faker } from '@faker-js/faker';
const firtName = faker.person.firstName();
const email = faker.internet.email();
const genderMobile =faker.phone.number();
const currentAdress = faker.location.direction();

describe('GX3 - 4699 |ToolsQA | Forms | Practice Form',() => {
	beforeEach('',() => {
		cy.visit('https://demoqa.com/automation-practice-form');
		cy.url().should('contain','practice-form');
	});
	it('TC1',() => {
	});

});