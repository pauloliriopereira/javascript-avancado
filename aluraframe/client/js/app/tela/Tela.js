class Tela {
    constructor(elemento) {
        this._elemento = elemento;
    }

    template() {
        throw new Error("O método template deve ser implementado!");
    }

    atualiza(modelo) {
        this._elemento.html(this.template(modelo));
    }
}