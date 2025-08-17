export default class Cl_Sexo {
    constructor() {
        this.cntHombres = 0;
        this.cntMujeres = 0;
        this.cntPersonas = 0;
    }
    procesarPersonas(p) {
        this.cntPersonas++;
        if (p.sexo == 'M' || p.sexo == 'm') {
            this.cntHombres++;
        }
        else if (p.sexo == 'F' || p.sexo == 'f') {
            this.cntMujeres++;
        }
        else
            0;
    }
    cantPersonas() {
        return this.cntPersonas;
    }
    cantMujeres() {
        return this.cntMujeres;
    }
    cantHombres() {
        return this.cntHombres;
    }
}
