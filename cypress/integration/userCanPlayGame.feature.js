describe('Computer picks rock', () => {
    beforeEach(() => {
      cy.visit("/", {
        onBeforeLoad: (computer) => {
          cy.stub(computer.Math, 'floor').returns(0)
        }
      })
    })

    it("player plays rock", () => {
      cy.get('button#rock').click();
      cy.get('#message').should('contain', "You have chosen rock and computer has chosen rock! It's a draw!")
    })

    it("player plays paper", () => {
      cy.get('button#paper').click();
      cy.get('#message').should('contain', "You have chosen paper and computer has chosen rock! Player One Wins!")
    })

    it("player plays scissors", () => {
      cy.get('button#scissors').click();
      cy.get('#message').should('contain', "You have chosen scissors and computer has chosen rock! Computer Wins!")
    })
})