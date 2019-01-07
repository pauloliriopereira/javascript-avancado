class NegociacaoControle {
    constructor() {
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesTela = new NegociacoesTela($("#negociacoesTela"));

        this._negociacoesTela.atualiza(this._listaNegociacoes);
    }

    adiciona(event) {
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesTela.atualiza(this._listaNegociacoes);
        this._limpaFormulario();
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