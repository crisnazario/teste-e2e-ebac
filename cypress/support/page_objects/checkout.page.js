import TipoPagamento from "../enums/tipoPagamento"

class CheckoutPage {

    preencherDetalhesFaturamento(nome, sobrenome, nomeEmpresa, pais, endereco, complemento, cidade, estado, cep, telefone, email) {
        cy.get('#billing_first_name').type(nome)
        cy.get('#billing_last_name').type(sobrenome)
        cy.get('#billing_company').type(nomeEmpresa)
        cy.get('#select2-billing_country-container').select(pais)
        cy.get('#billing_address_1').type(endereco)
        cy.get('#billing_address_2').type(complemento)
        cy.get('#billing_city').type(cidade)
        cy.get('#select2-billing_state-container').select(estado)
        cy.get('#billing_postcode').type(cep)
        cy.get('#billing_phone').type(telefone)
        cy.get('#billing_email').type(email)
    }

    preencherInformacaoAdicional(informacaoAdicional) {
        cy.get('#order_comments').type(informacaoAdicional)
    }

    retornarSiglaPagamento(formaPagamento) {
        let complementoRadioButton

        switch (formaPagamento) {
            case "cheque":
                complementoRadioButton = TipoPagamento.CHEQUE
                break;
            case "transferência":
                complementoRadioButton = TipoPagamento.TRANSFERENCIA
                break;
            case "pagamentoEntega":
                complementoRadioButton = TipoPagamento.PAGAMENTOENTREGA
                break;           
            default:
                cy.log("Forma de pagamento não encontrada.")
                break; 
        }

        return complementoRadioButton
    }

    selecionarFormaPagamento(siglaPagamento) {
        cy.get('#payment_method_'+siglaPagamento).click()
    }

    clicarFormaPagamento(formaPagamento) {
        let siglaPagamento = retornarSiglaPagamento(formaPagamento)
        selecionarFormaPagamento(siglaPagamento)
    }

}

export default new CheckoutPage()