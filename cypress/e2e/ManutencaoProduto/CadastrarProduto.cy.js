/// <reference types="cypress" />

import loginPage from "../../support/pageobjects/LoginPage";
const LoginPage = new loginPage();

import cadProdPage from "../../support/pageobjects/CadProdutosPage";
const CadProdPage = new cadProdPage();

describe('Validar o cadastro de novos produtos', () => {
  beforeEach(() => {
    // Acessar a pagina inicial
    cy.visit('https://front.serverest.dev/login')
    cy.fixture('massa.json').then((massa) => {
      LoginPage.digitarCampoEmail(massa.email); 
      LoginPage.digitarCampoSenha(massa.senha); 
      LoginPage.selecionarBtnEntrar();
     })
  })

  it('Validar que o site permite o cadastrar um novo produto', () => {
    cy.fixture('massa.json').then((massa) => {
      CadProdPage.selecionarBtnCadastraProdutoInicial();
      CadProdPage.digitarCampoNome(massa.nomeProd); 
      CadProdPage.digitarCampoPreco(massa.preco); 
      CadProdPage.digitarCampoDescricao(massa.descricao); 
      CadProdPage.digitarCampoQuantidade(massa.quantidade); 
      CadProdPage.selecionarBtnCadastraProduto();
    })
  })



})
