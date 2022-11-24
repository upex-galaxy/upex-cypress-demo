describe("Validate within and then method",()=>{
    beforeEach("Precondición: Logged in",()=>{
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.url().should("contain","inventory")
    })
    it("Select Item from inventory list",()=>{
        
        cy.get(".inventory_item").then((items)=>{

            let name
            let price
            const maxItems = items.length // 6
            const randomItem = Math.floor(Math.random() * maxItems) -1 // devuelve un random entre 0 a 6 -1
            cy.wrap(items).eq(randomItem).within((card)=>{
                cy.contains("Add to cart").click()
                cy.contains("Remove").should("be.visible")

                cy.get("[class*='item_name']").then(($name)=>{
                    name = $name.text()
                    cy.get("[class*='item_price']").then(($price)=>{
                        price = $price.text()
                        cy.log(name + ' and ' + price)
                    })
                })
            })
            cy.get(".shopping_cart_link").click()

            cy.get(".cart_item").eq(0).within((item)=>{
                //Option 1:
                // cy.get("[id*='title']").then((title)=>{
                //     expect(title.text()).equal(name)
                // })
                //Option 2:
                cy.get("[id*='title']").should("have.text",name)
                // Get Price:
                cy.get("[class$='price']").should("have.text",price)
                // Get Button equal as Remove:
                cy.contains("Remove").should("be.visible")
            })
        })
    })
})