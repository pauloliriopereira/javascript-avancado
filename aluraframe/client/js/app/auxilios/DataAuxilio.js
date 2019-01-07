class DataAuxilio {
    constructor() {
        throw new Error("DataAuxilio não pode ser instanciada!");
    }

    static textoParaData(texto) {
        if(!this._validaData(texto)) {
            throw new Error(`A data ${texto} deve estar no formato yyyy-mm-dd`);
        }

        return new Date(...texto.split("-").map((item, index) => item - index % 2));
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

    static _validaData(texto) {
        return /^\d{4}-\d{2}-\d{2}$/.test(texto);
    }
}