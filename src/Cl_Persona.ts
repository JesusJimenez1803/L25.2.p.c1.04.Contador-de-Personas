export default class Cl_Persona{
    private _nombre: string;
    private _sexo: string;

    constructor(nombre: string, sexo: string){
        this._nombre = nombre;
        this._sexo = sexo;
    }
    
    set nombre(nombre: string){
        this._nombre = nombre;
    }
    get nombre(): string{
        return this._nombre;
    }
    set sexo(sexo: string){
        this._sexo = sexo;
    }
    get sexo(): string{
        return this._sexo;
    }
}