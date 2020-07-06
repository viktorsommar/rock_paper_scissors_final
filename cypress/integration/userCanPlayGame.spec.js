describe('Rock Paper Scissors', () => {
  it('User gets a message with result of game', () => {
    cy.visit('/');
    cy.get('button#play').click();
    cy.get('button#rock').click();
    cy.get('button#paper').click();
    cy.get('button#scissors').click();
    cy.get('p#message');
  })
})