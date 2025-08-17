import Cl_Persona from "./Cl_Persona.js";  
export default class Cl_Sexo{
    private cntHombres: number;
    private cntMujeres: number;
    private cntPersonas: number;

    constructor(){
        this.cntHombres= 0;
        this.cntMujeres = 0;
        this.cntPersonas = 0;
    }

    procesarPersonas(p: Cl_Persona): void{
        this.cntPersonas++
        if(p.sexo == 'M' || p.sexo == 'm'){
            this.cntHombres++
        }
        else if(p.sexo == 'F' || p.sexo == 'f'){
            this.cntMujeres++
        }
        else 0;
    }

    cantPersonas(): number{
        return this.cntPersonas;
    }
    cantMujeres(): number{
        return this.cntMujeres;
    }
    cantHombres(): number{
        return this.cntHombres;
    }
}