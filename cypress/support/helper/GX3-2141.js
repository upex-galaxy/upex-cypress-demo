export function getGenderString(value) {
	if (value === 0) {
		return (value = 'Male');
	} else if (value === 1) {
		return (value = 'Female');
	} else {
		return (value = 'Other');
	}
}

export function getHobbiesString(hobbies) {
	if (hobbies === 0) {
		return (hobbies = 'Sports');
	} else if (hobbies === 1) {
		return (hobbies = 'Reading');
	} else {
		return (hobbies = 'Music');
	}
}

export function yearString() {
	var numero = Math.floor(Math.random() * (2024 - 1900 + 1)) + 1900;
	var resultadoString = numero.toString();
	return resultadoString;
}
