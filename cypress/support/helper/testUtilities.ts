export function parseCurrencyNum(priceString: string) {
	return parseFloat(priceString.replace('$', '').replace(',', ''));
}
