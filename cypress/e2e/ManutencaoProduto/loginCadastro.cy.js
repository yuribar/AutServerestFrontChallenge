/// <reference types="cypress" />

import cadastroPage from "../../support/pageobjects/CadastroPage";
const CadastroPage = new cadastroPage();
import loginPage from "../../support/pageobjects/LoginPage";
const LoginPage = new loginPage();

describe('Validar a tela de login do site', () => {
  beforeEach(() => {
    // Acessar o site  
    cy.visit('https://front.serverest.dev/login')
    
  })

  it('Validar que o site permite o cadastro de um novo usuario', () => {
    cy.fixture('massa.json').then((massa) => {
      CadastroPage.selecionarBtnCadastraSe();
      CadastroPage.digitarCampoNome(massa.nome); 
      CadastroPage.digitarCampoEmail(massa.email); 
      CadastroPage.digitarCampoSenha(massa.senha); 
      CadastroPage.chkBoxAdminstrador();
      CadastroPage.selecionarBtnCadastrar();
      
    })
  })

 it('Validar que o site permite o login de uma usuario cadastrado', () => {
    cy.fixture('massa.json').then((massa) => {
      LoginPage.digitarCampoEmail(massa.email); 
      LoginPage.digitarCampoSenha(massa.senha); 
      LoginPage.selecionarBtnEntrar();
     })
  })

})
