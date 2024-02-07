describe('GX3-1715:ToolsQA | Elements | Radio Buttons', () => {
  it('GX3-1716 | TC1: Validar que el nombre de la primera etiqueta de los Radio Buttons sea  [Yes ]', () => {
      cy.visit('https://demoqa.com/radio-button')
      cy.get('label[for="yesRadio"]').should('have.text','Yes')
  })
it('GX3-1716 | TC2: Validar que el nombre de la segunda etiqueta de los Radio Buttons  [Impressive ]', () => {
  cy.visit('https://demoqa.com/radio-button')
      //cy.get('[class="custom-control-input"]' Coge el YEs).should('have.text','Impressive')
    cy.get('[for="impressiveRadio"]').should('have.text', 'Impressive')
  })
  it('GX3-1716 | TC3: Validar que el nombre de la tercera etiqueta de los Radio Buttons [No]', () => {
    cy.visit('https://demoqa.com/radio-button')
    cy.get('[class="custom-control-label disabled"]').should(`have.text`, `No`)
  })
  it('GX3-1716 | TC4: Validar  la funcionalidad del botón y la aparición del Trigger correcto al hacer click en el RadioButton Yes', () => {
      cy.visit('https://demoqa.com/radio-button')
    cy.get('[for="yesRadio"]').click()
    cy.contains('You have selected Yes').should('exist')
    cy.get(`.mt-3`).should(`have.text`, `You have selected Yes`)
  })
  it('GX3-1716 | TC5: Validar  la funcionalidad del botón y la aparición del Trigger correcto al hacer click en el RadioButton Impressive', () => {
    cy.visit('https://demoqa.com/radio-button')
    cy.get('[for="impressiveRadio"]').click()
    cy.get('.mt-3').should('have.text','You have selected Impressive')
    cy.get('.text-success').should('have.text','Impressive')
  })
  it('GX3-1716 | TC6: Validar  la NO funcionalidad del botón y la  NO aparición de ningún Trigger al  intentar hacer click en el RadioButton No', () => {
      cy.visit('https://demoqa.com/radio-button')
    cy.get('#noRadio').should('be.disabled')
  })

})
