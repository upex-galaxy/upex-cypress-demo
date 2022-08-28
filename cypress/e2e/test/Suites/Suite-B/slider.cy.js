describe("slider", () => {
    before(() => {
        cy.visit("https://demo.testim.io/")
    })
    it("slides", () => {
        const currentValue = 100;
        const targetValue = 1800;
        const increment = 100;
        const steps = (targetValue - currentValue) / increment;
        const arrows = '{rightarrow}'.repeat(1);

        cy.get("[data-value]")
            .type(arrows)

        cy.get('.rc-slider-handle')
            .should('have.attr', 'aria-valuenow', 35000)

    })
})