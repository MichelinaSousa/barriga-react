describe('validate tests', () => {
  it('Deve inserir uma conta', () => {
    cy.visit('https://barrigareact.wcaquino.me/')

    cy.get('[data-test="email"]').type('gabriel.teste@mail.com')
    cy.get('[data-test="passwd"]').type('12345')
    cy.get('.btn').click()

    cy.get('.toast').should('be.visible')
    .and('contain','Bem vindo, Gabriel')

    cy.get('[data-test="menu-settings"]').click()
    cy.get('[href="/contas"]').click()

    cy.get('[data-test="nome"]').type ('Contas de testes')
    cy.get('.btn').click()

    cy.get('.toast-success').should('be.visible')
    .and ('contain', 'Conta inserida com sucesso')
  })

  it('Deve inserir uma conta repetida', () => {

    cy.visit('https://barrigareact.wcaquino.me/')

    cy.get('[data-test="email"]').type('gabriel.teste@mail.com')
    cy.get('[data-test="passwd"]').type('12345')
    cy.get('.btn').click()

    cy.get('.toast').should('be.visible')
    .and('contain','Bem vindo, Gabriel')

    cy.get('[data-test="menu-settings"]').click()
    cy.get('[href="/contas"]').click()

    cy.get('[data-test="nome"]').type ('Contas de testes')
    cy.get('.btn').click()

    cy.get('.toast-error').should('be.visible')
    .and ('contain', 'Erro')
})

})