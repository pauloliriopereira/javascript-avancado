class DataAuxilio {
    constructor() {
        throw new Error("DataAuxilio não pode ser instanciada!");
    }

    static textoParaData(texto) {
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) {
            throw new Error("Deve estar no formato yyyy-mm-dd");
        }

        return new Date(...texto.split("-").map((item, index) => item - index % 2));
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}}`;
    }
}