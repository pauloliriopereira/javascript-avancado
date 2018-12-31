class NegociacaoControle {
    constructor() {
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._listaNegociacoes = new ListaNegociacoes();
    }

    adiciona(event) {
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();
        console.log(this._listaNegociacoes.negociacoes);
    }

    _criaNegociacao() {
        return new Negociacao(
            DataAuxilio.textoParaData(this._inputData.val()),
            this._inputQuantidade.val(),
            this._inputValor.val()
        );
    }

    _limpaFormulario() {
        this._inputData.val("");
        this._inputQuantidade.val(1);
        this._inputValor.val(0.0);

        this._inputData.focus();
    }
}