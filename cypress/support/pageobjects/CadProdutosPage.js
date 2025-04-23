// <reference types="Cypress" />

import CadProdutosElements from "../elements/CadProdutosElements";
const cadProdutosElements = new CadProdutosElements();


class CadProdutosPage {
  
  selecionarBtnCadastraProdutoInicial() {
    cy.get(cadProdutosElements.btnCadastrarProdIni()).click()
  }
  digitarCampoNome(massa) {
    cy.get(cadProdutosElements.fldNome()).click().type(massa)
  }
  digitarCampoPreco(massa) {
    cy.get(cadProdutosElements.fldPreco()).click().type(massa)
  }
  digitarCampoDescricao(massa) {
    cy.get(cadProdutosElements.fldDescricao()).click().type(massa)
  }
  digitarCampoQuantidade(massa) {
    cy.get(cadProdutosElements.fldQuantidade()).click().type(massa)
  }
  selecionarBtnCadastraProduto() {
    cy.get(cadProdutosElements.btnCadastrarProd()).click()
  }
  
}

export default CadProdutosPage;
