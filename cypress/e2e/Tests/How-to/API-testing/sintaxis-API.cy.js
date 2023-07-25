// Para una prueba de API, es tan fácil como usar un comando y sus funciones
// cy.request() es usado para realizar solicitudes (request) de HTTP en Cypress.
// AHORA PUEDES USAR: cy.api() Este comando funciona exactamente como cy.request() pero además de llamar la API,
// cy.api() mostrará en la UI de Cypress toda la info sobre el Request y Response de la API llamada, en el Runner de Cypress.
// PD: .then((response)=>{}) es usado para validar el response y además poder visualizar el body a través de la consola de Chrome.
// Ahora dentro de cy.request vamos a agregar 3 opciones en un objeto;
// TRELLO API DOCUMENTATION:
// https://developer.atlassian.com/cloud/trello/rest/

//My Global Variables:
let cardID;
// Como buena práctica, es mejor tener todos nuestros parámetros dentro de una variable, ejemplo simple:
// Según la documentación de esta API, debemos usar:
const listA = '626e016e310d1a836fb72de8'; // ID para obtener la Lista que queremos
const key = '191a488f5f9b25380f53f34531eea047'; // Nuestra autenticación
const token = '03d4b617f0ed756a1e74de3856627c5dcba89a366f81cc04fee1e388df60f9a7'; // la autorización

describe('Ejemplo para demostrar cómo probar una API', () => {
	// Recordemos siempre seguir la Documentación de la API de nuestro SUT, cada API tiene sus propios endpoints y parámetros.
	// En este caso, usaremos la API de Trello como en el curso de Postman:

	it('TC1: REQUEST de Método GET a la API de TRELLO para OBTENER UNA LISTA', () => {
		// (el cy.request() tiene el GET por predeterminado, no hace falta aclarar el method si usamos GET)
		// y URL es "https://api.trello.com/1/lists/{idList}?key={key}&token={token}"

		cy.api({
			method: 'GET',
			// el REQUEST URL es "https://api.trello.com/1/lists/{idList}?key={key}&token={token}"
			url: 'https://api.trello.com/1/lists/' + listA, // aquí concatenamos el Endpoint con el Path-Parameter
			qs: {
				//QS significa "Query Parameters", aquí colocamos todo lo que va justo después del "?" (signo de parámetro)
				key: key,
				token: token,
			},
		}).then(response => {
			expect(response).to.be.an('object');
			expect(response.status).to.eql(200);
			expect(response.body.name).to.eql('🚩BACKLOG');
		});
	});
	it('TC2: REQUEST de Método POST a la API de TRELLO para CREAR UNA CARD', () => {
		cy.api({
			method: 'POST',
			url: 'https://api.trello.com/1/cards',
			qs: {
				//QS significa "Query Parameters", aquí colocamos todo lo que va justo después del "?" (signo de parámetro)
				key: key,
				token: token,
				idList: listA,
				name: 'Card creada desde Cypress XD', // Creamos la Card agregándole un nombre (esto es opcional)
			},
		}).then(response => {
			expect(response).to.be.an('object');
			expect(response.status).to.eql(200);
			expect(response.body.name).to.eql('Card creada desde Cypress XD');
			cardID = response.body.id;
		});
	});
	it('TC3: REQUEST de Método PUT a la API de TRELLO para EDITAR UNA CARD', () => {
		// La variable Global: "cardID" ya fue declarada y se le agregó un valor (el ID de la card que creamos en el Step anterior)
		cy.api({
			method: 'PUT',
			url: 'https://api.trello.com/1/cards/' + cardID, // aquí estamos llamando la variable global "cardID" que mencionamos.
			qs: {
				//QS significa "Query Parameters", aquí colocamos todo lo que va justo después del "?" (signo de parámetro)
				key: key,
				token: token,
				name: 'Card editada por Cypress', // Editamos el nombre de la Card (esto es opcional)
				desc: 'Esto es una descripción para editar la Card previamente creada', // Editamos la Descripción de la Card (esto es opcional)
			},
			body: {
				// Si la API necesita un BODY tipo JSON en el request, esta es la manera:
				cover: {
					// Se coloca el Query Parameter aquí empezando el JSON
					color: 'blue',
					brightness: 'dark',
					size: 'full',
				},
			},
		}).then(
			(
				{ body } // En este caso, en lugar de usar "response.body" siempre, aquí se declara {body} para usarlo más sencillo:
			) => {
				expect(body).to.be.an('object');
				expect(body.id).to.eql(cardID);
				expect(body.name).to.not.eql('Card creada desde Cypress XD');
				expect(body.name).to.eql('Card editada por Cypress');
				expect(body.desc).to.include('Esto es una descripción');
				expect(body.cover).to.be.an('object').and.to.include({ color: 'blue' }); // Assertion de nuestro Body parameter
			}
		);
	});
	it('TC4: REQUEST de Método DELETE a la API de TRELLO para ELIMINAR UNA CARD', () => {
		// Según la documentación de esta API, debemos usar:
		const key = '191a488f5f9b25380f53f34531eea047'; // Nuestra autenticación
		const token = '03d4b617f0ed756a1e74de3856627c5dcba89a366f81cc04fee1e388df60f9a7'; // la autorización
		// La variable Global: "cardID", la misma que creamos y editamos con el Step anterior, para eliminarla

		cy.api({
			method: 'DELETE',
			url: 'https://api.trello.com/1/cards/' + cardID, // aquí estamos llamando la variable global "cardID" que mencionamos.
			qs: {
				//QS significa "Query Parameters", aquí colocamos todo lo que va justo después del "?" (signo de parámetro)
				key: key,
				token: token,
			},
		}).then(response => {
			expect(response.body.limits).to.be.empty;
			expect(response.status).to.eql(200);
		});
	});
});
