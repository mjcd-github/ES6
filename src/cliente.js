export class Cliente{ 
    constructor (nombre, impuestos) {
        this._nombre = nombre;
        this._impuestos = impuestos;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre (nombre) {
        this._nombre = nombre;
    }   

    calcularImpuesto() {
        const montoBrutoAnual = this._impuestos.montoBrutoAnual;
        const deducciones = this._impuestos.deducciones;
        let resultado = ((montoBrutoAnual - deducciones)* 0.21);
        return resultado;
    }
}