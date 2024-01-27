export function getNameLocation(fullValue) {
	const splitValues = fullValue.split('\\');
	const name = splitValues.pop();
	const location = splitValues.join('\\') + '\\';

	return { location, name };
}
