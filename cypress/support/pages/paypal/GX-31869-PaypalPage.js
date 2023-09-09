class Paypal {
	elements = {
		percentage: () => cy.get('[name = "percentage"]'),
		fee: () => cy.get('[name="fee"]'),
		toGet: () => cy.get('[name="toGet"]'), //para recibir
		commission: () => cy.get('[name="fees1"]'), //la comisión es

		readonly: () => cy.get('[readonly="readonly"]'), //hay que enviar
		amountSent: () => cy.get('[name="amountSent"]'), //si se envían
		recibe: () => cy.get('[name="amountAfterFees"]'), //reciben
		commissionSent: () => cy.get('[name="fees"]'),
		message: () => cy.get('#mensaje'),
		message1: () => cy.get('#mensaje1'),
	};
	calculateToGet(toGet, fee, commission) {
		const value = (toGet + fee) / (1 - commission);
		return parseFloat(value.toFixed(2));
	}
	calculateamountSent(amountSent, fee, commission) {
		const value = amountSent - (amountSent * commission + fee);
		return parseFloat(value.toFixed(2));
	}
}
export const paypal = new Paypal();
