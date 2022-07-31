// para una prueba de API, es tan fácil como usar un comando y sus funciones
// cy.request() es usado para realizar solicitudes (request) de HTTP en Cypress.
// PD: .then((response)=>{}) es usado para validar el response y además poder visualizar el body a través de la consola de Chrome.
// Ahora dentro de cy.request vamos a agregar 3 opciones en un objeto;

//My Global Variables:
let cardID

describe("Ejemplo para demostrar cómo probar una API", () =>
{
    // Recordemos siempre seguir la Documentación de la API de nuestro SUT, cada API tiene sus propios endpoints y parámetros.
    // En este caso, usaremos la API de Trello como en el curso de Postman:

    it("REQUEST de Método GET a la API de TRELLO para OBTENER UNA LISTA", () =>
    {
        // (el cy.request() tiene el GET por predeterminado, no hace falta aclarar el method si usamos GET)
        // y URL es "https://api.trello.com/1/lists/{idList}?key={key}&token={token}"
        // Como buena práctica, es mejor tener todos nuestros parámetros dentro de una variable, ejemplo simple:
        // Según la documentación de esta API, debemos usar:
        const listA = "626e016e310d1a836fb72de8" // ID para obtener la Lista que queremos
        const key = "191a488f5f9b25380f53f34531eea047" // Nuestra autenticación
        const token = "03d4b617f0ed756a1e74de3856627c5dcba89a366f81cc04fee1e388df60f9a7" // la autorización

        cy.request({ 
            method: "GET",
            url: "https://api.trello.com/1/lists/" + listA, // aquí concatenamos el Endpoint con el Path-Parameter
            qs: { //QS significa "Query Parameters", aquí colocamos todo lo que va justo después del "?" (signo de parámetro)
                key: key,
                token: token,
            }
        })
            .then((response) =>
            {
                expect(response).to.be.an("object")
                expect(response.status).to.eql(200)
                expect(response.body.name).to.eql("🚩BACKLOG")
        })
    })
    it("REQUEST de Método POST a la API de TRELLO para CREAR UNA CARD", () =>
    {
        // Según la documentación de esta API, debemos usar:
        const idList = "626e016e310d1a836fb72de8" // Lista Donde se va a crear la Card
        const key = "191a488f5f9b25380f53f34531eea047" // Nuestra autenticación
        const token = "03d4b617f0ed756a1e74de3856627c5dcba89a366f81cc04fee1e388df60f9a7" // la autorización

        cy.request({
            method: 'POST',
            url: "https://api.trello.com/1/cards",
            qs: { //QS significa "Query Parameters", aquí colocamos todo lo que va justo después del "?" (signo de parámetro)
                key: key,
                token: token,
                idList: idList,
                name: "Card creada desde Cypress XD" // Creamos la Card agregándole un nombre (esto es opcional)
            }
        })
        .then((response) =>
        {
            expect(response).to.be.an("object")
            expect(response.status).to.eql(200)
            expect(response.body.name).to.eql("Card creada desde Cypress XD")
            cardID = response.body.id
        })
    })
    it("REQUEST de Método PUT a la API de TRELLO para EDITAR UNA CARD", () =>
    {
        // Según la documentación de esta API, debemos usar:
        const key = "191a488f5f9b25380f53f34531eea047" // Nuestra autenticación
        const token = "03d4b617f0ed756a1e74de3856627c5dcba89a366f81cc04fee1e388df60f9a7" // la autorización
        // La variable Global: "cardID" ya fue declarada y se le agregó un valor (el ID de la card que creamos en el Step anterior)
        
        cy.request({
            method: 'PUT',
            url: "https://api.trello.com/1/cards/" + cardID, // aquí estamos llamando la variable global "cardID" que mencionamos.
            qs: { //QS significa "Query Parameters", aquí colocamos todo lo que va justo después del "?" (signo de parámetro)
                key: key,
                token: token,
                name: "Card editada por Cypress", // Editamos el nombre de la Card (esto es opcional)
                desc: "Esto es una descripción para editar la Card previamente creada" // Editamos la Descripción de la Card (esto es opcional)
            }
        })
        .then((response) =>
        {
            expect(response).to.be.an("object")
            expect(response.body.id).to.eql(cardID)
            expect(response.status).to.eql(200)
            expect(response.body.name).to.not.eql("Card creada desde Cypress XD")
            expect(response.body.name).to.eql("Card editada por Cypress")
            expect(response.body.desc).to.include("Esto es una descripción")
        })
    })
    it("REQUEST de Método DELETE a la API de TRELLO para ELIMINAR UNA CARD", () =>
    {
        // Según la documentación de esta API, debemos usar:
        const key = "191a488f5f9b25380f53f34531eea047" // Nuestra autenticación
        const token = "03d4b617f0ed756a1e74de3856627c5dcba89a366f81cc04fee1e388df60f9a7" // la autorización
        // La variable Global: "cardID", la misma que creamos y editamos con el Step anterior, para eliminarla
        
        cy.request({
            method: 'DELETE',
            url: "https://api.trello.com/1/cards/" + cardID, // aquí estamos llamando la variable global "cardID" que mencionamos.
            qs: { //QS significa "Query Parameters", aquí colocamos todo lo que va justo después del "?" (signo de parámetro)
                key: key,
                token: token
            }
        })
        .then((response) =>
        {
            expect(response.body.limits).to.be.empty
            expect(response.status).to.eql(200)
        })
    })
})