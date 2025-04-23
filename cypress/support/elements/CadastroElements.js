require('cypress-xpath')
class CadastroElements {
    btnCadastrar() {return '[data-testid="cadastrar"]' }

    chkBoxAdm() {return '#administrador' }

    fldNome() {return '#nome' }
    fldEmail() {return '#email' }
    fldSenha() {return '#password' }
}

export default CadastroElements;
