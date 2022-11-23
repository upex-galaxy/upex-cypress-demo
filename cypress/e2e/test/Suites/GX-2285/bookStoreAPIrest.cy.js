describe('✅BookStore | Grid | Actualizar y Eliminar Libros de la Tienda (PUT-DELETE)', () => {
   
   
    it('2294 | TC1:  Validar por backend la eliminación de un libro de la tienda', () => {
        cy.request({
            method: 'POST', url: 'https://demoqa.com/Account/v1/User',
            body: {userName: "kaneharu", password: "8Miau679"}
        })
                // cy.api({
        //     method: 'GET',
        //     url: 'https://demoqa.com/BookStore/v1/Books',
        // })
        //     .then(({ body }) => {
        //         cy.log(body)
        //     })
        // cy.api({
        //     method: 'DELETE',
        //     url: 'https://demoqa.com/BookStore/v1/Books?UserId=KaneHaru',
        //     qs: {
        //         isbn: '9781449325862',
        //     }
        // })

    })
})