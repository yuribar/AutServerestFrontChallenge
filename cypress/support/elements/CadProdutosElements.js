require('cypress-xpath')
class CadProdutosElements {
    btnCadastrarProdIni() {return '[data-testid="cadastrarProdutos"]' }
    btnCadastrarProd() {return '[data-testid="cadastarProdutos"]' }

    fldNome() {return '#nome' }
    fldPreco() {return '#price' }
    fldDescricao() {return '#description' }
    fldQuantidade() {return '#quantity' }
}

export default CadProdutosElements;
