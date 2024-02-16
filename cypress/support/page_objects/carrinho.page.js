class Carrinho {

    concluirCompra() {
        cy.get('.checkout-button').click()
    }
}

export default new Carrinho()