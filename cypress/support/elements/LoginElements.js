require('cypress-xpath')
class LoginElements {
    btnCadastraSe() {return '[data-testid="cadastrar"]' }
    btnEntrar() {return '[data-testid="entrar"]' }

    fldEmail() {return '#email' }
    fldSenha() {return '#password' }
}

export default LoginElements;
