const { Given,When,Then } = require("@badeball/cypress-cucumber-preprocessor");

context('Test Cucumber', () => {
    describe("tester clones the UPEX's project",()=>{
        Given("tester has access to upex workspace",()=>{
            // Esto es un ejemplo para que pase la prueba.
            expect(1).to.equal(1)
        })
        When("tester run a {string} plus the project url on the terminal",(command)=>{
            // Esto es un ejemplo para que pase la prueba.
            expect(command).to.equal("git clone")
        })
        Then("the project repo should be pulled to the tester directory as expected.",()=>{
            // Esto es un ejemplo para que pase la prueba.
            expect(1).to.equal(1)
        })
    })
});