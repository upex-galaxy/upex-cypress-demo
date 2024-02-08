import { faker } from '@faker-js/faker';

class DateGenerator {
	constructor(rango, menu) {
		var randomDate;
		const yearToday = new Date().getFullYear();
		const monthToDay = new Date().getMonth() + 1;
		const dayToday = new Date().getDate();

		if (menu === 'YearAndMonth') {
			if (rango === 'mayor') {
				randomDate = faker.date.between(`${yearToday}-${monthToDay}-${dayToday}`, '2034-12-31');
			} else {
				randomDate = faker.date.between('2014-01-01', `${yearToday}-${monthToDay}-${dayToday}`);
			}
		} else {
			if (rango === 'mayor') {
				randomDate = faker.date.between(`${yearToday}-${monthToDay}-${dayToday}`, '2100-12-31');
			} else {
				randomDate = faker.date.between('1900-01-01', `${yearToday}-${monthToDay}-${dayToday}`);
			}
		}

		const currentMinutes = randomDate.getMinutes();
		const adjustedMinutes = Math.ceil(currentMinutes / 15) * 15;
		randomDate.setMinutes(adjustedMinutes);

		const hours = randomDate.getHours().toString().padStart(2, '0');
		const minutes = randomDate.getMinutes().toString().padStart(2, '0');

		this.time12h = randomDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
		this.time24h = `${hours}:${minutes}`;
		this.year = randomDate.getFullYear().toString();
		this.month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(randomDate);
		this.monthSlice = this.month.charAt(0).toUpperCase() + this.month.slice(1);
		this.monthNumber = (randomDate.getMonth() + 1).toString().padStart(2, '0');
		this.daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		this.dayOfWeekNumber = randomDate.getDay();
		this.dayOfWeek = this.daysOfWeek[this.dayOfWeekNumber];
		this.day = randomDate.getDate().toString().padStart(2, '0');
	}
}

export default DateGenerator;
