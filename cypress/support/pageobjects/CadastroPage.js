// <reference types="Cypress" />

import CadElements from "../elements/CadastroElements";
const cadElements = new CadElements();
import LogElements from "../elements/LoginElements";
const logElements = new LogElements();

class CadastroPage {
 
  
  selecionarBtnCadastraSe(){
    cy.get(logElements.btnCadastraSe()).click()
  }
  digitarCampoNome(massa) {
    cy.get(cadElements.fldNome()).click().type(massa)
  }
  digitarCampoEmail(massa) {
    cy.get(cadElements.fldEmail()).click().type(massa)
  }
  digitarCampoSenha(massa) {
    cy.get(cadElements.fldSenha()).click().type(massa)
  }
  selecionarBtnCadastrar(){
    cy.get(cadElements.btnCadastrar()).click()
  }
  chkBoxAdminstrador(){
    cy.get(cadElements.chkBoxAdm()).click()
  }


}

export default CadastroPage;
