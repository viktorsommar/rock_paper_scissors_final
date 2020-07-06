describe('Rock Paper Scissors', () => {
  it('User gets a message with result of game', () => {
    cy.visit('/');
    cy.get('button#play').click();
    cy.get('p#message');
  })
})