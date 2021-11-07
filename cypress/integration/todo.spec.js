describe('TODOS page', () => {


  it('should delete a TODO', () =>{
    cy.visit('/todo')
      .get('input')
      .type('new TODO')
      .get('button[type=submit]')
      .click()
      .get('div').contains('TodoApp') 
      .should('contain', 'TodoApp ( 1 )')
      .get('button[ class="btn btn-danger"]')
      .click()
      .get('div').contains('TodoApp') 
      .should('contain', 'TodoApp ( 0 )');

  })





});