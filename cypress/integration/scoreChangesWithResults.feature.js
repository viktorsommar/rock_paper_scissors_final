describe("Player can see score change", () => {
  beforeEach(() => {
    cy.visit("/", {
      onBeforeLoad: (computer) => {
        cy.stub(computer.Math, 'floor').returns(2)
      }
    })
  })

  it("player picks rock and wins the round", () => {
    cy.get("#rock").click()
    cy.get("#current-score").contains(1)
  })
})