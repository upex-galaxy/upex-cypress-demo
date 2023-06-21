describe('20690 | ToolsQA | Elements | Text Box: Fill form and Submit',()=>
    {
    beforeEach('Precondition: visit Demo QA page in text box seccion',()=>{
        cy.visit(https://demoqa.com/text-box)
        cy.url()should.('contains', 'text box')
        })
    });



it('TC1: Validate that if all fields are filled correctly the submit is succefully.',=>{
        cy.get.
    })
20691 | TC1: Validate that if all fields are filled correctly the submit is succefully.

20691 | TC2: Validate that if all fields are empty when user clicks "submit", no message is shown.

20691 | TC3: Validate that if all fields are filled when user clicks “submit“, is displayed a paragraph’s string.

20691 | TC4: Validate that Email field is invalid when contains “@” character and a message is displayed as a red border.

20691 | TC5: Validate that Email field is invalid when does not contains min 1 alphanumeric character before “@“.

20691 | TC6: Validate that Email field is invalid when does not contains min 1 alphanumeric character after “@“.

20691 | TC7: Validate that Email field is invalid when does not contains “.“ after 1 alphanumeric character after “@“.

20691 | TC8: Validate that Email field is invalid when does not contains (minimum) 2 alphanumeric characters after “.”