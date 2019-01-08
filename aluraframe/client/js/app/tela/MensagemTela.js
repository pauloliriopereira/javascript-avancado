class MensagemTela {
    constructor(elemento) {
        this._elemento = elemento;
    }

    _template(modelo) {
        return modelo.texto ? `<p class="alert alert-info">${modelo.texto}</p>` : `<p></p>`;
    }

    atualiza(modelo) {
        this._elemento.html(this._template(modelo));
    }
}