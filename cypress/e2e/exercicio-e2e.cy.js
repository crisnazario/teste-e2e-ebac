/// <reference types="cypress" />


import produtosPage from "../support/page_objects/produtos.page";
import carrinhoPage from "../support/page_objects/carrinho.page";
import checkoutPage from "../support/page_objects/checkout.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */
    let dadosLogin

    before(() => {
        cy.fixture('perfil').then(perfil => {
            dadosLogin = perfil
        })
    });

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.login(dadosLogin.usuario, dadosLogin.senha)
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {


        //produtosPage.acessarPagina()      
        var produtosAdd = []
        var qtdItensCarinho
        cy.visit("carrinho")

        // Armazena a quantidade de itens encontrados no carrinho
        // cy.get('.product-remove > .remove > .fa').then(itens => {
        //     cy.log(Cypress.$(itens).length)
        //     qtdItensCarinho = Cypress.$(itens).length
        //     cy.log("Pegar a qtd de itens => " +qtdItensCarinho)

        //     for (let i = qtdItensCarinho; i > 0; i--) {
        //         cy.log("Contador => " + i )               
                                
        //     }
        // })

        cy.get('.product-remove > .remove > .fa').its('length').then((itens) => {

            if (itens > 0) {
                for (var i = itens; i > 0; i--) {
                    cy.log("Novo contador: "+ i)
                    cy.get(`:nth-child(${i}) > .product-remove > .remove > .fa`).click()
                }
            }
        })




        // cy.get(".product-remove").find(".remove").click({ multiple: true })
        // cy.get('.product-remove > .remove > .fa').click({ multiple: true })
        // cy.xpath('//td[@class="product-remove"]').click()

        // cy.fixture('produtos').then(produtos => {

        //     produtos.forEach((produto) => {
        //         const produtoAleatorio = Cypress._.sample(produtos)
        //         cy.log("Nome do produto: " + produtoAleatorio.nomeProduto)

        //         if (produtosAdd.filter(produtosAdicionados => (produtosAdicionados != produtoAleatorio.nomeProduto)) && produtosAdd.length <= 3) {
        //             produtosPage.pesquisarProduto(produto.nomeProduto)
        //             produtosPage.adicionarProdutoCarrinho(produto.tamanho, produto.cor, produto.quantidade)
        //             produtosAdd.push(produto.nomeProduto)
        //             cy.log("Entrou")
        //         }
        //     })

        //     produtosPage.verCarrinho()
        //     carrinhoPage.concluirCompra()
        //     //alterar esses dados para serem preenchidos pelo Faker
        //     checkoutPage.preencherDetalhesFaturamento("Cristina", "Nazário", "Balinhas Juquinha LTDA", "Brasil", "Rua dos sonhos", "1234", "Rio de Janeiro", "Rio de Janeiro", "24154-741", "21996451245", "teste@teste.com")
        //     checkoutPage.preencherInformacaoAdicional("Isso é um teste")
        //     checkoutPage.clicarFormaPagamento("transferência")



        //     cy.log(produtosAdd)
        // })

    });


})
