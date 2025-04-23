// <reference types="Cypress" />

import LoginElements from "../elements/LoginElements";
const logElements = new LoginElements();


class LoginPage {
  
  digitarCampoEmail(massa) {
    cy.get(logElements.fldEmail()).click().type(massa)
  }
  digitarCampoSenha(massa) {
    cy.get(logElements.fldSenha()).click().type(massa)
  }
  selecionarBtnEntrar(){
    cy.get(logElements.btnEntrar()).click()
  }
  
}

export default LoginPage;
