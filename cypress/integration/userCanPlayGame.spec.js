describe('Rock Paper Scissors', () => {
  it('User gets a message with result of game', () => {
    cy.visit('/');
    cy.get('button#rock').click();
    cy.get('p#message').should ("contain", "You choose rock")
  })
})