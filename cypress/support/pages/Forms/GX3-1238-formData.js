import { faker } from '@faker-js/faker';

class FormData {
	constructor() {
		this.firstName = faker.name.firstName();
		this.lastName = faker.name.lastName();
		this.email = faker.internet.email();
		this.mobile = faker.phone.phoneNumber('##########');
		this.hobbies = this.createHobbies();
		this.address = faker.address.streetAddress();
	}

	createHobbies() {
		const hobbies = ['Sport', 'Reading', 'Music'];
		const numberHobbies = faker.datatype.number({ min: 1, max: 3 });
		const uniqueHobbies = new Set();

		while (uniqueHobbies.size < numberHobbies) {
			const hobby = faker.helpers.arrayElement(hobbies);
			uniqueHobbies.add(hobby);
		}

		return uniqueHobbies;
	}
}

export default FormData;
