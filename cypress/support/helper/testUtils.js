export function getRealValue(value) {
	const valores = value.split(':');
	const valorReal = valores[1].trim();
	return valorReal;
}

export function parseCurrencyNum(priceString) {
	return parseFloat(priceString.replace('$', '').replace(',', ''));
}
