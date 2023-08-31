//* Arrange (Declaraciones de Variables y Atributos) => Constructor == instanciar el Driver / declarar variables.
class CalculatorPage {
	//*propiedades

	get = {
		// obtener "Locators"
		// input 0.30usd
		Rate: () => cy.get('#fee'), //*propiedad y el metodo que arroja un elemento
		Commision: () => cy.get('#percentage'),
		//Inputs para recibir
		toGetInput: () => cy.get('input[name="toGet"]'),
		toSendInput: () => cy.get('[name="toCharge"]'), //input para "Hay que Enviar"
		InputComision: () => cy.get('[name="fees1"]'), //La Comisión es de:

		// Input para enviar
		InputEnviar: () => cy.get('input[name="amountSent"]'), //input para enviar
		InputComission: () => cy.get('[name="fees"]').equal(1),
		InputRecibe: () => cy.get('name=["amountAfterFees"]'),
	};

	//* Act/Methods (Definen las interacciones del Usuario y Algoritmos de la página)

	//30985 | TC1: Validar cálculo de "Hay que Enviar" cuando el monto es válido'
	//metodo para tipear el monto agregando un argumento
	typeInputComision(num) {
		this.get.InputComision().type(num);
	}
	//metodo para invocar el valor agregando un argumento de input
	GetValueComision(ValueComision) {
		return ValueComision.invoke('val');
	}
	//funcion con promesa donde se debe obtener un valor primero y luego debe ejecutarse otra accion para eliminar los separadores
	RealValue(ValueComision) {
		return this.GetValueComision(ValueComision).then(val => {
			//con el then tomara el valor obtenido
			let Value = val.replaceAll('.', ''); //Reemplaza todos los puntos con una cadena vacía para eliminar los separadores de miles.
			let ValueMod = Value.replace(',', '.'); //Luego, reemplaza todas las comas por puntos, para garantizar un formato decimal válido.
			let ValueReal = parseFloat(ValueMod); // Convierte la cadena resultante en un número de punto flotante (decimal).
			return ValueReal; //devuelve el valor numérico obtenido después de todas las transformaciones.
		});
	}
	//metodo para calcular la comision
	CalculoFormula(Monto, Rate, Comision) {
		let formula = (Monto + Comision) / (1 - Rate); //elcalculo se esta guardando en una variable
		cy.log(formula);
		return parseFloat(formula).toFixed(2); //Luego de calcular la fórmula, se utiliza parseFloat() para asegurar de que el resultado sea interpretado como un número en punto flotante (decimal). Luego se utiliza .toFixed(2) para redondear el número a dos decimales.
	}
}

// 	// .invoke('val')
// 	// .then(toSendInput => {
// 	// 	expect(toSendInput).to.equal(ObtValue);
// 	// });

// //esta tipeando el monto 100 en recibir
// toGetInput().type(data.CalculoRecibir.montoParaRecibir);
// //aca se debe validar que el resultado de la formula se igual al resultado de páypal en el campo "Hay que Enviar"

// toGetInput().should('have.value', data.CalculoRecibir.montoParaRecibir);
// InputEnviar().should('have.value', ObtValue);
// InputComision().should('have.value', '6,03');

export const calculatorPage = new CalculatorPage();
